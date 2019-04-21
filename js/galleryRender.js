function renderGallery() {
  var template = `
    <a href="{{{img}}}" class="image-popup img-hover">
      <span class="icon icon-search"></span>
      <img src="{{{img}}}" alt="Image placeholder" class="img-fluid">
    </a>`;


  // please change these file to add more images
  // e.g.
  // 'img_1.jpg',
  // 'img_2.jpg',
  // 'img_3.jpg',
  // 'img_4.jpg',
  // 'img_5.jpg',
  // 'img_6.jpg',
  //  path names will be appended automatically
  //  images will appear in this order
  var strs = [
    'IMG_1.jpg',
    'IMG_10.JPG',
    'IMG_11.JPG',
    'IMG_12.JPG',
    'IMG_13.JPG',
    'IMG_14.jpg',
    'IMG_2.jpg',
    'IMG_3.jpg',
    'IMG_4.JPG',
    'IMG_5.JPG',
    'IMG_6.JPG',
    'IMG_7.JPG',
    'IMG_8.JPG',
    'IMG_9.JPG',
    'IMG_15.jpg',
  ];

  var node = document.getElementById('gallery-content');
  for (var imgPath of strs) {
    var cp = template.replace("{{{img}}}", 'images/Gallery/' + imgPath);
    cp = cp.replace("{{{img}}}", 'images/Gallery/' + imgPath);
    var temp = document.createElement('div');
    temp.className = "col-md-4";
    temp.innerHTML = cp;
    node.append(temp);
  }
}