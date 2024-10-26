document.getElementById("loadDataBtn").addEventListener("click", loadUserData);

function loadUserData() {
    // Отримуємо інформацію про 5 користувачів
    fetch('https://randomuser.me/api?results=5')
        .then(response => response.json())
        .then(data => {
            const userInfoTable = document.getElementById("userInfo");
            userInfoTable.innerHTML = "";  // Очищуємо таблицю перед вставкою нових даних

            data.results.forEach(user => {
                const row = `
                    <tr>
                        <td><img src="${user.picture.medium}" alt="User Photo"></td>
                        <td>${user.location.city}</td>
                        <td>${user.location.country}</td>
                        <td>${user.name.first} ${user.name.last}</td>
                        <td>${user.location.postcode}</td>
                    </tr>
                `;
                userInfoTable.innerHTML += row;
            });
        })
        .catch(error => {
            console.error("Помилка отримання даних:", error);
            alert("Не вдалося отримати інформацію про користувачів.");
        });
}
