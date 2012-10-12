/* basic mega menu behaviour */

$(function() {
  
  function addMega(){
     $(this).find(".menudrop").stop().fadeTo(75, 1).show();
  }
  
  function removeMega() {
    $(this).find(".menudrop").stop().fadeTo(75, 0, function() {
        $(this).hide();
    });
  }
  
  var megaConfig = {
    interval: 100,
    sensitivity: 1.25,
    over: addMega,
    timeout: 500,
    out: removeMega 
  }

  $("li.drop").hoverIntent(megaConfig) ; 
});