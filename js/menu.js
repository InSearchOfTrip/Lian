$(document).ready(function () {
    $("#burger-menu-icon").click(function () {
        $('.burger-menu-wrapper').css({
            "display":"block"
        })
    });
    $(".burger-close").click(function () {
        $('.burger-menu-wrapper').css({
            "display":"none"
        })

    })
    $(document).keyup(function(e) {
        if (e.keyCode === 27) { //esc
            $('.burger-menu-wrapper').css({
                "display":"none"
            })
        }
    });

});