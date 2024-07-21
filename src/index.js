import './style.css';
import { homePage } from "./homepage";
import { menu } from "./menu";
import { contactUs } from "./contact-us";


homePage();
// contactUs();
// menu();

const content = document.querySelector("#content"); 
const logo = document.querySelector(".logo"); 
const homeBtn = document.querySelector("#home-button"); 
const menuBtn = document.querySelector("#menu-button");
const contactBtn = document.querySelector("#contact-us-button");

logo.addEventListener("click", () => {
    content.innerHTML = ""; 
    homePage();
});

homeBtn.addEventListener("click", () => {
    content.innerHTML = ""; 
    homePage();
});

menuBtn.addEventListener("click", () => {
    content.innerHTML = ""; 
    menu();
});

contactBtn.addEventListener("click", () => {
    content.innerHTML = ""; 
    contactUs();
});