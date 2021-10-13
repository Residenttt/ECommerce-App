let user;
if (localStorage.getItem("userId") != null) {
  user = localStorage.getItem("userId");
} else if (sessionStorage.getItem("userId") != null) {
  user = sessionStorage.getItem("userId");
}
const userData = JSON.parse(user);

$(document).ready(function () {
  $("#updateForm").submit(function (e) {
    e.preventDefault();
    const name = $("#userName").val();
    const surname = $("#userSurname").val();
    const phone = $("#userPhone").val();
    const email = $("#email").val();
    const password = $("#password").val();
    if (name == "") {
      $("#userName").cursor();
    } else if (surname == "") {
      $("#userSurname").cursor();
    } else if (phone == "") {
      $("#userPhone").cursor();
    } else if (email == "") {
      $("#email").cursor();
    } else if (password == "") {
      $("#password").cursor();
    }
    const data = {
      ref: "951b628383fb48994a79e30caa9a67da",
      userId: userData,
      userName: name,
      userSurname: surname,
      userMail: email,
      userPhone: phone,
      userPass: password,
    };
    const url = "https://www.jsonbulut.com/json/userSettings.php";

    $.ajax({
      type: "get",
      url: url,
      data: data,
      dataType: "json",
      success: function (response) {
        if (response.user[0].durum) {
          html = `<div class="alert alert-success mt-2" role="alert" id="alert">
          Bilgileriniz başarıyla güncellendi!
        </div>`;
          $("#formMain").append(html);
          setTimeout(function () {
            $("#alert").remove();
          }, 2000);
        } else {
          html = `<div class="alert alert-danger mt-2" role="alert" id="alert">
          ${response.user[0].mesaj}. Lütfen bilgilerinizi kontrol ediniz.
        </div>`;
          $("#formMain").append(html);
          setTimeout(function () {
            $("#alert").remove();
          }, 2000);
        }
      },
    });
  });
});
