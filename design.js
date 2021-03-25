var easterEgg = 0;

var body = document.querySelector('body');
var sectionLanding = document.querySelector('.landing');
var sectionContact = document.querySelector('.input-form');
var header = document.querySelector('header');



// NAV BAR
var menuBtnTest = document.querySelector('.btn-element');
var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var navDesktop = document.querySelector('.nav-desktop');
var navMobile = document.querySelector('.nav-mobile');
var navMobileLogo = document.querySelector('.nav-mobile-logo');
var lineOne = document.querySelector('nav .menu-btn .line--1');
var lineTwo = document.querySelector('nav .menu-btn .line--2');
var lineThree = document.querySelector('nav .menu-btn .line--3');
var link = document.querySelector('nav .nav-links');
var logoColor = document.querySelector('.logo');

menuBtn.addEventListener('click', () => {
    var navMobileScroll = document.querySelector('.nav--scroll-mobile');
    nav.classList.add('nav-full-height');
    // navMobile.classList.toggle('nav-full-height');
    navMobileLogo.style.visibility = "hidden";
    // navMobileScroll.style.backgroundColor = "transparent";
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');

    if (nav.classList.contains('nav-open')) {
    }
    else {
      // function to remove class after the menu-bar is completely closed
      setTimeout(function(){
        navMobile.classList.remove('nav-full-height');
        navMobileLogo.style.visibility = "visible";
        // navMobileScroll.style.backgroundColor = "white";

      }, 800);
    }
})

// close navbar if menu-item is selected
$( ".nav-item-mobile" ).click(function() {
  // to get some time before section is reached
  setTimeout(function() {
    nav.classList.remove('nav-open');
    lineOne.classList.remove('line-cross');
    lineTwo.classList.remove('line-fade-out');
    lineThree.classList.remove('line-cross');
    link.classList.remove('fade-in');

    setTimeout(function(){
      navMobile.classList.remove('nav-full-height');
      navMobileLogo.style.visibility = "visible";
      // navMobileScroll.style.backgroundColor = "white";
    }, 800);
  }, 500);
})




// get the current window height with: window.innerHeight
// calculate for desktop
var windowHeight = window.innerHeight,
    navBarDesktopHeight = navDesktop.offsetHeight,
    windowNavDesktopOffset = windowHeight - navBarDesktopHeight,

// calculate for mobile
    navBarMobileHeight = navDesktop.offsetHeight,
    windowNavMobileOffset = windowHeight - navBarMobileHeight;

document.addEventListener('scroll', function() {
  var scrollPosition = pageYOffset;

  // checks if the page is scrolled down
  // fires .scroll-effect to add a transition-effect
  // for a smooth background-color change

  // if (scrollPosition > 1 && scrollPosition < 20) {
  //   navMobile.classList.toggle('scroll-effect');
  // }

  // if (scrollPosition > windowNavDesktopOffset) {
  //   navDesktop.classList.add('scroll-effect');
  //   navDesktop.classList.add('nav--scroll-desktop');
  //   navMobile.classList.add('nav--scroll-mobile');
  // }

  if (scrollPosition > 50) {
    navDesktop.classList.add('nav--scroll-desktop');
    navMobile.classList.add('nav--scroll-mobile');
    // logoColor.classList.add('grey');
    // logoColor.classList.remove('white');
  }

  // if (scrollPosition > 50 && scrollPosition < 51) {
  //   navDesktop.classList.add('scroll-effect');
  // }

  // removes the background-color if the frame reaches the top level again
  else {
    navDesktop.classList.remove('nav--scroll-desktop');
    navMobile.classList.remove('nav--scroll-mobile');
    // logoColor.classList.remove('grey');
    // logoColor.classList.add('white');
  }
})

// EASTER EGG - SWITCH BACKGROUND
var backgroundImage = document.querySelector('.landing-background-image'),
    sectionHome = document.getElementById('home'),
    card = document.querySelector('.card'),
    sectionContact = document.querySelector('.input-form');

$( ".switch-left" ).click(function() {
  easterEgg += 1;
  alert('Congratulations!!! You have found an EasterEgg!')
  $( ".landing-background-settings" ).toggleClass( "switch-background-left" );
  $( ".logo" ).toggleClass( "grey lightGreen" );

  // iterate through each object with same class
  // $(".grey").each(function(i, obj) {
  //   $( this ).toggleClass( "border-dg color-dg");
  // })

})

$( ".switch-right" ).click(function() {
  easterEgg += 1;
  alert('Congratulations!!! You have found an EasterEgg!')
  // adds .bi-chevron-down-collapse on click
  // removes .btn-shadow on click
  $( ".landing-background-settings" ).toggleClass( "default switch-background-right" );
})




// SECTION: CONTENT
// CARDS > Prototype Cabin Turn effect
var cardPrototypeOne = document.getElementById('card-prototype');
var cardPrototype = document.querySelector('.card-prototype');
var cardBody = document.querySelector('.card-body');
var cardHeaderZipperBlock = document.querySelector('.card__header-zipper');
var cardCamIcon = document.querySelector('.bi-camera');
var cardZipper = document.querySelector('.zipper-block');
var cardZipperClose = document.querySelector('.card__header-close');
var accordionElements = document.getElementById('accordionExample');
// var cardTurned = document.querySelector('.card-turned');

cardCamIcon.addEventListener('click', () => {
  cardPrototype.style.backgroundColor = "#fff";
  cardPrototype.style.height = "500px";
  cardPrototype.classList.add('justy-align');
  cardBody.classList.add('overlay');
  cardCamIcon.style.display = "none";
  accordionElements.style.display = "none";
  // cardBody.style.visibility = "hidden";

  // creates div element button
  var newDiv = document.createElement('div');
  // defines inner HTML of the div
  newDiv.innerHTML = '<div class=\"btn-card\"> \
                        <i class=\"bi bi-x\"></i> \
                      </div>';


  // creates div element image
  var newDivImage = document.createElement('div');
  // defines inner HTML of the div
  newDivImage.innerHTML = '<div \
                                class=\"image-cube-drawing-simple\"> \
                                <img id = \"image-card-turned\" \
                                  src=\"/content/images/Cube-draw-simple.png\" \
                                  alt=\"cube draw simple\"> \
                                </div>';

  // appends the new div to the existing parent node
  while (newDiv.firstChild) {
    cardPrototype.appendChild(newDiv.firstChild);
  }

  // appends the new div to the existing parent node
  while (newDivImage.firstChild) {
    cardPrototype.appendChild(newDivImage.firstChild);
  }

  // gets the btn element of the card
  var cardBtn = document.querySelector('.btn-card');
  // gets the image element of the card
  var image = document.querySelector('.image-cube-drawing-simple');

  // sets an event listener to the button
  cardBtn.addEventListener('click', () => {
    cardHeaderZipperBlock.style.alignItems = "flex-end";
    // removes the turned class styles
    cardHeaderZipperBlock.classList.remove('card-turned');
    // removes the button
    cardBtn.parentNode.removeChild(cardBtn);
    // removes the image
    image.parentNode.removeChild(image);
    // removes the overlay properties
    cardBody.classList.remove('overlay');
    // turns on visibility of card text
    // turns on visibility of complete card body
    cardBody.style.visibility = "visible";
    // makes the zipper visible again
    cardCamIcon.style.display = "flex";
    cardPrototype.style.height = "auto";
    cardPrototype.classList.remove('justy-align');
    accordionElements.style.display = "block";

    // cardPrototype.style.backgroundColor = "var(--backgroundColorSecInput)";
  })
}
);

// Card - Button Cevron Turn effect
var cardButtonChevron = document.querySelector('.btn-card-footer');
var chevronTurn = document.querySelector('.bi-chevron-down');

$( ".btn-card-footer" ).click(function() {
  // adds .bi-chevron-down-collapse on click
  // removes .btn-shadow on click
  $( this ).toggleClass( "bi-chevron-down-collapse btn-shadow" );
})

// SECURITY - Contact Form

// CONTACT FORM
var form = document.getElementById('contact-form');
var submit = document.getElementById('submit');

// DROPDOWN
// var checkbox = document.querySelector("input[type=checkbox]");
var checkbox = document.getElementById('o1');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    $(function() {
      var label = $('#label');
      var list = $('.dropdown-list');
      list.find('li').click(function() {
        var text = $(this).html();
        label[0].innerText = text;

        // remove checked states to hide options
        setTimeout(function(){
          checkbox.checked = false;

          if (label[0].innerText != 'Reset') {
            label.addClass('option-selected');
          }

          else {
            label.removeClass('option-selected');
          }
        }, 200);
      })
    });
  }
});



// submit.addEventListener('click', () => {
//
//   var firstname = document.getElementById("firstname").value;
//   var surname = document.getElementById("surname").value;
//   var adress = document.getElementById("adress").value;
//   var email = document.getElementById("email").value;
//   var option = document.getElementById("label").innerText;
//   var comment = document.getElementById("comment").value;
//
//   if (validation()) {
//     // Calling validation function
//     // form.submit(); //form submission
//
//     // alert(" firstname : " + firstname +
//     //       " n surname : " + surname +
//     //       " n zip-code : " + adress +
//     //       " n Email : " + email +
//     //       " n Option : " + option +
//     //       " n Form Id : " + form.getAttribute("id") + "nn Form Submitted Successfully......");
//   }
//
//   // Name and Email validation
//   function validation() {
//     // var marketing = document.getElementById('marketing').value;
//     var emailReg = mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//
//     if (firstname === ''  || surname === '' || email === '') {
//       alert('Please fill all fields!');
//       return false;
//     }
//     else if (!(email).match(emailReg)) {
//       alert('Invalid Email!');
//       return false;
//     }
//     else {
//       // console.log('trigger modal');
//       var contactInfo = document.getElementById('insert-contact-info');
//       contactInfo.innerHTML = "<p>Vorname: " + firstname + "</p> \
//                               <p>Nachname: " + surname + "</p> \
//                               <p>Postleitzahl: " + adress + "</p> \
//                               <p>Email: " + email + "</p> \
//                               <p>Auswahl: " + option + "</p> \
//                               <p>Kommentar: " + comment + "</p>";
//
//       $('#modal').modal('toggle');
//       return true;
//     }
//   }
// });
function send() {
  console.log('submit was clicked');
  var firstname = document.getElementById("firstname").value;
  var surname = document.getElementById("surname").value;
  var adress = document.getElementById("adress").value;
  var email = document.getElementById("email").value;
  var option = document.getElementById("label").innerText;
  var comment = document.getElementById("comment").value;

  validation();
  // if (validation()) {
    // Calling validation function
    // form.submit(); //form submission

    // alert(" firstname : " + firstname +
    //       " n surname : " + surname +
    //       " n zip-code : " + adress +
    //       " n Email : " + email +
    //       " n Option : " + option +
    //       " n Form Id : " + form.getAttribute("id") + "nn Form Submitted Successfully......");
  // }

  // Name and Email validation
  function validation() {
    // var marketing = document.getElementById('marketing').value;
    var emailReg = mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (firstname === ''  || surname === '' || email === '') {
      alert('Please fill all fields!');
      return false;
    }
    else if (!(email).match(emailReg)) {
      alert('Invalid Email!');
      return false;
    }
    else {
      // console.log('trigger modal');
      var contactInfo = document.getElementById('insert-contact-info');
      contactInfo.innerHTML = "<p>Vorname: " + firstname + "</p> \
                              <p>Nachname: " + surname + "</p> \
                              <p>Postleitzahl: " + adress + "</p> \
                              <p>Email: " + email + "</p> \
                              <p>Auswahl: " + option + "</p> \
                              <p>Kommentar: " + comment + "</p>";

      $('#modal').modal('toggle');
      return true;
    }
  }
};

// COUNT UP Characters in input-fields
const inputFirstname = document.getElementById("firstname");
const inputSurname = document.getElementById("surname");
const inputAdress = document.getElementById("adress");
const inputEmail = document.getElementById("email");
const inputComment = document.getElementById("comment");

counterFirstname = document.getElementById("counterFirstname");
counterSurname = document.getElementById("counterSurname");
counterAdress = document.getElementById("counterAdress");
counterEmail = document.getElementById("counterEmail");
counterComment = document.getElementById("counterComment");

maxLengthFirstname = inputFirstname.getAttribute("maxlength");
maxLengthSurname = inputSurname.getAttribute("maxlength");
maxLengthAdress = inputAdress.getAttribute("maxlength");
maxLengthEmail = inputEmail.getAttribute("maxlength");
maxLengthComment = inputComment.getAttribute("maxlength");

inputFirstname.onkeyup = ()=>{
  counterFirstname.innerText = maxLengthFirstname - inputFirstname.value.length;
}

inputSurname.onkeyup = ()=>{
  counterSurname.innerText = maxLengthSurname - inputSurname.value.length;
}

inputAdress.onkeyup = ()=>{
  counterAdress.innerText = maxLengthAdress - inputAdress.value.length;
}

inputEmail.onkeyup = ()=>{
  counterEmail.innerText = maxLengthEmail - inputEmail.value.length;
}

inputComment.onkeyup = ()=>{
  counterComment.innerText = maxLengthComment - inputComment.value.length;
}

// colors counter span of textarea
$(document).on('input', '#comment', function() {
  if ((inputComment.value.length) > 0) {
    counterComment.classList.add('textarea-counter');
    inputComment.classList.add('basic-color');
  }
  else {
    counterComment.classList.remove('textarea-counter');
    inputComment.classList.remove('basic-color');
  }
})

// COPY Button
$(document).on('click', '#copy', function() {

  alert('Eingegebene Inhalte wurden kopiert.')
  var range = document.createRange();

  range.selectNode(document.getElementById("insert-contact-info"));

  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges();// to deselect
});

// COPY MODE ON
$(document).on('click', '#copy-mode-on', function() {
  alert('copy mode activated');
  body.style.webkitUserSelect = "auto";
  body.style.mozUserSelect = "auto";
  body.style.msUserSelect = "auto";
  body.style.oUserSelect = "auto";
  body.style.userSelect = "auto";

});
