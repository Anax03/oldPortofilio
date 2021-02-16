const TypeWriter = function (txtElement,words,wait=3000){
this.txtElement=txtElement;
this.words=words;
this.txt='';
this.wordIndex=0;
this.wait=parseInt(wait,10);
this.type();
this.isDeleate=false;
};

TypeWriter.prototype.type= function(){
    const current =this.wordIndex % this.words.length;
    const fullText=this.words[current];
    console.log(fullText);

    if(this.isDeleate){
        this.txt=fullText.substring(0,this.txt.length-1);
    }
    else{

        this.txt=fullText.substring(0,this.txt.length+1);
    }
    
    this.txtElement.innerHTML = `<span class="txt"> ${this.txt} </span>`;
    let typeSpeed=300;
    if(this.isDeleate){
        typeSpeed/=2;
    }
    if(!this.isDeleate && this.txt=== fullText){

        typeSpeed =this.wait;
        this.isDeleate=true;
    }
    else if(this.isDeleate && this.txt===''){
   this.isDeleate=false;
   this.wordIndex++;
   typeSpeed=500;
    }
    setTimeout(()=> this.type(),typeSpeed)
    
    
}

document.addEventListener('DOMContentLoaded',init);

function init(){
    const txtElement = document.querySelector('.txto');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait= txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement,words,wait);
}

