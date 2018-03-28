import './index.scss';
import box from './box.png';

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

const elm = document.createElement('img');
elm.setAttribute('src', box);
elm.setAttribute('alt', 'another box');
document.body.appendChild(elm);
