const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-contetn-item');

//Select Tab content item

function selectItem(e) {
    removeBorder();
    removeShow()
    //Add border to current tab
    this.classList.add('tab-border');
    // Grab content item from DOM
    console.log(this.id);
    const tabContentItem = document.getElementById(`${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('show'));
}

function removeShow() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));