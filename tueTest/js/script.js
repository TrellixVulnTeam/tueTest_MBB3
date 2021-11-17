function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});

// window.addEventListener("load",function(){
//     if(sessionStorage.getItem("page")) document.getElementsByTagName("html")[0].innerHTML = localStorage.getItem("page");
//      // перезаписываем страницу при загрузке
// });


//Сворачивание и разворачивание темы
$(document).on("click", ".discipline__name", function(e){
  var accord = $(event.target).parent().children(".invisibleTheme");
  if ((accord.css('display') == 'none') && (accord.hasClass("mustVisible"))) {
  	accord.css({'display':'grid'});
  } else {
  	accord.css({'display':'none'});
  }
  
});
// убирает у input disabled
$(document).on("click", ".discipline__change", function(e){
  var changeB = $(event.target);
  var input = changeB.parent().parent().children("input");
  input.removeAttr('disabled');
  changeB.addClass("discipline__save")
  console.log(input);
});

$(document).on("click", ".discipline__save", function(e){
  var changeB = $(event.target);
  var input = changeB.parent().parent().children("input");
  input.attr('disabled', 'disabled');
  changeB.removeClass("discipline__save")
  console.log(input);
});