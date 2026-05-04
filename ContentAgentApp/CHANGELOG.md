# Changelog — ContentAgentApp

## v3.0.0

### Resumen
Primera base funcional del proyecto como aplicación local para planificación de contenido.

### Agregado
- servidor local Node.js sin dependencias externas
- interfaz base con HTML, CSS y JavaScript vanilla
- formulario de brief de contenido
- generación automática de posicionamiento
- generación de 5 ideas iniciales de contenido
- calendario semanal sugerido
- CTA sugerido
- persistencia local con `localStorage`
- módulo `src/contentLogic.js` para separar la lógica pura del DOM
- suite de pruebas con `node:test`
- documentación funcional
- documentación técnica
- documentación ejecutiva

### Validado
- parseo de topics
- generación de posicionamiento
- generación de ideas
- fallback sin topics
- calendario semanal
- CTA sugerido
- ruta principal `/`
- respuesta `404`
- bloqueo de path traversal con `403`

### Resultado de validación
- **8 tests pasados**
- **0 fallos**

### Archivos relevantes incorporados o actualizados
- `server.js`
- `package.json`
- `src/index.html`
- `src/styles.css`
- `src/app.js`
- `src/contentLogic.js`
- `test/logic.test.js`
- `test/server.test.js`
- `docs/FUNCIONAL.md`
- `docs/TECNICA.md`
- `docs/EJECUTIVA.md`
- `README.md`

### Estado de la versión
La v3 queda como un **MVP funcional local validado**, listo para evolucionar hacia una versión con backend real, persistencia remota e integración con IA.
