function hammenu() {
  if (document.getElementById('horizontal-items').style.display === 'flex') { 
    document.getElementById('horizontal-items').style.display = 'none'; 
    // document.getElementById('ham-nav').style.top = 'unset';
  } 
    else { 
        document.getElementById('horizontal-items').style.display = 'flex'
       // document.getElementById('ham-nav').style.top = '1.1rem'
    }
}
if ($('.typed').length) {
        let typed_strings = $(".typed").data('typed-items');
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }
window.addEventListener("resize", function(event) {
  if (parseInt(document.body.clientWidth) > 991 && document.getElementById('horizontal-items').style.display == "none") {
     document.getElementById('horizontal-items').style.display = 'flex'
  }
})
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
window.addEventListener('load', function() {
  baguetteBox.run('.cover');
});

$('#scroll').mouseenter(function () {
    $('#abo').css({'transition':'color .5s', "color": "black"});
})
$('#scroll').mouseleave(function () {
      $('#abo').css({'transition':'color .5s', "color": "white"});

})
$('.cover > a').mouseenter(function () {
  $('> .lill', this).css('transition-duration','.5s');
  $('> .lill', this).css({ "font-size": "120%", "left": "50px"})
})
$('.cover > a').mouseleave(function () {
    $('> .lill', this).css('transition-duration','.5s');
  $('> .lill', this).css({    "font-size": "100%",
    "left": "62px",})

})
var hero = $('#hero').offset().top;
var about = $('#about').offset().top;
var skills = $('#skills').offset().top;
var resume = $('#resume').offset().top;
var scase = $('#scase').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
   if (scrollPos >= hero && scrollPos < about) {
    $('.menu-container').css('background-color', 'white');
  } else if (scrollPos >= about && scrollPos < skills) {
    $('.menu-container').css('background-color', '#45cafd');
  } else if (scrollPos >= skills && scrollPos < resume) {
    $('.menu-container').css('background-color', 'white');
  }else if (scrollPos >= resume && scrollPos < scase) {
    $('.menu-container').css('background-color', '#45cafd');
   } else if (scrollPos >= scase) {
    $('.menu-container').css('background-color', 'white');
   }
});
function toggleContent() {
  var content = document.querySelector('.long-content');
  var btn = document.getElementById('read-more-btn');

  if (content.style.maxHeight) {
    // If the content is expanded, collapse it
    content.style.maxHeight = null;
    btn.textContent = 'Show all';
  } else {
    // If the content is collapsed, expand it
    content.style.maxHeight = content.scrollHeight + 'px';
    btn.textContent = 'Show less';
  }
}

// Show the "Read more" button if content exceeds the initial height
var content = document.querySelector('.long-content');
var btn = document.getElementById('read-more-btn');
if (content.scrollHeight > content.clientHeight) {
  btn.style.display = 'block';
}