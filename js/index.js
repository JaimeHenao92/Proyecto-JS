// Variable global para almacenar el total del carrito
let totalCarrito = 0;

function mostrarprecio(codigo) {
    let precio = 0;

    switch (codigo) {
        case 1:
            precio = 110000;
            alert("Tiene un valor de $110000 el saco de 50 kg");
            break;
        case 2:
            precio = 80000;
            alert("Tiene un valor de $80000 el saco de 50 kg");
            break;
        case 3:
            precio = 120000;
            alert("Tiene un valor de $120000 el saco de 50 kg");
            break;
        case 4:
            precio = 110000;
            alert("Tiene un valor de $110000 el saco de 50 kg");
            break;
        case 5:
            precio = 100000;
            alert("Tiene un valor de $100000 el saco de 50 kg");
            break;

        case 6:
             precio = 90000;
             alert("Tiene un valor de $90000 el saco de 50 kg");
             break;
            case 7:
              precio = 70000;
             alert("Tiene un valor de $70000 el saco de 50 kg");
             break;
            case 8:
             precio = 80000;
             alert("Tiene un valor de $80000 el saco de 50 kg");
             break;
            default:
                alert("Selecciona una opción");
        }
    
        
        totalCarrito += precio;
    }
    
    function mostrarcuotas() {
        console.log("Paga en:");
        for (let i = 1; i <= 6; i++) {
            console.log(i + " Cuota(s) sin interés");
        }
    }

    function calcularCuota(total, cantidad) {
        return total / cantidad;
      }
    
      function consultarconcentrado() {
        let codigoconcentrado = prompt("Ingresa código del concentrado deseado");
      
        if (codigoconcentrado !== "" && codigoconcentrado !== null) {
          mostrarprecio(parseInt(codigoconcentrado));
          mostrarcuotas();
          console.log("Total del carrito: $" + totalCarrito);
      
          // cantidad de cuotas
          let cantidad_cuotas = prompt("¿A cuántas cuotas quieres llevar tu compra?");
      
          // cuotas sea un número
          if (cantidad_cuotas.match(/^[0-9]+$/)) {
      
            // valor de cada cuota
            let total_cuota = calcularCuota(totalCarrito, cantidad_cuotas);
      
            // Imprimir el valor de cada cuota
            console.log("Valor de cada cuota: $" + total_cuota);
          } else {
            console.warn("La cantidad de cuotas debe ser un número.");
          }
        } else {
          console.warn("Ingresa un código correcto!");
        }
      }
    