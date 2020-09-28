var i = 0;
var start_value = 0;
var end_value = 3;
var q;
//document.getElementById("more").hidden = true;
function check() {
 // let o = document.getElementById("d");
  
  
  var query = document.getElementById("qn").value;
  q = query;
  if (query == "") {
    window.alert("enter keyword");
  }
  let url =
    "https://api.edamam.com/search?q=" +
    query +
    "&app_id=980128a6&app_key=7c13707892fb0523f22e6159b2257945&from=0&to=3";

  if (i >= 1) {
    var list = document.getElementById("d");
    j = 0;
    while (list.hasChildNodes()) {

      list.removeChild(list.childNodes[j]);
      
    }
   
      //window.location.reset();
  }
  /*
  if (i >= 1) {
    document.getElementById("d").hidden = true;
    i = 0;

  }
  document.getElementById("d").hidden = false;*/
  let rec;
  //console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      let d1 = data;
      console.log(d1.q);
      let ol = document.getElementById("d");
      for (var i = 0; i < 3; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(d1.hits[i].recipe.label));
        var img = document.createElement("img");
        img.setAttribute("id", "image");
        img.src = d1.hits[i].recipe.image;

        var ul = document.createElement("ul");
        var l11 = document.createElement("li");
        l11.appendChild(
          document.createTextNode(d1.hits[i].recipe.ingredientLines),
          
        );
        ul.appendChild(l11);
        li.appendChild(ul);
        li.appendChild(img);
        ol.appendChild(li);
        
      }
    });
  
  //document.getElementById("more").hidden = false;
  document.getElementById("qn").value = "";
  i++;
}

function check1(start_val, end_val) {
  // let o = document.getElementById("d");

  /*var query = document.getElementById("qn").value;
  if (query == "") {
    window.alert("enter keyword");
  }*/
  var query = q;
  let url =
    "https://api.edamam.com/search?q=" +
    query +
    "&app_id=980128a6&app_key=7c13707892fb0523f22e6159b2257945&from="+`${start_val}`+"&to="+`${end_val}`;

 /* if (i >= 1) {
    var list = document.getElementById("d");
    j = 0;
    while (list.hasChildNodes()) {
      list.removeChild(list.childNodes[j]);
    }

    //window.location.reset();
  }
  /*
  if (i >= 1) {
    document.getElementById("d").hidden = true;
    i = 0;

  }
  document.getElementById("d").hidden = false;*/
  let rec;
  //console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      let d1 = data;
      console.log(d1.q);
      let ol = document.getElementById("d");
      for (var i = 0; i < 3; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(d1.hits[i].recipe.label));
        var img = document.createElement("img");
        img.setAttribute("id", "image");
        img.src = d1.hits[i].recipe.image;

        var ul = document.createElement("ul");
        var l11 = document.createElement("li");
        l11.appendChild(
          document.createTextNode(d1.hits[i].recipe.ingredientLines)
        );
        ul.appendChild(l11);
        li.appendChild(ul);
        li.appendChild(img);
        ol.appendChild(li);
      }
    });
  
  document.getElementById("more").hidden = false;
  document.getElementById("qn").value = "";
  i++;
}


function queryIncrease() {
  
  end_value += 3;
  start_value = end_value-3;
  check1(start_value, end_value);
}




/*
// Smooth Scrolling for internal links
$('a[href^="#"]').on("click",function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $("html, body").stop().animate({
	        "scrollTop": $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

// Change background of nav bar on scroll
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll > window.innerHeight - 55) {
      $(".navbar").removeClass("transparent");
    } else {
      $(".navbar").addClass("transparent");
    }
});

// Activate scrollspy to highlight nav item when scrolled over
$("body").scrollspy({target: ".navbar"}) 

// Bind events to open and close portfolio popups
$(".thumbnail-overlay").on("click", openProject.bind( this ))
$(".close-window").on("click", closeWindow.bind(this))

function openProject( event ) {
  if ( $(event.target).next(".thumbnail-overlay") ) {
    var id =  "#" + $(event.target).parent().attr("page");
    $(id).fadeIn()
  } else {
    var id =  "#" + $(event.target).attr("page");
    $(id).fadeIn()
  }
}

function closeWindow( event ) {
  $(event.target).parents(".full-screen").fadeOut();
}



var bg = document.querySelector(".item-bg");
var items = document.querySelectorAll(".news__item");
var item = document.querySelector(".news__item");

function cLog(content) {
  console.log(content);
}

if ($(window).width() > 800) {
  $(document).on("mouseover", ".news__item", function (_event, _element) {
    var newsItem = document.querySelectorAll(".news__item");
    newsItem.forEach(function (element, index) {
      element.addEventListener("mouseover", function () {
        var x = this.getBoundingClientRect().left;
        var y = this.getBoundingClientRect().top;
        var width = this.getBoundingClientRect().width;
        var height = this.getBoundingClientRect().height;

        $(".item-bg").addClass("active");
        $(".news__item").removeClass("active");
        // $('.news__item').removeClass('active');

        bg.style.width = width + "px";
        bg.style.height = height + "px";
        bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
      });

      element.addEventListener("mouseleave", function () {
        $(".item-bg").removeClass("active");
        $(".news__item").removeClass("active");
      });
    });
  });
}

var swiper = new Swiper(".news-slider", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  keyboard: true,
  spaceBetween: 0,
  slidesPerView: "auto",
  speed: 300,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 3,
    slideShadows: false,
  },
  breakpoints: {
    480: {
      spaceBetween: 0,
      centeredSlides: true,
    },
  },
  simulateTouch: true,
  navigation: {
    nextEl: ".news-slider-next",
    prevEl: ".news-slider-prev",
  },
  pagination: {
    el: ".news-slider__pagination",
    clickable: true,
  },
  on: {
    init: function () {
      var activeItem = document.querySelector(".swiper-slide-active");

      var sliderItem = activeItem.querySelector(".news__item");

      $(".swiper-slide-active .news__item").addClass("active");

      var x = sliderItem.getBoundingClientRect().left;
      var y = sliderItem.getBoundingClientRect().top;
      var width = sliderItem.getBoundingClientRect().width;
      var height = sliderItem.getBoundingClientRect().height;

      $(".item-bg").addClass("active");

      bg.style.width = width + "px";
      bg.style.height = height + "px";
      bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
    },
  },
});

swiper.on("touchEnd", function () {
  $(".news__item").removeClass("active");
  $(".swiper-slide-active .news__item").addClass("active");
});

swiper.on("slideChange", function () {
  $(".news__item").removeClass("active");
});

swiper.on("slideChangeTransitionEnd", function () {
  $(".news__item").removeClass("active");
  var activeItem = document.querySelector(".swiper-slide-active");

  var sliderItem = activeItem.querySelector(".news__item");

  $(".swiper-slide-active .news__item").addClass("active");

  var x = sliderItem.getBoundingClientRect().left;
  var y = sliderItem.getBoundingClientRect().top;
  var width = sliderItem.getBoundingClientRect().width;
  var height = sliderItem.getBoundingClientRect().height;

  $(".item-bg").addClass("active");

  bg.style.width = width + "px";
  bg.style.height = height + "px";
  bg.style.transform = "translateX(" + x + "px ) translateY(" + y + "px)";
});
*/