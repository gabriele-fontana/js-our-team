const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

let memberCard = ''

const rowEl = document.querySelector('.row')

teamMembers.forEach(element => {
  
  const {name, role, email, img} = element
  const markup = `
   <div class="col col-md-6 col-lg-4">
    
    <div class="col-wrapper d-flex align-items-stretch border rounded overflow-hidden">
        
        <img src="./assets/${img}" alt="member-pic" 
             class="img-fluid object-fit-cover w-25" 
             style="min-width: 80px;">
             
        <div class="info-wrapper flex-grow-1 p-3">
            <h2 class="h5 mb-1">${name}</h2>
            <h4 class="h6 mb-2">${role}</h4>
            <p class="mb-0 small">${email}</p>
        </div>
    </div>
</div>
  `
  memberCard += markup
});

rowEl.innerHTML = memberCard