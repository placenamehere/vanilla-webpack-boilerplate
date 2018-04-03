import './index.scss';
import box from './box.png';
import star from './star.svg';

const SVG_NS = 'http://www.w3.org/2000/svg';
const XLINK_NS = 'http://www.w3.org/1999/xlink';

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

// testing inclusion of .png with simple img:src
const boxElm = document.createElement('img');
boxElm.setAttribute('src', box);
boxElm.setAttribute('alt', 'another box');
document.body.appendChild(boxElm);

// testing inclusion of .svg use:xlink to access DOM
const useElm = document.createElementNS(SVG_NS, 'use');
useElm.setAttributeNS(XLINK_NS, 'href', `${star}#Page-1`);
const starElm = document.createElementNS(SVG_NS, 'svg');
starElm.setAttribute('viewBox', '0 0 65 65');
starElm.appendChild(useElm);
document.body.appendChild(starElm);

// testing inclusion of .svg with simple img:src
const starImgElm = document.createElement('img');
starImgElm.setAttribute('src', star);
starImgElm.setAttribute('alt', 'another star');
document.body.appendChild(starImgElm);
