transform1 = function() {
    current_image = document.getElementById('safe-image').src;
    console.log(current_image);
    if(current_image == "https://rhit-soiefeam-firebase-exam1.web.app/images/hedwig.png") {
        current_image = "https://rhit-soiefeam-firebase-exam1.web.app/images/pigwidgeon.png";
        document.getElementById('owl-text').innerHTML = "ピッグウイジョン";
    }
    else if(current_image == "https://rhit-soiefeam-firebase-exam1.web.app/images/pigwidgeon.png") {
        current_image = "https://rhit-soiefeam-firebase-exam1.web.app/images/hedwig.png";
        document.getElementById('owl-text').innerHTML = "ヘッドウイッグ";
    }
    console.log(document.getElementById('safe-image').src);
    document.getElementById('safe-image').src = current_image;

}
main = function() {
    console.log(`準備できた`);
}
main();