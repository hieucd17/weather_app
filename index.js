const app_id = `d820d00d91c2d3bc587286e7162950a9`;

const searchInput = document.querySelector('#search_input');
const city_name = document.querySelector('.weather_city');
const weather_state = document.querySelector('.weather_state');
const weather_icon = document.querySelector('.weather_icon');
const temperature = document.querySelector('.temperature');
const default_value = 'Không tìm thấy';

const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const wind_speed = document.querySelector('.wind_speed');

searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${app_id}& units=metric&lang=vi`)

    .then( async res => {
///Promise js
        const data = await res.json();

        console.log('[search]', data);

        city_name.innerHTML = data.name || default_value;
        weather_state.innerHTML = data.weather[0].description || default_value;
        weather_icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`) || default_value ;
        temperature.innerHTML = Math.round(data.main.temp) || default_value;

        sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || default_value;
        sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || default_value;
        humidity.innerHTML = data.main.humidity || default_value;
        wind_speed.innerHTML = (data.wind.speed).toFixed(2) || default_value;
    });
});

// -----------------------sticker-----------------------
const stickerElement = document.querySelector('.sticker')
const step = -(395 / 5)  // -79
let count = 1

setInterval(function() {
  let posX = 0
  let posY = 0
  if (count <= 5) {
    // hang 1
    posX = step * (count - 1)
    posY = step * 0
  }
  else if (6 <= count && count <= 10) {
    // hang 2
    posX = step * (count - 6)
    posY = step * 1
  }
  else if (11 <= count && count <= 15) {
    // hang 3
    posX = step * (count - 11)
    posY = step * 2
  }
  else if (16 <= count && count <= 20) {
    //hang 4
    posX = step * (count - 16)
    posY = step * 3
  } else {
    // hang 5
    posX = step * (count - 21)
    posY = step * 4
  }
  stickerElement.style.backgroundPosition = `${posX}px ${posY}px`
  count++
  count = (count > 20) ? 1 : count
}, 100)

stickerElement.addEventListener('mouseover' ,function(a) {
    
    setTimeout(() => { clearInterval(a); a; stickerElement.style.backgroundPosition = '79px , 79px';}, 1000);
})
//sticker1-------
const stickerElement1 = document.querySelector('.sticker1')
const step1 = -(395 / 5)  // -79
let count1 = 1

setInterval(function() {
  let posX1 = 0
  let posY1 = 0
  if (count1 <= 5) {
    // hang 1
    posX1 = step1 * (count1 - 1)
    posY1= step1 * 0
  }
  else if (6 <= count1 && count1 <= 10) {
    // hang 2
    posX1 = step1 * (count1 - 6)
    posY1 = step1 * 1
  }
  else if (11 <= count1 && count1 <= 15) {
    // hang 3
    posX1 = step1 * (count1 - 11)
    posY1 = step1 * 2
  }
  else if (16 <= count1 && count1 <= 20) {
    //hang 4
    posX1 = step1 * (count1 - 16)
    posY1 = step1 * 3
  } else {
    // hang 5
    posX1 = step1 * (count1 - 21)
    posY1 = step1 * 4
  }
  stickerElement1.style.backgroundPosition = `${posX1}px ${posY1}px`
  count1++
  count1 = (count1 > 20) ? 1 : count1
}, 100)

stickerElement1.addEventListener('mouseover' ,function(a) {
    
    setTimeout(() => { clearInterval(a); a; stickerElement.style.backgroundPosition = '79px , 79px';}, 1000);
})


