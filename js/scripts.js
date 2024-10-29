// como consejo que acabe en element para diferenciar con los elementos guardados en html

//tagName -> nombre de la etiqueta
//id -> el id
// classList -> array con las clases que tenga el elemento
//children -> hijos que tenga el elemento (si tiene)
//textContent -> El texto que tenga dentro de la etiqueta

//DOM TRAVERSING
// parentElement -> te coloca en el padre del elemento
//previousElementSibling -> te coloca el heramno anterior al elemento
//nextElementSibling -> te coloca en el hermano despues al elemento
//children -> hijos que tenga el elemento (si tiene)

const startPointElement = document.getElementById("start-point");

console.log(
  ` Soy un ${startPointElement.tagName} con el id ${startPointElement.id}. Mi padre es un ${startPointElement.parentElement.tagName} con la clase ${startPointElement.parentElement.classList[0]}. Mi hermano es un ${startPointElement.previousElementSibling.tagName} con la clase ${startPointElement.previousElementSibling.classList[1]}. Mi otro hermano es un ${startPointElement.previousElementSibling.previousElementSibling.tagName} con la clase ${startPointElement.previousElementSibling.previousElementSibling.classList[1]}`
);
