document.getElementById('fetchData').addEventListener('click', function() {
    fetch(`https://api.chucknorris.io/jokes/random`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('dataContainer').innerHTML = `
            <p><strong>Title:</strong>${data.icon_url}</p>
            <p><strong>ID:</strong>${data.id}</p>
            <p><strong>Completed:</strong> ${data.value}</p>
        `;
    })
    .catch(error => {
        console.error("There was an error fetching data:", error);
    });
});

