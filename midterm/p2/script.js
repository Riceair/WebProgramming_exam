function chrock(event){
    const choice=event.currentTarget;
    const img=document.querySelector('#player img');
    img.src='images/rock.png';
    cr();
}
function chpaper(event){
    const choice=event.currentTarget;
    const img=document.querySelector('#player img');
    img.src='images/paper.png';
    cp();
}
function chscissor(event){
    const choice=event.currentTarget;
    const img=document.querySelector('#player img');
    img.src='images/scissors.png';
    cs();
}
function cr(){
    const img=document.querySelector('#computer img');
    const index=Math.floor(Math.random()*3);
    if(index===0){
        img.src='images/rock.png';
        const result=document.querySelector('.show');
        result.textContent="TIE";
    }
    if(index===1){
        img.src='images/paper.png';
        const result=document.querySelector('.show');
        result.textContent="LOSE";
    }
    if(index===2){
        img.src='images/scissors.png';
        const result=document.querySelector('.show');
        result.textContent="WIN";
    }
}
function cp(){
    const img=document.querySelector('#computer img');
    const index=Math.floor(Math.random()*3);
    if(index===0){
        img.src='images/rock.png';
        const result=document.querySelector('.show');
        result.textContent="WIN";
    }
    if(index===1){
        img.src='images/paper.png';
        const result=document.querySelector('.show');
        result.textContent="TIE";
    }
    if(index===2){
        img.src='images/scissors.png';
        const result=document.querySelector('.show');
        result.textContent="LOSE";
    }
}
function cs(){
    const img=document.querySelector('#computer img');
    const index=Math.floor(Math.random()*3);
    if(index===0){
        img.src='images/rock.png';
        const result=document.querySelector('.show');
        result.textContent="LOSE";
    }
    if(index===1){
        img.src='images/paper.png';
        const result=document.querySelector('.show');
        result.textContent="WIN";
    }
    if(index===2){
        img.src='images/scissors.png';
        const result=document.querySelector('.show');
        result.textContent="TIE";
    }
}

const crock=document.querySelector('#rock');
crock.addEventListener('click',chrock);
const cpaper=document.querySelector('#paper');
cpaper.addEventListener('click',chpaper);
const cscissor=document.querySelector('#scissors');
cscissor.addEventListener('click',chscissor);