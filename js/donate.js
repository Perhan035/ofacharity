
window.addEventListener('DOMContentLoaded', function () {

    //niz dobrotvornih cilheva sa kategorijama, iznosom i slikom
const ciljevi = [

{title:"Children Hospital Support",category:"health",amount:25,img:"images/causes/child-hospital.jpg"},
{title:"Cancer Research Fund",category:"health",amount:40,img:"images/causes/cancer-researchh.jpg"},
{title:"Medical Supplies Africa",category:"health",amount:30,img:"images/causes/medical-supplies.jpg"},

{title:"School Supplies Program",category:"education",amount:15,img:"images/causes/school-supplies.jpg"},
{title:"Scholarship Fund",category:"education",amount:50,img:"images/causes/scholarship-fund.jpg"},
{title:"Build Rural Schools",category:"education",amount:60,img:"images/causes/rural-school.jpg"},

{title:"Animal Shelter Help",category:"animals",amount:20,img:"images/causes/animal-shelter.jpg"},
{title:"Street Dog Rescue",category:"animals",amount:18,img:"images/causes/stray-dogs.jpg"},
{title:"Wildlife Protection",category:"animals",amount:35,img:"images/causes/wildlife-protection.jpg"},

{title:"Plant Trees Project",category:"environment",amount:10,img:"images/causes/plant-trees.jpg"},
{title:"Ocean Cleanup",category:"environment",amount:45,img:"images/causes/ocean-cleanup.jpg"},
{title:"Clean Water Initiative",category:"environment",amount:28,img:"images/causes/clean-waters.jpg"}
];


//Dinamicki prikaz kartica sa dobrotvornim ciljevima

function prikaziCiljeve(list){

const container =
document.getElementById("donationContainer");
container.innerHTML = "";
list.forEach((cause,index)=>{

const card = document.createElement("div");

card.className =
"col-lg-3 col-md-6 col-12 mb-4";


//html dinamican 
card.innerHTML = `

<div class="card donation-card shadow">

<img src="${cause.img}"
class="card-img-top">

<div class="card-body">

<h5>${cause.title}</h5>

<p class="text-muted">
Suggested donation: $${cause.amount}
</p>

<button class="btn btn-primary w-100"
onclick="toggleDonate(${index})">
Donate
</button>

<div class="donate-panel mt-3 d-none"
id="donatePanel-${index}">
    
    <label class="form-label">
        Donation amount:
        <span id="donationValue-${index}">
            $${cause.amount}
        </span>
    </label>

    <input type="range"
        class="form-range"
        min="1"
        max="100"
        value="${cause.amount}"
        oninput="updateSlider(${index}, this.value)"
    >

    <button class="btn btn-success w-100 mt-2"
        onclick="confirmDonation('${cause.title}', ${index})">
        Confirm Donation
    </button>

</div>

</div>
</div>
`;



// dodavanje kartice u container
container.appendChild(card);

});

}

//Toggluje slider kada se klikne dugme Donate

function dropdownDonate(index){

const panel =
document.getElementById(`donatePanel-${index}`);

panel.classList.toggle("d-none");

}

function sliderUpdate(index,value){

document.getElementById(
`donationValue-${index}`
).textContent = "$" + value;

}

//Izbacuje poruku zahvaljenja kad se klikne dugme Confirm Donation
function potvrdiDonaciju(title,index){

const panel =
document.getElementById(`donatePanel-${index}`);

let message =
panel.querySelector(".donation-message");

if(!message){

message = document.createElement("p");
message.className =
"text-success mt-2 donation-message";

panel.appendChild(message);
}

message.textContent =
"✔ Thank you for supporting: " + title;

}




// Filtriranje dobrotvornih ciljeva po kategoriji

function filtrirajCiljeve(category){

if(category === "all"){
prikaziCiljeve(ciljevi);
return;
}

const filtered =
causes.filter(
c => c.category === category
);

prikaziCiljeve(filtered);

}

prikaziCiljeve(ciljevi);

window.filterCauses = filtrirajCiljeve;
window.toggleDonate = dropdownDonate;
window.updateSlider = sliderUpdate;
window.confirmDonation = potvrdiDonaciju;



    //Navbar sekcija

    // Navbar nizovi
    var nizNavbar = [
        {
            text: 'Home',
            href: 'index.html',
            isButton: false
        },
        {
            text: 'About',
            href: 'index.html',
            isButton: false
        },
        {
            text: 'Causes',
            href: 'index.html',
            isButton: false
        },
        {
            text: 'Volunteer',
            href: 'index.html',
            isButton: false
        },
        {
            text: 'Donate',
            href: 'donate.html',
            isButton: true
        },
        {
            text: 'Autor',
            href: 'autor.html',
            isButton: false
        },
        {
            text: 'Download Zip',
            href: 'download.html',
            isButton: false
        }
    ];
    //Logika navbar sekcije 

    var navUl = document.getElementById('mainNav');


    navUl.innerHTML = '';

    for (var i = 0; i < nizNavbar.length; i++) {
        var item = nizNavbar[i];
        
        var li = document.createElement('li');
        li.className = 'nav-item';
        
        var a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.text;
        
        if (item.isButton) {
            li.className += ' ms-3';
            a.className = 'nav-link custom-btn custom-border-btn btn';
        } else {
            a.className = 'nav-link click-scroll';
        }
        
        li.appendChild(a);
        navUl.appendChild(li);
    }

});