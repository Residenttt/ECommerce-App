$(document).ready(function () {
  $("#loginForm").submit(function (e) {
    e.preventDefault();

    const email = $("#email").val();
    const password = $("#password").val();
    console.log(email);

    if (email == "") {
      $("#email").focus();
      $(".alert-box")
        .append(`<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Eposta</strong> boş bırakılamaz
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`);
    } else if (password == "") {
      $("#password").focus();
      $(".alert-box")
        .append(`<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Password</strong> boş bırakılamaz
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`);
    } else {
      const pushObj = {
        ref: "951b628383fb48994a79e30caa9a67da",
        userEmail: email,
        userPass: password,
        face: "no",
      };
      const url = "https://www.jsonbulut.com/json/userLogin.php";

      $.ajax({
        type: "get",
        url: url,
        data: pushObj,
        dataType: "json",
        success: function (response) {
          const status = response.user[0].durum;
          const msg = response.user[0].mesaj;
          let ref = localStorage.getItem("refferer");
          let splitRef = ref.split("/");
          if (status) {
            const item = JSON.stringify(response.user[0].bilgiler.userId);

            // ! Remember Me Control
            if ($("#remember").is(":checked")) {
              localStorage.setItem("userId", item);
              sessionStorage.setItem("userId", item);
            } else {
              sessionStorage.setItem("userId", item);
            }
            // redirect
            $(".alert-box")
              .append(`<div class="alert alert-success" role="alert">
            ${msg}
            </div>`);
            // Redirect control splitRef reffererin son kismini aliyor xxx.html kismi
            // itemFPage de eger o oturumda herhangi bir ürüne girdiyse ve oradan register.html gittiyse kontrolü
            if (
              splitRef[3] == "item-detail.html" ||
              (sessionStorage.getItem("ItemFPage") != null &&
                splitRef[3] == "register.html")
            ) {
              setTimeout(() => {
                window.location.href = "item-detail.html";
              }, 1200);
            } else {
              setTimeout(() => {
                window.location.href = "index.html";
              }, 1200);
            }
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
