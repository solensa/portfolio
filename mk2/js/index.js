// -----------------------------------------------------------------------------
// Search bar
// -----------------------------------------------------------------------------

var jobTags = ["Account Executive", "Application Developer", "Account Manager", "Architect", "Account Representative", "Art Director", "Accountant", "Assembler", "Accounting Assistant", "Assistant", "Accounting Clerk", "Assistant Controller", "Accounting Manager", "Assistant Editor", "Accounts Payable Clerk", "Assistant Manager", "Accounts Payable Specialist", "Assistant Project Manager", "Accounts Receivable Clerk", "TextWrangler", "Tumblr", "Typekit", "Webflow", "WP Migrate DB Pro", "Zeplin"];

$(document).foundation();
$(document).ready(function() {

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
      whitelist: jobTags,
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

});

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
    if ($(window).scrollTop() > 100 && !scrolledBeyond) {
      scrolledBeyond = true;
      somethingIsMoving = true;
      // console.log('scrolled beyond 200')
      if (hasTyped2) {
        console.log('---| make text retreat')
        typed2.start();
      }

    } else if ($(window).scrollTop() < 100 && scrolledBeyond) {
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
    strings: ["Hello, I'm Rob Claridge.", "Hello, I'm Rob Claridge.<br>Nice to meet you!", "Hello, I'm Rob Claridge.<br>I'm passionate about&nbsp;"],
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
