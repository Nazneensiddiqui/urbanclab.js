const images = ["/b1.webp","/b2.webp","/b3.webp"];
let currentIndex = 0;


function changeImage() {
  const imgElement = document.getElementById("slider");
  currentIndex = (currentIndex + 1) % images.length;
  imgElement.src = images[currentIndex]; 
}
setInterval(changeImage, 2000);


