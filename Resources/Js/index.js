var randomChange = document.getElementById('home'),
images = ['https://wallpapershome.com/images/pages/pic_h/4714.jpg', 'Resources/images/bg1.jpg','Resources/images/bg2.jpg','Resources/images/bg3.jpg','Resources/images/bg4.jpg']

let imgCount = images.length;

let number = Math.floor(Math.random() * imgCount);
// alert(number)

window.onload = function(){
 randomChange.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.500),rgba(0,0,0,0.50)), url(' + images[number] + ')';
}