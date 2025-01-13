let valuedisplay = document.querySelectorAll(".num");
let interval=5000;
valuedisplay.forEach((valuedisplay)=>{
    let startv=60;
    let endv=parseInt(valuedisplay.getAttribute("data-val"));
    let duration = Math.floor(interval/endv);
    let counter=setInterval(function(){
        startv+=1;
        valuedisplay.textContent=startv
        if(startv==endv){
            clearInterval(counter);
        }
    },duration )
});
const navEl=document.querySelector('#nav');
window.addEventListener('scroll',()=>{
    if (window.scrollY >=56){
        navEl.classList.add('navbtn-scrolled')
    }else if(window.scrollY <56){
        navEl.classList.remove('navbtn-scrolled')
    }
}
);
