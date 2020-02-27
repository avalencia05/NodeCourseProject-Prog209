let apptArray = [];
//let selectedGenre = "not selected";

// define a constructor to create player objects
var ApptObject = function (pName, pEmail, pPhone, pDate, pTime) {
  this.Name = pName;
  this.Email = pEmail;
  this.Phone = pPhone;
  this.Date = pDate;  // action  comedy  drama  horrow scifi  musical  western
  this.Time = pTime;
}

movieArray.push(new ApptObject("Joyce Grey", "joyce.grey@gmail.com", "(206)555-1023"));
movieArray.push(new ApptObject("Winnie Rose","winnie.rose@outlook.com", "(206)555-5603"));
movieArray.push(new ApptObject("Ash White", "ash.white@live.com", "(206)555-9284"));

document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("buttonAdd").addEventListener("click", function () {
    apptArray.push(new ApptObject(document.getElementById("name").value, document.getElementById("email").value, 
    document.getElementById("phone").value, document.getElementById("date").value, document.getElementById("time").value));
});
  //when there is a change in the genre, the system will recognize the change 
  // $(document).bind("change", "#select-genre", function (event, ui) {
  //   selectedGenre = $('#select-genre').val();
  // });

  document.getElementById("buttonSortDate").addEventListener("click", function () {
    apptArray.sort(dynamicSort("Date"));
    createList();
    //document.location.href = "index.html#ListAll";
  });

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}