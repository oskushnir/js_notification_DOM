"use strict";
const pushNotification = (posTop, posRight, title, description, type)=>{
    const body = document.querySelector("body");
    const div = document.createElement("div");
    const titleOfMessage = document.createElement("h2");
    const p = document.createElement("p");
    div.classList.add("notification", `${type}`);
    titleOfMessage.classList.add("title");
    titleOfMessage.textContent = title;
    p.textContent = description;
    div.style.top = `${posTop}px`;
    div.style.right = `${posRight}px`;
    body.appendChild(div);
    div.appendChild(titleOfMessage);
    div.appendChild(p);
    setTimeout(()=>{
        div.style.visibility = "hidden";
    }, 2000);
};
pushNotification(10, 10, "Title of Success message", "Message example.\n Notification should contain title and description.", "success");
pushNotification(150, 10, "Title of Error message", "Message example.\n Notification should contain title and description.", "error");
pushNotification(290, 10, "Title of Warning message", "Message example.\n Notification should contain title and description.", "warning");

//# sourceMappingURL=index.f75de5e1.js.map