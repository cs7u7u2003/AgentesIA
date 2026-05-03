# Documentación técnica — ContentAgentApp v3

## Resumen técnico
ContentAgentApp v3 es una aplicación Node.js mínima sin dependencias externas.

Está compuesta por:
- un servidor HTTP simple para servir archivos estáticos
- una interfaz HTML/CSS/JS
- una capa de lógica reutilizable para generación de contenido
- una suite de pruebas con `node:test`

## Stack actual
- **Runtime:** Node.js
- **Servidor:** `http` nativo de Node
- **Frontend:** HTML + CSS + JavaScript vanilla
- **Persistencia:** `localStorage`
- **Pruebas:** `node:test` + `node:assert/strict`

## Estructura del proyecto

```text
ContentAgentApp/
├─ docs/
│  ├─ FUNCIONAL.md
│  └─ TECNICA.md
├─ src/
│  ├─ app.js
│  ├─ contentLogic.js
│  ├─ index.html
│  └─ styles.css
├─ test/
│  ├─ logic.test.js
│  └─ server.test.js
├─ package.json
├─ README.md
└─ server.js
```

## Componentes principales

### 1. `server.js`
Responsabilidades:
- levantar un servidor HTTP local
- servir archivos estáticos desde `src/`
- resolver `/` como `index.html`
- responder `404` cuando el archivo no existe
- bloquear intentos de path traversal fuera de `src/`

Funciones expuestas:
- `safePath(urlPath)`
- `createServer()`
- `startServer(port)`

La exportación de estas funciones permite probar el servidor sin arrancarlo manualmente como proceso principal.

### 2. `src/contentLogic.js`
Contiene la lógica pura del dominio funcional de la app.

Responsabilidades:
- parsear topics
- mapear tono a etiqueta legible
- mapear canal a etiqueta legible
- construir posicionamiento
- generar ideas
- construir calendario semanal
- generar CTA

Esta separación mejora:
- mantenibilidad
- testabilidad
- reutilización de lógica

Funciones exportadas:
- `days`
- `formats`
- `getTopics(raw)`
- `toneLabel(tone)`
- `channelLabel(channel)`
- `buildPositioning(data)`
- `buildIdeas(data)`
- `buildCalendar(ideas)`
- `buildCTA(data)`

### 3. `src/app.js`
Gestiona la capa de interacción en navegador.

Responsabilidades:
- leer datos del formulario
- renderizar salidas generadas
- guardar estado en `localStorage`
- restaurar estado guardado
- limpiar el estado local
- enlazar eventos del formulario y botones

Depende de `globalThis.ContentLogic`, expuesto por `contentLogic.js` en navegador.

### 4. `src/index.html`
Define la estructura visual principal:
- hero/header
- formulario de brief
- panel de resultados
- template reutilizable para el calendario

Carga scripts en este orden:
1. `contentLogic.js`
2. `app.js`

Ese orden es importante porque `app.js` consume la lógica expuesta globalmente.

### 5. `src/styles.css`
Define la interfaz visual:
- layout principal
- componentes de panel
- botones
- tarjetas de salida
- responsive behavior

## Flujo de ejecución
1. `npm start`
2. Node ejecuta `server.js`
3. El servidor publica `src/index.html`
4. El navegador carga `styles.css`, `contentLogic.js` y `app.js`
5. `app.js` escucha cambios del formulario
6. la lógica genera posicionamiento, ideas, calendario y CTA
7. el estado se puede persistir en `localStorage`

## Scripts disponibles

### Arranque
```bash
npm start
```
Inicia la app en:
- `http://localhost:3000`

### Tests
```bash
npm test
```
Ejecuta la suite con `node --test`.

## Suite de pruebas

### `test/logic.test.js`
Cubre:
- limpieza de topics
- construcción de posicionamiento
- generación de ideas
- fallback sin topics
- armado de calendario
- generación de CTA

### `test/server.test.js`
Cubre:
- resolución segura de rutas con `safePath`
- respuesta HTTP de `/`
- respuesta `404`
- bloqueo de traversal con `403`

## Resultado actual de pruebas
Resultado validado:
- **8 tests pasados**
- **0 fallos**

## Decisiones técnicas relevantes
- Se evitó meter frameworks o librerías externas para mantener la base simple.
- Se separó la lógica pura del DOM para facilitar pruebas unitarias.
- Se mantuvo un servidor estático mínimo para reducir complejidad operativa.
- Se usó `node:test` para no depender de Jest, Vitest u otras herramientas adicionales.

## Limitaciones técnicas actuales
- No hay bundler ni pipeline de build.
- No hay base de datos ni persistencia remota.
- No existe API de backend para guardar proyectos.
- No hay capa de autenticación/autorización.
- No hay observabilidad, logging estructurado ni manejo avanzado de errores.

## Siguientes pasos técnicos sugeridos
1. agregar modelo de datos para múltiples briefs
2. crear API local o backend real
3. soportar exportación de resultados
4. integrar proveedor de IA para generación enriquecida
5. agregar pruebas de UI o integración
6. agregar validaciones de formulario más robustas
