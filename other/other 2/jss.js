// const title= document.getElementById("title");
// document.getElementById("btn").addEventListener("click", function(){
//     title.textContent= "agherdach";
//     title.style.color ="blue";
//     alert("kjgkjgjkh");
// });

// document.getElementById("btn").addEventListener("dblclick", function(){
//     title.textContent= "chadi";
//     title.style.color = "red"
// })
// let num=3;
// function myfunction(){
//     const item =document.createElement("p"); 
//     item.textContent = "item" + num;
//     document.getElementById("liste").appendChild(item);
// num++;
// }

const btn = document.getElementById("btn");




const ipt = document.getElementById("input");



document.getElementById("btn").addEventListener("click", function() {
    
    document.getElementById("display").textContent = ":ikhiu " + ipt.value;
})