const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click" , () =>{
  headerElem.classList.toggle("active");
});


// const p_btns = document.querySelector(".p-btns");
// const p_btn= document.querySelectorAll(".p-btn");
// const p_img_elem = document.querySelectorAll("img-overlay");

// p_btns.addEventListener("Click",(e) => {
//   const p_btn_cicked = e.target;
//   console.log(p_btn_cicked);

//   p_btn.forEach((curElem) => {curElem.classList.remove("p-btn-active")});
//   p_btn_clicked.classList.add("p-btn-active");

//   const btn_num = p_btn_clicked.dataset.btnNum;
//     console.log(btn_num);

//     const img_active  = document.querySelectorAll(`.p-btn--${btn_num}`);

//     p_img_elem.forEach((curElem)=>curElem.classList.add("p-image-not-active"));

//     img_active.forEach((curElem)=> curElem.classList.remove("p-image-not-active"));  
// })
