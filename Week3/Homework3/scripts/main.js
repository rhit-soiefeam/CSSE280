let counter = 0;
updateView = function() {
    document.querySelector("#counterText").innerHTML = `${counter}`
}
main = function() {
    console.log("準備できた");
    document.querySelector("#tendecrementButton").onclick = (event) => {
        console.log("10 decrement button");
        counter = counter - 10;
        updateView();
    };
    document.querySelector("#decrementButton").onclick = (event) => {
        console.log("decrement button");
        counter = counter - 1;
        updateView();
    };
    document.querySelector("#resetButton").onclick = (event) => {
        console.log("reset button");
        counter = 0;
        updateView();
    };
    document.querySelector("#incrementButton").onclick = (event) => {
        console.log("increment button");
        counter = counter + 1;
        updateView();
    };
    document.querySelector("#tenincrementButton").onclick = (event) => {
        console.log("10 increment button");
        counter = counter + 10;
        updateView();
    };
}
function paint(color, tag) {
    console.log(color);
    const circle = document.getElementById('circleID');
    circle.style =  `background-color:${color}`
    document.querySelector("#circleText").innerHTML = `${tag}`
    console.log(circle);
}
main();