SOFTWARE DE GESTION DE MANTENIMIENTO

Aplicación web diseñada para gestionar  el departamento de mantenimiento de una empresa.

El programa maneja diferentes usuarios que tienen permisos dependiendo del rol.

-Rol Admin: Tiene completo control de todas las funcionalidades del programa, sin embargo es el único que tiene permisos para registrar nuevos usuarios.

-Rol Leader: Puede listar empleados, actividades de mantenimiento, repuestos de almacén, notificaciones o avisos de mantenimiento y crear ordenes de mantenimiento.

-Rol technician: Puede ver las ordenes de mantenimiento q le son asignadas y ejecutarlas, notificar o dar avisos de solicitud de mantenimiento, notificar problemas al usar la plataforma.

-Rol operator: solo tiene acceso a una pagina para notificar fallas en los equipos.

Frontend: Elaborado en ReactJS, SASS, Bootstrap5.  
-Protección de rutas (roles) -Creación de interfaces para la gestión de órdenes de mantenimiento.

Backend: Elaborado con NodeJs – Express – MongoDB - JWT 
-Autenticación de usuarios (JWT) - Protección de rutas (middlewares)
- Configuración y elaboración de endpoints Backend.
