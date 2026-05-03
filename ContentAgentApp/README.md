# ContentAgentApp

Aplicación local mínima para planificar contenido, generar ideas y organizar una semana de publicaciones.

## Qué incluye

- formulario de brief de contenido
- generación automática de posicionamiento
- 5 ideas iniciales de contenido
- calendario semanal sugerido
- CTA recomendado
- persistencia local en el navegador con `localStorage`
- servidor Node sin dependencias externas

## Ejecutar

```bash
npm start
```

Luego abre:

- `http://localhost:3000`

## Estructura

- `server.js`: servidor estático mínimo
- `src/index.html`: interfaz principal
- `src/styles.css`: estilos de la app
- `src/app.js`: lógica de generación y persistencia

## Estado v3

Esta versión deja una base funcional para seguir iterando con autenticación, backend real, exportación o IA conectada.
