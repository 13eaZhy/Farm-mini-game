// ogorod 10 uceastkov
var garden = [
                  'rosie',                //0
                  '',                     //1
                  'castravete',           //2
                  'castravete',           //3
                  'corn',                 //4
                  'ardei',                //5
                  '',                     //6
                  '',                     //7
                  '',                     //8
                  ''                      //9
                ];

function showParcel( i ){ //afiseaza din masiv 1 uceastok, unde i = nr la msaiv
 var div = document.getElementById('garden');

 if ( garden[i] == 'ardei'){
 div.innerHTML += "<div><img src='images/ardei.png'></div>";
 }

 if ( garden[i] == ''){
 div.innerHTML += "<div></div>"
 }

 if ( garden[i] == 'castravete'){
 div.innerHTML += "<div><img src='images/castravete.png'></div>";
 }

 if ( garden[i] == 'corn'){
 div.innerHTML += "<div><img src='images/corn.png'></div>";
 }

 if ( garden[i] == 'rosie'){
 div.innerHTML += "<div><img src='images/rosie.png'></div>";
 }

 }


for ( var i = 0; i <= 9 ; i++){
 showParcel(i);
}
