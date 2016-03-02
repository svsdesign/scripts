/*
   
  rs-deploi-enquire.js

  Theme Name: RS
  Author: Simon van Stipriaan
  Author URI: htttp://svs.design

  handles the serving up of scripts for the entire website

*/

 



jQuery(document).ready(function($) {

var app = (function() {
  var app = {
    _setEnquireMsgs: function() {
      // Media queries breakpoints
      // MQ integers


      var screenBase = 1;
      var screenoutBase = 749;
     // var screenXXS = 240;
     // var screenoutXXS = 399;
     // var screenXS = 400;
     // var screenoutXS = 599;
     // var screenSM = 600;
     // var screenoutSM = 767;
      var screenMD = 750;
      var screenoutMD = 999; // extra large number so the last media querry doesn't fall outside any screensize as it increases from 750
     // var screenLG = 912;
     // var screenoutLG = 1279;
     // var screenXLG = 1280;
    //  var screenoutXLG = 9999;


      // Define media queries using MQ variables
      var mQueryBase = 'screen and (min-width:' + screenBase + 'px) and (max-width:' + screenoutBase + 'px)';     // query that acts as starting point: 1 and goes upto XXS: 749
    //  var mQueryXXS = 'screen and (min-width:' + screenXXS + 'px) and (max-width:' + screenoutXXS + 'px)';        // query that acts going into XXS:    240 and goes upto SM: 399
    //  var mQueryXS = 'screen and (min-width:' + screenXS + 'px) and (max-width:' + screenoutXS + 'px)';           // query that acts going into XS:     400 and goes upto SM: 599
    //  var mQuerySM = 'screen and (min-width:' + screenSM + 'px) and (max-width:' + screenoutSM + 'px)';           // query that acts going into SM:     600 and goes upto MD: 767
      var mQueryMD = 'screen and (min-width:' + screenMD + 'px) and (max-width:' + screenoutMD + 'px)';           // query that acts going into MD:     750 and goes upto LG: 999
     
   //     var mQueryuptoLG = 'screen and (max-width:' + screenoutMD + 'px)';                                        // query that acts upto LG:           upto LG: 911
   //   var mQueryLG = 'screen and (min-width:' + screenLG + 'px) and (max-width:' + screenoutXLG + 'px)';          // query that acts going into LG:     912 and goes upto XLG: 1279
   //     var mQueryfromLG = 'screen and (min-width:' + screenLG + 'px)';                                           // query that acts going from LG:     911 + 

    //  var mQueryXLG = 'screen and (min-width:' + screenXLG + 'px)';                                               // query that acts going into XLG:    1280 +



 

      // 1. START GLOBAL FUNCTIONS  


              
          function name() {
           
          }; // function name
  
           


      // 1. END GLOBAL FUNCTIONS  

      // 2. START QUERRIES BASED ONLY ON PAGE CLASSES: NO widths involved. 


                   $(function () // on document.ready()
                        {
                            if ($('body.home').length > 0) 
                            {
                      
                      //     console.log('query that runs body.home');

   
                    

                      /*
                    body.home
                    */

                            }
                        });

 
  




      // 2. END QUERRIES BASED ONLY ON PAGE CLASSES: NO widths invovled. 
     
  
 

      // 3. START QUERRIES BASED ON WIDTH ENQUIRIES



                  //
                  //
                  //
                  // 'screenBase' media query

                  enquire.register(mQueryBase, function() {
               
                  //
                  console.log('query that runs  + 1 and goes upto MD: 749 ');
                  //
                  //

            /*  RUN JS IF IS HOME   -   + 1 and goes upto MD: 749  */
               

                        $(function () // on document.ready()
                        {
                            if ($('body.home').length > 0)
                            {

                        
                  
                            //insert js HERE





                            /*
                            body.home
                            */

                            }
                        });

            /*  END OF:  RUN JS IF IS HOME -  + 1 and goes upto MD: 749 */
                 

                  //
                  //
                  //
             
                  });  // END screenBase query that acts as starting point:  + 1 and goes upto MD: 749 

                  //
                  //
                  //
              


                
                  //
                  //
                  //
                  // 'mQueryMD' media query - query that acts going into MD:     750 and goes upto : 9999

                  enquire.register(mQueryMD, function() {
               
                  //
                   console.log('query that runs 750 and goes upto : 9999 ');
                  //
                  //

            /*  RUN JS IF IS HOME   -  query that acts going into MD:     750 and goes upto : 9999 */
               

                        $(function () // on document.ready()
                        {
                            if ($('body.home').length > 0)
                            {

                 

                            //insert js HERE

                   

                            /*
                            body.home
                            */

                            }
                        });

            /*  END OF:  RUN JS IF IS HOME  - query that acts going into MD:     750 and goes upto : 9999 */
                 
         


                  //
                  //
                  //
             
                  });  // END 'mQueryMD' media query - query that acts going into MD:  750 and goes upto : 9999

                  //
                  //
                  //






      // 2. END QUERRIES BASED ON WIDTH ENQUIRIES



    },

    init: function() {
      this._setEnquireMsgs();
    }
  };

  return app;

}());


app.init();

}); ///  ENDS  read.QUERY

          

