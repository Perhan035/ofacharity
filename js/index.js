window.addEventListener('DOMContentLoaded', function () {


    //Navbar sekcija JS-a

    // Navbar nizovi
    var nizNavbar = [
        {
            text: 'Home',
            href: '#top',
            isButton: false
        },
        {
            text: 'About',
            href: '#section_2',
            isButton: false
        },
        {
            text: 'Causes',
            href: '#section_3',
            isButton: false
        },
        {
            text: 'Volunteer',
            href: '#section_4',
            isButton: false
        },
        {
            text: 'Contact',
            href: '#section_6',
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

    //Info sekcija JS-a
    var nizInfo = [
        {
            title: "Become a volunteer",
            text: "Volunteers help us organize charity events and support families in need. Each and every volunteer is a hero in our community, and we show our gratefulness by providing them with the necessary resources and support to make a positive impact. Join us in making a difference and becoming a volunteer today!",
            img: "images/icons/hands.png",
            modal: 'info1'
        },
        {
            title: "Caring Earth Program",
            text: "Caring Earth program focuses on environmental protection and sustainability. We organize tree planting events, clean-up campaigns and educational workshops to raise awareness about the importance of caring for our planet.",
            img: "images/icons/heart.png",
            modal: 'info2'
        },
        {
            title: "Make a Donation",
            text: "Donations help fund education, food programs and clean water projects. Our innovative donation platform taps into consumerism culture to create a new and unique way for you to enlighten people's lives. By donating, you can make a real difference in the lives of those in need and help us create a better world for everyone.",
            img: "images/icons/receive.png",
            modal: 'info3'
        },
        {
            title: "Scholarship Program",
            text: "Scholarship program supports children who cannot afford education. Along with children in need, we offer our scholarship programs to volunteers who have shown exceptional dedication and commitment to our cause. By providing scholarships to our volunteers, we aim to empower them with the knowledge and skills they need to make an even greater impact in their communities.",
            img: "images/icons/scholarship.png",
            modal: 'info4'
        }
    ];






    //Info sekcija

    // Hvatanje info bloka
    var infoContainer = document.querySelector('.section-padding .row');

    // Funkcija za kreiranje bloka
    function createBlock(obj) {
        var block = `
            <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                <div class="featured-block d-flex justify-content-center align-items-center">
                    <a href="#" class="d-block open-popup" data-target="${obj.modal}">
                        <img src="${obj.img}" class="featured-block-image img-fluid" alt="">
                        <p class="featured-block-text">${obj.title}</p>
                    </a>
                </div>
            </div>`;
        return block;
    }

    // Dodavanje blokova u DOM
    for (var j = 0; j < nizInfo.length; j++) {
        var blockHTML = createBlock(nizInfo[j]);
        infoContainer.innerHTML += blockHTML;
    }

    //Popup izgled i logika

    var popupBlock = document.createElement("div");

    popupBlock.style.position = "fixed";
    popupBlock.style.top = "0";
    popupBlock.style.left = "0";
    popupBlock .style.width = "100%";
    popupBlock.style.height = "100%";
    popupBlock.style.backgroundColor = "rgba(0,0,0,0.6)";
    popupBlock.style.display = "none";
    popupBlock.style.justifyContent = "center";
    popupBlock.style.alignItems = "center";
    popupBlock.style.zIndex = "1000";

    document.body.appendChild(popupBlock);
    
    // Funkcija za otvaranje popupa

    function openPopup(modalId) {

    var contentText = "";
    var titleText = "";

    // Pronalaženje odgovarajućeg objekta iz niza
    for (var i = 0; i < nizInfo.length; i++) {
        if (nizInfo[i].modal === modalId) {
            contentText = nizInfo[i].text;
            titleText = nizInfo[i].title;
        }
    }

    popupBlock.innerHTML = `
        <div style="background:white; padding:30px; max-width:400px; width:90%; text-align:center; position:relative;">
            <h4>${titleText}</h4>
            <p>${contentText}</p>
            <button id="closePopup" class="btn btn-primary mt-3">Close</button>
        </div>
    `;

    popupBlock.style.display = "flex";

    // Dugme za zatvaranje
    document.getElementById("closePopup").addEventListener("click", function () {
        popupBlock.style.display = "none";
    });
    }

    // Event listeneri za info blokve

    var popupLinks = document.querySelectorAll(".open-popup");

    for (var k = 0; k < popupLinks.length; k++) {

    popupLinks[k].addEventListener("click", function (e) {

        e.preventDefault();

        var target = this.getAttribute("data-target");
        openPopup(target);

    });
    }

    // Zatvaranje popup-a klikom van prozora
    popupBlock.addEventListener("click", function (e) {
    if (e.target === popupBlock) {
        popupBlock.style.display = "none";
    }
    });



    //Owner sekcija

    // Owner sekcija podaci
    var ownerInfo = {
    name: "Ilyana Song",
    role: "Founder of Kind Heart Charity",
    img: "../images/portrait-volunteer-who-organized-donations-charity.jpg",
    shortText: "Ilyana founded this charity to support families in need.",
    fullText: "Ilyana founded this charity to support families in need. With over 15 years of humanitarian experience, she has organized numerous international campaigns, focusing on education, sustainability and community development. She was inspired to create this charity because of her personal life, as she grew up in a family that struggled financially. Her passion for helping others and making a positive impact in the world led her to establish this organization, which has since helped thousands of people around the globe. Ilyana's dedication and commitment to this cause since the day she founded it has been unwavering and contagious to everyone around her."
    };

    // Hvatanje owner sekcije
    var ownerContainer = document.getElementById("owner-section");

    // Funkcija za kreiranje owner sekcije
    function createOwnerSection(obj) {

    var section = `
        <div class="row justify-content-center text-center">
            <div class="col-lg-8">
                <img src="${obj.img}" class="img-fluid rounded mb-3" style="max-width:200px;">
                <h3>${obj.name}</h3>
                <p><strong>${obj.role}</strong></p>

                <div id="owner-text-wrapper" style="overflow:hidden; transition: max-height 0.5s ease;">
                    <p id="owner-text">${obj.shortText}</p>
                </div>

                <button id="toggle-owner" class="btn btn-primary mt-3">
                    More Info
                </button>
            </div>
        </div>
    `;

    return section;
    }


    // Ubacivanje u DOM
    ownerContainer.innerHTML = createOwnerSection(ownerInfo);

    // Logika za prosirivanje sekcije
    var toggleBtn = document.getElementById("toggle-owner");
    var textWrapper = document.getElementById("owner-text-wrapper");
    var ownerText = document.getElementById("owner-text");

    var expanded = false;

    // Postavljamo pocetnu visinu
    textWrapper.style.maxHeight = textWrapper.scrollHeight + "px";

    toggleBtn.addEventListener("click", function () {

    if (expanded === false) {

        ownerText.textContent = ownerInfo.fullText;

        // Potrebno je malo sacekati da se tekst promeni
        setTimeout(function () {
            textWrapper.style.maxHeight = textWrapper.scrollHeight + "px";
        }, 10);

        toggleBtn.textContent = "Less Info";
        expanded = true;

    } else {

        ownerText.textContent = ownerInfo.shortText;

        setTimeout(function () {
            textWrapper.style.maxHeight = textWrapper.scrollHeight + "px";
        }, 10);

        toggleBtn.textContent = "More Info";
        expanded = false;
    }

});


});