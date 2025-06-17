# 🏨 Hoteles Oasis - Prueba Técnica Full Stack

Este proyecto es parte de la prueba técnica de Axede, en la cual se desarrolló una aplicación de reservas hoteleras con backend en **Node.js + Express + Sequelize + PostgreSQL**, y frontend en **React + TailwindCSS**.

---

## 📦 Tecnologías utilizadas

- Backend: **Node.js, Express, Sequelize**
- Base de datos: **PostgreSQL**
- Frontend: **React, TailwindCSS**
- Otros: **Insomnia (testing), Chart.js (visualización)**

---

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/estefaniarizzo/HotelesOasis.git
cd hoteles-oasis

2. Backend
bash
Copiar
Editar
cd backend
npm install
node index.js
El servidor se ejecuta en: http://localhost:3001

3. Frontend
bash
Copiar
Editar
cd frontend
npm install
npm start
El frontend se ejecuta en: http://localhost:3000

🧠 Base de datos
Crear una base de datos en PostgreSQL:

sql
Copiar
Editar
CREATE DATABASE "HotelesOasis";
Tablas creadas automáticamente con Sequelize:
sedes

habitaciones

disponibilidad

tarifas

Las tablas se sincronizan automáticamente al iniciar el servidor.

📡 Endpoints disponibles
Método	Ruta	Descripción
GET	/sedes	Lista todas las sedes
POST	/sedes	Crea una o varias sedes
GET	/habitaciones	Lista habitaciones con su sede
POST	/habitaciones	Crea una habitación
GET	/disponibilidad	Filtra habitaciones disponibles
POST	/disponibilidad	Crea un registro de disponibilidad
GET	/tarifas	Lista tarifas por sede y temporada
POST	/tarifas	Crea una tarifa
GET	/tarifa/estimada	Calcula tarifa estimada (con query)

🧪 Pruebas
Puedes probar los endpoints con Insomnia o Postman.
Incluye datos de prueba insertados en PostgreSQL, como sedes en Barranquilla, Cali, Cartagena y Bogotá.

✨ Autor
Desarrollado por Lina Rizo – 2025
Contacto: tefa49395@gmail.com