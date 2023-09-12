fecha=new Date();
hora=fecha.getHours();
minutos=fecha.getMinutes();
minutosAleatorios= Math.floor(Math.random() * (601-300))+ 300;
horasA= Math.floor(minutosAleatorios/60);
minutosFinal= minutos+(minutosAleatorios%60);
horaFinal= hora+horasA;
if(minutosFinal>=60){
    horaFinal+=1;
    minutosFinal-=60;
}
if(horaFinal>=24){
    horaFinal-=24;
}


console.log("Hora Actual:", hora+":"+minutos);
console.log("Valor Aleatorio Generado en Minutos:", minutosAleatorios);
console.log("Hora Final:", horaFinal+":"+minutosFinal);
