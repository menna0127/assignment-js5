
async function search(city) {
    let apiResponse = await fetch (`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${city}&days=3`);
    var weather = await apiResponse.json();
    console.log(weather);

    displayCurrent(weather.location , weather.current);
    displayForecast(weather.forecast.forecastday);
}

document.getElementById("search").addEventListener("keyup", city=>{
    search(city.target.value)
})


function displayCurrent(a , t) {
    let n = `

    <div class="content p-0 ">

        <div class="today-head text-center  ">

        <div class="day">${a.localtime}</div>

        </div>

                        <div class="today-body forecast p-1 py-3">
                          
                          <div class="location">${a.name}</div>

                          <div class="degree d-flex justify-content-evenly">

                            <div class="num">${t.temp_c}
                               <sup>o</sup>c
                            </div>

                            <div class="forecast-icon">
                              <img src="${t.condition.icon}" alt="">
                            </div>

                          </div>

                          <div class="custom py-2">${t.condition.text}</div>

                            <div class="today-info">

                              <ul class="d-flex justify-content-start pb-1 ">

                                <li>
                                  <span>${t.cloud}%<img class="info-img" src="./images/icon-umberella.png" alt=""></span>
                                </li>

                                <li>
                                  <span>${t.wind_kph}km/h<img class="info-img" src="./images/icon-wind.png" alt=""></span>
                                </li>

                                <li>
                                  <span>${t.wind_dir}<img class="info-img" src="./images/icon-compass.png" alt=""></span>
                                </li>

                              </ul>

                            </div>

    </div>
    
    `

    document.getElementById("predict").innerHTML = n;
}

function displayForecast(f) {

    let x = '';

    for (let i = 1; i < f.length; i++){

        x = 
        `
        <div class="content p-0  text-center">

        <div class="header1" >${f[i].date}</div>

        <div class="body1 pb-5 ">

          <div class="icon pt-5 pb-3 ">
            <img src="${f[i].day.condition.icon}" alt="">
          </div>

          <div class="deg py-1"> ${f[i].day.maxtemp_c} <sup>o</sup>C</div>

          <small>${f[i].day.mintemp_c}<sup>o</sup>c</small>

          <div class="custom pt-3 pb-1">${f[i].day.condition.text}</div>

        </div>

        </div>

        `

        document.getElementById("predict").innerHTML += x
        
    }
    
}

search("cairo");

