document.addEventListener('keyup', keyHandler);

function keyHandler (event){
    let myEmoji = document.getElementById("balloonEmoji"); 
    let emojiSize = window.getComputedStyle(document.getElementById("balloonEmoji")).fontSize;
    let emojiSizeNum = parseInt(emojiSize, 10);

    if((emojiSizeNum > 5 && emojiSizeNum < 50) && (event.code == 'KeyI')){
        emojiSizeNum += 10;
        myEmoji.style.fontSize = `${emojiSizeNum}px`

    }else if((emojiSizeNum == 50 ) && (event.code == 'KeyI')){
        emojiSizeNum += 10;
        myEmoji.style.fontSize = `${emojiSizeNum}px`
        myEmoji.innerText="💥";
        
    }else if((emojiSizeNum > 10 && emojiSizeNum <= 50) && (event.code == 'KeyD')){
        emojiSizeNum -= 10;
        myEmoji.style.fontSize = `${emojiSizeNum}px`

    }else if((emojiSizeNum == 10) && (event.code == 'KeyD')){
        myEmoji.innerText="Done";
        emojiSizeNum -= 5;
        myEmoji.style.fontSize = `${emojiSizeNum}px` ;
    }
    if ((emojiSizeNum <= 5) || (emojiSizeNum >= 60)){
        document.removeEventListener("keyup", keyHandler, true); 

    } 
}

