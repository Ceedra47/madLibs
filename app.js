  
function createParagraph(){
    var wordOne = document.getElementById('clothingOne').value;
    var wordTwo = document.getElementById('supeOne').value;
    var wordThree = document.getElementById('pluralone').value;
    var wordFour = document.getElementById('sportone').value;
    var wordFive = document.getElementById('nounone').value;
    var wordSix = document.getElementById('titleone').value;
    var wordSeven = document.getElementById('adverbone').value;
    var wordEight = document.getElementById('properone').value;
    var wordNine = document.getElementById('songone').value;
    var wordTen = document.getElementById('interone').value;
    var wordEleven = document.getElementById('clothingtwo').value;
    var wordTwelve = document.getElementById('verbone').value;
    var wordThirteen = document.getElementById('famoudone').value;
    var wordFourteen = document.getElementById('pluraltwo').value;
    var wordFifteen = document.getElementById('pluralthree').value;
    var wordSixteen = document.getElementById('clothingthree').value;
    var wordSeventeen = document.getElementById('adjectiveone').value;
    var wordEighteen = document.getElementById('adjectivetwo').value;
    
    
    
    
    
    var paragraph = '<p> I scoured my closet for the perfect ' + wordOne + ' to wear. Dressing for the' + wordTwo + 'place around isn’t easy. Sweating ' + wordThree + ' during the interview is a sure sign of weakness. I must remember to play up my strengths: ' + wordFour + ' , menacing stares, and ' + wordFive + collecting.  ' It has always been my dream to work with the Angel of Death, or ' + wordSix +  ' Devil. The power and prestige are ' + wordSeven +desirable. The Gates of '+ wordEight + ' tower above me as I ring the doorbell. I can’t believe ' + wordNine +' is the doorbell chime ' + wordTen + ', his black ' + wordEleven + ' looks better in person! The Devil: “Welcome to Hell. Your interview will ' + wordTwelve + ' now.” Me: “It’s a pleasure to meet you. My name is '+ wordThirteen +.” ' Famous person The Devil: “Who cares? I have only one question. Do you hate '+ wordFourteen + '?” Me: “Yes, yes I do. I hate them more than ' + wordFifteen +. '” The Devil: “You’re hired. Wait, is that a ' + wordSixteen + ' you’re wearing?” Me: “No, it’s actually a ' + wordSeventeen + ' suit.” The Devil: “You’re fired. Maybe you should pursue a career in '+ wordEighteen + '.”  '</p>'
    
    console.log(paragraph);
        document.getElementById('answer').innerHTML = paragraph;
}