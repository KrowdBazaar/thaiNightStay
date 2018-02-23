var newDiv = document.createElement("div");
var chatClass = document.createAttribute("class");
var page_id = document.createAttribute("page_id");
var ref = document.createAttribute("ref");
var free_product_match = "฿0.00";

//FREE PRODUCT DISPLAY WITHOUT 
Ecwid.OnPageLoaded.add(function(page){
   if(page.type=='PRODUCT'){
      $('.ecwid-btn--addToBag').show();    
      if($('.ecwid-productBrowser-price').text() == free_product_match){
         console.log("Is Free Product");
         $('.ecwid-btn--addToBag').hide();    
         $('.ecwid-productBrowser-details-qtyPanel').hide();
         $('.ecwid-productBrowser-sku').hide();
         $('.ecwid-productBrowser-price').hide();
      }
   }
   console.log("Current page is of type: " + page.type);
   if(page.type=='SEARCH'){
      $( ".grid-product__price-amount" ).each(function( index ) {
        console.log( index + ": " + $( this ).text() );
         if($( this ).text() == free_product_match){
         console.log("Is Free Product on Search Page");
         $( this ).hide();
         $( this ).parent().next().text(' tTT-FREE  ➲').addClass('kBazaarViewBlock');
      }
      });
   }
});

chatClass.value = "fb-customerchat";
page_id.value = "358882694535989";
ref.value = "website_thainightstay";
newDiv.setAttributeNode(chatClass);
newDiv.setAttributeNode(page_id);
newDiv.setAttributeNode(ref);
$('body').append(newDiv);
window.fbMessengerPlugins = window.fbMessengerPlugins || {
init: function () {
  FB.init({
    appId            : '1678638095724206',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.10'
  });
}, callable: []
};
window.fbAsyncInit = window.fbAsyncInit || function () {
window.fbMessengerPlugins.callable.forEach(function (item) { item(); });
window.fbMessengerPlugins.init();
};
setTimeout(function () {
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
}, 0);
