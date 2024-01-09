
window.addEventListener('load', function() {
  const images = [
    'images/slider-02.jpg',
    'images/slider-01.jpg',
    'images/slider-03.jpg'
  ];

  var background = document.getElementById('background');
  var overlay = document.createElement('div');
  overlay.classList.add('overlay');

  background.appendChild(overlay);
  setInterval(function() {
    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = images[randomIndex];
    background.style.backgroundImage = 'url(' + randomImage + ')';
  }, 1000);
  
});



//event to change active link in navbar
document.addEventListener('DOMContentLoaded', function() {
  var btns = document.querySelectorAll('.btn-group .btn');

  for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function(e) {
        // e.preventDefault();
  
        var current = document.querySelector('.btn-group  button.active');
        current.classList.remove('active');
        this.classList.add('active');
      });
  }
});



////////////////////////////////////////////////////
window.addEventListener('load', function() {
  const images = [
    'images/slider-02.jpg',
    'images/slider-01.jpg',
    'images/slider-03.jpg'
  ];

  var background = document.getElementById('background');
  var overlay = document.createElement('div');
  overlay.classList.add('overlay');

  background.appendChild(overlay);

  // Function to change the background image
  function changeBackgroundImage() {
      var randomIndex = Math.floor(Math.random() * images.length);
      var randomImage = images[randomIndex];
      background.style.backgroundImage = 'url(' + randomImage + ')';
  }

  // Initial image change
  changeBackgroundImage();

   // Set interval to change the background image every 6 seconds (6000 milliseconds)
   setInterval(function() {
    changeBackgroundImage();
}, 6000);
  // Slider click event handling
  var slider = document.querySelector('.slider'); // Assuming the slider has a class 'slider'
  slider.addEventListener('click', function() {
      changeBackgroundImage();
  });

  // You can add other slider-related functionalities or adjustments here.
});

// this function  to change items when click the button (all, drink , lunch, dinner)
document.addEventListener("DOMContentLoaded", function () {
  const allButtons = document.querySelectorAll(".btn");
  const allItems = document.querySelectorAll(".item");

  allButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = button.id.replace("btn-", "");

      allItems.forEach((item) => {
        if (category === "all" || item.classList.contains(category)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });

      // Toggle active class on buttons
      allButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");
    });
  });
});

// /////////////////////////#############################
//function to scroll up 
document.addEventListener("DOMContentLoaded", function() {
  let backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function() {
    if (this.window.pageYOffset > 300) { // Adjust the value to show the button after scrolling down a certain amount
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// ///////////////////*************************** */
// slider in section customer reviews
let slideIndex = 1;
const slides = document.getElementsByClassName("customer-info");
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}







// /////////////////////////////////////////////////////
// Function to toggle the dropdown visibility
function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
  } else {
      dropdown.style.display = "block";
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.style.display === "block") {
              openDropdown.style.display = "none";
          }
      }
  }
}



//////////////contact page//////////////////// */

//select element
document.getElementById('person').addEventListener('change', function() {
  if (this.value !== '') {
    this.classList.remove('placeholder');
  } else {
    this.classList.add('placeholder');
  }
});


// //////////////////////
