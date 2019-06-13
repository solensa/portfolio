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
        if ($(this).attr('id') == "lightning368" ){
          $(this).find('img').attr("src", "assets/images/ln3683.gif");
        }
        else if ($(this).attr('id') == "athlete" ){
          $(this).find('img').attr("src", "assets/images/meSailing.gif");
        }
        else if ($(this).attr('id') == "analysingtreemorphology" ){
          $(this).find('img').attr("src", "assets/images/trees.gif");
        }
        else if ($(this).attr('id') == "machinelearningchatbot" ){
          $(this).find('img').attr("src", "assets/images/ga.gif");
        }
        else if ($(this).attr('id') == "illustrations" ){
          $(this).find('img').attr("src", "assets/images/illust.gif");
        }
        else if ($(this).attr('id') == "naughtycoinanddice" ){
          $(this).find('img').attr("src", "assets/images/naughtyCoinDice.gif");
        } else if ($(this).attr('id') == "salternssailingacademy" ){
          $(this).find('img').attr("src", "assets/images/salterns2.gif");
        } else if ($(this).attr('id') == "spiritofscrum" ){
          $(this).find('img').attr("src", "assets/images/spiritofscrum.gif");
        }
      },
      function() {
        if ($(this).attr('id') == "lightning368" ){
          $(this).find('img').attr("src", "assets/images/ln368.png");
        }
        else if ($(this).attr('id') == "athlete" ){
          $(this).find('img').attr("src", "assets/images/meSailing.png");
        }
        else if ($(this).attr('id') == "analysingtreemorphology" ){
          $(this).find('img').attr("src", "assets/images/trees.png");
        }
        else if ($(this).attr('id') == "machinelearningchatbot" ){
          $(this).find('img').attr("src", "assets/images/ga.png");
        }
        else if ($(this).attr('id') == "illustrations" ){
          $(this).find('img').attr("src", "assets/images/illust.png");
        }
        else if ($(this).attr('id') == "naughtycoinanddice" ){
          $(this).find('img').attr("src", "assets/images/naughtyCoinDice.png");
        } else if ($(this).attr('id') == "salternssailingacademy" ){
          $(this).find('img').attr("src", "assets/images/salterns.png");
        } else if ($(this).attr('id') == "spiritofscrum" ){
          $(this).find('img').attr("src", "assets/images/spiritofscrum.png");
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
});



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
  console.log('scroll');
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
    strings: ["<strong>Hello, I'm Robert Claridge.</strong>", "<strong>Hello, I'm Robert Claridge.</strong><div class='spacer0'></div>Welcome to my portfolio!", "<strong>Hello, I'm Robert Claridge.</strong><div class='spacer0'></div>I'm passionate about&nbsp;"],
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
        type2();
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
// Footer
// -----------------------------------------------------------------------------

function main(){
	var menu = $('#menu');
  var whiteTop = $('#whiteTop');
  var pfStatement = $('.pfStatement');
	$(document).scroll(function(){
    // subtract menu tops from one another to get the value below
		if ( $(this).scrollTop() >=130 ){
		    menu.removeClass('bottom').addClass('top')
        whiteTop.addClass('shadow')
		} else {
		    menu.removeClass('top').addClass('bottom')
        whiteTop.removeClass('shadow')
		}

    if ( $(this).scrollTop() >0 ){
		    whiteTop.removeClass('bottom').addClass('top')
		} else {
		    whiteTop.removeClass('top').addClass('bottom')
		}

    if ( $(this).scrollTop() >=25 ){
		    pfStatement.removeClass('bottom').addClass('top')
		} else {
		    pfStatement.removeClass('top').addClass('bottom')
		}
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
