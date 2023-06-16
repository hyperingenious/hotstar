export default class View {
  _clearTopBanner() {
    document.querySelector(".top-banner").remove();
    // document.querySelector(".top-banner").innerHTML = "";
  }
  _clearAfterHeader() {
    document.querySelector(".after-header").innerHTML = "";
  }
}
