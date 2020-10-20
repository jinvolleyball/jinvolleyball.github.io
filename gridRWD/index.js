const menuBtn = document.getElementById("menu_btn");
const menuList = document.getElementById("menu_list");
function menuBtnClick() {
  menuBtn.classList.toggle("is-active");
  menuList.classList.toggle("is-visible");
}
$(".menu_option").click(function () {
  $(".is_selected").removeClass("is_selected");
  this.classList.add("is_selected");
});
