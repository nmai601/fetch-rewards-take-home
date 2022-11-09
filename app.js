$(document).ready(function($) {
  fetch("https://frontend-take-home.fetchrewards.com/form")
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      let { occupations, states } = data;
      let occupationSelect = document.getElementById("occupation");
      let stateSelect = document.getElementById("state");

      for (let occupation of occupations){
        let option = document.createElement("option");
        option.text = occupation;
        option.value = occupation;
        occupationSelect.appendChild(option);
      }
      for (let state of states){
        let option = document.createElement("option");
        option.text = state.name;
        option.value = state.name;
        stateSelect.appendChild(option);
      }
    }).catch(function(err) {
      alert(err);
    });
});

$('#togglePassword').click( function() {
  const type = document.querySelector('#password').getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("bi-eye");
});

$('#submit').click( function() {
  const jsonFormData = {};
  const formObj = $("form.form").serializeArray();
  for(let pair of formObj){
    jsonFormData[pair.name] = pair.value;
  }

  $.ajax({
    contentType: 'application/json',
    data: JSON.stringify(jsonFormData),
    dataType: 'json',
    success: function(data){
      alert("Form submitted successfully!");
    },
    error: function(xhr, status, error) {
      alert(status,error);
    },
    processData: false,
    type: 'POST',
    url: "https://frontend-take-home.fetchrewards.com/form"
  });
});
