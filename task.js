// var marks=window.prompt("Enter Your Marks")
// if(marks<=100 && marks>90){
//     document.write("A")
// }
// else if(marks<=90 && marks>80){
//     document.write("B")
// }
// else if(marks<=80 && marks>70){
//     document.write("C")
// }
// else if(marks<=70 && marks>60){
//     document.write("D")
// }
// else{
//     document.write("Fail")
// }


// var a=window.prompt("Enter a")
// var b=window.prompt("Enter b")
// var c=window.prompt("Enter c")
// var s=(parseInt(a)+parseInt(b)+parseInt(c))/2
// var area=Math.sqrt(s*(s-a)*(s-b)*(s-c))
// document.write(area)


var a=window.prompt("Enter a")
var b=window.prompt("Enter b")
var c=window.prompt("Enter c")
var det=Math.sqrt((parseInt(b)*parseInt(b))-(4*parseInt(a)*parseInt(c)))
var root1=(-b+det)/(2*a)
var root2=(-b-det)/(2*a)
document.write(root1)
document.write(root2)