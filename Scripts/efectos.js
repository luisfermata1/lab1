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
