function Counter(obj){

  // get the number
  var number = obj.text();
  obj.attr('data-number',number);

  // clear the HTML element
  obj.empty();

  // create an array from the text, prepare to identify which characters in the string are numbers
  var numChars = number.split("")
  var numArray = [];
  var setOfNumbers = [0,1,2,3,4,5,6,7,8,9];

  // for each number, create the animation elements
  for(var i=0; i<numChars.length; i++) {
    if ($.inArray(parseInt(numChars[i], 10),setOfNumbers) != -1) {
      obj.append('<span class="digit-con"><span class="digit'+numArray.length+'">0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br></span></span>');
      numArray[numArray.length] = parseInt(numChars[i], 10);
    }
    else {
      obj.append('<span>'+numChars[i]+'</span>');
    }
  }

  // determine the height of each number for the animation
  var increment = obj.find('.digit-con').outerHeight();
  var speed = 2000;

  // animate each number
  for(var i=0; i<numArray.length; i++) {
    obj.find('.digit'+i).animate({top: -(increment * numArray[i])}, Math.round(speed / (1 + (i * 0.333))));
  }
}

$(document).ready(function(){
  $('.number').each(function(){
	  Counter($(this));
	});
});

$("#animate").click(function(){
  $('.number').eq(0).text($('.number').attr('data-number'));
  Counter($('.number').eq(0));
});
