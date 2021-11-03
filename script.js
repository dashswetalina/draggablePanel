
function date_time() 
{
var dt = new Date();
var currTime = dt.toLocaleTimeString('en-GB');
document.getElementById('timer').innerHTML = currTime;
setTimeout(function () { date_time(); }, 1000);
}
date_time();
document.getElementById('timer').style.display = 'block';
$( function() {
    $( "#draggable" ).draggable({
        containment: "#containment", scroll: false 
      }).resizable({
        containment: "#containment"
        });
  } );
 
  $(document).keyup(function(e) {
    if (e.key === "Escape") { 
       console.log("Escape key is pressed");
       document.getElementById('draggable').style.display = 'none';
   }
});

$(document).keyup(function(e) {
    if (e.key === "Enter") { 
        console.log("Enter key is pressed");
        document.getElementById('draggable').style.display = 'block';
   }
});

function checkRadio(event){
    console.log("Radio button clicked: "+event.target.id);
    if(event.target.id==="center"){
        
        $( "#draggable" ).removeClass('panelBottom');
        $( "#draggable" ).addClass('panel');
        document.getElementById('draggable').style.left = '30%';
        document.getElementById('draggable').style.top = '30%';
        document.getElementById('draggable').style.bottom = '';
        document.getElementById('draggable').style.right = '';
        document.getElementById('draggable').style.float = 'center';
        $( "#floatText" ).html('Center');
    }else{
       
        $( "#draggable" ).removeClass('panel');
        $( "#draggable" ).addClass('panelBottom');
        document.getElementById('draggable').style.right = '0';
        document.getElementById('draggable').style.bottom = '60';
        document.getElementById('draggable').style.top = '';
        document.getElementById('draggable').style.left = '';
        document.getElementById('draggable').style.float = 'right';
        $( "#floatText" ).html('Lower Right');
    }
}
