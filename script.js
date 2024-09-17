let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}



// -------------------For about me section---------------->


var tablinks= document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// ------------------------------------------------------>

// -----------For responsive menu buttons-------------------------- -->


var sidemenu= document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right= "0";
}

function closemenu(){
    sidemenu.style.right= "-200px";
}

// ---------------------Contact Me Form--------------------------------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbwQk2MOWnowQMtmmQ23stCM5UxgEmqKbfJgV8Xd_WH4OE9yCyX1xZAnM9I5Xj4aXV26/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })  
    .catch(error => console.error('Error!', error.message))
})


// ------------------For My work animations 1----------------------

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show')
        }
    })
});

const hiddenElements1 = document.querySelectorAll('.hidden');
hiddenElements1.forEach((el) => observer1.observe(el))


// =====================Transition in My work 2==========================================


const observer2 = new IntersectionObserver((entries2) => {
    entries2.forEach((entry2) => {
        console.log(entry2)
        if(entry2.isIntersecting){
            entry2.target.classList.add('show-block');
        } else{
            entry2.target.classList.remove('show-block')
        }
    })
});

const hiddenElements2 = document.querySelectorAll('.hidden-block');
hiddenElements2.forEach((el2) => observer2.observe(el2))


// =========================== SEE MORE Button====================================

document.getElementById("see-more-btn").addEventListener("click", function(event) {
    event.preventDefault();
    const hiddenWorks = document.querySelectorAll(".work.load");

    for (let i = 0; i < 3 && i < hiddenWorks.length; i++) {
        hiddenWorks[i].classList.remove("load");
    }

    // If there are no more hidden works, hide the button
    if (document.querySelectorAll(".work.load").length === 0) {
        document.getElementById("see-more-btn").style.display = "none";
    }
});
