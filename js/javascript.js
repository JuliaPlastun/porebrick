
let loginForm = document.querySelector('.login-form-container');
let formBtn = document.querySelector('#form');
let form = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    form.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    form.classList.add('active');
});
formClose.addEventListener('click', () =>{
    form.classList.remove('active');
});

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        city: document.getElementById("city").value,
        number: document.getElementById("number").value,
        date1: document.getElementById("date").value,
        message: document.getElementById("message").value,
    };
  
    const serviceID = "service_eztcth8";
    const templateID = "template_ua0ew7p";
	const userID = "XjYyzXAPGXMehA9kN";
  
      emailjs.send(serviceID, templateID, params, userID)
		.then(res=>{
          
		  document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("city").value = "";
          document.getElementById("number").value = "";
          document.getElementById("date").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
		})
		.catch(err=>alert("Error sending message: " + err));
   }
 

  


// let loginForm = document.querySelector('.login-form-container');
// let formBtn = document.querySelector('#form');
// let form = document.querySelector('.login-form-container');
// let formClose = document.querySelector('#form-close');
// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');


// window.onscroll = () =>{
    // menu.classList.remove('fa-times');
    // navbar.classList.remove('active');
    // form.classList.remove('active');
// }

// menu.addEventListener('click', () =>{
    // menu.classList.toggle('fa-times');
    // navbar.classList.toggle('active');
// });

// formBtn.addEventListener('click', () =>{
    // form.classList.add('active');
// });
// formClose.addEventListener('click', () =>{
    // form.classList.remove('active');
// });

// loginForm.addEventListener('submit', (event) => {
    // event.preventDefault();
    // sendMail();
// });

// function sendMail() {
    // let params = {
        // name: document.getElementById("name").value,
        // email: document.getElementById("email").value,
        // phone: document.getElementById("phone").value,
        // city: document.getElementById("city").value,
        // number: document.getElementById("number").value,
        // date1: document.getElementById("date1").value,
        // message: document.getElementById("message").value,
    // };
  
    // const serviceID = "service_eztcth8";
    // const templateID = "template_ua0ew7p";
  
          // emailjs.send(serviceID, templateID, params)
      // .then(res => {
          // console.log(res);
          // alert("Ваша заявка успешно отправлена");
          // loginForm.reset();
      // })
      // .catch((error) => {
          // console.log(error);
          // alert("Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.");
      // });
// }
    // .catch(err=>console.log(err));
// }
 

  