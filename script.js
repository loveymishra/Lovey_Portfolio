$(document).ready(function () {
    $(window).scroll(function () {
      //  sticky navbar on scroll script  //
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      //  scroll-up button show/hide script  //
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    //  slide-up script  //
  
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      //  removing smooth scroll on slide-up button click  //
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      //  Smooth scroll on Menu Items click  //
  
      $("html").css("scrollBehavior", "smooth");
    });
  
    //  Toggle Navbar  //
  
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    //  Typing Text Animation  //
  
    var typed = new Typed(".typing", {
      strings: [
        "Web Developer",
        "Android App Developer",
        "Python Developer",
        "AI/ML Enthusiast",
        "AI Model Developer"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed = new Typed(".typing-2", {
      strings: [
        "Web Developer",
        "Android App Developer",
        "Python Developer",
        "AI/ML Enthusiast",
        "AI Model Developer"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    //  Owl Carousel  //
  
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });

//   cv

var downloadCVButton = document.getElementById('downloadCVButton');

  // Add click event listener to the button
  downloadCVButton.addEventListener('click', function() {
    // Replace 'path/to/your/cv.pdf' with the actual URL of your CV PDF file
    var cvURL = 'Images/LOVEY_Resume.pdf';

    // Create an anchor element
    var downloadLink = document.createElement('a');
    // Set the href attribute to the CV URL
    downloadLink.href = cvURL;
    // Set the download attribute to specify the filename users will see
    downloadLink.download = 'Lovey_Mishra_CV.pdf';
    // Append the anchor element to the document body
    document.body.appendChild(downloadLink);
    // Simulate a click on the anchor element to trigger the download
    downloadLink.click();
    // Clean up by removing the anchor element from the document body
    document.body.removeChild(downloadLink);
  });
