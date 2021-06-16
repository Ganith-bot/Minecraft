var canvas= new fabric.Canvas("myCanvas");
var block_width= 30;
var block_heigth= 30;
var player_x= 100;
var player_y= 100;
var player_object="";
var block_object="";
var block_x=50;
var block_y=50;

function player_call(){
   fabric.Image.fromURL("player.png",function(Img)
   {player_object=Img;
   player_object.scaleToWidth(100);
   player_object.scaleToHeight(150);
   player_object.set({
       left:player_x,top:player_y
   });
   canvas.add(player_object);
}
   );
}

function block_call(get_image){
    fabric.Image.fromURL(get_image,function(Img)
    {block_object=Img;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_heigth);
    block_object.set({
        left:block_x,top:block_y
    });
    canvas.add(block_object);
 }
    );
 }