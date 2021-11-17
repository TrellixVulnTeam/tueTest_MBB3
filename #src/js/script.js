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

// Добавляем кнопки для функций после нажатия на "Редактировать"
function addChanges() {
	
	const invisible = document.querySelectorAll('.invisible');
	const buttonVisible = document.querySelectorAll('.mustVisible');
	const buttonInvisible = document.querySelectorAll('.mustInvisible');
	let nameChapter = document.querySelector('#name').textContent;
	let inputName = document.querySelector('.discipline__changeName');
	// Добавляем кнопки для редактирования
	invisible.forEach(invisible => {invisible.classList.add('visible')});
	invisible.forEach(invisible => {invisible.classList.remove('invisible')});
	
	// Убираем кнопку Добавления и Редактирования
	buttonVisible.forEach(buttonVisible => {buttonVisible.classList.add('mustInvisible')});
	buttonVisible.forEach(buttonVisible => {buttonVisible.classList.remove('mustVisible')});
	
	// Добавляем кнопку для сохранения
	buttonInvisible.forEach(buttonInvisible => {buttonInvisible.classList.add('mustVisible')});
	buttonInvisible.forEach(buttonInvisible => {buttonInvisible.classList.remove('mustInvisible')});

	// Добавление имени в строку изменения
	inputName.value = nameChapter;

	// Сохраняем DOM для перезагрузок
    //sessionStorage.setItem("page",document.getElementsByTagName("html")[0].innerHTML);

    
    

}
// Сохраняем изменения
function saveChanges() {
	
	const visible = document.querySelectorAll('.visible');
	const buttonVisible = document.querySelectorAll('.mustVisible');
	const buttonInvisible = document.querySelectorAll('.mustInvisible');
	let inputName = document.getElementById('changeName').value;
	let nameChapter = document.getElementById('name');
	// Скрываем кнопки редактирования
	visible.forEach(visible => {visible.classList.add('invisible')})
	visible.forEach(visible => {visible.classList.remove('visible')})

	// Убираем кнопку сохранения
	buttonVisible.forEach(buttonVisible => {buttonVisible.classList.add('mustInvisible')});
	buttonVisible.forEach(buttonVisible => {buttonVisible.classList.remove('mustVisible')});
	
	// Добавляем кнопку Добавления и Редактирования
	buttonInvisible.forEach(buttonInvisible => {buttonInvisible.classList.add('mustVisible')});
	buttonInvisible.forEach(buttonInvisible => {buttonInvisible.classList.remove('mustInvisible')});


	nameChapter.innerHTML = inputName;
	console.log(inputName);

}
//Сворачивание и разворачивание темы
$(document).on("click", ".discipline__name", function(e){
  var accord = $(event.target).parent().children(".invisibleTheme");
  if ((accord.css('display') == 'none') && (accord.hasClass("mustVisible"))) {
  	accord.css({'display':'grid'});
  } else {
  	accord.css({'display':'none'});
  }
  
});

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