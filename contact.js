let links = document.querySelectorAll(".current");


let activelink = localStorage.getItem("activenow")|| "contact.html";
if(activelink){
  links.forEach(link =>{
    if ((link.getAttribute("href") == activelink)) {
      link.classList.add("active");
    }
  } )
}

links.forEach(lin => {
  lin.addEventListener("click",(e) =>{
    links.forEach(l => {l.classList.remove("active");})
    e.target.classList.add("active");            // this inside arrow function doesnot work but work in simple one

    localStorage.setItem("activenow" , this.getAttribute("href"));
  })
  

})