document.getElementById('dropdown-open').addEventListener('click',function (){
  document.getElementById('show-dropdown').classList.remove('d-none');
})
document.getElementById('dropdown-close').addEventListener('click',function (){
  document.getElementById('show-dropdown').classList.add('d-none');
})


let bgImage = document.getElementById("bg-cover");
let hoverImage = document.getElementsByClassName("service-icon-set");

for (let index = 0; index < hoverImage.length; index++) {
  hoverImage[index].addEventListener("mouseout", function(){
    if(hoverImage[index].classList.contains('service-icon-set')){
       bgImage.setAttribute("src", "images/web-upper-ledger-4image.png")
    }
  })

  hoverImage[index].addEventListener("mouseover", function(){
    if(hoverImage[index].classList.contains('service-icon-set')){
       let imagePath = hoverImage[index].getAttribute("data-img")
       bgImage.setAttribute("src", imagePath)
    }
  })
  
}