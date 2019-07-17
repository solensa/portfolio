// -----------------------------------------------------------------------------
// Search bar
// -----------------------------------------------------------------------------

$(document).foundation();
$(document).ready(function() {

  updatePfTitles();
  main();
  $(function() {

    $(".gifHover").hover(
      function() {
        if ($(this).attr('id') == "lightning368") {
          $(this).find('img').attr("src", "assets/images/ln3683.gif");
        } else if ($(this).attr('id') == "athlete") {
          $(this).find('img').attr("src", "assets/images/meSailing.gif");
        } else if ($(this).attr('id') == "analysingtreemorphology") {
          $(this).find('img').attr("src", "assets/images/trees.gif");
        } else if ($(this).attr('id') == "machinelearningchatbot") {
          $(this).find('img').attr("src", "assets/images/ga.gif");
        } else if ($(this).attr('id') == "illustrations") {
          $(this).find('img').attr("src", "assets/images/illust.gif");
        } else if ($(this).attr('id') == "naughtycoinanddice") {
          $(this).find('img').attr("src", "assets/images/naughtyCoinDice.gif");
        } else if ($(this).attr('id') == "salternssailingacademy") {
          $(this).find('img').attr("src", "assets/images/salterns2.gif");
        } else if ($(this).attr('id') == "spiritofscrum") {
          $(this).find('img').attr("src", "assets/images/spiritofscrum.gif");
        } else if ($(this).attr('id') == "masterplan") {
          $(this).find('img').attr("src", "assets/images/masterplan.gif");
        } else if ($(this).attr('id') == "feedme") {
          $(this).find('img').attr("src", "assets/images/feedme.gif");
        } else if ($(this).attr('id') == "sofa") {
          $(this).find('img').attr("src", "assets/images/sofa.gif");
        } else if ($(this).attr('id') == "orgtree") {
          $(this).find('img').attr("src", "assets/images/orgtree.gif");
        } else if ($(this).attr('id') == "acrolist") {
          $(this).find('img').attr("src", "assets/images/acrolist.gif");
        } else if ($(this).attr('id') == "passimal") {
          $(this).find('img').attr("src", "assets/images/passimal.gif");
        } else if ($(this).attr('id') == "learningstylequiz") {
          $(this).find('img').attr("src", "assets/images/shirts.gif");
        } else if ($(this).attr('id') == "evabuild") {
          $(this).find('img').attr("src", "assets/images/evabuild.gif");
        } else if ($(this).attr('id') == "atom") {
          $(this).find('img').attr("src", "assets/images/atom.gif");
        }
      },
      function() {
        if ($(this).attr('id') == "lightning368") {
          $(this).find('img').attr("src", "assets/images/ln368.png");
        } else if ($(this).attr('id') == "athlete") {
          $(this).find('img').attr("src", "assets/images/meSailing.png");
        } else if ($(this).attr('id') == "analysingtreemorphology") {
          $(this).find('img').attr("src", "assets/images/trees.png");
        } else if ($(this).attr('id') == "machinelearningchatbot") {
          $(this).find('img').attr("src", "assets/images/ga.png");
        } else if ($(this).attr('id') == "illustrations") {
          $(this).find('img').attr("src", "assets/images/illust.png");
        } else if ($(this).attr('id') == "naughtycoinanddice") {
          $(this).find('img').attr("src", "assets/images/naughtyCoinDice.png");
        } else if ($(this).attr('id') == "salternssailingacademy") {
          $(this).find('img').attr("src", "assets/images/salterns.png");
        } else if ($(this).attr('id') == "spiritofscrum") {
          $(this).find('img').attr("src", "assets/images/spiritofscrum.png");
        } else if ($(this).attr('id') == "masterplan") {
          $(this).find('img').attr("src", "assets/images/masterplan.png");
        } else if ($(this).attr('id') == "feedme") {
          $(this).find('img').attr("src", "assets/images/feedme.png");
        } else if ($(this).attr('id') == "sofa") {
          $(this).find('img').attr("src", "assets/images/sofa.png");
        } else if ($(this).attr('id') == "orgtree") {
          $(this).find('img').attr("src", "assets/images/orgtree.svg");
        } else if ($(this).attr('id') == "acrolist") {
          $(this).find('img').attr("src", "assets/images/acrolist.png");
        } else if ($(this).attr('id') == "passimal") {
          $(this).find('img').attr("src", "assets/images/passimal.png");
        } else if ($(this).attr('id') == "learningstylequiz") {
          $(this).find('img').attr("src", "assets/images/shirts.png");
        } else if ($(this).attr('id') == "evabuild") {
          $(this).find('img').attr("src", "assets/images/evabuild.png");
        } else if ($(this).attr('id') == "atom") {
          $(this).find('img').attr("src", "assets/images/atom.png");
        }
      }
    );
  });

  var input = document.querySelector('input[name=tags-outside]'),
    // init Tagify script on the above inputs
    tagify = new Tagify(input, {
      duplicates: false,
      addTagOnBlur: false,
      autocomplete: true,
      // tagTemplate: function(v) {
      //   return `<tag title='${v}'>
      //               <x title=''></x>
      //               <div>
      //                   <span class='tagify__tag-text'>${v}</span>
      //               </div>
      //           </tag>`;
      // },
      whitelist: uniqueProjectArray.sort(),
      dropdown: {
        enabled: 2,
      }
    });

  // add a class to Tagify's input element
  tagify.DOM.input.classList.add('tagify__input--outside');

  // re-place Tagify's input element outside of the  element (tagify.DOM.scope), just before it
  tagify.DOM.scope.parentNode.insertBefore(tagify.DOM.input, tagify.DOM.scope);


  tagify.on('invalid', function(e) {
    console.log(e.detail);
  });

  tagify.on('add', function(e) {
    // console.log(e.detail.data.value);
    tagsArr.push(e.detail.data.value.toLowerCase().replace(/\s+/g, ''));
    refineList();
    bounceContent();
  });

  tagify.on('remove', function(e) {
    // console.log(e.detail.data.value);
    bounceContent2();
    tagsArr.splice(tagsArr.indexOf(e.detail.data.value.toLowerCase().replace(/\s+/g, '')), 1);
    refineList();
  });

  // -----------------------------------------------------------------------------
  // Mobile action
  // -----------------------------------------------------------------------------

  var isMobile = false; //initiate as false
  // device detection
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
  }
  // isMobile = true;
  if (isMobile) {
    $(window).on('scroll', function() {
      debounce(calculateLayout(), 300);
    });
  }

});

function calculateLayout(){
  $(".pfProject").each(function() {
    var scrollTop = $(window).scrollTop(),
      elementOffset = $(this).offset().top,
      scrollHalf = ($(window).scrollTop() + ($(window).height() / 3)),
      distance = (elementOffset - scrollTop);

    if (elementOffset <= scrollHalf && elementOffset > scrollTop) {
      console.log($(this).attr('id') + "|| top: " + scrollTop + " || third: " + scrollHalf)
      $(this).trigger('mouseenter');
      $(this).addClass('hvr-grow-shadow-mobile-hover');
      if (!$(this).hasClass("gifHover")) {
        $('img', this).addClass('imageHover');
      }
    } else {
      $(this).removeClass('hvr-grow-shadow-mobile-hover');
      $('img', this).removeClass('imageHover');
      $(this).trigger('mouseout');
    }
  });
}
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
// -----------------------------------------------------------------------------
// Button action
// -----------------------------------------------------------------------------

function buttonClick(x) {
  $("#" + x).toggleClass("itsOn");
  var y = "";
  if (x == "wowBtn") {
    y = "waysofworking";
  } else if (x == "designBtn") {
    y = "design";
  } else if (x == "fbeBtn") {
    y = "frontbackend";
  } else if (x == "cloudBtn") {
    y = "clouddevops";
  } else if (x == "dataBtn") {
    y = "data";
  } else if (x == "soundBtn") {
    y = "sound";
  } else if (x == "civBtn") {
    y = "civilengineering";
  } else if (x == "mobileBtn") {
    y = "mobile";
  }

  if ($("#" + x).hasClass("itsOn")) {
    tagsArr.push(y);
    bounceContent();
  } else {
    tagsArr.splice(tagsArr.indexOf(y), 1);
    bounceContent2();
  }
  console.log(tagsArr);
  refineList();
}


// -----------------------------------------------------------------------------
// Refine List
// -----------------------------------------------------------------------------
var tagsArr = [];

function refineList() {
  console.log(tagsArr);
  if (tagsArr.length > 0) {
    for (i = 0; i < projectTagsArray.length; i++) {
      if (!tagsArr.some(val => projectTagsArray[i].indexOf(val) === -1)) {
        // console.log(projectTagsArray[i][0]);
        $("#" + projectTagsArray[i][0]).show();
      } else {
        $("#" + projectTagsArray[i][0]).hide();
      }
    }
  } else {
    $(".pfProject").show();
  }
  // console.log(tagsArr)
}

// -----------------------------------------------------------------------------
// Populate tile titles
// -----------------------------------------------------------------------------
var letterLimit = 9;
var htmlStr = "";

function updatePfTitles() {
  for (i = 0; i < projectTagsArray.length; i++) {
    for (j = 0; j < uniqueProjectArray.length; j++) {
      if (projectTagsArray[i][0] == uniqueProjectArray[j].toLowerCase().replace(/\s+/g, '')) {
        if (countWords(uniqueProjectArray[j]) == 1) {
          htmlStr = "<div class='pfTitle pfTitleAlone'>" + uniqueProjectArray[j].toUpperCase() + "</div>";
          $("#" + projectTagsArray[i][0]).find('.pfTitleInput').append(htmlStr);
        } else if (countWords(uniqueProjectArray[j]) == 2) {
          wordsArr = uniqueProjectArray[j].split(' ');
          // word length combined adds to more than the limit of the tile, get it onto a new line
          if ((wordsArr[0].length + wordsArr[1].length) <= letterLimit) {
            htmlStr = "<div class='pfTitle pfTitleAlone'>" + uniqueProjectArray[j].toUpperCase() + "</div>";
          } else {
            htmlStr = "<div class='pfTitle pfTitleStart'>" + wordsArr[0].toUpperCase() + "</div><div class='pfTitle pfTitleEnd'>" + wordsArr[1].toUpperCase() + "</div>";
          }
          $("#" + projectTagsArray[i][0]).find('.pfTitleInput').append(htmlStr);
        } else if (countWords(uniqueProjectArray[j]) == 3) {
          wordsArr = uniqueProjectArray[j].split(' ');
          // word length combined adds to more than the limit of the tile, get it onto a new line
          if ((wordsArr[0].length + wordsArr[1].length + wordsArr[2].length) <= letterLimit) {
            htmlStr = "<div class='pfTitle pfTitleAlone'>" + uniqueProjectArray[j].toUpperCase() + "</div>";
          } else if ((wordsArr[0].length + wordsArr[1].length) <= letterLimit) {
            htmlStr = "<div class='pfTitle pfTitleStart'>" + wordsArr[0].toUpperCase() + " " + wordsArr[1].toUpperCase() + "</div><div class='pfTitle pfTitleEnd'>" + wordsArr[2].toUpperCase() + "</div>";
          } else if ((wordsArr[1].length + wordsArr[2].length) <= letterLimit) {
            htmlStr = "<div class='pfTitle pfTitleStart'>" + wordsArr[0].toUpperCase() + "</div><div class='pfTitle pfTitleEnd'>" + wordsArr[1].toUpperCase() + " " + wordsArr[2].toUpperCase() + "</div>";
          } else {
            htmlStr = "<div class='pfTitle pfTitleStart'>" + wordsArr[0].toUpperCase() + "</div><div class='pfTitle pfTitleMid'>" + wordsArr[1].toUpperCase() + "</div><div class='pfTitle pfTitleEnd'>" + wordsArr[2].toUpperCase() + "</div>";
          }

          $("#" + projectTagsArray[i][0]).find('.pfTitleInput').append(htmlStr);
        } else if (countWords(uniqueProjectArray[j]) == 4) {
          wordsArr = uniqueProjectArray[j].split(' ');
          // word length combined adds to more than the limit of the tile, get it onto a new line
          htmlStr = "<div class='pfTitle pfTitleStart'>" + wordsArr[0].toUpperCase() + " " + wordsArr[1].toUpperCase() + "</div><div class='pfTitle pfTitleEnd'>" + wordsArr[2].toUpperCase() + " " + wordsArr[3].toUpperCase() + "</div>";

          $("#" + projectTagsArray[i][0]).find('.pfTitleInput').append(htmlStr);
        }
      }
    }
  }
}

function countWords(str) {
  return str.split(' ').length;
}


// -----------------------------------------------------------------------------
// Bounce content
// -----------------------------------------------------------------------------

function bounceContent() {
  var duration = 1;
  TweenMax.to($(".projectWindow"), duration / 4, {
    y: 50,
    ease: Power2.easeOut
  });
  TweenMax.to($(".projectWindow"), duration / 2, {
    y: 0,
    ease: Bounce.easeOut,
    delay: duration / 4
  });
};

function bounceContent2() {
  // var duration = 1;
  // TweenMax.to($(".projectWindow"), duration / 4, {
  //   y: 50,
  //   ease: Power2.easeOut
  // });
  // TweenMax.to($(".projectWindow"), duration / 2, {
  //   y: 0,
  //   ease: Bounce.easeOut,
  //   delay: duration / 4
  // });
};

// -----------------------------------------------------------------------------
// Text typing
// -----------------------------------------------------------------------------

var scrolledBeyond = false;
var hasTyped1 = 0;
var hasTyped2 = false;
var hasTyped3 = false;
var needsToTypeFwd = 0;
var hasRemovedType2 = false;
var somethingIsMoving = false;
var scroll = 0;
var typeSpeedText = 10;


$(window).bind('scroll', function() {

  scroll = scroll + 1;
  // console.log('scroll');
  if (!somethingIsMoving) {
    // console.log("scrolledBeyond: "+ scroll + " : " +scrolledBeyond);
    if ($(window).scrollTop() > 10 && !scrolledBeyond) {
      scrolledBeyond = true;
      somethingIsMoving = true;
      // console.log('scrolled beyond 200')
      if (hasTyped2) {
        console.log('---| make text retreat')
        typed2.start();
      }

    } else if ($(window).scrollTop() < 10 && scrolledBeyond) {
      scrolledBeyond = false;
      somethingIsMoving = true;
      // console.log('scrolled under 100')

      hasTyped2 = false;

      typed2.reset();
      console.log('---| reset and make text go fwd')
    }
  }
});


$(".wrapper").click(function() {
  $(".inner").toggle('innerclose');
});

var typed1, typed2, typed3;
$(function() {
  typed1 = new Typed('.typed1', {
    // strings: ["Hello, I'm Robert Claridge. ", "Hello, I'm Robert Claridge. <em>Welcome to my portfolio!</em>", "Hello, I'm Robert Claridge. <em>I love solving problems!</em>"],
    strings: ["Robert Claridge. One I made earlier."],
    typeSpeed: typeSpeedText,
    showCursor: false,
    backDelay: 1500,
    backSpeed: typeSpeedText,
    preStringTyped: function() {
      somethingIsMoving = true;
    },
    onStringTyped: function() {
      // console.log('onStringTyped1');
      hasTyped1 = hasTyped1 + 1;
      if (hasTyped1 == 3) {
        // type2();
      }
      // somethingIsMoving = false;
    },
  });
});

function type2() {
  // console.log("type2");
  somethingIsMoving = true;
  typed2 = new Typed('.typed2', {
    strings: ["exploring the intersection between different disciplines, industries and trends to identify opportunities, elegant solutions and real&nbsp;", ""],
    typeSpeed: typeSpeedText,
    // // time before typing starts
    // // startDelay: 0,
    // // backspacing speed
    // backSpeed: 0,
    // // time before backspacing
    // // backDelay: 500,
    //
    // fadeOut:true,
    // // loop
    // loop: true,
    // // false = infinite
    // // loopCount: 5,
    // // show cursor
    showCursor: false,
    // // character for cursor
    // // cursorChar: "|",
    // // attribute to type (null == text)
    // attr: null,
    // // either html or text
    // contentType: 'html'
    // // starting callback function before each string
    preStringTyped: function() {

    },
    // //callback for every typed string
    onStringTyped: function() {
      // console.log('onStringTyped2');
      hasTyped2 = true;
      type3();
      // somethingIsMoving = false;
    },
    // // callback for reset
    resetCallback: function() {
      console.log('resetCallback');
    },
  });
}

function type3() {
  // console.log("needsToTypeFwd:"+needsToTypeFwd);
  if (needsToTypeFwd == 0) {
    typed2.stop();
    console.log("stop after finishing typing fwd.")
    needsToTypeFwd = needsToTypeFwd + 1;
    somethingIsMoving = false;
  } else if (needsToTypeFwd == 2) {
    // typed2.stop();
    console.log("stop after finishing typing back")
    needsToTypeFwd = 0;
    somethingIsMoving = false;

  } else {
    console.log("noise?")
    needsToTypeFwd = needsToTypeFwd + 1;
  }
  // typed2.stop();

  if (!hasTyped3) {
    typed3 = new Typed('.typed3', {
      strings: ["innovation."],
      typeSpeed: typeSpeedText,
      showCursor: false,
      preStringTyped: function() {
        somethingIsMoving = true;
      },
      onStringTyped: function() {
        // console.log('onStringTyped3');
        hasTyped3 = true;
        somethingIsMoving = false;
      },
    });
  }
}

// -----------------------------------------------------------------------------
// top
// -----------------------------------------------------------------------------

function main() {
  var menu = $('#menu');
  var whiteTop = $('#whiteTop');
  var pfStatement = $('.pfStatement');
  var distFromTop = 0;
  var leftOrigin = pfStatement.position().left;
  var topOrigin = pfStatement.position().top;

  $(document).scroll(function() {
    // subtract menu tops from one another to get the value below
    if ($(this).scrollTop() >= 105) {
      menu.removeClass('bottom').addClass('top')
      whiteTop.addClass('shadow')
      $(".nav-placeholder").height(menu.outerHeight());
    } else {
      menu.removeClass('top').addClass('bottom')
      whiteTop.removeClass('shadow')
      $(".nav-placeholder").height(0);
    }

    if ($(this).scrollTop() > 0) {
      whiteTop.removeClass('bottom').addClass('top')
    } else {
      whiteTop.removeClass('top').addClass('bottom')
    }

    // if ( $(this).scrollTop() >=22 ){
    //     pfStatement.removeClass('bottom').addClass('top')
    // } else {
    //     pfStatement.removeClass('top').addClass('bottom')
    // }

    // distFromTop = leftOrigin - 10*$(this).scrollTop();
    distFromTop = topOrigin - 0.5 * $(this).scrollTop();
    pfStatement.css({
      "top": distFromTop
    });



  })
}


// -----------------------------------------------------------------------------
// Footer
// -----------------------------------------------------------------------------

$(window).bind("load", function() {
  var footer = $("footer");
  var pos = footer.position();
  var height = $(window).height();
  console.log(footer.position());
  height = height - pos.top;
  height = height - footer.height();
  if (height > 0) {
    footer.css({
      'margin-top': height + 'px'
    });
  }
});


// @media (max-width: 900px) {
//   .pfProject { min-width:100%; width:100%; max-width:100%; }
// }
