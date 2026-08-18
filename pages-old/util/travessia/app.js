const mult={"Orça Fechada":0.72,"Orça Aberta":0.85,"Través":1,"Alheta":0.93,"Popa":0.82};
p.oninput=()=>pv.textContent=p.value<0?"Conservadora":p.value>0?"Otimista":"Normal";
function laser(ws){if(ws<=4)return 2.5;if(ws<=6)return 3.8;if(ws<=8)return 4.8;if(ws<=10)return 5.5;if(ws<=12)return 6.1;if(ws<=15)return 6.7;if(ws<=18)return 7.1;return 7.5;}
function calc(){let dist=+d.value,wind=+v.value,eff=+a.value/100;
let est=wind*eff, estkm=est*1.852;
let base=laser(wind)*mult[dir.value];
let corr=ct.value=="A favor"?+ci.value:ct.value=="Contra"?-ci.value:0;
let final=base+corr; final*=1+(+p.value/100); if(final<0.5)final=.5;
let t1=dist/estkm,t2=dist/(final*1.852);
function fmt(h){let H=Math.floor(h),M=Math.round((h-H)*60);if(M==60){H++;M=0;}return `${H}h ${M}min`;}
o.textContent=`Estimativa percentual\n${est.toFixed(1)} nós (${estkm.toFixed(1)} km/h)\nTempo: ${fmt(t1)}\n\nEstimativa Laser\nBase: ${base.toFixed(1)} nós\nCorrigida: ${final.toFixed(1)} nós (${(final*1.852).toFixed(1)} km/h)\nTempo: ${fmt(t2)}`;}