let weatherData = {
    "hà nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "hồ chí minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "đà nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};

let btnSearch = document.querySelector("#btnSearch");
btnSearch.addEventListener("click", function() {
    let cityName = document.querySelector("#input").value.trim(); // Lấy giá trị nhập vào
    let box = document.querySelector("#box"); // Lấy phần hiển thị thông tin

    if (cityName === "") {
        box.innerHTML = "<p style='color: red;'>Vui lòng nhập tên thành phố!</p>";
        return;
    }

    // Chuẩn hóa chuỗi nhập vào: Viết hoa chữ cái đầu của từng từ
    let formattedCity = cityName.toLowerCase();
    if (weatherData[cityName]) { // Kiểm tra thuộc tính nếu thành phố có trong object
        let data = weatherData[cityName];
        box.innerHTML = `
            <div>
            <h2>${formattedCity.toUpperCase()}</h2>
                <div class="list">
                <p style="font-size: 50px;">${data.temperature}°C ${data.icon}</p>
                <div class="item">
                <p>${data.description}</p>
                <p>Độ ẩm: ${data.humidity}%</p>
                <p>Tốc độ gió: ${data.windSpeed} km/h</p>
                </div>
                </div>
            </div>
        `;
    } else {
        box.innerHTML = "<p style='color: red;'>Không tìm thấy thông tin thời tiết!</p>";
    }
});
