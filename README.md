# 🌤️ Weather App & AI Travel Recommendations

<div align="center">

![Weather App Banner](https://images.unsplash.com/photo-1504608524841-42584120d693?w=900&q=80)

**Discover the perfect destination — powered by real-time weather and AI.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-green.svg)](https://nodejs.org)
[![OpenWeatherMap](https://img.shields.io/badge/API-OpenWeatherMap-orange.svg)](https://openweathermap.org)
[![Groq AI](https://img.shields.io/badge/AI-Groq%20(Llama%203.3)-purple.svg)](https://groq.com)

</div>

---

## 📖 What Is This App?

**Weather App & AI Travel Recommendations** is a smart web application that combines **live weather data** with **artificial intelligence** to suggest the best places for you to visit — based on the actual weather conditions of any city in the world.

Simply type a city name, see the current weather, and then let the AI recommend three tailored travel destinations that perfectly match what the weather has to offer. Whether it is sunny in Paris or rainy in Tokyo, this app turns weather into a travel adventure.

> *"Great travel planning starts with knowing what the weather is like. Great AI makes the rest easy."*

---

## ✨ Features at a Glance

| Feature | Description |
|---|---|
| 🌍 **Global City Search** | Search weather for any city in the world |
| 🌡️ **Live Weather Data** | Real-time temperature, humidity, wind speed, and "feels like" info |
| 🤖 **AI Travel Recommendations** | Get 3 smart destination suggestions matched to the weather |
| 💬 **Clean Modal Display** | Recommendations appear in an elegant popup — no page reloads |
| ⌨️ **Keyboard Friendly** | Press `Enter` to search instantly |
| 🔒 **Secure API Handling** | API keys are stored safely in environment variables |
| 📱 **Responsive Design** | Works beautifully on mobile and desktop |

---

## 🖼️ App Preview

<div align="center">

### Search & Weather View
![Search UI](https://images.unsplash.com/photo-1601134467661-3d775b999c0b?w=700&q=80)
*Type any city name to instantly fetch live weather conditions.*

---

### AI Recommendations Modal
![AI Modal](https://images.unsplash.com/photo-1488085061387-422e29b40080?w=700&q=80)
*Three AI-curated travel spots, selected to match the current weather perfectly.*

</div>

---

## 🧠 How It Works

The app runs in three simple steps behind the scenes:

```
[ User types a city ] 
        ↓
[ OpenWeatherMap API returns live weather data ]
        ↓
[ Groq AI (Llama 3.3) reads the weather & suggests 3 travel destinations ]
        ↓
[ Results displayed in a clean, modern popup ]
```

1. **Weather Fetch** — Your city search is sent to the OpenWeatherMap API through a secure backend proxy. The app receives temperature, humidity, wind, and sky conditions.

2. **AI Processing** — The weather details are packaged into a smart prompt and sent to Groq's Llama 3.3 AI model. The AI understands the context and generates three meaningful, weather-appropriate travel recommendations.

3. **Display** — Everything is shown to you in a clean, easy-to-read format — no page refreshes, no delays.

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **HTML5** | Structure and layout of the app |
| **CSS3** | Styling, animations, dark theme, responsive design |
| **Vanilla JavaScript (ES6+)** | All interactivity, API calls, and UI logic |
| **Fetch API** | Communicating with the backend |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** | Server-side runtime environment |
| **Serverless Functions** | Lightweight API handlers for weather and AI |
| **Environment Variables** | Secure storage of API keys |

### External APIs
| API | Purpose |
|---|---|
| **OpenWeatherMap** | Real-time global weather data |
| **Groq (Llama 3.3-70B)** | AI-generated travel recommendations |

---

## 📁 Project Structure

```
Weather-app-and-Travel-Recommendations/
│
├── api/
│   ├── weather.js          # Backend handler — fetches weather from OpenWeatherMap
│   └── recommend.js        # Backend handler — sends prompt to Groq AI
│
├── index.html              # Main HTML page
├── script.js               # Frontend logic (search, display, modal)
├── style.css               # All styling (dark theme, layout, animations)
├── package.json            # Project dependencies and configuration
├── LICENSE                 # MIT License
└── README.md               # You are here!
```

---

## 🚀 Getting Started

Follow these steps to run the project on your own machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org) (version 16 or higher)
- [npm](https://www.npmjs.com) (comes with Node.js)
- A free [OpenWeatherMap API key](https://openweathermap.org/api)
- A free [Groq API key](https://console.groq.com)

---

### Step 1 — Clone the Repository

```bash
git clone https://github.com/your-username/Weather-app-and-Travel-Recomendations.git
cd Weather-app-and-Travel-Recomendations
```

---

### Step 2 — Install Dependencies

```bash
npm install
```

---

### Step 3 — Set Up Your API Keys

Create a `.env` file in the root of the project and add your keys:

```env
OPENWEATHER_KEY=your_openweathermap_api_key_here
GROQ_KEY=your_groq_api_key_here
```

> ⚠️ **Important:** Never share or commit your `.env` file. It contains private API keys.

---

### Step 4 — Run the App

```bash
npm start
```

Then open your browser and visit:

```
http://localhost:3000
```

---

## 🔑 How to Get Your API Keys

### OpenWeatherMap (Free)
1. Go to [openweathermap.org](https://openweathermap.org/api)
2. Create a free account
3. Navigate to **API Keys** in your dashboard
4. Copy your key and paste it into your `.env` file

### Groq AI (Free)
1. Go to [console.groq.com](https://console.groq.com)
2. Sign up for a free account
3. Go to **API Keys** and create a new key
4. Copy it into your `.env` file

---

## 💡 Skills You Will Learn From This Project

This project is an excellent hands-on way to build and sharpen the following skills:

### 🌐 Web Development
- Building a complete frontend with HTML, CSS, and JavaScript
- Using the `Fetch API` for asynchronous HTTP requests
- Creating and controlling modal popups
- Designing a responsive, dark-themed UI

### ⚙️ Backend Development
- Writing serverless API handler functions in Node.js
- Proxying third-party APIs securely through a backend
- Protecting sensitive credentials using environment variables

### 🤖 AI Integration
- Crafting effective prompts for large language models (LLMs)
- Connecting a web app to an AI API (Groq / Llama 3.3)
- Displaying AI-generated content in a user-friendly format

### 🔗 API Integration
- Working with real-world REST APIs (OpenWeatherMap)
- Parsing and displaying JSON response data
- Handling loading states and errors gracefully

### 🛡️ Security Basics
- Keeping API keys out of frontend code
- Using `.env` files and environment variables
- Understanding why secrets must never be hardcoded

---

## 🌍 Use Cases & Benefits

This app is useful for many types of people:

- **Travelers** — Instantly know if a destination's weather is right for sightseeing, beach days, or indoor activities
- **Travel Bloggers** — Get unique, AI-generated content ideas based on real weather
- **Students** — A perfect learning project combining APIs, AI, and web development
- **Developers** — A clean reference for building full-stack apps with AI integration

---

## 📜 License

This project is licensed under the **MIT License** — which means you are free to use, modify, and distribute it for personal or commercial purposes.

See the [LICENSE](LICENSE) file for full details.

---

## 🙌 Acknowledgements

This project would not be possible without these amazing free services:

- [OpenWeatherMap](https://openweathermap.org) — For reliable, global weather data
- [Groq](https://groq.com) — For fast, free access to the Llama 3.3-70B AI model
- [Shields.io](https://shields.io) — For the badges in this README

---

<div align="center">

Made with ❤️ and curiosity.

*Happy exploring — wherever the weather takes you!* 🌏

</div>
