let item = [];
$(document).ready(function () {
  const itemCount = 6;
  const url = "https://www.jsonbulut.com/json/product.php";
  const data = {
    ref: "951b628383fb48994a79e30caa9a67da",
    start: 0,
    count: itemCount,
    order: "desc",
  };
  $.ajax({
    type: "get",
    url: url,
    data: data,
    dataType: "json",
    success: function (response) {
      const items = response.Products[0].bilgiler;
      item = items;
      let html = ``;
      for (let i = 0; i < items.length; i++) {
        html += `
          <div class="item-card col-xl-2 col-lg-2 col-md-4 col-6">
          <div class="img-container">
          <a onclick="fncClick(${i})" href="item-detail.html"
            ><img
              src="${items[i].images[0].normal}"
              alt="${items[i].productName}"
              class="card-img"
          /></a></div>
          <div class="text-container">
          <a href="item-detail.html" class="card-text">${items[i].productName}</a>
          </div>
          <span class="card-price">${items[i].price} ₺</span>
        </div>`;
      }
      $("#popular-items").html(html);
    },
  });
});

function fncClick(i) {
  let itempage = JSON.stringify(item[i]);
  localStorage.removeItem("ItemFPage");
  sessionStorage.removeItem("ItemFPage");
  localStorage.setItem("ItemFPage", itempage);
  sessionStorage.setItem("ItemFPage", itempage);
}
