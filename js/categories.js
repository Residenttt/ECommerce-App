$(document).ready(function () {
  const data = {
    ref: "951b628383fb48994a79e30caa9a67da",
  };
  const url = "https://www.jsonbulut.com/json/companyCategory.php";
  $.ajax({
    type: "get",
    url: url,
    data: data,
    dataType: "json",
    success: function (response) {
      let html = `<h3 class="category-title mt-2">Tüm Kategoriler</h3>`;
      let topCategories = response.Kategoriler[0].Categories.filter(x => x.TopCatogryId === "0");
      console.log(topCategories)
      for (let i = 0; i < topCategories.length; i++) {
        //console.log(response.Kategoriler[0].Categories[i]);
        let subCategories = response.Kategoriler[0].Categories.filter(x => x.TopCatogryId === topCategories[i].CatogryId);
        if (topCategories[i].TopCatogryId == 0) {
          html += `
          <div class="btn-group dropend">
                <a
              href=""
              id="category-dropend"
              class="dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ${topCategories[i].CatogryName}
            </a>
            `
            html +=  `<ul class="dropdown-menu" id="category-dropdown">
            <a href="item-list.html?categoryId=${topCategories[i].CatogryId}"><h5 class="category-title mt-1">${topCategories[i].CatogryName.toUpperCase()}</h5></a>`
            
            for (let j = 0; j < subCategories.length; j++) {
               html+= `<li><a href="item-list.html?categoryId=${subCategories[j].CatogryId}">${subCategories[j].CatogryName}</a></li>`
                
            }
            html += `</ul></div>`
        } 
      }
      $(".categories-container").html(html);
    },
  });
});
