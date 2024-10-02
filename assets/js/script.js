let listanamegastos = [];
let listavalorgasto = [];

///funcion para cuando el usuario hace click
function clickBoton(){
   let namegasto  = document.getElementById ('nombreGasto').value;
   let valorgasto = document.getElementById('valorGasto').value;
   
   
   listanamegastos.push(namegasto);
   listavalorgasto.push (valorgasto);
   console.log(listanamegastos);
   console.log(listavalorgasto);
   updatelistagasto();
}



function updatelistagasto (){
const listaelementos = document.getElementById('listaDeGastos');
const totalelemento = document.getElementById('totalGastos');
let htmllista = ' ';
let totalgasto = 0;


   listanamegastos.forEach((element,posicion) => {
      const valorGasto = Number (listavalorgasto [posicion]);

      htmllista += `<li> ${element} - DOP ${valorGasto.toFixed(2)} 
       <button " onclick="eliminargasto(${posicion});">Eliminar</button>
      </li>`;
      ///templatestring

      totalgasto += Number (valorGasto);
      console.log(totalgasto);
   });
   listaelementos.innerHTML = htmllista;
   totalelemento.innerHTML = totalgasto.toFixed(2);
   limpiar();
  
}

function limpiar(){
  

   document.getElementById ('nombreGasto').value = '';
   document.getElementById('valorGasto').value = '';
}

function eliminargasto(posicion){
   listanamegastos.splice(posicion,1);
   listavalorgasto.splice(posicion,1);
   updatelistagasto();

}
//desafios: limite de gasto ,descripcion de detalle, boton modificar