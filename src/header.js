import myimage from './myimage.png';

function topSection() {
    let topcontent = document.querySelector('.top')
    let topimage = document.createElement('div');
    topimage.classList.add('about-image');

    //Image File
    let myimag = document.createElement('img')
    myimag.src = myimage
    myimag.classList.add('my-image');
    let mynametitle = document.createElement('h2');
    mynametitle.innerHTML = "Tomosori Joseph Mayowa";
    mynametitle.classList.add('my-name');

    topimage.appendChild(myimag)
    topimage.appendChild(mynametitle)
    topcontent.appendChild(topimage)

    return topcontent;
  }
  
  document.body.appendChild(topSection());

  export default topSection;