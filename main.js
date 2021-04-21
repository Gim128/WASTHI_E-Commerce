(function ($){
    "use strict";

    // canvas meu activation
    $(".canvas_open").on("click",function(){
        $(".offcanvas_menu_wrapper, .off_canvas_overlay").addClass("active");
    })

    $(".canvas_close,.off_canvas_overlay").on("click",function(){
        $(".offcanvas_menu_wrapper, .off_canvars_overlay").removeClass("active");   27:19
    })

})(jQuery);