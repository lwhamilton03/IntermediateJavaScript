function challenge9()
{

    var requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json"; 
    var request = new XMLHttpRequest(); 

    request.open('GET', requestURL); 
    request.responseType = 'JSON'; 
    request.send();
    request.onload = function()
        {   
            var kings = request.response; 
            kings = JSON.parse(kings); 
            console.log(kings);
            
            for(kin in kings)
                {
                    document.write("<br/");
                    
                    if(kings[kin].nm == document.getElementById('find').value)
                        {
                            document.write("<br>" + kings[kin].nm);
                            document.write(("<br>" + kings[kin].cty));
                            document.write(("<br>" + kings[kin].hse));
                            document.write(("<br>" + kings[kin].yrs));
                        }


                    
                }
        }


}