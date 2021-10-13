$(document).ready(function () {
  // Register Form Submit
  $("#registerForm").submit(function (e) {
    e.preventDefault();

    const name = $("#userName").val();
    const surname = $("#userSurname").val();
    const phone = $("#userPhone").val();
    const email = $("#email").val();
    const password = $("#password").val();
    if (name == "") {
      $("#userName").focus();
      $(".alert-box")
        .append(`<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Name</strong> boş bırakılamaz
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`);
    } else if (surname == "") {
      $("#userSurname").focus();
      $(".alert-box").append(`<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Surname</strong> boş bırakılamaz
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`);
    } else if (phone == "") {
      $("#userPhone").focus();
      $(".alert-box").append(`<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Phone</strong> boş bırakılamaz
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`);
    } else if (email == "") {
      $("#email").focus();
      $(".alert-box").append(`<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Email</strong> boş bırakılamaz
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`);
    } else if (password == "") {
      $("#password").focus();
      $(".alert-box").append(`<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Password</strong> boş bırakılamaz
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`);
    } else {
      const pushObj = {
        ref: "951b628383fb48994a79e30caa9a67da",
        userName: name,
        userSurname: surname,
        userPhone: phone,
        userMail: email,
        userPass: password,
      };
      const url = "https://www.jsonbulut.com/json/userRegister.php";

      $.ajax({
        type: "get",
        url: url,
        data: pushObj,
        dataType: "json",
        success: function (response) {
          const status = response.user[0].durum;
          const msg = response.user[0].mesaj;
          if (status) {
            // redirect
            $(".alert-box")
              .append(`<div class="alert alert-success" role="alert">
              ${msg}
              </div>`);
            setTimeout(() => {
              window.location.href = "login.html";
            }, 1200);
          } else {
            $(".alert-box")
              .append(`<div class="alert alert-danger" role="alert">
              ${msg}
             </div>`);
          }
        },
      });
    }
  });
});
