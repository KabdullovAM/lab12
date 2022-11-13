console.log("Hello, World!");

let h1_arr=document.getElementsByTagName("h1")
console.log(h1_arr[0])

let h=h1_arr[0]
h.innerHTML="Lab12 Assignment"
h.style.color="blue"

let=hr=document.createElement("hr")
console.log(hr)
document.body.appendChild(hr)

let ha=document.createElement("h2")
ha.innerText="Task"
ha.style.color="red"
document.body.appendChild(ha)

let pa=document.createElement("pa")
pa.innerText="In this task you have to reproduce this HTML page as is using "
let pb=document.createElement("pb")
pb.innerText="only "
pb.style.fontWeight="bold"
let pc=document.createElement("pc")
pc.innerText="JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
pa.appendChild(pb)
pa.appendChild(pc)
document.body.appendChild(pa)

let ula=document.createElement("ul")
ula.innerText="find elements in the DOM "
let ulb=document.createElement("ulb")
ulb.innerText="(5 points);"
ulb.style.fontWeight="bold"
ula.appendChild(ulb)
ula.style.color="green"
document.body.appendChild(ula)

let ulc=document.createElement("ul")
ulc.innerText="create/add/remove elements "
let uld=document.createElement("uld")
uld.innerText="(5 points);"
uld.style.fontWeight="bold"
ulc.appendChild(uld)
ulc.style.color="purple"
document.body.appendChild(ulc)

let ule=document.createElement("ul")
ule.innerText="change content of the elements "
let ulf=document.createElement("ulf")
ulf.innerText="(5 points);"
ulf.style.fontWeight="bold"
ule.appendChild(ulf)
ule.style.color="green"
document.body.appendChild(ule)

let ulg=document.createElement("ul")
ulg.innerText="change styles of the elements "
let ulh=document.createElement("ulh")
ulh.innerText="(5 points);"
ulh.style.fontWeight="bold"
ulg.appendChild(ulh)
ulg.style.color="purple"
document.body.appendChild(ulg)

let uli=document.createElement("ul")
uli.innerText="change attributes of the elements "
let ulj=document.createElement("ulj")
ulj.innerText="(5 points);"
ulj.style.fontWeight="bold"
uli.appendChild(ulj)
uli.style.color="green"
document.body.appendChild(uli)

let ulk=document.createElement("ul")
ulk.innerText="change classes of the elements "
let ull=document.createElement("ull")
ull.innerText="(5 points)."
ull.style.fontWeight="bold"
ulk.appendChild(ull)
ulk.style.color="purple"
document.body.appendChild(ulk)

let a=document.createElement("a")
a.innerText="link."
a.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12")

let p=document.createElement("p")
p.innerText="Basic necessary code can be found in the supplementary materials to the Lecture 12 via this "
p.appendChild(a)
document.body.appendChild(p)

let=hra=document.createElement("hr")
console.log(hra)
document.body.appendChild(hra)

let hb=document.createElement("h2")
hb.innerText="Submission"
hb.style.color="red"
document.body.appendChild(hb)

let pd=document.createElement("pd")
pd.innerText="To submit your work, follow these instructions: "
document.body.appendChild(pd)

let ulm=document.createElement("ul")
ulm.innerText="Create a new repository on Github, named "
let uln=document.createElement("uln")
uln.innerText="lab12 (1 point)."
uln.style.fontWeight="bold"
ulm.appendChild(uln)
ulm.style.color="green"
document.body.appendChild(ulm)

let ulo=document.createElement("ul")
ulo.innerText="Clone this repository to your local machine and work inside it."
ulo.style.color="purple"
document.body.appendChild(ulo)

let ulp=document.createElement("ul")
ulp.innerText="Create a new HTML file, called "
let ulq=document.createElement("ulq")
ulq.innerText="(1 point)."
ulq.style.fontWeight="bold"
let ulr=document.createElement("ulr")
ulr.innerText="index.html, "
ulr.style.fontWeight="bold"
let uls=document.createElement("uls")
uls.innerText='which has only one <h1>tag with "Hello, World!" message '
ulp.appendChild(ulr)
ulp.appendChild(uls)
ulp.appendChild(ulq)
ulp.style.color="green"
document.body.appendChild(ulp)

let ult=document.createElement("ul")
ult.innerText="Create a new JavaScript file, called "
let ulu=document.createElement("ulu")
ulu.innerText="(1 point)."
ulu.style.fontWeight="bold"
let ulv=document.createElement("ulv")
ulv.innerText="main.js, "
ulv.style.fontWeight="bold"
let ulw=document.createElement("ulw")
ulw.innerText='which must contain your program (assignment) described above '
ult.appendChild(ulv)
ult.appendChild(ulw)
ult.appendChild(ulu)
ult.style.color="purple"
document.body.appendChild(ult)

let ulx=document.createElement("ul")
ulx.innerText="Link this "
let uly=document.createElement("uly")
uly.innerText="body "
uly.style.fontWeight="bold"
let ulz=document.createElement("ulz")
ulz.innerText="index.html "
ulz.style.fontWeight="bold"
let ulaa=document.createElement("ulaa")
ulaa.innerText='file to your '
let ulab=document.createElement("ulab")
ulab.innerText="file (Note: place your script at the end of the "
let ulac=document.createElement("ulac")
ulac.innerText="main.js "
ulac.style.fontWeight="bold"
let ulad=document.createElement("ulad")
ulad.innerText="section)."
ulx.appendChild(ulac)
ulx.appendChild(ulaa)
ulx.appendChild(ulz)
ulx.appendChild(ulab)
ulx.appendChild(uly)
ulx.appendChild(ulad)
ulx.style.color="green"
document.body.appendChild(ulx)

let ulae=document.createElement("ul")
ulae.innerText="Write a JavaScript program in "
let ulaf=document.createElement("ulaf")
ulaf.innerText="main.js "
ulaf.style.fontWeight="bold"
let ulag=document.createElement("ulag")
ulag.innerText="index.html "
ulag.style.fontWeight="bold"
let ulah=document.createElement("ulah")
ulah.innerText='to make your '
let ulai=document.createElement("ulai")
ulai.innerText="look identical to this HTML file "
let ulaj=document.createElement("ulaj")
ulaj.innerText="(5 points)."
ulaj.style.fontWeight="bold"
ulae.appendChild(ulaf)
ulae.appendChild(ulah)
ulae.appendChild(ulag)
ulae.appendChild(ulai)
ulae.appendChild(ulaj)
ulae.style.color="purple"
document.body.appendChild(ulae)

let ulak=document.createElement("ul")
ulak.innerText="After you finish your work, submit it to the Github "
let ulal=document.createElement("ulal")
ulal.innerText="(2 points)."
ulal.style.fontWeight="bold"
ulak.appendChild(ulal)
ulak.style.color="green"
document.body.appendChild(ulak)