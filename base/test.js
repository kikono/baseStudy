// alert('today is a new begin');
// document.write('12岁ad想写代码')
// console.log('nice to meet u')



let a = "I'm jinzhi";
let b = "I\'m \"OK\"";
// document.write(a);
// document.write('<br/>');
// document.write(b);

let name = 'jin zhi';
let age = 22;
let comment1 = '你好, ${name}, 你今年${age}岁了!';
let comment2 = '你好' +name+ '你今年' +age+ '了';
// document.write(comment1);
// alert(comment2);


let apple = 'tomorrow is another day';
let pear = 'TRY YOU BEST TO DO ANYTHING';
document.write(apple.toUpperCase());
document.write('<br/>');
document.write(pear.toLowerCase());

let fruit = ['apple','banana','pear','orange','cheey','grape'];
let week = ['Monday','Thuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
let nums = [1,2,3,4,5,6,7,8]; 
for(let singl in fruit){
	// console.log(singl);
}

for(let weekday of week){
	// console.log(weekday);
}

for(let num of nums){
	num = num +2;
	// console.log(num);
}

var car = {
	name:'auto',
	site:4,
	'12':18
}

// console.log(car);
// console.log(car.name);
// console.log(car.site);
// console.log(car.12);

let m = new Map([['name','jinhzi'],['fruit','apple'],['week','sunday']]);
m.set('color','pink');
let s = new Set([1,2,3]);
s.add(44);
s.delete(2);

// console.log(m.get('name'));
// console.log(m);
// console.log('*************************');
// console.log(s);


//函数定义

	function sayHello(name){
		console.log('hello '+ name +' you are beautiful');
		console.log(arguments.length);
	}

	var sayHi = function(age){
		console.log('hi,king you are '+ age + ' years old');
	};


	sayHello('云梦');
	sayHi(22);
	//函数调用时实参的数量大于形参的数量或者小于都可以正常执行
	//多的时候
	// sayHello('云梦','小志');

	//不传的时候
	// sayHello();


//高阶函数	一个函数可以接受另一个函数作为参数，那么这个函数就叫高阶函数
	
	function count(a,b,f){
		console.log(f(a)+f(b));
	}

	count(-9,8,Math.abs);


	//map
	var name3 = ['jinzhi','KING','KiKo'];
	var name3Result = name3.map(function(name3){
		var haha = name3.toLowerCase();
		var result;
		for(var i=0;i<haha.length;i++){
			result = haha[0].toUpperCase() + haha.substring(1, haha.length);
		}
		return result
	})
	console.log(name3Result);


	//reduce 
	var reduceArr = [1,2,3,4];
	var reduceResult = reduceArr.reduce(freduce);
	function freduce(a,b){
		return a*b
	}

	console.log(reduceResult);


	//filter
	var num3 = [1,2,5,7,8,22];
	var filterResult = num3.filter(function(num3){
		// if(num3%2 == 0){
		// 	return num3;
		// }
		return num3%2 == 0;
	})
	console.log(filterResult);


	//sort
	//Array.sort()是按照AscII码去排序的，所以基本上没什么用
	var num4 = [20,1,34,8,15];
	var resultSort1 = num4.sort();
	var resultSort2 = num4.sort(function(a,b){
		if(a>b){
			return 1;
		}else if(a==b){
			return 0;
		}else{
			return -1;
		}
	})
	console.log(resultSort1);
	console.log(resultSort2);



//箭头函数
	//一个参数
	a => {
		return a*a
	}

	//多余一个参数
	(a,b,c) =>{
		return a+b+c;
	}

	//无参数
	()=>{
		return 200
	}

	//返回值是对象的时候由于对象的'{}' 和函数体的 '{}' 冲突，所以需要修改格式
	()=>({
		name:'jinzhi',
		age:23
	})

	//箭头函数对 this 域的作用



//Date()有关的总结
	var today = new Date();		//获取当前的时间
	console.log(today);
	// today.getTime()				//获取当前时间的时间戳
	// today.getFullYear();
	// today.getMonth();
	// today.getDate();			//获得 号数
	// today.getHours();
	// today.getMinutes();
	// today.getSeconds();

	// today.getDay()	;		//获得星期几

	var time2 = new Date(2014,2,13,20,20,34);
	console.log(time2);

	//时区
	var d = new Date();
	d.toLocaleString();			//本地时区
	d.toUTCString();			//UTC时区   比本地慢 8个小时



//JSON
	//序列化：
	var peo = {name:'jinzhi',age:12,class:'gis1'};
	var school = {"name":"juanqiao","peos":23,"clssmate":"jinzhi"};
	var peoj = JSON.stringify(peo);
	var schoolj = JSON.parse(peoj);
	// 反序列化：
	// JSON.parser();
	
	console.log(peoj);
	console.log(schoolj);