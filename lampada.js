const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function islampbroke(){
    return lamp.src.indexOF( 'quebrada' ) > -1
}

function lampOn (){
   
    lamp.src = './imagens/ligada.jpg';
    
}

function lampOff (){
   
    lamp.src = './imagens/desligada.jpg';
    
}

function lampbroke (){
    lamp.src = './imagens/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn );
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('dblclick', lampbroke);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave',lampOff)