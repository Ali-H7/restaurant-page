export function homePage() {
    
    const content = document.querySelector("#content");
    const text1 = document.createElement("h2");
    const text2 = document.createElement("h1");
    const text3 = document.createElement("p");
    const orderButton = document.createElement("button");
    const menuButton = document.createElement("button");

    text1.textContent = "Now taking online orders";
    text2.textContent = "A Slice of Heaven: The Best Pizza in Town!";
    text3.textContent = "Welcome to our pizza place, where we serve the most delicious and mouthwatering pizzas in town. Our carefully crafted pizzas are made with love and the finest ingredients, ensuring a delightful experience with every bite. Whether you're a fan of classic flavors or looking for unique combinations, we have something to satisfy every pizza lover's cravings.";
    orderButton.textContent = "Order Now";
    menuButton.textContent = "View Our Menu";

    content.appendChild(text1);
    content.appendChild(text2);
    content.appendChild(text3);
    content.appendChild(orderButton);
    content.appendChild(menuButton);
}