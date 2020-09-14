class App{
    constructor(){
        this.finish=this.finish.bind(this);
        this.finBox=[];
        for(let j=0;j<3;j++){
            this.finBox.push(0);
        }
        const present=[];
        for(let i=0;i<3;i++){
            const newimg=new buttom(i,this.finish);
            present.push(newimg);
        }
    }
    finish(finishedN){
        this.finBox[finishedN]=1;
        if(this.finBox[0]===1 && this.finBox[1]===1 && this.finBox[2]===1){
            const done=document.querySelector('h1');
            done.textContent='Enjoy your presents!';
        }
    }
}

class buttom{
    constructor(pictureN,callback){
        this.pictureN=pictureN;
        this.callback=callback;
        this.onClick=this.onClick.bind(this);
        const imgcontainer=document.querySelector('div');
        const newImg=document.createElement('img');
        newImg.src='images/gift.png';
        imgcontainer.appendChild(newImg);
        newImg.addEventListener('click',this.onClick);
    }
    onClick(event){
        let change=event.currentTarget;
        if(this.pictureN===0){
            change.src='images/cake.gif';
        }
        else if(this.pictureN===1){
            change.src='images/tv.gif';
        }
        else if(this.pictureN===2){
            change.src='images/pocky.gif';
        }
        change.removeEventListener('click',this.onClick);
        this.callback(this.pictureN);
    }
}