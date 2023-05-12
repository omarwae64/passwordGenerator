function randomPass(){
    const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
    var pass ="";
    var pass0 ="";
    var length = 12; // Length of the password

     for ( var i= 0; i < length; i++){
         var randomSetIndex  = Math.floor(Math.random() * characters.length);
         
         pass += characters[randomSetIndex];

     }
     for ( let i= 0; i < length; i++){
         var random  = Math.floor(Math.random() * characters.length);
         pass0 += characters[random];

     }
        var recEl = document.getElementById("rec1-el")
        recEl.textContent = pass;
        var recEl2 = document.getElementById("rec2-el")
        recEl2.textContent = pass0;






 }
