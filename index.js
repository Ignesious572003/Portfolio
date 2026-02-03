let subnav=document.getElementsByClassName("SubNav")[0];
let sts=true

function touch(){
    sts= !sts
    console.log(sts)
    if(sts===false){
        subnav.style="right:5px"
    }else{
        subnav.style="right:-50%"
        
    }
    
}