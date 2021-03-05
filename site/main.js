function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function genQuote() {
  var randNum = Math.floor(Math.random() * 80) + 1;
  document.getElementById('quote').innerHTML = quotes[randNum];
  var tweetQuote = quotes[randNum].split(' ').join('%20');
  tweetQuote = tweetQuote.split('<br>').join('');
  tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
  $('.twitter-share-button').attr('href', tweetQuote);
}

//quote array
var quotes = ["Blank", 
"\"Let me send this smut to Emilio real quick.\"<br>-  Elijah Leung", 
"\"I need to spend a 1000 dollars fly to Japan, find this man's studio and kick him in the balls.\"<br> -Elijah Leung", 
"\"You don't need water man.\"<br>- Elijah Leung", 
"\"You emerge out the crate on Joe Island like it's donkey kong country.\"<br>- Elijah Leung", 
"\"You would never survive a discord Server full of gay furries.\"<br>- Elijah Leung", 
"\"Now throw that ass in a Rhombus.\"<br>- Elijah Leung", 
"\"I get your N*gga Hard.\"<br>- Elijah Leung", 
"\"Thats right nicky keep using your body to distract them.\"<br>- Elijah Leung",
"\"Tak and the power of this penis.\" <br>- Elijah Leung",
"\"She's legal.\"<br>- Elijah Leung",
"\"If its all white its alright.\"<br>- Elijah Leung",
"\"If someone sends 'warm regards' I'm gonna take that as an insult.\"<br>- Elijah Leung",
"\"Yes I am looking at what is ever on this woman's chest.\"<br>- Elijah Leung",
"\"I need that butt time, I am about to go legendary on that Butt.\"<br>- Elijah Leung",
"\"But would you go to a Czechoslovakian Whore house?.\"<br>- Elijah Leung",
"\"Eli-O's the Secret is in the Frosting but I will never tell.\"<br>- Elijah Leung",
"\"Don't forget about my warehouse of Compassion.\"<br>- Elijah Leung",
"\"A dick in hand feels good.\"<br>- Elijah Leung",
"\"THIS IS WHAT YOU ASKED FOR FOR THE NEGRO SOLSTICE?.\"<br>- Elijah Leung",
"\"Condemned me to number 13... I'm Gonna de-Dominican you.\"<br>- Elijah Leung",
"\"I TOLD YOU I WAS GETTING HELP.\"<br>- Elijah Leung",
"\"Crushing on Sailor Mercury in Middleschool?...I can't legally say that.\"<br>- Elijah Leung",
"\"Bibidibobidi you are now my property James.\"<br>- Elijah Leung",
"\"I ain't geting canceled over this, I need to get canceled over some fun shit.\"<br>- Elijah Leung",
"\"You really fucked up my plans ... and here I thought I was the hero of my story... Everyone is the villain but me.\"<br>- Elijah Leung",
"\"Eugene where are my bloomers.\"<br>- Elijah Leung",
"\"Your tears are tasty James. Lucky Charms got nothing on this.\"<br>- Elijah Leung",
"\"I am your magical Negro.\"<br>- Elijah Leung",
"\"Just because I dress like this does not make me a whore.\"<br>- Elijah Leung",
"\"Joe, I am not surprised your reckoning will come.\"<br>- Elijah Leung",
"\"You can't escape my Love Puddin.\"<br>- Elijah Leung",
"\"Yes I love you David, do you need anything more.\"<br>- Elijah Leung",
"\"Is there a thing as head giving Aliens?\"<br>- Elijah Leung",
"\"I will have my Trap Paradise.\"<br>- Elijah Leung",
"\"Horny People have no rights.\"<br>- Elijah Leung",
"\"He is black and positive they can't have this.\"<br>- Elijah Leung",
"\"I HAVE ACCESS TO ALL OF BELLE DELPHINES PORN RIGHT NOW.\"<br>- Elijah Leung",
"\"Get ready to prostrate yourself.\"<br>- Elijah Leung",
"\"I can have a fucking mixed kid.\"<br>- Elijah Leung",
"\"Nicky you have a place in my new world order.\"<br>- Elijah Leung",
"\"UI Goku is a completely fair character.\"<br>- Elijah Leung",
"\"If I wasn't cheap I swear I would get a better lawyer than Chris.\"<br>- Elijah Leung",
"\"I thought we gave you ample hush money.\"<br>- Elijah Leung",
"\"I don't what you're talking about. I ain't ever fap in my life.\"<br>- Elijah Leung",
"\"One Day Mckayla Maroney I'm gonna Disappoint you so hard.\"<br>- Elijah Leung",
"\"You know I wanted to plow him back in the day.\"<br>- Elijah Leung",
"\"Oh BOI the things ...(Bites Lips) I would do to him.\"<br>- Elijah Leung",
"\"The horny Stick is reserved for Traps.\"<br>- Elijah Leung",
"\"Bite your fucking tongue young man, Shut your whore lips.\"<br>- Elijah Leung",
"\"We talking Trap Cherries... or, I be blowing Trap's backs every week.\"<br>- Elijah Leung",
"\"Oh nicky im gonna give you 10 lashings... oh its going for once.\"<br>- Elijah Leung",
"\"You could kill any Minority you want.\"<br>- Elijah Leung",
"\"OH MY GOD THEY DE-SEXIFIED HER!!!\"<br>- Elijah Leung",
"\"I'm about to call the Pentagon.\"<br>- Elijah Leung",
"\"Come on Jeremy join my side...Come over to light skin side all are welcomed.\"<br>- Elijah Leung",
"\"James for once i want you to BEAT MY ASS.\"<br>- Elijah Leung",
"\"The 2nd step is eliminating anyone that would dare acknowledge my problems.\"<br>- Elijah Leung",
"\"I dont know what you are talking about I AM A SAINT GOOD DAY SIR\"<br>- Elijah Leung",
"\"Some say I am the reincarnation for grease up death guy\"<br>- Elijah Leung",
"\"You are telling me I could have been buying prostitutes all willy Nilly\"<br>- Elijah Leung",
"\"I just skin a Joe and wear its skin\"<br>- Elijah Leung",
"\"They can't just wake up from last nights orgy\"<br>- Elijah Leung",
"\"Eli is a Colonizer!\"<br>- Elijah Leung",
"\"She was the sexual awakening for people now its just Chun Li in Fortnite!\"<br>- Elijah Leung",
"\"Q is a special Number!!\"<br>- Elijah Leung",
"\"They striped me of my clothes... I better shut up...\"<br>- Elijah Leung",
"\"Mean while in meat beat mania...\"<br>- Elijah Leung",
"\"My girlfriend is a ninja she be living in the shadows B.\"<br>- Elijah Leung",
"\"I would often dream of her shoving her discarded sponges in my throat\"<br>- Elijah Leung",
"\"DEGENERACY UNITE!!\"<br>- Elijah Leung",
"\"I can raise her passion with this corn.\"<br>- Elijah Leung",
"\"If that guy is gonna trick me, I'm gonna commit, we are gonna go out for dinner with flowers and Chocolate\"<br>- Elijah Leung",
"\"I'll put on black right now boy\"<br>- Elijah Leung",
"\"You should see the Emilio Android it doesnt even act Italian.\"<br>- Elijah Leung",
"\"I am Ignorant right now, Ignorant!\"<br>- Elijah Leung",
"\"Ok Daddy\"<br>- Elijah Leung",
"\"I got this flashdrive from statistics class and I used it for porn\"<br>- Elijah Leung",
"\"I bow down, by the booty for the booty\"<br>- Elijah Leung",
"\"That isn't one of his predetermined Dominican catchphrases\"<br>- Elijah Leung",
"\"Lets do this! We ain't no BITCH!\"<br>- Elijah Leung",
"\"I knew you would join the dark side Nicky.\"<br>- Elijah Leung",
];

//date
function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}



