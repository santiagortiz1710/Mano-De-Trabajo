export class Resgister {
    id?: number;
    nombre: string;
    apellido: string;
    Correo: string;
    telefono: string;
    contraseña: string;


constructor ( nombre: string, apellido: string, Correo: string, telefono: string, contraseña: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.Correo = Correo;
        this.telefono = telefono;
        this.contraseña = contraseña;


    }
}
export class login {
    id?: number;
    contraseña: string;
    Correo: string;


constructor ( Correo: string, contraseña: string){
        this.Correo = Correo;
        this.contraseña = contraseña;


    }
}