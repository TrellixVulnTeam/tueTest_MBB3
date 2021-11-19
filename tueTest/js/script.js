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
  var buttonAdd =accord.parent().children(".discipline__themeAdd");
  console.log(accord.attr('class'));
  if ((accord.css('display') == 'none') && (accord.hasClass("mustVisible")) && (buttonAdd.css('display') == 'none') && (buttonAdd.hasClass("mustVisible"))) {
  	accord.css({'display':'grid'});
  	buttonAdd.css({'display':'block'});
  } else {
  	accord.css({'display':'none'});
  	buttonAdd.css({'display':'none'});
  }
  
});
// убирает у input disabled
$(document).on("click", ".discipline__change", function(e){
  var changeB = $(event.target);
  var input = changeB.parent().parent().children("input");
  input.removeAttr('disabled');
  changeB.removeClass("discipline__change")
  changeB.addClass("discipline__save")
  changeB.text('Сохр');
});
$(document).on("click", ".discipline__save", function(e){
  var changeB = $(event.target);
  var input = changeB.parent().parent().children("input");
  input.attr('disabled', 'disabled');
  changeB.addClass("discipline__change")
  changeB.removeClass("discipline__save")
  changeB.text('Изм');
});

// Добавление новой темы
$(document).on("click", ".discipline__themeAdd", function(e){
  var button = $(event.target);
  newTheme = $('<div class="discipline__chapter__theme invisibleTheme mustVisible">' +
                	'<input type="text"  placeholder="" name=""class="discipline__theme__name"></input>' +
                	'<input type="text"  placeholder="" name=""class="discipline__theme__lectures"></input>' +
                	'<input type="text"  placeholder="" name=""class="discipline__theme__practise"></input>' +
                	'<input type="text"  placeholder="" name=""class="discipline__theme__laboratory"></input>'  +
                	'<input type="text"  placeholder="" name=""class="discipline__theme__ksr"></input>' +
                	'<input type="text"  placeholder="" name=""class="discipline__theme__isw"></input>' +
                	'<input type="text"  placeholder="" name=""class="discipline__theme__allHours"></input>' + 
                	'<input type="text"  placeholder="" name=""class="discipline__theme__brs"></input>' +
                	'<div class="discipline__theme__buttonsOfChanges discipline__buttonsOfChanges">' +
						'<a href="#" class="discipline__save">Сохранить</a>' +
						'<a href="#" class="discipline__delet">удал</a>' +
					'</div>' +
                '</div>');
  button.before(newTheme);
  console.log(button.attr('class'));
});

//Удаление темы
$(document).on("click", ".discipline__delet", function(e){
  var button = $(event.target);
  button.parent().parent().remove();
  console.log(button.parent().parent().attr('class'));
});

