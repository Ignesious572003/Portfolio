let subnav=document.getElementsByClassName("SubNav")[0];
// let sts=true

function touch(){
    // sts= !sts
    // console.log(sts)
    // if(sts===false){
    //     subnav.style.transform=" translateX(0%)";
    // }else{
    //     subnav.style.transform=" translateX(100%)";
        
    // }
    subnav.classList.toggle("active");
    
}