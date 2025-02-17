

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['TOTAL PLAYS', 'WINS', 'LOSE', 'DRAW'],
datasets: [{
    label: 'Statistics',
    data: [totalPlays, userscore, compscore, draws],
    backgroundColor: [
      'rgba(62, 8, 20, 0.5)',
      'rgba(13, 169, 112, 0.5)',
      'rgba(151, 22, 44, 0.5)',
      'rgba(189, 217, 3, 0.5)',
    ],
    borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


if (window.location.pathname.includes("dashboard.html")) {
  let dashUser = document.querySelector("#userscore");
let dashComp = document.querySelector("#compscore");
let dashDraw = document.querySelector("#draws");
let dashPlay = document.querySelector("#totalplays");



dashComp.innerText = sessionStorage.getItem("compscoree")||0 ;
dashUser.innerText =  sessionStorage.getItem("userscoree")||0;
dashDraw.innerText =  sessionStorage.getItem("drawss")||0;
dashPlay.innerText =  sessionStorage.getItem("totalplayee")||0;

}

let links = document.querySelectorAll(".current");


let activelink = localStorage.getItem("activenow")|| "dashboard.html";
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
  

})``