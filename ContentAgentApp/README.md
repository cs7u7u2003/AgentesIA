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
- suite de pruebas con `node:test`

## Ejecutar

```bash
npm start
```

Luego abre:

- `http://localhost:3000`

## Probar

```bash
npm test
```

## Estructura

- `server.js`: servidor estático mínimo
- `src/contentLogic.js`: lógica pura de generación
- `src/index.html`: interfaz principal
- `src/styles.css`: estilos de la app
- `src/app.js`: lógica de UI y persistencia
- `test/logic.test.js`: pruebas unitarias de lógica
- `test/server.test.js`: pruebas del servidor
- `docs/FUNCIONAL.md`: documentación funcional
- `docs/TECNICA.md`: documentación técnica
- `docs/EJECUTIVA.md`: documentación ejecutiva
- `CHANGELOG.md`: historial formal de cambios
- `ROADMAP.md`: próximos pasos de evolución

## Documentación

- Ejecutiva: `docs/EJECUTIVA.md`
- Funcional: `docs/FUNCIONAL.md`
- Técnica: `docs/TECNICA.md`
- Cambios: `CHANGELOG.md`
- Roadmap: `ROADMAP.md`

## Estado v3

Esta versión deja una base funcional para seguir iterando con autenticación, backend real, exportación o IA conectada.

## Validación actual

Suite validada con resultado:
- **8 tests pasados**
- **0 fallos**
