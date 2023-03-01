let placa,usuario,valorhora,nrodehoras,desc,total;
nombre =  prompt ("Ingrese su placa")
usuario = prompt ("Digite si es: Estudiante, Empleado, Particular")
valorhora = 1200;
nrodehoras = prompt ("Digite nrodehoras")


if (usuario == "Estudiante"){
if (nrodehoras >5){
 desc = nrodehoras*valorhora*0.20;
 total = nrodehoras * valorhora - desc;
console.log (total);
}
else (nrodehoras=4.9)
 desc= nrodehoras*valorhora*0.10;
 total = nrodehoras * valorhora - desc;
 console.log (total)
 }
 
 if (usuario == "Empleado"){
 if (nrodehoras >10){
 desc = nrodehoras*valorhora*0.15;
 total = nrodehoras * valorhora - desc;
  console.log (total);
  }
  else (nrodehoras<10)
   desc= nrodehoras*valorhora*0.5;
   total = nrodehoras * valorhora - desc;
   console.log (total)
   }
   if (usuario == "Particular"){
    if (nrodehoras >4){
    desc = nrodehoras*valorhora*0.10;
    total = nrodehoras * valorhora - desc;
    console.log (total);
    }
    else (nrodehoras<4)
     desc= nrodehoras*valorhora*0.3;
     total = nrodehoras * valorhora - desc;
     console.log (total)
     }



 



