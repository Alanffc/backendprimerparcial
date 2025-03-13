# Backend de Gestion de Usuarios y Productos

Este es un backend desarrollado en **Node.js** y **Express.js** que permite gestionar dos colecciones principales: **Usuarios** y **Productos**. Está conectado a una base de datos en **MongoDB Atlas**, lo que significa que puedes almacenar y acceder a tus datos desde cualquier lugar.

---

## ¿Qué puedes hacer con este backend?

Este proyecto te permite realizar operaciones **CRUD** (Crear, Leer, Actualizar y Eliminar) sobre las colecciones de **Usuarios** y **Productos**. Además, incluye dos características adicionales:

1.  **Contadores de registros**: Puedes consultar cuántos usuarios y productos hay en la base de datos.
2.  **Contador de operaciones**: El backend lleva un registro de todas las operaciones que se han realizado.

---

## Requisitos

Antes de empezar, asegúrate de tener instalado lo siguiente:

-   **Node.js** (v16 o superior).
-   **MongoDB Atlas**: Una cuenta gratuita para usar la base de datos en la nube.
-   **Postman**: Para probar las rutas del backend.

---

## Instalación

Sigue estos pasos para poner en marcha el proyecto:

1.  **Clona el repositorio**:

    ```bash
    git clone https://github.com/Alanffc/backendprimerparcial.git
    ```

2.  **Instala las dependencias**:

    Navega a la carpeta del proyecto y ejecuta:

    ```bash
    npm install
    ```

3.  **Configura el archivo `.env`**:

    Crea un archivo llamado `.env` en la raíz del proyecto y agrega lo siguiente:

    ```
    MONGODB_URI=mongodb+srv://user1:hola123@cluster0.kjo94.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    PORT=3000
    ```

    -   

4.  **Inicia el servidor**:

    Ejecuta el siguiente comando:

    ```bash
    npm start
    ```

    Si todo está bien, verás un mensaje como este:

    ```
    Servidor en http://localhost:3000
    Conectado a MongoDB Atlas
    ```

---

## Endpoints disponibles

Aquí tienes una lista de las rutas que puedes usar:

### Usuarios

-   **Crear un usuario**: `POST /usuarios`
-   **Obtener todos los usuarios**: `GET /usuarios`
-   **Actualizar un usuario por ID**: `PUT /usuarios/:id`
-   **Eliminar un usuario por ID**: `DELETE /usuarios/:id`

### Productos

-   **Crear un producto**: `POST /productos`
-   **Obtener todos los productos**: `GET /productos`
-   **Actualizar un producto por ID**: `PUT /productos/:id`
-   **Eliminar un producto por ID**: `DELETE /productos/:id`

### Contadores

-   **Obtener el número de registros**: `GET /contadores`
    -   Devuelve el número de usuarios y productos en la base de datos.

### Operaciones

-   **Obtener el total de operaciones**: `GET /operaciones`
    -   Devuelve el número total de operaciones realizadas en el backend.

---

## Ejemplos de uso

### Crear un usuario

-   **Método**: POST
-   **URL**: `http://localhost:3000/usuarios`
-   **Body** (JSON):

    ```json
    {
      "nombre": "Carlos",
      "edad": 28,
      "ocupacion": "Desarrollador"
    }
    ```

### Obtener todos los productos

-   **Método**: GET
-   **URL**: `http://localhost:3000/productos`

### Actualizar un producto

-   **Método**: PUT
-   **URL**: `http://localhost:3000/productos/67c7ce0ca8e2dbe84d1039a3`
-   **Body** (JSON):

    ```json
    {
      "precio": 250
    }
    ```

---