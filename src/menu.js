import image1 from "./margherita-delight.jpeg";
import image2 from "./meat-lovers-paradise.jpeg";
import image3 from "./veggie-supreme.jpeg";
import image4 from "./bbq-chicken-blast.jpeg";
import image5 from "./hawaiian-luau.jpeg";
import image6 from "./spicy-diablo.jpeg";


export function menu() {
    const content = document.querySelector("#content");
    const text1 = document.createElement("h1");
    const div = document.createElement("div");

    text1.textContent = "Our Menu";

    content.appendChild(text1);
    content.appendChild(div); 
    

    const card1 = document.createElement("div");
    const myImage1 = new Image();
    myImage1.src = image1; 
    const text2 = document.createElement("h3");
    const text3 = document.createElement("p");
    const button1 = document.createElement("button");

    text2.textContent = "Margherita Delight";
    text3.textContent = "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.";
    button1.textContent = "Order Now";
    
    div.appendChild(card1); 
    card1.appendChild(myImage1);
    card1.appendChild(text2);
    card1.appendChild(text3);
    card1.appendChild(button1);

    //

    const card2 = document.createElement("div");
    const myImage2 = new Image();
    myImage2.src = image2; 
    const text4 = document.createElement("h3");
    const text5 = document.createElement("p");
    const button2 = document.createElement("button");

    text4.textContent = "Meat Lover's Paradise";
    text5.textContent = "A carnivore's dream! Loaded with pepperoni, sausage, bacon, and ham.";
    button2.textContent = "Order Now";
    
    div.appendChild(card2); 
    card2.appendChild(myImage2);
    card2.appendChild(text4);
    card2.appendChild(text5);
    card2.appendChild(button2);

    //

    const card3 = document.createElement("div");
    const myImage3 = new Image();
    myImage3.src = image3; 
    const text6 = document.createElement("h3");
    const text7 = document.createElement("p");
    const button3 = document.createElement("button");

    text6.textContent = "Veggie Supreme";
    text7.textContent = "A garden-fresh delight featuring a variety of colorful vegetables.";
    button3.textContent = "Order Now";
    
    div.appendChild(card3); 
    card3.appendChild(myImage3);
    card3.appendChild(text6);
    card3.appendChild(text7);
    card3.appendChild(button3);

    //

    const card4 = document.createElement("div");
    const myImage4 = new Image();
    myImage4.src = image4; 
    const text8 = document.createElement("h3");
    const text9 = document.createElement("p");
    const button4 = document.createElement("button");

    text8.textContent = "BBQ Chicken Blast";
    text9.textContent = "Tangy BBQ sauce, grilled chicken, red onions, and smoky bacon.";
    button4.textContent = "Order Now";
    
    div.appendChild(card4); 
    card4.appendChild(myImage4);
    card4.appendChild(text8);
    card4.appendChild(text9);
    card4.appendChild(button4);

    //

    const card5 = document.createElement("div");
    const myImage5 = new Image();
    myImage5.src = image5; 
    const text10 = document.createElement("h3");
    const text11 = document.createElement("p");
    const button5 = document.createElement("button");

    text10.textContent = "Hawaiian Luau";
    text11.textContent = "A tropical twist with ham, pineapple, and a hint of sweetness.";
    button5.textContent = "Order Now";
    
    div.appendChild(card5); 
    card5.appendChild(myImage5);
    card5.appendChild(text10);
    card5.appendChild(text11);
    card5.appendChild(button5);

    //

    const card6 = document.createElement("div");
    const myImage6 = new Image();
    myImage6.src = image6; 
    const text12 = document.createElement("h3");
    const text13 = document.createElement("p");
    const button6 = document.createElement("button");

    text12.textContent = "Spicy Diablo";
    text13.textContent = "For the brave! Spicy pepperoni, jalapenos, and hot sauce for an extra kick.";
    button6.textContent = "Order Now";
    
    div.appendChild(card6); 
    card6.appendChild(myImage6);
    card6.appendChild(text12);
    card6.appendChild(text13);
    card6.appendChild(button6);
};