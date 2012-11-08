$(document).keydown(function(e) {
   var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
   console.log("Key Pressed : " + key);

   switch(key) {

      case 32: // space
      togglePlay();
      break;

      case 80: // 'p' key
      case 37: // left arrow
      prevTrack();
      break;

      case 39: // right arrow
      case 78: // 'n' key
      nextTrack();
      break;

      case 38: // up arrow
      volumeUp();
      break;

      case 40: // down arrow
      volumeDown();
      break;
   }

});

function nextTrack(){
   console.log('Next Track');
   $('#fwd').click();
}

function prevTrack(){
   console.log('Prevous Track');
   $('#rew').click();
}

function volumeUp(){
   console.log('Volume Up');
}

function volumeDown(){
   console.log('Volume Down');
}

function togglePlay(){
   if(document.getElementById('pause').className == "controls hide"){
      console.log('Play');
      $('#play').click();
   }
   else{
      console.log('Pause');
      $('#pause').click();
   }
}

