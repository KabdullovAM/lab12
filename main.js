console.log("Hello, World!");

let h1_arr=document.getElementsByTagName("h1")
console.log(h1_arr[0])

let h=h1_arr[0]
h.innerHTML="Lab12 Assignment"
h.style.color="blue"

let=hr=document.createElement("hr")
console.log(hr)
document.body.appendChild(hr)

let a=document.createElement("a")
a.innerText="link."
a.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12")

let p=document.createElement("p")
p.innerText="Basic necessary code can be found in the supplementary materials to the Lecture 12 via this "
p.appendChild(a)
document.body.appendChild(p)

let par=document.getElementsByClassName("one")
console.log(par)

for(let i=0; i<par.length; i++)
{
	par[i].style.color="red"
	par[i].style.fontWeight="bold"
}