import image1 from "./pizza.png";
import { menu } from "./menu";
import { contactUs } from "./contact-us";

export function homePage() {
    
    const content = document.querySelector("#content");
    const homePageDiv = document.createElement("div")
    const text1 = document.createElement("h2");
    const text2 = document.createElement("h1");
    const text3 = document.createElement("p");
    const divBtn = document.createElement("div");
    const orderButton = document.createElement("button");
    const menuButton = document.createElement("button");
    const myImage1 = new Image();

    homePageDiv.classList.add("homepage")
    myImage1.classList.add("pizza")
    

    text1.textContent = "Now taking online orders";
    text2.textContent = "A Slice of Delight: The Best Pizza in Town!";
    text3.textContent = "Welcome to our pizza place, where we serve the most delicious and mouthwatering pizzas in town. Our carefully crafted pizzas are made with love and the finest ingredients, ensuring a delightful experience with every bite. Whether you're a fan of classic flavors or looking for unique combinations, we have something to satisfy every pizza lover's cravings.";
    orderButton.textContent = "Order Now";
    menuButton.textContent = "View Our Menu";
    myImage1.src = image1;

    content.appendChild(homePageDiv)
    homePageDiv.appendChild(text1);
    homePageDiv.appendChild(text2);
    homePageDiv.appendChild(text3);
    divBtn.appendChild(orderButton)
    divBtn.appendChild(menuButton)
    homePageDiv.appendChild(divBtn);
    homePageDiv.appendChild(myImage1);

    menuButton.addEventListener("click", () => {
        content.innerHTML = ""; 
        menu();
    })
    orderButton.addEventListener("click", () => {
        content.innerHTML = ""; 
        contactUs();
    })
    
}