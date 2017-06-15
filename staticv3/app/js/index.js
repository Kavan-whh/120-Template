// var obj=document.querySelectorAll("ul li");
// console.log(obj.length);
// obj.forEach(item=>{
//   console.log(item);
//   // console.log('2');
// })


var asyncFun = async function () {
  var set=setTimeout(function(){
      console.log(3);
  },1000)
  var f1 = await set;
  console.log(1);
  var f2 = await set;
  console.log(1);
  var f2 = await set;

};
asyncFun()
