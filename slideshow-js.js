
 let counter = 0;


$(document).ready(function(){
   $(".container div img").hide();
   $(".container div img").eq(0).show();
//=================================
   $("#next").click(function(){
    counter++;
    if(counter>6){
        counter=0;
    };
    console.log(counter);
    $(".container div img").eq(counter).show();
    $(".container div img").eq(counter-1).hide();
   });
//=================================
   $("#prev").click(function(){
    counter--;
    $(".container div img").eq(counter+1).hide();
    if(counter<0){
        counter=6;
    };
    console.log(counter);
    $(".container div img").eq(counter).show();
    
   }); 
//=================================
   $("#chance").click(function(){
        let chan;
        chan =Math.floor(Math.random()  * 7 );
        console.log(chan);

    $(".container div img").hide();
    $(".container div img").eq(chan).show();
   });  
//=================================

});



