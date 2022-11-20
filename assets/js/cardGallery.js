var card_photo = document.getElementById('card_img');
var card_prev = document.getElementsByClassName('card_previous_img');

card_photo.src = card_prev[0].src;
card_prev[0].parentNode.style.outline = '1px solid #E5322E';

function swapImg(Element){
    clearBorder();
    card_photo.src = Element.src;
    Element.parentNode.style.outline = '1px solid #E5322E';
}

function clearBorder(){
    for(var i = 0; i<card_prev.length; i++){
        card_prev[i].parentNode.style.outline = 'none';
    }
}