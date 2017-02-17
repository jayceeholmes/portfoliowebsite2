// global
var h;
var m;
var s;

var cx;
var cy;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // dimensions
  cx = width/2;
  cy = height/2;

  // text
  textAlign(CENTER);
  textFont("Courier New");
  textSize(width/60);

  // think about storing / generating data for missed time in hour

} // end setup

function draw() {

  // time
  h = hour();
  m = minute();
  s = second();

  // set background color
  seeBackground();
   
  // // find hour
  // if(h == 13 || h == 1){
  //   hour1();
  // } // end 1

  // if(h == 14 || h == 2){
  //   hour2();
  // } // end 2
  //
  // if(h == 15 || h == 3){
  //   hour3();
  // } // end 3
  //
  // if(h == 16 || h == 4){
  //   hour4();
  // } // end 4
  //
  // if(h == 17 || h == 5){
  //   hour5();
  // } // end 5
  //
  // if(h == 18 || h == 6){
  //   hour6();
  // } // end 6
  //
  // if(h == 19 || h == 7){
  //   hour7();
  // } // end 7
  //
  // if(h == 20 || h == 8){
  //   hour8();
  // } // end 8
  //
  // if(h == 21 || h == 9){
  //   hour9();
  // } // end 9
  //
  // if(h == 22 || h == 10){
  //   hour10();
  // } // end 10
  //
  // if(h == 23 || h == 11){
  //   hour11();
  // } // end 11
  //
  // if(h == 24 || h == 0){
  //   hour0();
  // } // end 0

} // end draw

// BACKGROUND------------------------

function seeBackground() {
  if(h % 2 == 0){
    background(255);
    fill(0);
  } else{
    background(0);
    fill(255);
  }

  text(h + '.' + m + '.' + s, cx, cy);

} // end seeColor

// HOUR-------------------------------

function hour1(){

  var i = 0;

  fill(255);

} // end hour1
