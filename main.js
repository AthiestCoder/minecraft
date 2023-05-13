var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);
});
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_image_object);
});
}
window.addEventListener("keydown",myFunction)

function myFunction(e){
    var asciiValue = e.keyCode;
    if(asciiValue=='67'){
        new_image('cloud.jpg')
    }
    if(asciiValue=='68'){
        new_image('dark_green.png')
    }
    if(asciiValue=='71'){
        new_image('ground.png')
    }
    if(asciiValue=='76'){
        new_image('light_green.png')
    }
    if(asciiValue=='82'){
        new_image('roof.jpg')
    }
    if(asciiValue=='84'){
        new_image('trunk.jpg')
    }
    if(asciiValue=='85'){
        new_image('unique.png')
    }
    if(asciiValue=='87'){
        new_image('wall.jpg')
    }
    if(asciiValue=='89'){
        new_image('yellow_wall.png')
    }
    if(e.shiftKey==true && asciiValue=='80'){
        block_image_width = block_image_width+10;
        block_image_height = block_image_height+10;
        document.getElementById('current_width').innerHTML = block_image_width
        document.getElementById('current_height').innerHTML = block_image_height
    }
    if(e.shiftKey==true && asciiValue=='77'){
        block_image_width = block_image_width-10;
        block_image_height = block_image_height-10;
        document.getElementById('current_width').innerHTML = block_image_width
        document.getElementById('current_height').innerHTML = block_image_height
    }
    if(asciiValue=='37'){
        console.log("left")
        left();
    }
    if(asciiValue=='38'){
        console.log("up")
        up();
    }
    if(asciiValue=='39'){
        console.log("right")
        right();
    }
    if(asciiValue=='40'){
        console.log("down")
        down();
    }
}
function up(){
    if (player_y >= 0){
        player_y = player_y-block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when [up] arrow key is pressed, x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if (player_y <= 500){
        player_y = player_y+block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when [down] arrow key is pressed, x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if (player_x >= 0){
        player_x = player_x-block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when [left] arrow key is pressed, x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if (player_x <= 850){
        player_x = player_x+block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when [right] arrow key is pressed, x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}