// UI 
const day = document.querySelector('.days'),
        hour = document.querySelector('.hours'),
        minute = document.querySelector('.minutes'),
        second = document.querySelector('.seconds');


let date = new Date();

let currentyear = date.getUTCFullYear();
// let customtime =  new Date(`January 01 ${currentyear + 1} 00:00:00`);
let customtime = new Date(`October 03 ${currentyear} 00:00:00`);



function calculateremainingtime(){

    let date = new Date();
    const diff = customtime - date;

    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff/ 1000/ 60) % 60;
    const s = Math.floor(diff / 1000 ) % 60;
    // console.log(s);

    day.innerText = d < 10 ? "0"+ d: d;
    hour.innerText = h < 10 ? "0"+ h: h;
    minute.textContent = m < 10 ? "0"+m: m;
    second.textContent = s< 10? "0"+s: s;

   timing(s,second);
   timing(m,minute);
   forhr(h,hour);
   ford(d,day);

}

calculateremainingtime();

setInterval(()=>{
    calculateremainingtime();
},1000);



function timing(input,timer){
    if(input === 10){
        // console.log("hye");
        if(timer.parentElement.classList.contains('time')){
            // console.log("contains");
            timer.parentElement.classList.add('active');
        }
    }else if(input === 0){
        // console.log("contains");

        timer.parentElement.classList.remove('active');
    }
}



function forhr(input,timer){
    if(input === 1){
        // console.log("hye");
        if(timer.parentElement.classList.contains('time')){
            // console.log("contains");
            timer.parentElement.classList.add('active');
        }
    }else if(input === 0){
        // console.log("contains");

        timer.parentElement.classList.remove('active');
    }
}



function ford(input,timer){
    if(input === 1){
        // console.log("hye");
        if(timer.parentElement.classList.contains('time')){
            // console.log("contains");
            timer.parentElement.classList.add('active');
        }
    }else if(input === 0){
        // console.log("contains");

        timer.parentElement.classList.remove('active');
    }
}