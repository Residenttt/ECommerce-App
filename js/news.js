let news = [];
$(document).ready(function () {
  const data = {
    ref: "951b628383fb48994a79e30caa9a67da",
    start: 0,
    count: 20,
  };

  const url = "https://www.jsonbulut.com/json/news.php";
  $.ajax({
    type: "get",
    url: url,
    data: data,
    dataType: "json",
    success: function (response) {
      let html = `<hr/>`;
      const newsArr = response.News[0].Haber_Bilgileri;
      news = response.News[0].Haber_Bilgileri;
      for (let i = 0; i < newsArr.length; i++) {
        console.log(newsArr[i]);
        html += `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 news-card">
        <div class="card-img-top" style="width: 18rem" id="news-card">
          <img src="${newsArr[i].picture}" class="card-img-top" alt="${newsArr[i].title}" />
          <div class="card-body">
            <h5 class="card-title">${newsArr[i].title}</h5>
            <p class="card-text">
              ${newsArr[i].s_description}
            </p>
            <button type="button" class="btn btn-outline-primary" onclick="fncDetail(${i})" data-bs-toggle="modal" data-bs-target="#newsModal">
            Detay
          </button>
          </div>
        </div>
      </div>`;
      }
      $("#card").html(html);
    },
  });
  const dataIndex = {
    ref: "951b628383fb48994a79e30caa9a67da",
    start: 0,
    count: 4,
  };
  /* //! For Index */
  $.ajax({
    type: "get",
    url: url,
    data: dataIndex,
    dataType: "json",
    success: function (response) {
      let html = ``;
      const newsArr = response.News[0].Haber_Bilgileri;
      for (let i = 0; i < newsArr.length; i++) {
        console.log(newsArr[i]);
        html += `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 news-card">
        <div class="card-img-top" style="width: 18rem" id="news-card">
          <img src="${newsArr[i].picture}" class="card-img-top" alt="${newsArr[i].title}" />
          <div class="card-body">
            <h5 class="card-title">${newsArr[i].title}</h5>
            <p class="card-text">
              ${newsArr[i].s_description}
            </p>
            <button type="button" class="btn btn-outline-primary" onclick="fncDetail(${i})" data-bs-toggle="modal" data-bs-target="#newsModal">
            Detay
          </button>
          </div>
        </div>
      </div>`;
      }
      $("#news").html(html);
    },
  });
});

function fncDetail(i) {
  $("#newsModalLabel").text(news[i].title);
  $(".modal-body").html(news[i].l_description);
}
