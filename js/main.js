/*  top button */
let Top = document.querySelector('.btn-top');

Top.addEventListener('click', (e)=>{
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth'});
});

if(window.scrollY = 0){
  Top.style.display ='none';
} else {
  Top.style.display = 'block';
}

/* 햄버거 메뉴 */
const nav_menu = document.querySelector('.menuBox-sub');
const threeIcon = document.querySelector('.menuBox .threeIcon');
const xIcon = document.querySelector('.menuBox .xIcon');

$(document).ready(function(){
  $(threeIcon).click(function(){
    $(nav_menu).toggle("slow");
    $(xIcon).toggle("slow");
    $(threeIcon).toggle("none");
  })
});

$(document).ready(function(){
  $(xIcon).click(function(){
    $(nav_menu).toggle("none");
    $(xIcon).toggle("none");
    $(threeIcon).toggle("block");
  })
});

/* openBtn */
let myWindow
    
function openBtn1() {
  myWindow = window.open('./artist.html', 'Min Dahong-Portfolio');
}
function openBtn2() {
  myWindow = window.open('./teacher.html', 'Min Dahong-Portfolio');
}

/* 모달 팝업 */
const modal = document.querySelectorAll('.d_modal'); /* 모달 팝업 전체 */
const modalOpen = document.querySelectorAll('.d_modal_btn'); /* article */
const modalClose = document.querySelectorAll('.close_btn'); /* close버튼 */
const modalPop = document.querySelector('.d_modal_popup');

for(let i=0; i<10; i++){
  modalOpen[i].addEventListener('click', function(){
    modal[i].style.display = 'block';
  });
  
  modal[i].addEventListener('click', function(e){
    modal[i].style.display = 'none';
  });

  modalClose[i].addEventListener('click', function(){  
    e.preventDefault();
    modal[i].style.display = 'none';
  });

};
