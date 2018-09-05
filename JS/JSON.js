function practiceJSON()
{
    var requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";

    var requestArb = new XMLHttpRequest(); 

    requestArb.open('GET', requestURL);
    requestArb.responseType = 'JSON';
    requestArb.send(); 

    requestArb.onload = function () 
        {
            var superHeroes = requestArb.response;          
 
            superHeroes = JSON.parse(superHeroes); 
            
           // for(i = 0; i < superHeroes.length; i++)
                
            console.log(superHeroes);
            document.write(superHeroes.squadName + "<br/>");   
            for(random in superHeroes.members)
                {
                    document.write("<br/> Name: " + superHeroes.members[random].name);
                    document.write("<br/> Age: " + superHeroes.members[random].age);
                    document.write("<br/>");
                }
            document.write("<br> Secret Base: " + superHeroes.secretBase + "... TOP SECRET!"); 
            document.write("<br/> The squad formed in " + superHeroes.formed); 
            document.write("<br/>");
            for(random3 in superHeroes.members)
                {   
                    
                    for(random2 in superHeroes.members[random3].powers)
                        {
                            document.write("<br/>" + superHeroes.members[random3].powers[random2] + superHeroes.members[random3].name[random2]);
                            
                        }
                        document.write("<br/>");
                }; 
        };
     
}
