document.addEventListener('keyup', keyIHandler);
function keyIHandler (event){
    let myImage = document.getElementById("myImg")
    if((myImage.width > 25 && myImage.width < 60) && (event.code == 'KeyI')){
        myImage.height += 10;
        myImage.width += 10;
      
    }else if((myImage.width == 60) && (event.code == 'KeyI')){
        myImage.width += 10;
        myImage.height += 10;
        myImage.src = "image/explosion.png";
    }else if ((myImage.width > 60) && (event.code == 'KeyI')){
        document.removeEventListener("keyup", keyIHandler, true);
    }
}

document.addEventListener('keyup', keyDHandler);
function keyDHandler(event){
    let myImage = document.getElementById("myImg")
    if((myImage.width > 10 && myImage.width <60) && (event.code == 'KeyD')){
        myImage.width -= 10;
        // myImage.height -= 10;
    }else if((myImage.width == 10) && (event.code == 'KeyD')){
        myImage.width -= 10;
        myImage.height -= 10;
        let myDiv = document.getElementById('myDiv');
        let newElement = document.createElement('p');
        myDiv.appendChild(newElement);
        myDiv.appendChild(newElement);
        newElement.innerText="Done"
    }else if((myImage.width < 0) && (event.code == 'KeyD')){
        document.removeEventListener("keyup", keyDHandler, true);
    }
}


