const form=document.querySelector("form")
const fio=document.querySelector("#fio")
const myplace=document.querySelector("#myplace")
const date_of_start=document.querySelector("#date_of_start")
const persons=document.querySelector("#persons")
const nights=document.querySelector("#nights")

form.addEventListener ("submit", function(event){
   event.preventDefault()   
   document.querySelector("#p1").innerHTML="<h3>ФИО: "+fio.value+"</h3>"
   document.querySelector("#p2").innerHTML="<H3>Куда едем: "+myplace.value+"</h3>"
   document.querySelector("#p3").innerHTML="<H3>Когда едем: "+date_of_start.value+"</h3>"
   document.querySelector("#p4").innerHTML="<H3>Количество персон: "+persons.value+"</h3>"
   document.querySelector("#p5").innerHTML="<H3>Количество ночей: "+nights.value+"</h3>"
})

const travel=document.querySelector("header h1")
window.addEventListener("scroll", function(event){
   console.log(scrollY)
   if (scrollY>100) {
      travel.style.marginLeft=scrollY*-1+100+"px"
   }
   else {
      travel.style.marginLeft="50px"
   }
})

const alaskaL=document.querySelector("#left")
const alaskaR=document.querySelector("#right")
window.addEventListener("scroll", function(event){
   if (scrollY>600){
      alaskaL.style.transform="translateX(-100px)"
      alaskaR.style.transform="translateX(100px)"
   }
   if (scrollY>1000){
      alaskaL.style.transform="translateX(0)"
      alaskaR.style.transform="translateX(0)"
         }    
})

const japanImg=document.querySelectorAll("#Japan img")
const japanTxt=document.querySelector("#Japan div")
window.addEventListener("scroll", function(event){
   if (scrollY>1500){
      japanImg[0].style.transform="scale(1.1)"
      japanImg[1].style.transform="scale(1.1)"
      japanTxt.style.transform="skewY(10deg)"
   }
   if (scrollY>1700 || scrollY<1500){
      japanImg[0].style.transform="scale(1)"
      japanImg[1].style.transform="scale(1)"
      japanTxt.style.transform="skewY(0)"
         }    
})

const chineesImg=document.querySelector("#Chinees img")
window.addEventListener("scroll", function(event){
   if (scrollY>2000){
      chineesImg.style.transform="rotate(45deg)"
   }
   if (scrollY>2200){
      chineesImg.style.transform="rotate(0deg)"
         }    
})

const egyptImg=document.querySelectorAll("#Egypt img")
window.addEventListener("scroll", function(event){
   if (scrollY>2600){
      egyptImg[0].style.objectPosition="50% 50%"
   }
   if (scrollY>3000){
      egyptImg[0].style.objectPosition="0% 0%"
         }    
})

