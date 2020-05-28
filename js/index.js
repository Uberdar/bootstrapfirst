var mybutton = document.getElementById("js_scrl_btn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", function helloThere (){
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


var btn = $('#jq_scrl_btn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



/*validation */
var validator = new FormValidator('main__form', [{
  fname: 'required',
  display: 'required',
  rules: 'required'
}, {
  fname: 'alphanumeric',
  rules: 'alpha_numeric'
}]);

var subb = document.getElementById("submit");
subb.addEventListener("click" , numberOneToTenFunction);


function numberOneToTenFunction() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}