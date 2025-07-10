
# 🏨 Hoteles Oasis - Prueba Técnica para Axede

Este proyecto es una aplicación completa de simulación de disponibilidad y reservas de habitaciones. Permite a los usuarios buscar habitaciones disponibles por fecha y sede, filtrar por tipo de alojamiento y simular una reserva.

## 🚀 Demo en línea
- 🌐 [Aplicación desplegada](https://hoteles-oasis.vercel.app)
- 📁 [Repositorio en GitHub](https://github.com/estefaniarizzo/HotelesOasis)

---

## 🛠️ Tecnologías utilizadas

### Backend:
- **Node.js + Express**
- **Sequelize ORM**
- **SQLite** (utilizado para facilitar la ejecución local sin dependencias adicionales)
- **API REST** corriendo en `http://localhost:3001`

### Frontend:
- **React.js**
- **TailwindCSS**
- Diseño responsivo y basado en componentes

---

## 📦 Instrucciones de instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/estefaniarizzo/HotelesOasis.git
cd HotelesOasis
```

### 2. Iniciar el servidor backend
```bash
cd backend
npm install
npm start
```

El servidor se ejecutará en `http://localhost:3001`.

### 3. Iniciar la aplicación frontend
```bash
cd frontend
npm install
npm start
```

La aplicación se ejecutará en `http://localhost:3000`.

---

## ✅ Funcionalidades implementadas

- Búsqueda por sede y fecha
- Muestra de habitaciones disponibles con tipo, capacidad y precio simulado
- Formulario con filtros dinámicos
- Confirmación de reserva simulada
- Interfaz responsiva
- Componentes reutilizables en React
- Estilos aplicados con TailwindCSS

---

## 📁 Estructura del proyecto

```
HotelesOasis/
│
├── backend/                # API construida con Node + Express
│   ├── models/             # Modelos Sequelize
│   └── index.js            # Punto de entrada del backend
│
├── src/                    # Código fuente del frontend (React)
│   ├── components/         # Componentes reutilizables
│   ├── mock/               # Datos simulados de hoteles
│   └── App.js              # Lógica principal del frontend
│
├── README.md
```

---

## 🧠 Notas

- Se utilizó **SQLite** para permitir ejecución local sin necesidad de configurar PostgreSQL.
- El botón de “Reservar” actualmente es solo demostrativo (alert).
- El código está comentado y modularizado para facilitar su revisión.

---

## 📬 Contacto

Si tienen preguntas o desean más información, estaré atenta:

👩‍💻 Estefanía Rizzo  
📧 estefaniarizzo@gmail.com  
🌐 [GitHub](https://github.com/estefaniarizzo)
