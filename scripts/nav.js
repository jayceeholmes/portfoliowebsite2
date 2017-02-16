// Mouse Listener - Change Background Color
document.addEventListener('mousemove', function(event) {

    // mapping
    var x = Math.floor((event.clientX / (window.innerWidth/2)) * (255));
    var y = 255 - x;
    var z = Math.floor(((event.clientX - (window.innerWidth/2)) / (window.innerWidth - (window.innerWidth/2))) * (255));

    // ((n-start1)/(stop1-start1))*(stop2-start2)+start2;


    if(event.clientX < window.innerWidth/2){
    // background color
    document.body.style.backgroundColor = 'rgb(' + y + ',' + y + ',' + y + ')';
  } else{
    document.body.style.backgroundColor = 'rgb(' + z + ',' + z + ',' + z + ')';
  }


    // text color
    if ((event.clientX < window.innerWidth*(3/4)) && (event.clientX > window.innerWidth/4)) {


        document.getElementById('p1').style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
        document.getElementById('p2').style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
        document.getElementById('p3').style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
        document.getElementById('p4').style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
        document.getElementById('p5').style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
        document.getElementById('p6').style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
        document.getElementById('p7').style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
        document.getElementById('p8').style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
        document.getElementById('me').style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
        document.getElementById('github').style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
        document.getElementById('blog').style.color = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';


    } else if (event.clientX > window.innerWidth*(3/4) || (event.clientX < window.innerWidth/4)) {

        document.getElementById('p1').style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
        document.getElementById('p2').style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
        document.getElementById('p3').style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
        document.getElementById('p4').style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
        document.getElementById('p5').style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
        document.getElementById('p6').style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
        document.getElementById('p7').style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
        document.getElementById('p8').style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
        document.getElementById('me').style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
        document.getElementById('github').style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
        document.getElementById('blog').style.color = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
    }

});
