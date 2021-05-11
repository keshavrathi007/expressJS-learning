const submitButton = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName")
const city_name = document.getElementById("city_name")
const temp = document.getElementById("temp")
const tempStatus = document.getElementById("temp_status")
const day = document.getElementById("day")
const today_data = document.getElementById("today_data")
const data_hide = document.querySelector(".middle_layer")


const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if (cityVal === "") {
        city_name.innerText = `Please write before u search`;
        data_hide.classList.add("data_hide")
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid={your-api-key}`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(arrData[0])
            city_name.innerText = `${arrData[0].name} ${arrData[0].sys.country}`
            temp.innerText = arrData[0].main.temp;
            console.log(temp.innerHTML)
            temperatureStatus = arrData[0].weather[0].main;
            if (temperatureStatus == "Sunny") {
                tempStatus.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (temperatureStatus == "Clouds") {
                tempStatus.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (temperatureStatus == "Rainy") {
                tempStatus.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                tempStatus.innerHTML =
                    "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
            }

            data_hide.classList.remove("data_hide")
        }
        catch {
            city_name.innerText = `Please write before u search`
            data_hide.classList.add("data_hide")
        }
    }
}
submitButton.addEventListener('click', getInfo);

const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
};

const getCurrentTime = () => {
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];

    var now = new Date();
    var month = months[now.getMonth()];
    var date = now.getDate();
    return [month, date]
}
day.innerHTML = getCurrentDay()
const date = getCurrentTime()
today_data.innerHTML = `${date[0]} ${date[1]}`
