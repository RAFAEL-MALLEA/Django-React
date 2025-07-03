# React + Django Fullstack App

Una aplicación fullstack con React (frontend) y Django (backend) completamente configurada y lista para usar.

## Estructura del Proyecto

```
client/                 # Frontend React
├── pages/             # Páginas de la aplicación
├── components/ui/     # Componentes UI
└── global.css         # Estilos globales

backend/               # Backend Django
├── myproject/         # Configuración principal
├── api/              # App API con endpoints
├── requirements.txt  # Dependencias Python
└── manage.py         # Script de Django
```

## Configuración Inicial

### 1. Instalar dependencias de Node.js

```bash
npm install
```

### 2. Configurar el backend Django

```bash
# Instalar dependencias Python y configurar DB
npm run setup:django

# O manualmente:
cd backend
pip install -r requirements.txt
python manage.py migrate
cd ..
```

## Comandos Disponibles

### Desarrollo

```bash
# Solo frontend (React)
npm run dev

# Solo backend (Django)
npm run dev:django

# Ambos servidores simultáneamente (RECOMENDADO)
npm run dev:full
```

### Otros comandos

```bash
# Configurar Django por primera vez
npm run setup:django

# Build para producción
npm run build

# Tests
npm test

# Formatear código
npm run format.fix
```

## URLs de Desarrollo

- **Frontend (React)**: http://localhost:8080
- **Backend (Django)**: http://localhost:8000
- **Django Admin**: http://localhost:8000/admin/

## Endpoints API

- `GET /api/ping/` - Test de conectividad
- `GET /api/demo/` - Datos de ejemplo

## Configuración

### Variables de Entorno

El archivo `backend/.env` contiene:

```
SECRET_KEY=django-insecure-your-secret-key-here-change-in-production
DEBUG=True
```

### CORS

El backend Django está configurado para aceptar requests desde:

- http://localhost:8080 (React dev server)
- http://127.0.0.1:8080

## Base de Datos

Por defecto usa SQLite (`backend/db.sqlite3`). Para usar PostgreSQL u otra base de datos, actualiza la configuración en `backend/myproject/settings.py`.

## Tecnologías

- **Frontend**: React 18 + TypeScript + Vite + TailwindCSS
- **Backend**: Django 4.2 + Django REST Framework
- **Base de datos**: SQLite (por defecto)
- **Desarrollo**: Vite dev server + Django runserver

## Próximos Pasos

1. Crea modelos en `backend/api/models.py`
2. Agrega nuevas vistas en `backend/api/views.py`
3. Crea nuevas páginas React en `client/pages/`
4. Personaliza estilos en `client/global.css`

¡Tu aplicación React + Django está lista para usar! 🚀
