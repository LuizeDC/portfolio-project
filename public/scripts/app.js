function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_mx0ssxe";
  const templateID = "template_ynswuko";

  emailjs
    .send("service_mx0ssxe", "template_ynswuko", params)
    .then(function (res) {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phoneNumber").value = "";
      document.getElementById("message").value = "";
      alert("Success!");
    })
    .catch((err) => console.log(err));
}
