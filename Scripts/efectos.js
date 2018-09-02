function cambiar_tema(){
    
    var color;

    if($(".top-nav").hasClass("green"))
        color = 1;
    
    if($(".top-nav").hasClass("light-blue"))
        color = 2;

    if($(".top-nav").hasClass("yellow"))
        color = 3;

    switch(color) {
        case 1:
            $(".cambio_tema").removeClass("green");
            $(".cambio_tema").addClass("light-blue");
            break;
        case 2:
            $(".cambio_tema").removeClass("light-blue");
            $(".cambio_tema").addClass("yellow");
            break;
        default:
            $(".cambio_tema").removeClass("yellow");
            $(".cambio_tema").addClass("green");
    }
}

function cambiar_color_letras(){
    
    var color;

    if($("p").first().hasClass("black-text"))
        color = 1;
    
    if($("p").first().hasClass("green-text"))
        color = 2;

    if($("p").first().hasClass("blue-text"))
        color = 3;

    if($("p").first().hasClass("yellow-text"))
        color = 4;

    switch(color) {
        case 1:
            $("p").removeClass("black-text");
            $("p").addClass("green-text");
            break;
        case 2:
            $("p").removeClass("green-text");
            $("p").addClass("blue-text");
            break;
        case 3:
            $("p").removeClass("blue-text");
            $("p").addClass("yellow-text");
            break;
        default:
            $("p").removeClass("yellow-text");
            $("p").addClass("black-text");
    }
}

function cambiar_font_size(){
    
    var color;

    if($("p").first().hasClass("text1"))
        color = 1;
    
    if($("p").first().hasClass("text2"))
        color = 2;

    if($("p").first().hasClass("text3"))
        color = 3;

    switch(color) {
        case 1:
            $("p").removeClass("text1t");
            $("p").addClass("text2");
            break;
        case 2:
            $("p").removeClass("text2");
            $("p").addClass("text3");
            break;
        default:
            $("p").removeClass("text3");
            $("p").addClass("text1");
    }
}

function switch_parallax(){
    
    var src1 = $('.parallax1').attr('src');
    var src2 = $('.parallax2').attr('src');

    $('.parallax1').attr('src',src2);
    $('.parallax2').attr('src',src1);
    
}

function add_shadow(){
    if($(".section").first().hasClass("z-depth-5"))
        $(".section").removeClass("z-depth-5");
    else
        $(".section").addClass("z-depth-5");
}


