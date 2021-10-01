function alterar(){
    document.getElementById('titulo').innerHTML = "Modificado";
    document.getElementById('campo').value='trocou';
}
alterar();


function cnh(){
if(document.getElementById('yes').checked) {
    //Male radio button is checked
   document.querySelector('#possui').innerHTML='Parabens você pode dirigir, possui CNH';

  }else {
      document.querySelector('#possui').innerHTML = 'Infelizmente você não pode dirigir, não possui CNH';
  }
}

function calculo(){
      let n1 = parseInt(document.querySelector('#n1').value);
      let n2 = parseInt(document.querySelector('#n2').value);
      
      document.querySelector('#res').value = n1 + n2;
     
}
function fundo(){
    document.querySelector('#cor').classList.remove('default');
    document.querySelector('#cor').classList.add('fundo');
}
function reset(){
    document.querySelector('#cor').classList.remove('fundo');
    document.querySelector('#cor').classList.add('default');
}
