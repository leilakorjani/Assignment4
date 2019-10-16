document.addEventListener('keyup', keyIHandler);

function keyIHandler (event){
    let myEmoji = document.getElementById("balloonEmoji"); 
    let emojiSize = window.getComputedStyle(document.getElementById("balloonEmoji")).fontSize;
    let emojiSizeNum = parseInt(emojiSize, 10);

    if((emojiSizeNum > 0 && emojiSizeNum < 50) && (event.code == 'KeyI')){
        emojiSizeNum += 10;
        myEmoji.style.fontSize = `${emojiSizeNum}px`

    }else if((emojiSizeNum == 50 ) && (event.code == 'KeyI')){
        myEmoji.innerText="💥";

    }else if ((emojiSizeNum > 60) && (event.code == 'KeyI')){
        document.removeEventListener("keyup", keyIHandler, true);
    }
}

document.addEventListener('keyup', keyDHandler);
function keyDHandler (event){
    let myEmoji = document.getElementById("balloonEmoji"); 
    let emojiSize = window.getComputedStyle(document.getElementById("balloonEmoji")).fontSize;
    let emojiSizeNum = parseInt(emojiSize, 10);

    if((emojiSizeNum > 10 && emojiSizeNum <= 60) && (event.code == 'KeyD')){
        emojiSizeNum -= 10;
        myEmoji.style.fontSize = `${emojiSizeNum}px`

    }else if((emojiSizeNum == 10) && (event.code == 'KeyD')){
        myEmoji.innerHTML = "Done";

    }else if ((emojiSizeNum < 0) && (event.code == 'KeyD')){
        document.removeEventListener("keyup", keyIHandler, true);
    }
}