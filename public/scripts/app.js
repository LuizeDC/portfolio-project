function sendMail() {
  var params = {
    from_name: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    emailInfo: document.getElementById("emailInfo").value,
    message: document.getElementById("message").value,
    phoneNumber: document.getElementById("phoneNumber").value,
  };
  emailjs.send("service_v0uuh08", "template_n9lmauq", params).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}

//       document.getElementById("firstName").value = " ";
//       document.getElementById("lastName").value = " ";
//       document.getElementById("emailInfo").value = " ";
//       document.getElementById("message").value = " ";
//       document.getElementById("phoneNumber").value = " ";
//       console.log(res);
//       alert("Message sent successfully!");
//     })
//     .catch((err) => console.log(err));
// }
