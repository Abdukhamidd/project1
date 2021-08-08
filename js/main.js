const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function selectItem() {
  removeBorder();
  removeShow();
  this.classList.add("tab-border");
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}
function removeBorder() {
  tabItems.forEach((val) => val.classList.remove("tab-border"));
}
function removeShow() {
  tabContentItems.forEach((val) => val.classList.remove("show"));
}

tabItems.forEach((val) => {
  val.addEventListener("click", selectItem);
});
