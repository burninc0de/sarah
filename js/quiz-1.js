/*/////////////////////////////
* Quiz Evaluation Script ? jscheuer1
* permission to use granted
* this credit must stay intact
/////////////////////////////*/

//Set number of questions


////////////////Stop Editing///////////////
////////////////Stop Editing///////////////
var ie=document.all

function showAnswer1(el,ans){
if(document.getElementById('right1').checked) {
  document.getElementById(el).innerHTML='<span class="green">That&#39;s correct! '+ans+'</span>'
}
if(document.getElementById('w1a').checked || document.getElementById('w1b').checked) {
  document.getElementById(el).innerHTML='Nope. Try again!'
}
}

function showAnswer2(el,ans){
if(document.getElementById('right2').checked) {
  document.getElementById(el).innerHTML='<span class="green">That&#39;s correct! '+ans+'</span>'
}
if(document.getElementById('w2a').checked || document.getElementById('w2b').checked) {
  document.getElementById(el).innerHTML='Nope. Try again!'
}
}

function showAnswer3(el,ans){
if(document.getElementById('right3').checked) {
  document.getElementById(el).innerHTML='<span class="green">That&#39;s correct! '+ans+'</span>'
}
if(document.getElementById('w3a').checked || document.getElementById('w3b').checked) {
  document.getElementById(el).innerHTML='Nope. Try again!'
}
}

function showAnswer4(el,ans){
if(document.getElementById('right4').checked) {
  document.getElementById(el).innerHTML='<span class="green">That&#39;s correct! '+ans+'</span>'
}
if(document.getElementById('w4a').checked || document.getElementById('w4b').checked) {
  document.getElementById(el).innerHTML='Nope. Try again!'
}
}

function showAnswer5(el,ans){
if(document.getElementById('right5').checked) {
  document.getElementById(el).innerHTML='<span class="green">That&#39;s correct! '+ans+'</span>'
}
if(document.getElementById('w5a').checked || document.getElementById('w5b').checked) {
  document.getElementById(el).innerHTML='Nope. Try again!'
}
}

function showAnswer6(el,ans){
if(document.getElementById('right6').checked) {
  document.getElementById(el).innerHTML='<span class="green">That&#39;s correct! '+ans+'</span>'
}
if(document.getElementById('w6a').checked || document.getElementById('w6b').checked) {
  document.getElementById(el).innerHTML='Nope. Try again!'
}
}

function showAnswer7(el,ans){
if(document.getElementById('right7').checked) {
  document.getElementById(el).innerHTML='<span class="green">That&#39;s correct! '+ans+'</span>'
}
if(document.getElementById('w7a').checked || document.getElementById('w7b').checked) {
  document.getElementById(el).innerHTML='Nope. Try again!'
}
}

function showAnswer8(el,ans){
if(document.getElementById('right8').checked) {
  document.getElementById(el).innerHTML='<span class="green">That&#39;s correct! '+ans+'</span>'
}
if(document.getElementById('w8a').checked || document.getElementById('w8b').checked) {
  document.getElementById(el).innerHTML='Nope. Try again!'
}
}

function showAnswer9(el,ans){
if(document.getElementById('right9').checked) {
  document.getElementById(el).innerHTML='<span class="green">That&#39;s correct! '+ans+'</span>'
}
if(document.getElementById('w9a').checked || document.getElementById('w9b').checked) {
  document.getElementById(el).innerHTML='Nope. Try again!'
}
}

function showAnswer10(el,ans){
if(document.getElementById('right10').checked) {
  document.getElementById(el).innerHTML='<span class="green">That&#39;s correct! '+ans+'</span>'
}
if(document.getElementById('w10a').checked || document.getElementById('w10b').checked) {
  document.getElementById(el).innerHTML='Nope. Try again!'
}
}

function showAnswer11(el,ans){
if(document.getElementById('right11').checked) {
  document.getElementById(el).innerHTML='<span class="green">That&#39;s correct! '+ans+'</span>'
}
if(document.getElementById('w11a').checked || document.getElementById('w11b').checked) {
  document.getElementById(el).innerHTML='Nope. Try again!'
}
}

function showAnswer12(el,ans){
if(document.getElementById('right12').checked) {
  document.getElementById(el).innerHTML='<span class="green">That&#39;s correct! '+ans+'</span>'
}
if(document.getElementById('w12a').checked || document.getElementById('w12b').checked) {
  document.getElementById(el).innerHTML='Nope. Try again!'
}
}

function showAnswer13(el,ans){
if(document.getElementById('right13').checked) {
  document.getElementById(el).innerHTML='<span class="green">That&#39;s correct! '+ans+'</span>'
}
if(document.getElementById('w13a').checked || document.getElementById('w13b').checked) {
  document.getElementById(el).innerHTML='Nope. Try again!'
}
}

function showAnswer14(el,ans){
if(document.getElementById('right14').checked) {
  document.getElementById(el).innerHTML='<span class="green">That&#39;s correct! '+ans+'</span>'
}
if(document.getElementById('w14a').checked || document.getElementById('w14b').checked) {
  document.getElementById(el).innerHTML='Nope. Try again!'
}
}


function addup()  {
var q, right, statement, total=0
questions=new Array();
for (i = 0; i < numQuest; i++)
questions[i]=0
if (document.forms.quiz.q1['right1']){
for (i = 0; i < numQuest; i++){
q="q"+(i+1)
right="right"+(i+1)
if (document.forms.quiz[q][right].checked)
questions[i]=1
}
}
else if (document.getElementById){
for (i = 0; i < numQuest; i++){
right="right"+(i+1)
if (document.getElementById(right).checked)
questions[i]=1
}
}
else
return;
for (i = 0; i < numQuest; i++)
total += questions[i]

var myElement = document.querySelector("#results");
myElement.style.marginLeft = "34px";
myElement.style.opacity = "1";


/*/////////////////////////////////////////////////
Set score response below.
///////////////////Edit Below to Suit/////////////*/
statement='You scored '+ total +' out of '+ numQuest +' correct ' +'<span class="percent">' + Math.round(total/numQuest*100) +'%</span>' +'&nbsp;<a href="http://twitter.com/intent/tweet?url=' + URL + '&text=I%20scored%20' + total +' out of '+ numQuest + '%20in%20the%20'+ tweettext +'.%20I%20dare%20you%20to%20challenge%20me%21">tweet your score</a>'
/////////////////Stop Editing///////////////////
ie? ie.results.innerHTML=statement : document.getElementById('results').innerHTML=statement
}
function clearR(){
ie? ie.results.innerHTML='' : document.getElementById('results').innerHTML=''
for (i = 0; i < numQuest; i++)
ie? ie["ans"+(i+1)].innerHTML='' : document.getElementById("ans"+(i+1)).innerHTML=''
}
