/*let name="Ranj";
let girl={
	name:'Ranj',
	age:42

};
let items=['these','are','some','of','my','favourite'];
items[6]='things';
console.log(items);*/
var a=function(){

	console.log("hello world");
}
a();
setTimeout(function(){console.log('inside setTimeout');},3000);
var cons=new Function("a","b","console.log('inside constr');return a+b;");
console.log(cons(4,5));