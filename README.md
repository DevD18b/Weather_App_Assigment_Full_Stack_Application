
## 🌦️ OpenWeatherMap API Setup

This project uses the **OpenWeatherMap API** to fetch real-time weather
data based on the user's input location.

------------------------------------------------------------------------

### 🔑 Step 1 --- Create OpenWeatherMap Account

1.  Visit: https://openweathermap.org/
2.  Sign up and create a free account.
3.  After login, go to the **API Keys** section.
4.  Generate a new API key.

> Note: It may take a few minutes for the API key to activate.

------------------------------------------------------------------------

### ⚙️ Step 2 --- Add API Key to the Project

Create a `.env` file inside the **frontend** folder and add your API
key:

    VITE_WEATHER_API_KEY=your_api_key_here

If you are not using Vite, you can directly place the API key inside
your JavaScript file.

------------------------------------------------------------------------

### 🌍 Step 3 --- API Endpoint Used

The application fetches weather data using the following endpoint:

    https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_key}&units=metric

**Example:**

    https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric

------------------------------------------------------------------------

### ▶️ Step 4 --- Run the Project

    npm install
    npm run dev

------------------------------------------------------------------------

### 📌 Features Enabled by API

-   Real-time temperature
-   Weather conditions (Clouds, Rain, Clear, etc.)
-   Humidity
-   Wind speed
-   Location-based search

------------------------------------------------------------------------

### ❗ Important Note

Do not share your `.env` file or API key publicly. Make sure `.env` is
added to `.gitignore`.
