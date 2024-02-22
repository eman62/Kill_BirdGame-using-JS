window.addEventListener("load",function(){
  
   let image = this.document.images[0];

   let move_top = function(imageObject,top){
    let id =setInterval(() => {

        top = Math.random() * window.innerHeight;
        if(top <(window.innerHeight-imageObject.height)){
           imageObject.style.top=top+"px";
           move_left(image,0);
           clearInterval(id)
           
           
        }
        else{
           imageObject.style.top= 0+"px";
           move_left(image,0);
           clearInterval(id)
          
           
        }
    }, 1000);

   }
   ////////////////////////
   let move_left = function(imageObject,left){
    let id =setInterval(() => {

        left = left+10;
        if(left <(window.innerWidth-imageObject.width)){
           imageObject.style.left=left+"px"; 
           
        }
        else{
           imageObject.style.left= 0+"px";
           imageObject.classList.add("hidden");
             
        }
    }, 100);

   }
   ////////////////////////
   image.onclick = function(event){
      image.classList.add("hidden");
   }


 move_top(image,0)

   





})