var PAGE_HOME = "about_duolingo";
var PAGE_LEGAL = "legal";
var PAGE_ABOUT_US = "about_us";

var current = PAGE_HOME;

//Using Session Storage from https://stackoverflow.com/a/23853418/4673960
// https://coderoad.ru/23851413/%D0%9A%D0%B0%D0%BA-%D1%81%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D1%82%D1%8C-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2%D0%BD%D0%B5%D1%81%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2-DOM-javascript-jquery-%D0%BD%D0%B0-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B5 
// https://www.w3schools.com/html/html5_webstorage.asp
/* Check if session has some page to show stored*/
/*create var pageToShow, change current to pageToShow*/
if (typeof(Storage) !== "undefined" && sessionStorage.getItem('pageToShow')) {
  var pageToShow = sessionStorage.getItem('pageToShow');
  current = pageToShow;
}

$(document).ready(function() {

//load PAGE_HOME (about_duolingo.html) if (current === PAGE_HOME) 
//on landing or when clicked navbar ‘Duolingo’,’About’,’Features’ 
  if (current === PAGE_HOME) {
    loadAboutDuolingo();
//load PAGE_LEGAL (legal.html) if (current === PAGE_LEGAL) 
 } else {
    if (current === PAGE_LEGAL) {
      loadLegal();
//load PAGE_ABOUT_US (about_us.html) if (current === PAGE_ABOUT_US) 
    } else if (current === PAGE_ABOUT_US) {
      loadAboutUs();
    }
  }
  
 //function to load community.html into index.html div id=community_placeholder
  $("#community_placeholder").load("community.html");
//function to load download.html into index.html div id= download_placeholder
  $("#download_placeholder").load("download.html");
  
// Take window to same scroll position on reload
// https://stackoverflow.com/questions/36084881/take-window-to-same-scroll-position-on-reload/36085018
if (typeof(Storage) !== "undefined" && sessionStorage.getItem('scrollTop')) {
    var scrollpos = sessionStorage.getItem('scrollTop');
        window.setTimeout(function() {
      // console.log("afTimeOut " + scrollpos);
      $(window).scrollTop(scrollpos);
    }, 100); //1s timout for scroll
  }

/* if localStorage and sessionStorage support place window on top*/
  var scroll = $(window).scrollTop()
  if (typeof(Storage) !== "undefined") {
    sessionStorage.setItem('scrollTop', scroll);
  }
  
//function execute scrollToTop(); loadLegal (); - to load legal.html into index.html and place window on top on click on element w/id="policy_privacy"
  $("#policy_privacy").click(function() {
    scrollToTop();
    loadLegal();
  });
//function execute scrollToTop(); loadLegal (); -to load legal.html into index.html and place window on top on click on element w/id="legal"
//TODO seperate privacy policy and legal into distinct .html
  $("#legal").click(function() {
    scrollToTop();
    loadLegal();
  });
//function execute scrollToTop(); loadAboutUs (); - to load about_us.html into index.html and place window on top on click on element w/id="about"
  $("#about").click(function() {
    scrollToTop();
    loadAboutUs ();
  });

//function to place window on top on click on element w/id="home"
  $("#home").click(function() {
    scrollToAfterLoad("top");
  });
//function to place window on element w/id="about" on click on element w/id="home"
  $("#home_about").click(function() {
    scrollToAfterLoad("#about");
  });
//function to place window on element w/id="features" on click on element w/id="landing_features"
  $("#landing_features").click(function() {
    scrollToAfterLoad("#features");
  });
//function to place window on element w/id="community" -120px on click on element w/id="community_nav"
  $("#community_nav").click(function() {
    scrollToElement("#community", -120);
  });
//function to place window on element w/id="download" -120px on click on element w/id="download_nav"

  $("#download_nav").click(function() {
    scrollToElement("#download", -120);
  });
});

//function to load about_duolingo.html into div id="content_placeholder" into index.html and
//if localStorage and sessionStorage supported set pageToShow as current (about_duolingo)
function loadAboutDuolingo() {
  $("#content_placeholder").load("about_duolingo.html");
   if (typeof(Storage) !== "undefined") {
    sessionStorage.setItem('pageToShow', current);
  }
}
//function to load legal.html into div id="content_placeholder" into index.html and
//if localStorage and sessionStorage supported set pageToShow as current (legal)
function loadLegal() {
  $("#content_placeholder").load("legal.html");
  current = PAGE_LEGAL;
  if (typeof(Storage) !== "undefined") {
    sessionStorage.setItem('pageToShow', current);
  }
}
//function to load bout_us.html into div id="content_placeholder" into index.html and
//if localStorage and sessionStorage supported set pageToShow as current (about_us)
function loadAboutUs() {
  $("#content_placeholder").load("about_us.html");
  current = PAGE_ABOUT_US;
  if (typeof(Storage) !== "undefined") {
    sessionStorage.setItem('pageToShow', current);
  }
}

function scrollToTop() {
  $("html, body").animate({
    scrollTop: 0
  }, "slow");
}

function scrollToElement(where, offset) {
  $('html, body').animate({
    scrollTop: $(where).offset().top + offset
  }, 2000);
}

function scrollToAfterLoad(scrollToWhere) {
  if (current != PAGE_HOME) {
    $("#content_placeholder").load("about_duolingo.html", function() {
      if (scrollToWhere === "top") scrollToTop();
      else scrollToElement(scrollToWhere, -120);
    });
    
    current = PAGE_HOME;
    
  } else {
    if (scrollToWhere === "top") scrollToTop();
    else scrollToElement(scrollToWhere, -120);
  }
  
  if (typeof(Storage) !== "undefined") {
    sessionStorage.setItem('pageToShow', current);
  }
}
$(window).scroll(function() {
  var scroll = $(this).scrollTop()

  if (typeof(Storage) !== "undefined") {
    sessionStorage.setItem('scrollTop', scroll);
  }
});
