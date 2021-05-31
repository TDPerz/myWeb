function getoscroll(){
    if(window.scrollY > 0){
        $('#miNavBar').addClass('fixed-top');
    }
    else{
        $('#miNavBar').removeClass('fixed-top');
    }
}