var min ,  hr , se; 
var minang , hrang , seang;
var clockimg


function preload(){
  clockimg = loadImage("clock.jpg")
}
function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES)

}

function draw() {
  background(0,0,0);  
   translate(400 , 400)
   imageMode(CENTER)
   image(clockimg , 0,0 , 600 ,600)
   rotate(-90)
  hr = hour()
  min = minute()
  se = second()
  hrang = map(hr%12,0,12,0,360)
  minang = map(min,0,60,0,360)
  seang = map(se,0,60,0,360)
//console.log(min)
//onsole.log(se)
//console.log(hr)
push()
rotate(seang)
stroke("plum")
strokeWeight(10)
line(0,0,200,0)
pop()
push()
rotate(minang)
stroke("red")
strokeWeight(10)
line(0,0,150,0)
pop()
push()
rotate(hrang)
stroke("purple")
strokeWeight(10)
line(0,0,100,0)
pop()

  drawSprites();
}