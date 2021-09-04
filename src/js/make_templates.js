import { imgArr, audioArr, videoArr } from "./import_media.js";

export let str = "";

export function dispalyImg() {
   imgArr.forEach(img => {
      str += `<div class="main__list"><img src="${img.adress}" alt="" class="main__list-media"><h3 class="main__list-title">${img.title}</h3></div>`
   });

   audioArr.forEach(audio => {
      str += `<div class="main__list"><audio src="${audio.adress}"  class="main__list-media" controls></audio><h3 class="main__list-title">${audio.title}</h3></div>`
   });
   videoArr.forEach(video => {
      str += `<div class="main__list"><video src="${video.adress}" class="main__list-media" controls></video> <h3 class="main__list-title">${video.title}</h3></div>`
   });
   return str;
}
