function load()
{
    
     
}

function dom1(input)
{
    var parr = document.getElementById("para"); 
    if(parr != undefined)
        {
            parr.innerHTML = input; 
        }
    
}

function createPara()
{
    var newPara = document.createElement('p');
    var textt = document.createTextNode(document.getElementById('createP').value); 
    newPara.className = "reverse"; 
    newPara.appendChild(textt); 

    var element = document.getElementById("create");
    element.appendChild(newPara); 
}

function deletePara()
{
    var p = document.getElementById("para");
    if(p != undefined)
        {
            document.getElementById('create').removeChild(p);
        }    
    
}

function deletePP()
{
    var words = document.getElementsByClassName('reverse');
    if(words.length > 0)
        {
            document.getElementById('create').removeChild(words[0]);
        }
}