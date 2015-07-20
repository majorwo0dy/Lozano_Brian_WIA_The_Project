$(document).ready(function(){

    $(".gallery_thumbnails a").click(function(e){

        //disable the links
        e.preventDefault();


        //create var to hold the links from the thumbnail
        var photo_fullsize =$(this).attr("href");
        var photo_caption = $(this).attr("title");

        //create our preview link
         var photo_preview =photo_fullsize.replace("_fullsize","_preview");

        //fade out preview area
        $(".gallery_preview").fadeOut(500,function(){
            //preload our clicked image
            $('.gallery_preload_area').html('<img src="'+photo_preview+'"/>');

            //once image is reploaded then we can use it

            $(".gallery_preload_area img").imgpreload(function(){

               //change the picture and link for the preview area
                $(".gallery_preview").html('<a class_"overlayLink" title="'+photo_caption+'" href="'+photo_fullsize+'" ' +
                    'style="background-image:url('+photo_preview+');"> </a>');


                //fade back in the preview window
                $(".gallery_preview").fadeIn(500);


            });





        });

    });





});