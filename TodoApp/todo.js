// let todo=[];
// let req=prompt("plz enter your reqest");
// console.log(req);
// while(true){
//     if(req=="quit"){
//         console.log("quitting app");
//         break;
//     }
//     if(req=="list"){
//         console.log("--------------");
//         for(let i=0;i<todo.length;i++){
//             console.log(i,task[i]);
//         }
//         console.log("--------------");
//     }else if(req=="add"){
//         let task=prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }else if(req=="delete"){
//         let idx=prompt("plz enter the task index");
//         todo.slice(idx,1);
//         console.log("task deleted");

//     }
//     req=prompt("plz enter your reqest");
// }

// let student={
//     name:"Anuradha",
//     age:20,
//     marks:98,
//     city:"Delhi"};

// const post={
//     username:"im.Anuradha",
//     content:"this is first post",
//     likes:150,
//     repost:5,
//     tags:["im.asd","im.hfdd"]
// }

// const obj={
//     1:"a",
//     2:"b",
//     true:"c",
//     null:"d",
//     undefined:"e"
// };

// const info={
//     aman:{
//         grade:"A",
//         city:"pune"
//     },
//     puja:{
//         grade:"A+",
//         city:"mumbai"
//     },
//     karan:{
//         grade:"B",
//         city:"delhi"
//     }
// }

// const info=[
//     {
//         name:"Aman",
//         grade:"A",
//         city:"pune"
//     },
//     {
//         name:"puja",
//         grade:"A+",
//         city:"mumbai"
//     },
//     {
//         name:"karan",
//         grade:"B",
//         city:"delhi"
//     }

// ];

// generate a random number between 1 and 100

// const max=prompt("enter the maximum number");
// const random=Math.floor(Math.random()*max)+1;
// let guess = prompt("guess the number");
// while(true){
//     if(guess=="quit"){
//         console.log("user quit");
//         break;
//     }
//     if(guess==random){
//         console.log("you are right congrats",random);
//         break;
//     }else if(guess<random){
//         guess=prompt("hint:your guess wass too small. please try again");
//     }else{
//         guess=prompt("hint:your guess wass too large. please try again");
//     }
    // else{
    //    guess= prompt("your guess was wrong try again");
    // }
// }

// pratice que-1
// let diceroll=Math.floor(Math.random()*6)+1;
// console.log(diceroll);

// praice que-2
// const car = {
//     name: " Maruti Suzuki " ,
//     model : " Maruti Suzuki Dzire" ,
//     color : " white" ,
//     } ;
//     console.log( car.name) ;

// pratice que-3
// const Person = {
//     name: " Jane Doe" ,
//     age: 21,
//     city : " New Jersey " ,
//     } ;
//     Person.city = " New York " ;
//     Person. country = " United States " ;
//     console.log( Pers on) ;

let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";
});
let delbtns=document.querySelectorAll(".delete");
for(delbtn of delbtns)
{
    delbtn.addEventListener("click",function(){
       let par=this.parentElement;
       console.log(par);
       par.remove();
    });
}