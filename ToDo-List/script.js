// // select element using get element by id


// console.log(typeof document.getElementById("heading"));


// // select element using quer selector


// const mainHeading = document.querySelector('#heading')
// console.log(mainHeading);
// console.log(mainHeading.textContent);


// // mainHeading.textContent = "Abe o Gaandu !!";
// console.log(mainHeading)

// const main = document.querySelector('.main')
// console.log(main);
// const item = document.querySelector('.items')
// console.log(item);



// // change the styles of elements



// const div = document.querySelector("div.main #heading");
// div.style.backgroundColor = 'blue';
// console.log(div);



// // get and set attributes




// const link = document.querySelector('a');
// console.log(link);
// console.log(link.getAttribute('href').slice(1))
// link.setAttribute("href","https://www.google.com")
// console.log(link);

// // get Multiple Elements using getElementsBy ClassName


// const navItems = document.getElementsByClassName('items');
// console.log(navItems);


// // loop
// for(let i = 0 ; i < navItems.length ; i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = 'green';
//     navItem.style.color = 'purple';
// }
// const atags = document.getElementsByTagName("a");
// for(let i = 0; i < atags.length ; i++){
//     const atag = atags[i];
//     atag.style.color = 'purple';
// }
// for(let atag of atags){
//     atag.style.backgroundColor = 'white';
// }
// // const container = document.querySelector('.container')
// // container.innerHTML = "<h1> Inner HTML Changed"
// // container.innerHTML += "<button class = \"btn\">buy more</button>"
// // console.log(container.innerHTML);


// // const rootNode = document.getRootNode();
// // console.log(rootNode);
// // const bodyRootNode = rootNode.childNodes[1];
// // console.log(bodyRootNode.childNodes);


// // const h1 = document.querySelector('h1');
// // const division = h1.parentNode.parentNode.parentNode;
// // console.log(division);
// // division.style.color = '#333';
// // division.style.backgroundColor = 'blue';

const header = document.querySelector('.header');
header.classList.add('bg-dark');
console.log(header);

// const todo = document.querySelector(".todo");
// to
// console.log("todo");
// let classItems = document.getElementsByClassName('items');
// console.log(classItems);
// for(let item of classItems){
//     item.style.backgroundColor = 'white'
//     item.style.fontWeight = 'bold';
//     item.style.color = 'green';

// }
// let tags = document.getElementsByTagName('a');
// for(let tag of tags){
//     tag.style.color = 'green';
//     tag.style.fontWeight = 'strong';
//     tag.style.fontSize = '20px';
// }
// const heading  = document.querySelector('.main-heading')
// heading.innerHTML = '<h1>innerHTML changed</h1>';
// console.log(heading.innerHTML)
// console.log(heading);

// root nodes
const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[1];
console.log(htmlElementNode.childNodes);
const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
console.log(textNode1);

//  add class List
const section2 = document.querySelector('.section-2');
console.log(section2.classList);
const ans = section2.classList.contains('form-1')
console.log(ans);

section2.classList.toggle('bg-dark');
section2.classList.toggle('bg-dark');
// const todoList = document.querySelector('.todo-list')
// console.log(todoList);
// console.log(todoList.innerHTML)
// todoList.innerHTML = '<li> New Todo </li>';
// todoList.innerHTML += '<li>teach Students </li>';


//  document.createElement ()
// const newTodoItem = document.createElement('li')
// console.log(newTodoItem);
// const newTodoItem = document.createElement('li');
// newTodoItem.textContent = 'teach new students';
// // append is use to create element inside ul
// todoList.append(newTodoItem);

// console.log(newTodoItem);

// before to insert item before ul
//  after to insert item after ul
// clone nodes
// const ul = document.querySelector('.todo-list')
// const li = document.createElement('li')
// li.textContent = 'new todo 2'
// ul.append(li);
// ul.prepend(li);

// static list vs live list

// intro to events

const btn = document.querySelector('.btn')
console.log(btn);
// const clickMe = () =>{
//     console.log('You Clicked Me !!!')
// }
btn.addEventListener("click",()=>{
    console.log('You clicked Me !!!')
    console.log('value of this')
    console.log(this);
});
// const body = document.body;
// body.addEventListener('keypress',(e)=>{
//     console.log(e.key);
// })

const form = document.querySelector('.form')
const formInput = document.querySelector('.form input[type = "text"]')

const todoList = document.querySelector('.todo-list')

form.addEventListener("submit",(e)=>{
    console.log("form submitted")
    e.preventDefault()
    const newTodoText = formInput.value;
    const newLi = document.createElement("li");
    const newLiinnerHTML = `    <span class="text">${newTodoText}</span>
    <div class="buttons">
        <button class="todo-btn done">DONE</button>
        <button class="todo-btn remove">REMOVE</button>
    </div>`
    newLi.innerHTML = newLiinnerHTML;
    formInput.value = "";
    todoList.append(newLi);

})
console.log(form);

todoList.addEventListener("click",(e)=>{
    // check if user clicked on button
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        console.log(liSpan.style.textDecoration = "line-through");
    
      }
   

        
})





