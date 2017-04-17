function appenD(){    
    var inText = document.getElementById('a');
    var assa = document.getElementById('text');
    var teXt = inText.value; 
    var p = document.createElement('p');
  
        p.innerHTML = teXt;
        p.className = 'del';
    
        if (inText.value == '' || inText.value == ' ' ){
            alert('Введіть слово в рядок!!!');
        } else { assa.insertBefore(p, assa.firstChild);}

            inText.value = '';   
}
    
    function removE(){
        var assa = document.getElementById('text');
        assa.removeChild(assa.lastChild);
};