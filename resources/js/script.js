$(document).ready(function() {
      
    $('.js--section--services').waypoint(function(direction){      
        if(direction=="down"){
                $('.nv1').addClass('sticky');                   
            }
        else{
            $('.nv1').removeClass('sticky');          
        }           
    },{
        offset:'30px;'                                /* showing navigation in                                                  different section of the web                                                    page */
    });
    
    
    
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
 
    
$('.js--wp-1').waypoint(function(direction)
    {                             
          $('.js--wp-1').addClass('animated rollIn');                                                          
    },{
        offset:'100%'  /* the location from the page where the animation should                   start */
});
    
});