"use strict";
//<><><><><><><><><><><><><><><><><>ARRAYS<><><><><><><><><><><><><><><><><><><><><><>
//---------------------------Indexing------------------------------------------------
let fruits = ["Banana", "Mango", "Apple", "Orange", "Peach"];
console.log(fruits[2]);
//--------------------------Index-Replace------------------------------------------------
//array Indexing to replace items in the array..
let Vegetables = ["Spanich", "Potato", "Tomato", "Cucumber", "Lemon"];
Vegetables[1] = "carrot";
console.log(Vegetables);
//-----------------------------Pop()----------------------------------------------------
//to remove/delete at the end of the array..
let Numbers = [10, 25, 30, 55, 80];
Numbers.pop();
console.log(Numbers);
//-----------------------------Push()--------------------------------------------------
//to add items from the end of the array..
let foodItems = ["Pizza", "Biryani", "Burger"];
foodItems.push("Samosa", "Shawarma");
console.log(foodItems);
//-----------------------------Shift()-------------------------------------------------
//to delete from the start of the array..
let pakHeroes = ["Bilal Abbas", "Atif Aslam", "Fawad Khan"];
pakHeroes.shift();
console.log(pakHeroes);
//----------------------------Un-shift()-----------------------------------------------
//to add items from the start of the array..
let Heroes = ["Ironman", "Thor", "Batsman"];
Heroes.unshift("Hulk");
console.log(Heroes);
