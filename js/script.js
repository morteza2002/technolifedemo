function updatePlaceholder() {
  
  var searchInput = document.getElementById('search-input');
  if (window.innerWidth <= 768) {
    searchInput.placeholder = 'جستجو...';
  } else {
    searchInput.placeholder = 'محصول، برند یا دسته مورد نظرتان را جستجو کنید';
  }
}

window.addEventListener('resize', updatePlaceholder);
window.addEventListener('load', updatePlaceholder);






$(document).ready(function () {
  $('#search-input').on('focus', function () {
    $('#search-results').slideDown();
  });

  $(document).on('click', function (event) {
    if (!$(event.target).closest('#search-input').length) {
      $('#search-results').slideUp();
    }
  });
});



$(document).ready(function () {
  $('[data-bs-toggle="popover"]').popover();
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


  // Initialize the carousel
  var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleControlsNoTouching'));

  // Handle previous button click
  document.getElementById('prevBtn').addEventListener('click', function() {
    myCarousel.prev();
  });

  // Handle next button click
  document.getElementById('nextBtn').addEventListener('click', function() {
    myCarousel.next();
  });

var persianNumbers = '۰۱۲۳۴۵۶۷۸۹';

var toPersianDigits = function (num) {
  return num.toString().split('').map(function (digit) {
    return persianNumbers[digit];
  }).join('');
};

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2034 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Convert the numbers to Persian digits
  var persianHours = toPersianDigits(hours);
  var persianMinutes = toPersianDigits(minutes);
  var persianSeconds = toPersianDigits(seconds);

  // Output the result in elements with id="demo"
  var output = persianHours + ":" + persianMinutes + ":" + persianSeconds ;

  for (var i = 0; i <= 30; i++) {
    var element = document.getElementById("demo" + i);
    if (element) {
      element.innerHTML = output;
    }
  }

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    for (var i = 0; i <= 9; i++) {
      var element = document.getElementById("demo" + i);
      if (element) {
        element.innerHTML = "EXPIRED";
      }
    }
  }
}, 1000);



document.addEventListener('DOMContentLoaded', function () {
  const hoverContainers = document.querySelectorAll('.btn-hover_part');

  hoverContainers.forEach(container => {
    const textElement = container.querySelector('p');

    container.addEventListener('mouseenter', function () {
      textElement.style.bottom = '0';
      container.style.backgroundColor = '#D7D7D7'; // تغییر رنگ پس‌زمینه
    });

    container.addEventListener('mouseleave', function () {
      textElement.style.bottom = '-100%';
      container.style.backgroundColor = ''; // بازگرداندن رنگ پیش‌فرض پس‌زمینه
    });
  });
});


function toggleContent() {
  var extraContent = document.getElementById("extraContent");
  var showMoreBtn = document.getElementById("showMoreBtn");

  if (extraContent.style.display === "none") {
    extraContent.style.display = "block";
    showMoreBtn.textContent = " بستن";
  } else {
    extraContent.style.display = "none";
    showMoreBtn.textContent = "نمایش بیشتر";
  }
}

// دکمه را بگیرید
var backToTopBtn = document.getElementById("backToTopBtn");

// وقتی که کاربر به پایین اسکرول می‌کند، تابع را اجرا کنید
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// وقتی که کاربر روی دکمه کلیک می‌کند، صفحه به بالا برگردد
backToTopBtn.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


document.addEventListener('DOMContentLoaded', function () {
  let mainButton = document.getElementById('dropdownMenuButton2');
  let mainMenu = mainButton.nextElementSibling;

  // Toggle main menu
  mainButton.addEventListener('click', function (e) {
    e.stopPropagation();
    mainMenu.classList.toggle('show');
    mainMenu.style.display = mainMenu.style.display === 'block' ? 'none' : 'block';
  });

  // Close the main menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!mainMenu.contains(e.target) && !mainButton.contains(e.target)) {
      mainMenu.classList.remove('show');
      mainMenu.style.display = 'none';
    }
  });

  // Toggle submenus
  document.querySelectorAll('.dropdown-submenu > .dropdown-item').forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.stopPropagation();
      let nextEl = this.nextElementSibling;
      if (nextEl && nextEl.classList.contains('dropdown-menu')) {
        e.preventDefault();
        
        // Close all open submenus except the one being toggled
        document.querySelectorAll('.dropdown-submenu-right.show').forEach(function (submenu) {
          if (submenu !== nextEl) {
            submenu.classList.remove('show');
            submenu.style.display = 'none';
          }
        });

        // Toggle the current submenu
        nextEl.style.display = nextEl.style.display === 'block' ? 'none' : 'block';
        nextEl.classList.toggle('show');
      }
    });
  });
});
