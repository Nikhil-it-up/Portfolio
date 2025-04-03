let contactbtn = document.querySelector("#b1");
let Exbtn = document.querySelector("#b2");
let Qbtn = document.querySelector("#b3");
let PJbtn = document.querySelector("#b4");
let SMbtn = document.querySelector("#b5");

contactbtn.addEventListener("click" , () =>
    open("/contact.html")
);

Exbtn.addEventListener("click" , () =>
    open("/experience.html")
);

Qbtn.addEventListener("click" , () =>
    open("/qualifications.html")
);

PJbtn.addEventListener("click" , () =>
    open("/projects.html")
);

SMbtn.addEventListener("click" , () =>
    open("/social-media.html")
);