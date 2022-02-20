if(typeof score != 'undefined') {

} else {var score = 0;
}

var answerNum = 0
var quesNum = $(".quiz p" ).length;

//hide answer button
$("tw-expression[type='macro'] tw-link ").animate({bottom: "-100px"});
$("footer").animate({bottom: "-500px"});


function countandgo() {
if (quesNum == answerNum) {
    //$("tw-expression[type='macro'] tw-link ").animate({bottom: "100px"});
$("footer").animate({bottom: "0"});
$( "footer" ).append( "<div class="continue">Continue</div>";);

    }
}

///audioplayer
function audioPlayer(x) {
 var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', x)
        audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()
        $.get();
        audioElement.addEventListener("load", function() {
        audioElement.play();
        }, true);
				audioElement.play();
        }
          

// MAIN QUIZ FUNCTION
$(document).ready(function(){


    $("label").click(function(){
        if(!$(this).hasClass("blocked")){
            rname=$(this).attr("for");
            $("label[for="+rname+"]").addClass("blocked");
            $("label[for="+rname+"] > input").attr("checked",false);
            $(this).children("input").attr("checked",true);
            if( $(this).children("input").attr("value")==answers[(rname.substr(1, 1))-1] ){
                $(this).addClass("green");
				score = score+1;
        answerNum = answerNum+1;
        var url = "mp3/coin.mp3"
				audioPlayer(url);
        countandgo();
				
	$('.score').fadeIn(200).html(score).fadeOut(200).fadeIn(300);
				
            }
            else{
                $(this).addClass("red");
				score = score-1;
        answerNum = answerNum+1;
        var url = "mp3/wrong.mp3"
				audioPlayer(url);
        countandgo();

					$('.score').fadeIn(100).html(score).fadeOut(100).fadeIn(100);
					$('.score:after').fadeOut(300);
            }
            $(this).children("input").attr("checked",true);
        }
    });
    
    
});



