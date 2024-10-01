class SearchView {
  _parentEl = document.querySelector(".search-form");

  getValue() {
    const type = this._parentEl.querySelector("#category").value.toLowerCase();
    const num = this._parentEl.querySelector("#number-of-cards").value;

    this._clearInput();

    return { type, num };
  }

  _clearInput() {
    this._parentEl.querySelector("#category").blur();
    this._parentEl.querySelector("#number-of-cards").blur();
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
      this.querySelector("#category").value = "";
      this.querySelector("#number-of-cards").value = "";
    });
  }
}
export default new SearchView();
