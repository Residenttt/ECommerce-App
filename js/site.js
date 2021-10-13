/* Refferer control for addCart */
// Her addChart yapildiginda onceki sayfayi kontrol eder ve login olduktan sonra dönülecek sayfayı belirler
let x = document.referrer;
console.log(x);
localStorage.setItem("refferer", x);

