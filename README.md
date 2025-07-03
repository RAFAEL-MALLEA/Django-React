# React + Django App

Aplicación mínima con React (frontend) y Django (backend).

## Estructura

```
client/                 # React frontend
├── pages/             # Páginas
├── App.tsx           # App principal
└── global.css        # Estilos

backend/               # Django backend
├── myproject/        # Configuración
├── api/             # API endpoints
└── manage.py        # Django CLI
```

## Configuración

```bash
# 1. Instalar dependencias Node.js
npm install

# 2. Configurar Django
npm run setup:django
```

## Comandos

```bash
# Desarrollo (ambos servidores)
npm run dev:full

# Solo React
npm run dev

# Solo Django
npm run dev:django

# Build
npm run build
```

## URLs

- React: http://localhost:8080
- Django: http://localhost:8000

## API Endpoints

- `GET /api/ping/` - Test
- `GET /api/demo/` - Demo data

¡Listo! 🚀
