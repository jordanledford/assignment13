
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function doubler(num){
  var doubleNumber = document.getElementById("compoundInvestment")
  doubleNumber.innerHTML
  doublenumber.parseInt(){
    num * 2 = var newNum;
    return newNum;
  }

 // while (num != Infinity){
//    var a = 1, b = 2, num = 1;
//    for (var i = 2; i <= num; i++){
//      num = a * b;
//      a = b;
//      b = num;
//    }
//    {return num;
//    }
//  }
// });

document.querySelector("#color-circle button").addEventListener('click',function flipper(onClick){
  if ( document.getElementById("#circle-bw").innerHTML = " ") {
    document.getElementById("circle-bw").innerHTML = "#000";
  };
  if (document.getElementById("#circle-bw").innerHTML = " ") {
    document.getElementById("#circle-bw").innerHTML = "#000";
  }
})

document.querySelector("#blow-up button").addEventListener('click',function(onClick){
  // TASK #4}
  var redCircle =  document.querySelector('.circle-red');

  var elementStyles =  window.getComputedStyle(redCircle);
  	console.log('w', elementStyles.width);
    console.log('h', elementStyles.height);
    var elWidthString = elementStyles.width;
  	var elHeightString =  elementStyles.height;
  var charArrayW = elWidthString.slice(0, -2);
  var charArrayH = elHeightString.slice(0, -2);
  charArrayW.pop();
  charArrayH.pop();
  var currentCircleW = parseInt(charArrayW);
  var currentCircleH = parseInt(charArrayH);
  var doubleWidth = currentCircleW * 2;
  var doubleHeight = currentCircleH * 2;

  redCircle.style.width = doubleWidth + "px";
  redCircle.style.height = doubleHeight + "px";
  if (doubleWidth >= 320){
  redCircle.style.width = 40 + "px";
  redCircle.style.height = 40 + "px";
  }
  
})

document.querySelector("#student workspace #remove-button").addEventListener('click',function(){
  // TASK #5
  var inactiveParent = document.getElementById("user-list");
  var inactiveChild = document.getElementsByClassName("inactive");
   inactiveParent.removeChild(inactiveChild);
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  // DRY DRY DRY DRY
  var arrayOfBoxes = [one, two, three, four, five, six, seven]
  var someStuff = document.getElementsByClassName(boxes)
    if (arrayOfBoxes[six] = true){}

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var pigTasks = document.getElementById(tasks)

  function pigIterator(stuff){
    for (var tasks in pigTasks){
      if (!pigTasks.hasOwnProperty(tasks)){
        continue;
      }
      (i = 0 ;i < pigTasks;i++)
    }
  }
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
