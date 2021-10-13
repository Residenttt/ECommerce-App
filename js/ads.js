$(document).ready(function () {
  const data = {
    ref: "951b628383fb48994a79e30caa9a67da",
    advertisementId: 24,
  };
  const url = "https://www.jsonbulut.com/json/advertisement.php";
  $.ajax({
    type: "get",
    url: url,
    data: data,
    dataType: "json",
    success: function (response) {
      $("#ads").attr("src", response.reklam[0].reklam.dosya);
      $("#ads-a").attr("href", response.reklam[0].reklam.dosya);
    },
  });
});
