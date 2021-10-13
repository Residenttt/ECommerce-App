if (
  sessionStorage.getItem("userId") != null ||
  localStorage.getItem("userId") != null
) {
  html = `
      <a href="profile.html" class="btn btn-outline-success m-1"
      ><i class="fas fa-user"></i> Profilim</a
    >
      <a href="cart.html" class="btn btn-outline-danger m-1"><i class="fas fa-shopping-cart"></i> Sepet</a>
      <a href="index.html" onclick=fncExit() class="btn btn-outline-danger m-1"><i class="fas fa-sign-out-alt"></i> Çıkış Yap</a>`;
  $("#login").html(html);
} else {
  html = `
    <a href="login.html" class="btn btn-outline-success m-1"
    ><i class="fas fa-sign-in-alt"></i> Giriş Yap</a
  >
  <a href="register.html" class="btn btn-outline-success m-1"
    ><i class="fas fa-user-plus"></i> Kayıt Ol</a
  >`;
  $("#login").html(html);
}

function fncExit() {
  /*   localStorage.removeItem("userId");
  sessionStorage.removeItem("userId"); */
  localStorage.clear();
  sessionStorage.clear();
}
