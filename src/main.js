import Split from 'split-grid'

Split({
    minSize: 300,
    columnGutters: [{
        track: 1,
        element: document.querySelector('.gutter-col-1'),
    }],
})




const tabBtns = document.querySelectorAll('.files-tab-btn');
const htmlEditor = document.querySelector("#html-editor");
const cssEditor = document.querySelector("#css-editor");
const jsEditor = document.querySelector("#js-editor");

function switchTab(lang) {

  htmlEditor.style.display = lang === "html" ? "block" : "none";
  cssEditor.style.display = lang === "css" ? "block" : "none";
  jsEditor.style.display = lang === "js" ? "block" : "none";

  lang === "html" ? tabBtns[0].classList.add('tab-btn-active') : tabBtns[0].classList.remove('tab-btn-active');
  lang === "css" ? tabBtns[1].classList.add('tab-btn-active') : tabBtns[1].classList.remove('tab-btn-active');
  lang === "js" ? tabBtns[2].classList.add('tab-btn-active') : tabBtns[2].classList.remove('tab-btn-active');
}


window.switchTab = switchTab;
