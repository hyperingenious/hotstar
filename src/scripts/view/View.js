export default class View {
  _clearTopBanner() {
    document.querySelector(".top-banner")?.remove();
    // document.querySelector(".top-banner").innerHTML = "";
  }
  _clearAfterHeader() {
    document.querySelector(".after-header").innerHTML = "";
  }
  renderError(errMessage = "Could not fetch the results") {
    const markup = `<h1 class= "error"><span>${errMessage}</span></h1>`;

    document.querySelector(".after-header").querySelector(".spinner").remove();

    document
      .querySelector(".after-header")
      .insertAdjacentHTML("beforeend", markup);
  }
  renderSpinner() {
    const markup = `
        <svg class="spinner" viewBox="0 0 200 200" fill="none"><defs><linearGradient id="part1"><stop offset="0%" stop-color="#09194d00"></stop><stop offset="100%" stop-color="#09194d00"></stop></linearGradient><linearGradient id="part2"><stop offset="0%" stop-color="#09194D"></stop><stop offset="100%" stop-color="#09194d00"></stop></linearGradient><linearGradient id="part3" gradientTransform="rotate(90)"><stop offset="0%" stop-color="#062794"></stop><stop offset="100%" stop-color="#09194D"></stop></linearGradient><linearGradient id="part4"><stop offset="0%" stop-color="#062794"></stop><stop offset="100%" stop-color="#095AE5"></stop></linearGradient><linearGradient id="part5" gradientTransform="rotate(45)"><stop offset="0%" stop-color="#095AE5"></stop><stop offset="100%" stop-color="#0FFFFF"></stop></linearGradient><linearGradient id="part6" gradientTransform="rotate(90)"><stop offset="0%" stop-color="#0FFFFF"></stop><stop offset="100%" stop-color="#FFFFFF"></stop></linearGradient><linearGradient id="part7" gradientTransform="rotate(90)"><stop offset="0%" stop-color="#f6ffff"></stop><stop offset="100%" stop-color="#FFFFFF"></stop></linearGradient></defs><g stroke="currentColor" stroke-width="16"><path stroke="url(#part1)" d=" M 184 100 A 84 84 0 0 1 126 180" stroke-linecap="round"></path><path stroke="url(#part2)" d=" M 126 180 A 84 84 0 0 1 32 149" stroke-dasharray="106" stroke-linecap="round"><animate attributeName="strokeDashoffset" keyTimes="0; 0.4; 0.5; 0.6; 1" values="106; 106; 212; 106; 106" dur="2.6s" repeatCount="indefinite"></animate></path><path stroke="url(#part3)" d=" M 32 149 A 84 84 0 0 1 32 51" stroke-dasharray="105" stroke-linecap="round"><animate attributeName="strokeDashoffset" keyTimes="0; 0.3; 0.4; 0.6; 0.7;  1" values="105; 105; 210; 210; 105; 105" dur="2.6s" repeatCount="indefinite"></animate></path><path stroke="url(#part4)" d=" M 32 51 A 84 84 0 0 1 126 20" stroke-dasharray="106" stroke-linecap="round"><animate attributeName="strokeDashoffset" keyTimes="0; 0.2; 0.3; 0.7; 0.8; 1" values="106; 106; 212; 212; 106; 106	" dur="2.6s" repeatCount="indefinite"></animate></path><path stroke="url(#part5)" d=" M 126 20 A 84 84 0 0 1 180 74" stroke-dasharray="80" stroke-linecap="round"><animate attributeName="strokeDashoffset" keyTimes="0; 0.1; 0.2; 0.8; 0.9; 1" values="80; 80; 160; 160; 80; 80" dur="2.6s" repeatCount="indefinite"></animate></path><path stroke="url(#part7)" stroke-linecap="round" d=" M 184 97 A 84 84 0 0 1 184 99"></path><path stroke="url(#part6)" d=" M 180 74 A 84 84 0 0 1 184 100" stroke-dasharray="25" stroke-linecap="round"><animate attributeName="strokeDashoffset" keyTimes="0; 0.1; 0.9; 1" values="35; 50; 50; 35" dur="2.6s" repeatCount="indefinite"></animate></path></g></svg>
    `;
    document
      .querySelector(".after-header")
      .insertAdjacentHTML("beforeend", markup);
  }
}
