export function contactUs () {
    const content = document.querySelector("#content"); 
    const contactUsDiv = document.createElement("div");
    const contactUsContainer = document.createElement("div");
    const div1 = document.createElement("div");
    const text1 = document.createElement("h3");
    const text2 = document.createElement("h1");
    const text3 = document.createElement("p");

    contactUsDiv.classList.add("contact-us")
    content.appendChild(contactUsDiv)

    text1.textContent = "Contact Us";
    text2.textContent = "Get in Touch With us";
    text3.textContent = "We would love to hear from you at our pizza restaurant! If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us. Our dedicated team is here to assist you in any way we can.";

    contactUsDiv.appendChild(contactUsContainer);
    contactUsContainer.appendChild(div1);
    div1.appendChild(text1);
    div1.appendChild(text2);
    div1.appendChild(text3);

    const div2 = document.createElement("div");
    const text4 = document.createElement("h4");
    const text5 = document.createElement("p");
    const text6 = document.createElement("h4");
    const text7 = document.createElement("p");
    const text8 = document.createElement("h4");
    const text9 = document.createElement("p");

    text4.textContent = "Our Location";
    text5.textContent = "Block 999 Sitra, Sufala";
    text6.textContent = "Phone Number";
    text7.textContent = "(+973) 39393939";
    text8.textContent = "Email Address";
    text9.textContent = "Placeholder@gmail.com";

    contactUsContainer.appendChild(div2);
    div2.appendChild(text4);
    div2.appendChild(text5);
    div2.appendChild(text6);
    div2.appendChild(text7);
    div2.appendChild(text8);
    div2.appendChild(text9);
    

    const div3 = document.createElement("div");
    const form = document.createElement("form");
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");
    const input3 = document.createElement("input");
    const textArea = document.createElement("textarea");
    const sendBtn = document.createElement("button")

    input1.setAttribute("placeholder", "Your Name");
    input2.setAttribute("placeholder", "Your Email");
    input3.setAttribute("placeholder", "Your Phone");
    textArea.setAttribute("placeholder", "Your Message");
    sendBtn.textContent = "Send Message";
    

    contactUsDiv.appendChild(div3);
    div3.appendChild(form);
    form.appendChild(input1);
    form.appendChild(input2);
    form.appendChild(input3);
    form.appendChild(textArea);
    form.appendChild(sendBtn);
    
    
};

