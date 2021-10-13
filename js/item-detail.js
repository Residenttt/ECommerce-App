$(document).ready(function () {
  const item = localStorage.getItem("ItemFPage");
  const itemjson = JSON.parse(item);
  console.log(itemjson);
  $(".item-img").attr("src", itemjson.images[0].normal);
  $(".item-title").text(itemjson.productName);
  $(".item-desc").text(itemjson.description);
  $(".item-price").text(itemjson.price + " ₺");

  
});
