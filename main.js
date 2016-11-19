
document.querySelector("#inject-html button").addEventListener('click', function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box');
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click', function(num){
  var pTagVal = document.querySelector('#compoundInvestment')
  // you do the rest
  var currentInt = pTagVal.innerHTML
  var currentInt = parseInt(currentInt);

  pTagVal.innerHTML = currentInt * 2;
})

document.querySelector("#color-circle button").addEventListener('click', function(){
  var circle = document.querySelector("#circle-bw");
    if (circle.style.background === "rgb(255, 255, 255)") {
      circle.style.background = "rgb(0, 0, 0)";
    } else {
      circle.style.background = "rgb(255, 255, 255)";
    }
})


document.querySelector("#blow-up button").addEventListener('click',function(onClick){
  var redCircle = document.querySelector('.circle-red');
  var elStyles = window.getComputedStyle(redCircle);
  var heightNumberString = elStyles.height.slice(0, -2);
  var widthNumberString = elStyles.width.slice(0, -2);
  var heightNumber = parseInt(elStyles.height);
  var widthNumber = parseInt(elStyles.width);

  if (heightNumber <= 320) {
    redCircle.style.height = heightNumber * 2 + 1 + 'px';
    redCircle.style.width = widthNumber * 2 + 1 + 'px';
  } else {
    redCircle.style.height = "40" + 'px';
    redCircle.style.width = "40" + 'px';
  }
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var inactiveParent = document.getElementById("user-list");
  var inactiveChild = document.getElementsByClassName("inactive");
  var userLists = document.querySelector('#user-list')
  var listOfUsers = document.querySelectorAll('#user-list li')
  for (var i = 0; i < listOfUsers.length; i += 1 ){
    var listers = listOfUsers[i];
    if(listers.classList.contains('active') === false){
      userLists.removeChild(listers);
    }
  }
});

document.querySelector("#reverse-squares button").addEventListener('click',function(){
  var boxContainer = document.querySelector('#reverse-squares .answer-box')
  var boxLi = document.querySelectorAll('#reverse-squares span')
  for (var i = boxLi.length -1; i >= 0; i--){
     boxContainer.removeChild(boxLi[i])
     boxContainer.appendChild(boxLi[i])
  }
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
   var taskContainer = document.querySelectorAll('#tasks li')
   console.log(taskContainer[1].innerHTML)
   for (var i = 0; i < taskContainer.length; i++){
      var currentArr = taskContainer[i].innerHTML
      var newString = ''
      for (var a = currentArr.length -1; a >= 0; a = a -1){
         console.log(currentArr[a])
         newString = newString + currentArr[a]
      }
      taskContainer[i].innerHTML = newStrg
   }
})

// document.querySelector("#cycle-image button").addEventListener('click',function(){
//    //TASK #8
// })
