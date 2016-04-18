Recipe Data Structure

localStorage.recipes is an array of objects fitting the following format:

{
	name:"Recipe Name"
   ,ingredients:["Array","Of","Ingredients"]
}


So we have recipes[n].name and recipes[n].ingredients

localStorage.setItem("recipes",JSON.stringify([
{
	name:"Spaghetti"
   ,ingredients:["Array","Of","Ingredients"]
},
{
	name:"Hamburger"
   ,ingredients:["Array","Of","Ingredients"]
},
{
	name:"Ice Cream"
   ,ingredients:["Array","Of","Ingredients"]
}]))