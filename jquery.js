var PAGE_HOME = "about_duolingo";
var PAGE_LEGAL = "legal";
var PAGE_ABOUT_US = "about_us";
var current = PAGE_HOME;

//Using Session Storage from https://stackoverflow.com/a/23853418/4673960
// https://coderoad.ru/23851413/%D0%9A%D0%B0%D0%BA-%D1%81%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D1%82%D1%8C-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2%D0%BD%D0%B5%D1%81%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B2-DOM-javascript-jquery-%D0%BD%D0%B0-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B5 
// https://www.w3schools.com/html/html5_webstorage.asp
/* Check if session has some page to show stored*/
/*create var pageToShow, change current to pageToShow
if (typeof(Storage) !== "undefined" && sessionStorage.getItem('pageToShow')) {
  var pageToShow = sessionStorage.getItem('pageToShow');
  current = pageToShow;
}


$(document).ready(function() {

  //load PAGE_HOME (about_duolingo.html) if (current === PAGE_HOME) 
//on landing or when clicked navbar ‘Duolingo’,’About’,’Features’ 
  if (current === PAGE_HOME) {
    loadAboutNotes();
//load PAGE_LEGAL (legal.html) if (current === PAGE_LEGAL) 
  } else {
    if (current === PAGE_LEGAL) {
      loadLegal();
//load PAGE_ABOUT_US (about_us.html) if (current === PAGE_ABOUT_US) 
    } else if (current === PAGE_ABOUT_US) {
      loadAboutUS();
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
    }, 100); //works in all. thanks: JamoCA https://github.com/flesler/jquery.scrollTo/issues/164

  }


  var scroll = $(window).scrollTop()
  if (typeof(Storage) !== "undefined") {
    sessionStorage.setItem('scrollTop', scroll);
  }




  $("#policy_privacy").click(function() {
    scrollToTop();
    loadLegal();
  });

  $("#legal").click(function() {
    scrollToTop();
    loadLegal();
  });

  $("#about").click(function() {
    scrollToTop();
    loadAboutUs ();
  });



  $("#home").click(function() {
    scrollToAfterLoad("top");
  });

  $("#home_about").click(function() {
    scrollToAfterLoad("#about");
  });

  $("#landing_features").click(function() {
    scrollToAfterLoad("#features");
  });



  $("#community_nav").click(function() {
    scrollToElement("#community", -120);
  });


  $("#download_nav").click(function() {
    scrollToElement("#download", -120);
  });

});


function loadAboutNotes() {
  $("#content_placeholder").load("about_duolingo.html");
  //current = PAGE_HOME; not needed because already initialized to that value TODO
   if (typeof(Storage) !== "undefined") {
    sessionStorage.setItem('pageToShow', current);
  }
}

function loadLegal() {
  $("#content_placeholder").load("legal.html");
  current = PAGE_LEGAL;


  if (typeof(Storage) !== "undefined") {
    sessionStorage.setItem('pageToShow', current);
  }
}

function loadAboutUs () {
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
