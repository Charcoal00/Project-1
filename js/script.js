const apiKey = "b6df5e32caa4ecde52100b3880cfa530";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-1");
const spinner = document.querySelector(".spinner");
const loaderTxt = document.getElementById("loaderTxt");
const boxes = document.querySelectorAll(".box:not(:first-child)");

infoo.classList.add("open");

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
  loaderTxt.classList.add("mmm");
  document.querySelector(".loader").style.display = "flex";
  boxes.forEach((box) => {
    box.style.visibility = "hidden";
  });
  document.getElementById("default").classList.remove("lll");

  setTimeout(function () {
    spinner.classList.remove("ggg");
    document.querySelector(".loader").style.display = "none";
  }, 2000);

  spinner.classList.add("ggg");
});

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + "&appid=" + apiKey);

  if (response.status == 404) {
    infoo.style.visibility = "hidden";
    document.getElementById("default").classList.add("lll");
  } else {
    infoo.style.visibility = "visible";
    var data = await response.json();
    infoo.classList.remove("open");
    document.getElementById("default").classList.remove("lll");

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp-3").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-2").innerHTML =
      Math.round(data.wind.speed) + "km/h";

    // ../
    document.querySelector(".sea").innerHTML = data.main.sea_level + "m";
    document.querySelector(".temp4").innerHTML = data.main.temp + "°c";
    document.querySelector(".pressure").innerHTML = data.main.pressure + "hPa";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".deg").innerHTML = data.wind.deg + "°";
    document.querySelector(".wind-3").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".city-weather").innerHTML = ddata.weather[0].main;
    document.querySelector(".city-weather-2").innerHTML =
      data.weather[0].description;

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./image/cloudy.svg";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./image/clear-day.svg";
      function nightTime() {
        const now = new Date();
        const hour = now.getHours();
        return hour >= 19 || hour < 6;
      }
      if (nightTime()) {
        weatherIcon.src = "./image/clear-night.svg";
      } else {
        weatherIcon.src = "./image/clear-day.svg";
      }
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./image/rain.svg";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "./image/snow.svg";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./image/drizzle.svg";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./image/mist.svg";
    } else if (data.weather[0].main == "Thunderstorm") {
      weatherIcon.src = "./image/thunderstorms-overcast.svg";
    }

    setTimeout(function () {
      boxes.forEach((box) => {
        box.style.visibility = "visible";
      });
    }, 2200);
  }

  console.log(data);

  document.querySelector(".bb").style.visibility = "visible";
}

checkWeather();

const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("ckk");
  document.querySelector(".card").classList.toggle("zzz");
});

const Info = document.getElementById("moreInfo");

Info.addEventListener("click", () => {});
