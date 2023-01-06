import nodemailer from "nodemailer";

window.onload = function exampleFunction() {


    
console.log("CHAMADA");

const transporter = createTransport({

  service: "gmail",
  auth: {

    user: "tftapplication2023@gmail.com",
    pass: "tftproject"

  }

}); 

const options = {

     from: "tftapplication2023@gmail.com",
     to: "miguelcruzcolegio@gmail.com",
     subject: "Test Email To Change",
     text: "This is just a simple test email !"


};

transporter.sendMail(options, function(err, info){

  if(err){
    console.log(err);
    return;
  }

  console.log("Sent: " + info.response);


})

}