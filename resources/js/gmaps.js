    function initMap() {
        var knr = {lat: 18.4348833, lng: 79.15};
        var bndara={lat: 21.1183887, lng:79.2109029};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: knr
        });
        var knrmarker = new google.maps.Marker({
          position: knr,
          map: map,
          title:'karimnagar'
        });
        
         var bndaramarker = new google.maps.Marker({
          position: bndara,
          map: map,
          title:'Bhandara'
        });
            
var knrcontentstring='<div>'+
        '<p align="center"><img width="140" height="100" src="resources/companyimages/karimnagar.jpg"/></p>'+
        '<p align="center">Hno 2-10-1866,</p>'+
        '<p align="center">Bhagyanagar,</p>'+
        '<p align="center">Karimnagar,</p>'+
        '<p align="center">Telangana,</p>'+
        '<p align="center">505001.</p>'+     
        '</div>';
                
var bndracontentstring='<div>'+
        '<p align="center"><img width="140" height="100" src="resources/companyimages/bhandara.jpg"/></p>'+
        '<p align="center">Hno 2-10-1283,</p>'+
        '<p align="center">humayoun road,</p>'+
        '<p align="center">Bhandara,</p>'+
        '<p align="center">Maharashtra,</p>'+
        '<p align="center">505001.</p>'+     
        '</div>';

/* infowindows for seperate markers */
var knrinfowindow=new google.maps.InfoWindow({
            
       content:knrcontentstring 
        
    });
        
var bndarainfowindow=new google.maps.InfoWindow({
            
       content:bndracontentstring 

}); 
        
        /* listeners */
    
knrmarker.addListener('click', function(){

    bndarainfowindow.close();
    knrinfowindow.open(map,knrmarker);

    });
        
bndaramarker.addListener('click', function(){
        
        knrinfowindow.close();
        bndarainfowindow.open(map,bndaramarker);

    });
        
        
        /* adding listeners */
        
// google.maps.event.addListener(knrmarker, 'click', (function(marker, i) {
//        return function() 
//            {
//                map.panTo(marker.getPosition());
//                infowindow.setContent(markers[i][0]);
//                infowindow.open(map, marker);
//                opendiv();
//            }   
//        })(marker, i));
//    }
//        


//google.maps.event.addListener(knrmarker, 'click', function(){
//    
//    
//  //  $(".map-details").css('background-color','red');
//    
//    
//    
//}); //*1
        
//        $('.map-details').hide();
//        
//    function empty()
//        {           
//            $('#loc-img').empty();   
//            $('#loc-addr1').empty();
//            $('#loc-street').empty();
//            $('#loc-city').empty();
//            $('#loc-state').empty();
//            $('#loc-zip').empty();
//        }
//        
//  knrmarker.addListener('click', function(){
//        
//      empty();
//       $('.map-details').show();
//        //$(".map-details").css('background-color','red');
//            $('#loc-img').attr("src",'resources/companyimages/karimnagar.jpg');
//            $('#loc-addr1').append('Hno 2-10-1866');
//             $('#loc-street').append('Bhagyanagar');
//             $('#loc-city').append('Karimnagar');
//             $('#loc-state').append('Telangana');
//             $('#loc-zip').append('505001');
//            
//    });
//        
//  bndaramarker.addListener('click', function(){   
//         empty();
//       $('.map-details').show();
//        //$(".map-details").css('background-color','red');
//         $('#loc-img').attr("src",'resources/companyimages/bhandara.jpg');
//             $('#loc-addr1').append('Hno 2-10-1166');
//             $('#loc-street').append('humayoun road');
//             $('#loc-city').append('Bhandara');
//             $('#loc-state').append('Maharashtra');
//             $('#loc-zip').append('505001');
//            
//    });        
        
        
        
      }