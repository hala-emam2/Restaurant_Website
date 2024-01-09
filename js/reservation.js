////////////////////// Reservation page code js///////////////////////////
// this function to display error messaage if you don't write anything inside input////////////////////////
// const username = document.getElementById('username');
// const useremail = document.getElementById('useremail');
// const usernumber = document.getElementById('usernumber');

// username.addEventListener('blur', function() {
//     validateInput(this, 'username-error', 'Please enter your name');
// });

// useremail.addEventListener('blur', function() {
//     validateInput(this, 'useremail-error', 'Please enter your email');
// });

// usernumber.addEventListener('blur', function() {
//     validateInput(this, 'usernumber-error', 'Please enter your number');
// });

// function validateInput(input, errorId, errorMessage) {
//     const errorSpan = document.getElementById(errorId);
//     if (input.value === '') {
//         errorSpan.textContent = errorMessage;
//         errorSpan.style.display = 'block';
//     } else {
//         errorSpan.style.display = 'none';
//     }
// }












document.getElementById('booktable').addEventListener('click', function() {
    // Reset shake effect and clear previous error messages
    document.querySelectorAll('.form-group').forEach(function(element) {
      element.classList.remove('shake');
    });
    document.querySelectorAll('.error-message').forEach(function(element) {
      element.textContent = '';
    });
  
    // Validation
    let isValid = true;
    const bookingDate = document.getElementById('bookingDate').value.trim();
    const bookingTime = document.getElementById('bookingTime').value.trim();
    const numberOfPersons = document.getElementById('geust').value.trim();
    const username = document.getElementById('username').value.trim();
    const useremail = document.getElementById('useremail').value.trim();
    const usernumber = document.getElementById('usernumber').value.trim();
  
    if (bookingDate === '') {
      isValid = false;
      document.getElementById('bookingDate-error').textContent = 'Please select a date.';
      document.getElementById('bookingDate-error').style.display = 'block';
      document.getElementById('bookingDate').parentNode.classList.add('shake');
    }
    if (bookingTime === '') {
      isValid = false;
      document.getElementById('bookingTime-error').textContent = 'Please select a time.';
      document.getElementById('bookingTime-error').style.display = 'block';
      document.getElementById('bookingTime').parentNode.classList.add('shake');
    }
    if (numberOfPersons === '') {
      isValid = false;
      document.getElementById('geust-error').textContent = 'Please select the number of persons.';
      document.getElementById('geust-error').style.display = 'block';
      document.getElementById('geust').parentNode.classList.add('shake');
    }
    if (username === '') {
      isValid = false;
      document.getElementById('username-error').textContent = 'Please enter your name.';
      document.getElementById('username-error').style.display = 'block';
      document.getElementById('username').parentNode.classList.add('shake');
    }
    if (useremail === '') {
      isValid = false;
      document.getElementById('useremail-error').textContent = 'Please enter your email.';
      document.getElementById('useremail-error').style.display = 'block';
      document.getElementById('useremail').parentNode.classList.add('shake');
    }
    if (usernumber === '') {
      isValid = false;
      document.getElementById('usernumber-error').textContent = 'Please enter your number.';
      document.getElementById('usernumber-error').style.display = 'block';
      document.getElementById('usernumber').parentNode.classList.add('shake');
    }
  
    if (!isValid) {
      // Apply shake effect to respective sections with errors
      document.querySelector('.book-table').classList.add('shake');
      document.querySelector('.contact-details').classList.add('shake');
    } else {
      // If all fields are valid, proceed with booking (you can add your booking logic here)
      // For now, just display a success message
      alert('Table booked successfully!');
    }
  });
  