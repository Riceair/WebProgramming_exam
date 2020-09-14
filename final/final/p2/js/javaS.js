function listAll(){
    const box=document.querySelector('#album-container');
    box.innerHTML='';
    for(let i in list){
        const img=document.createElement('img');
        img.src=list[i].source;
        box.appendChild(img);
    }
}
function list1990(){
    const box=document.querySelector('#album-container');
    box.innerHTML='';
    for(let i in list){
        if(list[i].year===1990){
            const img=document.createElement('img');
            img.src=list[i].source;
            box.appendChild(img);
        }
    }
}
function list2000(){
    const box=document.querySelector('#album-container');
    box.innerHTML='';
    for(let i in list){
        if(list[i].year===2000){
            const img=document.createElement('img');
            img.src=list[i].source;
            box.appendChild(img);
        }
    }
}

const b1=document.querySelector('#all');
const b2=document.querySelector('#nineties');
const b3=document.querySelector('#noughties');
const box=document.querySelector('#album-container');
for(let i in list){
    const img=document.createElement('img');
    img.src=list[i].source;
    box.appendChild(img);
}
b1.addEventListener('click',listAll);
b2.addEventListener('click',list1990);
b3.addEventListener('click',list2000);