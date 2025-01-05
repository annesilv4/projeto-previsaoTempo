// KEY
const key = "f90e95dae6143a4fc42710f864a077a7";

// Pegando a classe do input e do botão
const inputCity = document.querySelector(".city-input");
const buttonSearch = document.querySelector(".search-button");

// Atribuindo o evento de click ao botão
buttonSearch.addEventListener("click", function () {
    // Pegando o valor do input
    const city = inputCity.value;

    // Verificando se o input está vazio
    if (city === "") {
        alert("Digite o nome de uma cidade");
        return;
    }

    getCity(city);
})

// Função para buscar a cidade
async function getCity(city) {
    // URL
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br`).then(response => response.json());

    // Pegando os dados
    showData(url);
}

// Função colocar dados na tela
function showData(data) {
    // Pegando os elementos
    const city = document.querySelector(".city");
    const temp = document.querySelector(".temperature");
    const forecastText = document.querySelector(".forecast-text");
    const humidity = document.querySelector(".humidity");
    const forecastImg = document.querySelector(".forecast-img");

    // Pegando os dados
    city.textContent = "Tempo em " + data.name;
    temp.textContent = Math.round(data.main.temp - 273.15) + "°C";
    forecastText.textContent = data.weather[0].description;
    humidity.textContent = "Umidade: " + data.main.humidity + "%";
    forecastImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}