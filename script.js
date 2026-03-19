const API_KEY = "YOUR_OPENWEATHERMAP_KEY";

async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();

    if (!city) {
        alert("Please enter a city name.");
        return;
    }
    
    // buat url request ke api
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
    
    document.getElementById("result").innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            document.getElementById("result").innerHTML = `
            <p class="error">City "${city}" not found.</p>
            `;
            return;
        }

        const data= await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById("result").innerHTML = `
        <p class="error">An error occurred while fetching the weather data.</p>
        `;

    }
 
}   



function displayWeather(data) {
    const result = document.getElementById("result");

    result.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p class="temp">${Math.round(data.main.temp)}°C</p>
    <p class="desc">${data.weather[0].description}</p>
    <div class="details">
      <p>Feels: ${Math.round(data.main.feels_like)}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind: ${(data.wind.speed * 3.6).toFixed(1)} km/h</p>
    </div>
    <button class="reco-btn" onclick="getRecommendation('${data.name}', '${data.weather[0].description}', ${Math.round(data.main.temp)})">
      Travel Recommendation
    </button>
  `;
}

async function getRecommendation(city, weather, temp) {
  // Buka popup dan tampilkan loading
  const overlay = document.getElementById("modal-overlay");
  overlay.style.display = "flex";
  document.getElementById("modal-title").textContent = `Travel Recommendation for ${city}`;
  document.getElementById("modal-content").innerHTML = "<p> Being asked to AI...</p>";

  try {
    const response = await fetch("/api/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ city, weather, temp })
    });

    const data = await response.json();
    console.log("Recommendation:", data);

    if (!response.ok) {
      document.getElementById("modal-content").innerHTML = `<p class='error'>${data.error}</p>`;
      return;
    }

    const text = data.choices[0].message.content;
    
    //  Using API Groq langsung tanpa backend (untuk testing, jangan lupa ganti dengan API key yang valid)
    // const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": "Bearer YOUR_GROQ_KEY"
    //   },
    //   body: JSON.stringify({
    //     model: "llama-3.3-70b-versatile",
    //     max_tokens: 1024,
    //     messages: [
    //       {
    //         role: "user",
    //         content: `Weather in ${city} currently: ${weather}, temperature ${temp}°C. Provide 3 travel recommendations for places to visit in this city that match the current weather conditions. Format: place name, brief reason why it's suitable for the current weather. Answer in English, concise and to the point.`
    //       }
    //     ]
    //   })
    // });

    // const data = await response.json();
    // console.log("Groq response:", data);

    // if (!response.ok) {
    //   document.getElementById("modal-content").innerHTML = `<p class='error'>${data.error.message}</p>`;
    //   return;
    // }

    // const text = data.choices[0].message.content;
    document.getElementById("modal-content").innerHTML = formatText(text);

} catch (error) {
    console.log(error);
    document.getElementById("modal-content").innerHTML = "<p class='error'>failed mendapatkan rekomendasi.</p>";
}
}

function formatText(text) {
  return text.replace(/\n/g, "<br>");
}

function closeModal() {
  document.getElementById("modal-overlay").style.display = "none";
}