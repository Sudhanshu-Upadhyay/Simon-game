alert("Simon is an electronic game of memory skill invented by Ralph H. Baer and Howard J. Morrison.Here you have to remember the sequence of tone of each level and in every new level you will hear new tone and in that level you have to enter this previous level's tones followed by this new tone tone");
var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern=[];
var statusOfGame=true;
var level = 0;
///////////////////////////////////////////////
// function checkAnswer(){
//
// for(var i=0;i<gamePattern.length;i++)
// { if(gamePattern[i]==buttonColors[i]){console.log(0);}
//   else{}
//
// }
// }
function checkAnswer(currentLevel){

  if(gamePattern[currentLevel]==userClickedPattern[currentLevel])
  { if(userClickedPattern.length==gamePattern.length){

    setTimeout(function (){nextSequence();},1000);

  }

  }
  else{
     var audio = new Audio("sounds/wrong.mp3");
audio.play();

$("body").addClass("game-over");
setTimeout(function(){$("body").removeClass("game-over");},200);
$("h1").text("Game Over, Press any key to restart");
startOver();

  }
}
function startOver(){
  gamePattern=[];
  level =0;
  statusOfGame=true;
}

/////////////////////////////nextSequence/////////////////
function nextSequence(){
  userClickedPattern=[];
   level++;
     $("h1").text("LEVEL "+level);
 var randomNumber = Math.floor(Math.random()*4);
 var randomChossenColor = buttonColors[randomNumber];
 gamePattern.push(randomChossenColor);

 $("#"+randomChossenColor).fadeOut(100).fadeIn(100);//fadeIn(100).fadeOut(100).fadeIn(100);
 playSound(randomChossenColor);



}

///////////////////////////////////
$(".btn").click(function(){
  if(level !== 0){
var userChosenColor=$(this).attr("id");
userClickedPattern.push(userChosenColor);
playSound(userChosenColor);
animatePress(userChosenColor);
checkAnswer(userClickedPattern.length-1);
}
else{   alert("PLease press on keyboard to Start");        }

});

function playSound(name){
 var audio = new Audio("sounds/"+name+".mp3");
 audio.play();

}

function animatePress(currentColor){
////here we are using id because where the function is called the have given input of id
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){$("#"+currentColor).removeClass("pressed");},100);
}

////////////////////////////

$(document).keydown(function(){
if(statusOfGame==true)
{ $("h1").text("LEVEL " +level);
  $("h1").text("Press A Key to Start");
  nextSequence();
 statusOfGame=false;

}
else{ }

});
$("#startButton").click(function(){
  if(statusOfGame==true)
  { $("h1").text("LEVEL " +level);
    $("h1").text("Press A Key to Start or Start button");
    nextSequence();
   statusOfGame=false;

  }
  else{alert("Please refresh to restart the game"); }



});
