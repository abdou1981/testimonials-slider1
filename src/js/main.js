let iconButton = document.querySelectorAll(".icon-btn");
let section = document.querySelectorAll("section");

[...iconButton].map(el => el.addEventListener("click", function(){
  [...section].map(el => {
    el.classList.toggle("section-01");
    el.classList.toggle("section-02");
  })
}))