let usuario1={
    user: "leo",
    nombrecompleto: "Leonardo Figueroa",
    pass:"1234",
    saldo: 0
};
let usuario2={
    user: "daniel",
    nombrecompleto: "Daniel Lara",
    pass:"4321",
    saldo: 0
};
let usuario3={
    user: "figue",
    nombrecompleto: "Jose Lopez",
    pass:"1243",
    saldo: 0
};
let listaUsuarios = [usuario1, usuario2,usuario3];
function login(){
 const usr = document.getElementById("txtUsuario").value;
 const pass = document.getElementById("txtPass").value;
 const logueado = listaUsuarios.find(x=> x.user===usr && x.pass===pass);   
 if(logueado != undefined){
    sessionStorage.removeItem("banderalogin");
    sessionStorage.setItem("banderalogin",true);
    sessionStorage.setItem("usuario",JSON.stringify(logueado));
       window.location.replace("./index.html")
    }else {
        Swal.fire({
            icon: 'error',
            text: 'Usuario y/o contraseña incorrecta.'
          })
    }
}