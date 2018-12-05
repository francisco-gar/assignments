var head = document.createElement("HEADER");
document.body.prepend(head);

var header1 = document.createElement("H2");



head.appendChild(header1);



var header1Text = document.createTextNode("JavaScript Made this!!")

header1.append(header1Text);



var header2 = document.createElement("H4")

head.appendChild(header2)

var span1 = document.createElement("span")

header2.append(span1)

var myName = document.createTextNode(' Cisco')
span1.append(myName)


var subTitle = document.createTextNode(' wrote the javaScript');
header2.append(subTitle);

head.classList.add('header');
console.log(head);

span1.classList.add("name");

var newMsg = document.getElementsByClassName('message');

document.body.innerHTML = document.body.innerHTML.replace(/have/g, "do not have")
document.body.innerHTML = document.body.innerHTML.replace("farmer", "hedgefund manager")


 
// trying to make clear button function properly
function clearFunction(){
    var i;
    for (i = 0; i<= 3; i++)
    document.getElementsByClassName("message")[i].innerHTML = "";
}

document.getElementById("clear-button").addEventListener("click", clearFunction);



console.log(newMsg)




