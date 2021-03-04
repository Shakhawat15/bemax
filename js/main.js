$(document).ready(function(){

// Menu:
jQuery('#mobile-menu').meanmenu({
  meanScreenWidth: "767",
  meanMenuContainer: '.menu-place',
  meanMenuOpen: "<span></span><span></span><span></span>"
});


// Slider Section:
  $('.slider-active').owlCarousel({
    loop:true,
    nav:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  })

// Project Section:
  $('.project-active').owlCarousel({
    loop:true,
    nav:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      768:{
        items:3
      },
      992:{
        items:4
      },
      1000:{
        items:4
      }
    }
  })

// Video Popup:
  $('.video-popup').magnificPopup({
  type: 'iframe'
  // other options
  });

  // Blog Section:
    $('.blog-active').owlCarousel({
      loop:true,
      nav:true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        1000:{
          items:1
        }
      }
    })

    // Testimonial Section:
      $('.testimonial-active').owlCarousel({
        loop:true,
        nav:true,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:1
          },
          1000:{
            items:1
          }
        }
      })

      // Brand Section:
        $('.brand-active').owlCarousel({
          loop:true,
          nav:true,
          responsive:{
            0:{
              items:2
            },
            600:{
              items:3
            },
            992:{
              items:5
            },
            1200:{
              items:6
            }
          }
        })


})
