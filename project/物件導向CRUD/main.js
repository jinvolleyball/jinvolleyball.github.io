var that;
class Tab {
  constructor(id) {
    //獲取元素
    that = this;
    this.main = document.querySelector(id);
    // this.lis = this.main.querySelectorAll("li");
    // this.sections = this.main.querySelectorAll("section");
    this.add = this.main.querySelector(".addBtn");
    // this.remove=this.main.querySelectorAll(".icon-guanbi")
    this.ul = this.main.querySelector("ul:first-child");
    this.fsection = this.main.querySelector(".tabscon");
    this.init();
  }
  //init
  init() {
    this.updateNode();
    this.add.onclick = this.addTab;
    // for (let i = 0; i < this.lis.length; i++) {
    //   this.lis[i].index = i;
    //   this.lis[i].onclick = this.toggleTab;
    //   this.remove[i].onclick=this.removeTab;
    //   this.
    // }
  }
  //update li section
  updateNode() {
    this.sections = this.main.querySelectorAll("section");
    this.lis = this.main.querySelectorAll("li");
    this.remove = this.main.querySelectorAll(".icon-guanbi");
    this.spans = this.main.querySelectorAll(".firstnav li span:first-child");
    for (let i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].onclick = this.toggleTab;
      this.remove[i].onclick = this.removeTab;
      this.spans[i].ondblclick = this.editTab;
      this.sections[i].ondblclick=this.editTab
    }
  }
  //toggleTab
  toggleTab(e) {
    that.clearClass();
    this.className = "liactive";
    that.sections[this.index].className = "conactive";
  }
  //add
  addTab() {
    that.clearClass();
    //創建li跟section元素
    var li =
      '<li class="liactive"><span>new</span><span class="iconfont icon-guanbi"></span></li>';
    var sec = '<section class="conactive">new</section>';

    //加到對應的父元素裡
    that.ul.insertAdjacentHTML("beforeend", li);
    that.fsection.insertAdjacentHTML("beforeend", sec);
    that.updateNode();
  }
  //remove
  removeTab(e) {
    //on事件預設是在冒泡事件發生
    //要阻止li的事件發生
    e.stopPropagation();
    var index = this.parentNode.index;
    console.log(index);
    that.lis[index].remove();
    that.sections[index].remove();
    that.updateNode();
    if (document.querySelector(".liactive")) return;
    if (index != 0) {
      that.lis[index - 1].click();
    }
  }
  //update
  editTab() {
    var str = this.textContent;
    console.log(this.textContent);
    this.innerHTML = "<input type='text' value=" + str + ">";
    let input = this.children[0];
    if(str=""){input.value="type"}
    input.select();
    input.onblur = function () {
    this.parentNode.innerHTML = this.value;
    };
    input.onkeyup=function(e){
      if(e.keyCode===13){
        input.blur() 
      }
    }

  }
  //clear class
  clearClass() {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = "";
      this.sections[i].className = "";
    }
  }
}
new Tab("#tab");



