$(document).ready(function () {
    $(".js-slogan").each(function () {
		var jSlogan = $(this);
		var pSet = $("p", jSlogan);

		pSet.filter(":gt(0)").addClass("right").show();

		var activeIndex = 0;

		var transitionDuration = parseInt(parseFloat(pSet.eq(0).find("strong").css("transition-duration")) * 1000, 10);
		var delay = 5000; // changing slides' delay

		var changeSlide = function () {
			var pCurrent = pSet.eq(activeIndex);
			if (activeIndex === pSet.length - 1) {
				activeIndex = 0;
			} else {
				activeIndex++;
			}
			var pNext = pSet.eq(activeIndex);

			pCurrent.addClass("left");
			pNext.removeClass("right");

			setTimeout(function () {
				pCurrent.removeClass("left").addClass("right");
			}, transitionDuration);

			changeSlideTimeout = setTimeout(changeSlide, delay);
		};

		var changeSlideTimeout = setTimeout(changeSlide, delay);
	});

// photo animation

    $(function() {
        var _intervalId;
        
        function fadeInLastImg()
        {
            var backImg = $('.pictures img:first');
            backImg.hide();
            backImg.remove();
            $('.pictures' ).append( backImg );
            backImg.fadeIn();
        }
            
        _intervalId = setInterval( function() {
            fadeInLastImg();
        }, 5000 );

    });

    $(function() {
        var date = new Date();

        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;

        var today = year + "-" + month + "-" + day;       
        $("#theDate").attr("value", today);
    });

    window.addEventListener("scroll",function() { 
       if(window.scrollY > 150) {
          $('#tinyNav').removeClass(".noShow").fadeIn();
       }
       else {
          $('#tinyNav').addClass(".noShow").fadeOut('fast');
       }
    },false);


// scroll animation

    $(".linking ul li a[href^='#'],a[href^='#project_top'],a[href^='#portfolio'],a[href^='#top'],a[href^='#team'],a[href^='#services']").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 300);

        // edit: Opera and IE requires the "html" elm. animated
    });
//carousel image and text slider    
    function moveRight(){
        var currentActiveContent= $(".content-shown");
        var nextActiveContent= currentActiveContent.next();

        if(nextActiveContent.length==0){
            nextActiveContent= $(".slider_content").first();
        };

        currentActiveContent.fadeOut(1000).removeClass('content-shown').addClass('content-hidden', function(){currentActiveContent.css('display', "none")
        });
        nextActiveContent.addClass('content-shown',function(){nextActiveContent.css('display', 'block')}).removeClass('content-hidden').delay(1000).fadeIn(1000);
    };

    
    function moveLeft(){
        var currentActiveContent= $(".content-shown");
        var nextActiveContent= currentActiveContent.prev();

        if(nextActiveContent.length==0){
            nextActiveContent= $(".slider_content").last();
        };

        currentActiveContent.fadeOut(1000).removeClass('content-shown').addClass('content-hidden', function(){currentActiveContent.css('display', "none")
        });
        nextActiveContent.addClass('content-shown',function(){nextActiveContent.css('display', 'block')}).removeClass('content-hidden').delay(1000).fadeIn(1000);
    };
            
        
    $("#slideRight-proxy").on("click", function(e){
        moveRight();
        e.preventDefault();
    });

    $("#slideLast-proxy").on("click", function(e){
        moveLeft();
        e.preventDefault();
    });
    // function autoSlide(e){
    //     setInterval(function () {
    //         slideRight();
    //     }, 3000);
    // });
});