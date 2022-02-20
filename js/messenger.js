$( document ).ready(function() {
  // Kill BRs
$('tw-story br').remove();
});

$( "tw-column tw-link" ).on( "click", function() {
  console.log( $( this ).text() );
  $('tw-story br').remove();
});

var str = "{_response}";
console.log("TEST");
var test = str.split(".");

var extension = test[test.length - 1];
//alert(extension);
//alert(str.replace("."+extension,""));
//$( "#page-nav" ).prependTo( document.body );
//$( "#loadgame" ).prependTo( '#page-nav ul' );

//debug for speaking
/* $('.vol').click(function(){
  alert($.trim($($(this)).text()))
  
}); */

if (hesitate == null){
   var hesitate = 0 + Math.floor(Math.random() * 500);
}

$('.speech .txt tw-expression:contains("XXX")').parent().parent().parent().addClass("hideme");

$('tw-column tw-link:contains("xxx")').addClass("hideme");

//counting last RIGHT message
var rlength = $.trim($('tw-expression tw-hook:nth-last-of-type(3) .txt').text()).length;

// counting last LEFT message
var length = $.trim($('tw-expression tw-hook:nth-last-of-type(2) .txt').text()).length;

var lethimread = 700 + Math.floor((Math.random() * 350) + 500) + (rlength*25);

var number = 1000 + Math.floor(Math.random() * 1500) + length;

//fade out loading animation
 $('.loading').delay(number+hesitate+lethimread).fadeOut();
 
// show text message
  $('tw-expression tw-hook:nth-last-of-type(2) .txt').delay(number+400+hesitate+lethimread).fadeIn();
  
  // fade in Quiz
  $('.quiz').delay(number+1000+hesitate+lethimread).fadeIn();
  
// show left volume icon
$('tw-expression tw-hook:nth-last-of-type(2) .vol').delay(number+400+hesitate+lethimread).fadeIn();
  
// seen checkmarks
//window.setTimeout(function(){$("tw-expression tw-hook:nth-last-of-type(3) .txt").addClass("seen");}, lethimread/2-number);

// wrap span around answer
$('tw-column tw-link').wrapInner('<span></span>');

// show button
$('tw-column tw-link span').delay(lethimread+number+800).fadeTo("slow", 1);

window.setTimeout(function(){$('tw-column tw-link span').addClass("typing");}, lethimread+number+800);

 
$('tw-expression tw-hook:nth-last-of-type(2)').delay(lethimread).fadeIn()

  $('.avatar').delay(number+400+hesitate).fadeIn().css("vertical-align", "bottom");
  
    $('.multipart').delay(number+400+hesitate).fadeIn();
	
// scroll to typing

  $("html, body").animate({ scrollTop: $(document).height() }, "slow");


  //scroll to end of message
	$("html, body").delay(lethimread-50).animate({ scrollTop: $(document).height() }, "slow");



var readmeleft = $.trim($('tw-expression tw-hook:nth-last-of-type(2) .txt').text())

var readmeright = $.trim($('tw-expression tw-hook:nth-last-of-type(3) .txt').text())




function speak(x) {

 var u = new SpeechSynthesisUtterance();
 

        u.text = x;
        u.lang = 'de-DE';
        speechSynthesis.speak(u);      
	
}