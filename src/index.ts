const form = document.getElementById('form') as HTMLFormElement;
const btnGuardar = document.getElementById('btn-guardar') as HTMLButtonElement;

btnGuardar.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('Ingreso al form');
    

    //Validacion del formulario


    //Obtener valores de los inputs
    const tipoDocumento = document.getElementById('tipoDocumento') as HTMLInputElement;
    const numeroDocumento = document.getElementById('numeroDocumento') as HTMLInputElement;
    const nombre = document.getElementById('nombre') as HTMLInputElement;
    const apellido = document.getElementById('apellido') as HTMLInputElement;
    const celular = document.getElementById('celular') as HTMLInputElement;
    const correo = document.getElementById('correo') as HTMLInputElement;
    const linkedin = document.getElementById('linkedin') as HTMLInputElement;
    const github = document.getElementById('github') as HTMLInputElement;

    console.log(nombre.value);
    
});