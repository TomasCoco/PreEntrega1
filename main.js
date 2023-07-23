function alquilarAuto(){

    do{
        var edad = prompt("Por favor, ingrese su edad")

         if(edad >= 18){
                 alert("¡Su edad es de " + edad + " años, puede alquilar un auto!")
             }else{
                 alert("Usted es menor de edad, no puede alquilar aún.")
             }
 
     }while(edad.toLowerCase() !== "fin")
  
 }
 
 alquilarAuto()

