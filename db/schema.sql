-- Crear tabla de sedes
CREATE TABLE sedes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    ciudad VARCHAR(50) NOT NULL
);

-- Crear tabla de habitaciones
CREATE TABLE habitaciones (
    id SERIAL PRIMARY KEY,
    sede_id INTEGER REFERENCES sedes(id),
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('estándar', 'premium', 'VIP')),
    capacidad_maxima INTEGER NOT NULL
);

-- Crear tabla de disponibilidad (habitaciones por fecha)
CREATE TABLE disponibilidad (
    id SERIAL PRIMARY KEY,
    habitacion_id INTEGER REFERENCES habitaciones(id),
    fecha DATE NOT NULL,
    disponible BOOLEAN DEFAULT TRUE
);

-- Crear tabla de tarifas
CREATE TABLE tarifas (
    id SERIAL PRIMARY KEY,
    sede_id INTEGER REFERENCES sedes(id),
    tipo_habitacion VARCHAR(20) CHECK (tipo_habitacion IN ('estándar', 'premium', 'VIP')),
    temporada VARCHAR(10) CHECK (temporada IN ('alta', 'baja')),
    precio_por_persona DECIMAL(10, 2) NOT NULL
);
