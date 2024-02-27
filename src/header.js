import myimage from './myimage.png';

function topSection() {
    let topcontent = document.querySelector('.top')
    let topimage = document.createElement('div');
    topimage.classList.add('about-image');

    let myimag = document.createElement('img')
    myimag.src = myimage
    myimag.classList.add('my-image');

  topimage.appendChild(myimag)
  topcontent.appendChild(topimage)
    return topcontent;
  }
  
  document.body.appendChild(topSection());

  export default topSection;