$(document).ready(function{
	$("#slideRight-proxy").on("click",function(e){
        var currentActiveContent= $(".content-shown");
        var nextActiveContent= currentActiveContent.next;

        if(nextActiveContent.length==0){
            nextActiveContent= $(".porfolio-context").first();
        };

        currentActiveContent.removeClass('.content-shown').addClass('.content-hidden').css("z-index",-10);
        nextActiveContent.addClass('content-shown').removeClass('content-hidden').css("z-index", 20);
        $('.portfolio-context').not([currentActiveContent, nextActiveContent]).css('z-index', 1);
        
        e.preventDefault();
    });
};)