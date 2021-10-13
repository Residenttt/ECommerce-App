$(document).ready(function () {
  $("#item-add-cart").click(function (e) {
    e.preventDefault();
    const userId = JSON.parse(sessionStorage.getItem("userId"));
    let item = JSON.parse(localStorage.getItem("ItemFPage"));
    let itemId = item.productId;
    const data = {
      ref: "951b628383fb48994a79e30caa9a67da",
      customerId: userId,
      productId: itemId,
      html: userId,
    };
    const url = "https://www.jsonbulut.com/json/orderForm.php";
    if (userId != null) {
      $.ajax({
        type: "get",
        url: url,
        data: data,
        dataType: "json",
        success: function (response) {
          let html = `<div class="alert alert-success" role="alert">
          Ürün Başarıyla Sepete Eklenmiştir. Sepete Gitmek için <a href="cart.html">Tıklayınız!</a>
        </div>`;
          $(".alert-box").append(html);
        },
      });
    } else {
      window.location.href = "register.html";
    }
  });
});
