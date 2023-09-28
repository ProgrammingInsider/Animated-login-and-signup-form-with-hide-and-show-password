// Toggle Theme
const themeBtn = document.getElementById("themeBtn");
const overlay = document.getElementById("overlay");


themeBtn.onclick = () => {
   document.body.classList.toggle("lightTheme")
   overlay.classList.toggle("lightoverlay")

}

// change placeholder postion

const input = document.querySelectorAll(".input");
const inputArray = Array.from(input);

for(let index = 0; index < inputArray.length; index++){
    input[index].onchange = (e) => {
        const parentElement = input[index].parentElement;
        const label = parentElement.querySelector(".placeholder");
        if(e.target.value){
            label.classList.add("notNull")   
        }else{
            label.classList.remove("notNull")
        }
    }
}

// Toggle Form
const link = document.getElementById("link");
const heading = document.querySelector(".heading");
const ask = document.querySelector(".ask");
const signupForm = document.getElementById("signupForm")
const loginForm = document.getElementById("loginForm")



link.onclick = () => {
    const formType = link.innerText;
    if(formType === "Login"){
        link.innerText = "Signup";
        heading.innerText = "Login to existing account";
        ask.innerText = "You don't have an account?"
        signupForm.style.display="none";
        loginForm.style.display="block";
        loginForm.style.transition="all 5s ease-in-out";


    }else{
        link.innerHTML = "Login"
        heading.innerText = "Create new account";
        ask.innerText = "Already a member?"
        signupForm.style.display="block";
        signupForm.style.transition="all 5s ease-in-out";
        loginForm.style.display="none";
    }
}


// show password
const signupPassword = document.getElementById("signuppassword");
const loginPassword = document.getElementById("loginpassword");
const showSignupPassword = document.getElementById("showSignupPassword");
const showLoginPassword = document.getElementById("showLoginPassword");


// Toggle signup password visibility
showSignupPassword.onclick = () => {
    const attr = signupPassword.getAttribute("type")
    if(attr === "password"){
        signupPassword.setAttribute("type","text")
    }else{
        signupPassword.setAttribute("type","password")
    }
}

// Toggle login password visibility
showLoginPassword.onclick = () => {
    const attr = loginPassword.getAttribute("type")
    if(attr === "password"){
        loginPassword.setAttribute("type","text")
    }else{
        loginPassword.setAttribute("type","password")
    }
}