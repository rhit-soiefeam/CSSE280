window.onresize = screen;
window.onload = screen;
function screen() {
    Width = window.innerWidth;
    document.querySelector("#size").innerHTML= `幅広さ ： ${Width} ｐｘ`;
}
main = function() {
    console.log(`準備できた`);
    console.log(window.innerWidth);
    screen();
}
main();