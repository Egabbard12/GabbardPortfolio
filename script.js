const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const dropDownLinks = document.querySelectorAll('.dropdown .dropbtn');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Toggle dropdowns on click for mobile view
dropDownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const dropdownContent = e.target.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});

function dropDownMenu(){
    var dropdown = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].classList.toggle("show");
    }
  };
