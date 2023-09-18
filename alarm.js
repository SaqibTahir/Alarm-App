let selecttime = document.querySelectorAll('select');
let tune;
let ring =  new Audio('alarm_buzzer.mp3');
let i = 12;

while (i >= 1) {
  let value = i < 10 ? '0' + i : i;
  let option = `<option value="${value}">${value}</option>`;
  selecttime[0].insertAdjacentHTML('beforeend', option);
  i--;
}
let j = 59
while (j >= 1) {
  let value = j < 10 ? '0' + j : j;
  let option = `<option value="${value}">${value}</option>`;
  selecttime[1].insertAdjacentHTML('beforeend', option);
  j--;
}
let k=2
while (k >= 1) {
  let ampm=k==1 ?'AM':'PM'
  let option = `<option value="${ampm}">${ampm}</option>`;
  selecttime[2].insertAdjacentHTML('beforeend', option);
  k--;
}
setInterval(() => {
    let date = new Date();
    h=date.getHours();
    m=date.getMinutes();
    s=date.getSeconds();
    ampm='AM';
    if(h>=12){
        h=h-12;
        ampm='PM';
    }
    else if(h==0){
        h=12;
    }
    
    // for getting hours-------------------
    if(h<10){
         h='0'+ h;
    }
   
    // for getting minutes-------------------
    if(m<10){
        m='0'+ m;
    }
   
    // for getting seconds-------------------
    if(s<10){
        s='0'+ s;
    }
    
     document.getElementById('count').innerHTML=`${h}:${m}:${s} ${ampm}`
     if(tune == `${h}:${m} ${ampm}`){
        document.getElementById('img').classList.add('shake')
       ring.play();
       ring.loop=true;
      }

}, 1000);
let settime= document.getElementById('btn').addEventListener('click',()=>{
    let time1 =`${selecttime[0].value}:${selecttime[1].value} ${selecttime[2].value}`
    if(time1.includes('Hours')||time1.includes('Minutes')||time1.includes('AM/PM')){
         return alert('please ! set the Alarm');
         
    }
    tune= time1;
    
})
setInterval(()=>{
        document.getElementById('img').classList.toggle('img')
    

} ,1000)
   

    


