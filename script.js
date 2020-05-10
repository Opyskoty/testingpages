window.onload = function(){
    var hoveredText = document.querySelector('p');

    hoveredText.addEventListener('mouseover', function(event){
        event.target.classList.add('hover');
    })
}