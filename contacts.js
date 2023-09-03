// function SendEmail() {
//     const form = document.getElementById('form').value;
//     var name = document.getElementById("fullNmae").value;
//     var email = document.getElementById("email_id").value;
//     var phone_No = document.getElementById("phone_no").value;
//     var subject = document.getElementById("subject").value;
//     var message = document.getElementById("message").value;

//     var body = "Name:" + name + "<br/> Email:" + email + "<br/> Contact Number:" + conatact + "<br/> Subject:" + subject + "<br/> Messages:" + message;
//     btn.value = 'Sending...';
//     Email.send({
//         SecureToken: "c3556229-a5cf-45ca-88ed-c2702364c4ca",
//         // Host: "smtp.elasticemail.com",
//         // Username: "portshiper@gmail.com",
//         // Password: "A250A72986D7FD9BE56388ACEC04F9D1CACA",
//         To: 'ogwangmark@gmail.com',
//         To: 'info@prisonstaekwondoclub.org',
//         From: "portshiper@gmail.com",
//         Subject: "message From Contact Form",
//         Body: body

//     }).then(
//         message => {
//             if (message == "OK") {
//                 swal("Successfull!", "Your Message Recieved with Gratitude!", "success");
//             }
//             else {
//                 swal("Something When Wrong", "No info sent!", "error");
//             }
//         }
//     );


// }


const form = document.getElementById('form');
const btn = document.getElementById('button');
fullName = document.getElementById('fullName');
email_Id = document.getElementById('email_id');
phone_No = document.getElementById('phone_no').value,
    message = document.getElementById('message').value

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();


        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_zfkfcev';



        emailjs.sendForm(serviceID, templateID, this)
            .then(
                message => {
                    if (message == "OK") {
                        swal("Successful!", "Your Message Received with Gratitude!", "success");
                    }
                    else {
                        swal("Congratulations!", "Your Message Received with Gratitude!", "success");
                    }
                }
            );
    });