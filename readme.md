# Proyecto: Aplicación de Cafetería (Arquitectura Monolítica)

## 1. Descripción del Proyecto

El presente proyecto ha sido desarrollado como parte del Trabajo Práctico de la asignatura **"Taller de Lenguajes de Programación IV"**.  
El objetivo es diseñar e implementar una aplicación web funcional (**elegimos una cafetería digital**) adhiriendo estrictamente a una **arquitectura monolítica**.

En esta arquitectura, el sistema completo, incluyendo la lógica de negocio (server), la interfaz de usuario (cafeapp) y la persistencia de datos, se gestiona como una única unidad de despliegue.  
El servidor backend es responsable tanto de servir la API como de entregar los archivos estáticos de la aplicación de cliente.

---

## 2. Tecnologías Implementadas

- **Frontend:** React (con Vite y TailwindCSS)
- **Backend:** Node.js, Express, JS 
- **Base de Datos:** MongoDB (con Mongoose)  
- **Autenticación:** JSON Web Tokens (JWT)  
- **Seguridad:** bcrypt (para encriptación de contraseñas)  
- **Gestión de Entorno:** dotenv  

---

## 3. Estructura del Repositorio

La estructura del proyecto separa el código del cliente y del servidor en dos directorios principales a nivel raíz:

```
/tlp-arquitectura-monolitica
├── /cafeApp/         (Contiene la aplicación Frontend)
│   
├── /server/          (Contiene el servidor Backend de Express)
│  
└── README.md
```

---

## 4. Instalación y Ejecución

### Requisitos Previos

- Node.js (v22.18.0)  
- NPM (v10.9.3)  
- MongoDB (una instancia local o un clúster de Atlas)

---

### 4.1. Configuración del Proyecto

**Clonar el repositorio:**

```bash
git clone https://github.com/ArianneAlonso/tlp-arquitectura-monolitica.git
cd tlp-arquitectura-monolitica
```

**Configurar variables de entorno:**

Crear un archivo `.env` dentro de la carpeta `/server` con el siguiente contenido, ajustando `MONGODB_URI` según sea necesario:

```env
MONGODB_URI=mongodb://localhost:27017/cafeteria
JWT_SECRET=bytecafeteriajwtsecret123456789
PORT=5000
```

---

### 4.2. Ejecución en Modo Desarrollo (Dos Terminales)

**Terminal 1 (frontend):**

```bash
cd cafeapp
npm install
```
**Terminal 2 (backend):**

```bash
cd server
npm install
node index.js
```

El servidor backend estará corriendo en:  
 [http://localhost:5000]


## 5. Funcionalidades Implementadas

### Gestión de Autenticación

- Registro de nuevos usuarios con validación y encriptación de contraseña.  
- Inicio de sesión de usuarios existentes, generando un JSON Web Token (JWT) para la gestión de sesiones.  
- Protección de rutas y funcionalidades (como el menú de pedidos) para usuarios no autenticados.

### Gestión de Pedidos

- Visualización de productos del menú, con capacidad de filtrado por categoría.  
- Buscador dinámico de productos.  
- Sistema de carrito de compras para agregar, eliminar y modificar cantidades de productos.  
- Cálculo en tiempo real del total del pedido.  
- Confirmación de pedido con selección de método de pago (efectivo o tarjeta).  
- Almacenamiento del pedido finalizado en la base de datos, asociándolo al usuario autenticado.

---

## 6. Documentación de Endpoints de la API

La API de backend expone los siguientes endpoints principales:

 **POST**  `/api/auth/register`  Registra un nuevo usuario en la base de datos.
 **POST**  `/api/auth/login`     Autentica un usuario y retorna un token JWT. 
 **POST**  `/api/pedidos`        Almacena un nuevo pedido en la base de datos. 
 **GET**   `/api/pedidos/:email` Obtiene el historial de pedidos de un usuario específico. 

---

## 7. Integrantes del Grupo

- [Alonso Abril]  
- [Franco Mirna]  
- [Ocampo Emiliano]  
- [Ramos Tomás]

---