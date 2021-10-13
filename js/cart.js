let userId;
if (JSON.parse(localStorage.getItem("userId")) != null) {
  userId = JSON.parse(localStorage.getItem("userId"));
} else if (JSON.parse(sessionStorage.getItem("userId") != null)) {
  userId = JSON.parse(sessionStorage.getItem("userId"));
}
$(document).ready(function () {
  const url = "https://www.jsonbulut.com/json/orderList.php";

  const data = {
    ref: "951b628383fb48994a79e30caa9a67da",
    musterilerID: userId,
  };
  $.ajax({
    type: "get",
    url: url,
    data: data,
    cache: false,
    dataType: "json",
    success: function (response) {
      let html = `<hr/>`;
      let profileHtml = ``;
      let item = response.orderList[0];
      for (let i = 0; i < item.length; i++) {
        console.log(item[i]);
        html += `<div class="cart-container">
        <div div class="row">
          <div class="col-lg-2">
            <img
              src="${item[i].normal}"
              alt=""
              width="125"
              height="125"
              class="cart-img"
            />
          </div>
          <div class="col-lg-10">
            <h1 class="cart-item-title">${item[i].urun_adi}</h1>
            <span class="cart-item-price">${item[i].fiyat} TL</span>
          </div>
        </div>
        </div>`;
      }
      $(".cart-list").append(html);

      for (let i = 0; i < item.length; i++) {
        console.log(item[i]);
        profileHtml += `
        <div class="cartContainer">
        <img src="${item[i].thumb}" alt="${item[i].kisa_aciklama}">
        <div class="textContainer">
          <h4 class="itemTitle">
          ${item[i].urun_adi}</h4>
          <span class="itemPrice">${item[i].fiyat} ₺</span>
        </div>
      </div>`;
      }
      $("#cartMain").append(profileHtml);
    },
  });
});
