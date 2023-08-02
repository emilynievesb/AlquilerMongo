# Alquiler-Mongo

Este es un ejercicio de práctica para manipular y realizar consultas simulando una base de datos relacional con el siguiente esquema:

![Diagrama de base de datos](./diagrama.jpeg)

## Tecnologías usadas

- MongoDB: Base de datos NoSQL de código abierto, orientada a documentos y altamente escalable. Almacena datos en formato JSON y es ampliamente utilizado para aplicaciones web y móviles.

## Modo de uso

1. Clona el repositorio en tu máquina
1. Por favor asegúrate de tener Mongo en tu máquina, así como tambien la extensión `MongoDB for VS Code` para poder manipular y hacer conexión a la base de datos
1. Configura la extensión de la siguiente manera:

   - Selecciona la opción connect de `Connect with Connection String`
   - Seguido de esto, ingresa la siguiente url:
     `mongodb+srv://admin:<password>@cluster0.rhimngz.mongodb.net/`, reemplazando `<password>` por `admin123`
   - Aquí ya habrás hecho tu conexión al Cluster remoto y podrás hacer las peticiones que necesites.

1. Si necesitas correr únicamente solo una de las consultas, puedes seleccionar con el cursor, el `use` con el nombre de la base de datos y seguido de esto, la consulta que necesites.
1. Recuerda que la extensión solo correra si la usas desde un archivo `.mongodb`, por lo que te recomendamos usar el query que está en este repositorio.

**EL CLUSTER YA CUENTA CON LA DATA POR LO QUE NO ES NECESARIO CORRER LOS INSERT**
