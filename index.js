let banderalogin = sessionStorage.getItem("banderalogin");   
if(banderalogin==="false"){
window.location.replace("login.html");
}

let usuario = JSON.parse(sessionStorage.getItem("usuario"));
document.getElementById('infocuenta').innerHTML = usuario.nombrecompleto;

function cerrarSesion(){
    sessionStorage.removeItem("banderalogin");
    sessionStorage.setItem("banderalogin", false);
    window.location.replace("login.html");

}


function consultar(){
    Swal.fire({
        icon: 'info',
        text: 'Tu saldo es de: '+usuario.saldo+" pesos."
      })
}

function depositar(){
    Swal.fire({
        title: 'Cuanto desea depositar?',
        input: 'number',
        showCancelButton: true,
        confirmButtonText: 'Depositar',
        cancelButtonText:'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: (deposito) => {
            if(Number(deposito)<=0){
                Swal.fire({
                    icon: 'error',
                    text: 'El monto debe ser mayor que 0'
                  }) 
            }
            if(Number(deposito)>2000){
                Swal.fire({
                    icon: 'error',
                    text: 'El monto maximo para depositar son $2000 pesos'
                  }) 
            }else{
                usuario.saldo = usuario.saldo + Number(deposito);
            }
          
        },
        allowOutsideClick: () => !Swal.isLoading()
      })
}

function retirar(){
    Swal.fire({
        title: 'Cuanto desea retirar?',
        input: 'number',
        showCancelButton: true,
        confirmButtonText: 'Retirar',
        cancelButtonText:'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: (retiro) => {
            if(Number(retiro)<=0){
                Swal.fire({
                    icon: 'error',
                    text: 'El monto debe ser mayor que 0'
                  }) 
            }
            if(Number((usuario.saldo - Number(retiro)))<10 ){
                Swal.fire({
                    icon: 'error',
                    text: 'Debe dejar un saldo minimo de $10 pesos'
                  }) 
            }else{
                usuario.saldo = usuario.saldo - Number(retiro);
            }
        },
        allowOutsideClick: () => !Swal.isLoading()
      })
}