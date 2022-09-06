
let img=["./images/natural.jpg","./images/natural1.jpg","./images/natural2.jpg","./images/natural3.jpg"],

 change=document.getElementById("sli-img"),i=0;
 
 document.getElementById("next").addEventListener("click",ago);
 
 function ago(){

	 i++;
	 if(i<=img.length){
		if(i==img.length){
			i=0;
			
		}
		change.src=img[i] ;
	}
}
