/* Please ❤ this if you like it! */


(function($) { "use strict";
 
 	//Parallax            
              
	function scrollBanner() {
	  $(document).on('scroll', function(){
      var scrollPos = $(this).scrollTop();
        $('.parallax-fade-top').css({
          'top' : (scrollPos/2)+'px',
          'opacity' : 1-(scrollPos/700)
        });
        $('.parallax-00').css({
          'top' : (scrollPos/-3.5)+'px'
        });
        $('.parallax-01').css({
          'top' : (scrollPos/-2.8)+'px'
        });
        $('.parallax-top-shadow').css({
          'top' : (scrollPos/-2)+'px'
        });
      });    
	  }
	scrollBanner();	              

	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }              
              
  
//Scroll back to top
              
$(document).ready(function() {	
		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').addClass('active-arrow');
			} else {
				jQuery('.scroll-to-top').removeClass('active-arrow');
			}
		});				
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
  
  		
		/* Hero Case study images */			
		
		$('.case-study-name:nth-child(1)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(1)').addClass("show");
			$('.case-study-name:nth-child(1)').addClass('active');
		})
		$('.case-study-name:nth-child(2)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(2)').addClass("show");
			$('.case-study-name:nth-child(2)').addClass('active');
		})
		$('.case-study-name:nth-child(3)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(3)').addClass("show");
			$('.case-study-name:nth-child(3)').addClass('active');
		})
		$('.case-study-name:nth-child(4)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(4)').addClass("show");
			$('.case-study-name:nth-child(4)').addClass('active');
		})
		$('.case-study-name:nth-child(1)').trigger('mouseenter')
  
  // Accordion functionality for About Me page
  $('.accordion-header').on('click', function() {
    const item = $(this).parent();
    item.toggleClass('active');
    const content = item.find('.accordion-content');
    if (item.hasClass('active')) {
      content.css('max-height', content[0].scrollHeight + 'px');
    } else {
      content.css('max-height', '0');
    }
  });

  });            
              
})(jQuery);

// Typing animation for the floating card title
const typingTextElement = document.getElementById('typing-text');
const textToType = "web developer";
let charIndex = 0;

function typeWriter() {
  if (charIndex < textToType.length) {
    typingTextElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100); // Adjust typing speed here (milliseconds)
  }
}

// Start the typing animation when the page loads
window.onload = function() {
  typeWriter();
};

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const headerNav = document.querySelector('.header-nav');

    if (hamburgerIcon && headerNav) {
        hamburgerIcon.addEventListener('click', function() {
            headerNav.classList.toggle('menu-open');
        });
    }

    // Optional: Close menu when a link is clicked (useful for single-page apps or navigating)
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    if (mobileMenuLinks) {
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (headerNav.classList.contains('menu-open')) {
                    headerNav.classList.remove('menu-open');
                }
            });
        });
    }
}); 

(function() {
  var originalTitle = document.title;
  var attentionTitle = '👋 Come back!';
  var timeoutId;

  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      document.title = attentionTitle;
      // Optionally, change favicon here
    } else {
      document.title = originalTitle;
      // Optionally, restore favicon here
    }
  });
})(); 

(function() {
  function isMobile() {
    return window.innerWidth < 900 || /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  function showMobileWarning() {
    if (isMobile()) {
      var overlay = document.createElement('div');
      overlay.id = 'mobile-warning-overlay';
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.background = 'rgba(255,255,255,0.98)';
      overlay.style.zIndex = 999999;
      overlay.style.display = 'flex';
      overlay.style.flexDirection = 'column';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      overlay.innerHTML = '<div style="text-align:center;"><i class="fas fa-desktop" style="font-size:4rem;color:#1a4f1a;"></i><h2 style="color:#1a4f1a;margin-top:20px;">Desktop Only</h2><p style="color:#1a4f1a;font-size:1.2rem;">This website is best viewed on a computer or laptop.<br>Please switch to a desktop device for the best experience.</p></div>';
      document.body.appendChild(overlay);
    } else {
      var overlay = document.getElementById('mobile-warning-overlay');
      if (overlay) overlay.remove();
    }
  }
  window.addEventListener('resize', showMobileWarning);
  document.addEventListener('DOMContentLoaded', showMobileWarning);
})(); 