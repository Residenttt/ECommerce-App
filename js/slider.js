$(document).ready(function () {
    const data = {
        ref: "951b628383fb48994a79e30caa9a67da",
        galleryId:91,
    }
    $.ajax({
        type: "get",
        url: "https://www.jsonbulut.com/json/gallery.php",
        data: data,
        dataType: "json",
        success: function (response) {
            let item = response.Galleries[0].Gallery
            for (let i = 0; i < item.length; i++) {
                if (i == 0) {
                    html = `
                    <div class="carousel-item active">
                    <img
                      src="${item[i].img}"
                      class="d-block w-100"
                      alt="${item[i].alt}"
                    />
                    <div class="carousel-caption d-none d-md-block" id="carousel-text">
                      <h5>${item[i].alt}</h5>
                      <p>
                      ${item[i].alt}
                      </p>
                    </div>
                  </div>`
                }else{
                    html += `
                    <div class="carousel-item">
                    <img
                      src="${item[i].img}"
                      class="d-block w-100"
                      alt="${item[i].alt}"
                    />
                    <div class="carousel-caption d-none d-md-block" id="carousel-text">
                      <h5>${item[i].alt}</h5>
                      <p>
                      ${item[i].alt}
                      </p>
                    </div>
                  </div>`
                }
                $(".carousel-inner").html(html)
            }
        }
    });
});