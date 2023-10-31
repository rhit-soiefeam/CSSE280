document.getElementById('fetchData').addEventListener('click', function() {
    dataIndex = getRandomInt();
    fetch(`https://64486933e7eb3378ca2e0f51.mockapi.io/api/users/${dataIndex}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('name').innerHTML = `
        ${data.name}
        `;
        document.getElementById('location').innerHTML = `
        ${data.location}
        `;
        document.getElementById('designation').innerHTML = `
        ${data.designation}
        `;
        document.getElementById('avatar').src = data.avatar;
        appendText(textToArray(processText(data.message)));
        document.getElementById('rating').innerHTML = `
        ${data.rating}
        `;
    })
    .catch(error => {
        console.error("There was an error fetching data:", error);
    });
});
function getRandomInt() {
    return Math.round(Math.random() * 8 + 1);
}
function clearText() {
    document.getElementById('name').innerHTML = `
    `;
    document.getElementById('location').innerHTML = `
    `;
    document.getElementById('designation').innerHTML = `
    `;
    document.getElementById('avatar').src = data.avatar;
    document.getElementById('message').innerHTML = `
    `;
    document.getElementById('rating').innerHTML = `
    `;
}
function processText(text) {
    text.replace(`.`, `!!!\n`);
    console.log(text);
    return text;
}
function textToArray(text) {
    return [text];
}
function appendText (textArray) {
    document.getElementById('message').innerHTML = `
        ${textArray}
        `;
}