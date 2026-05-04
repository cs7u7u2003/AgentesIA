# Roadmap — ContentAgentApp v4

## Objetivo de la v4
Evolucionar ContentAgentApp desde un MVP local de planificación hacia una herramienta más útil, persistente y comercializable.

## Prioridades

### 1. Persistencia real de proyectos
Objetivo:
- permitir guardar múltiples briefs y resultados
- recuperar proyectos después de cerrar la app

Entregables sugeridos:
- modelo de datos para proyectos
- almacenamiento en archivo JSON o base de datos ligera
- listado de proyectos guardados
- carga y edición de proyectos existentes

### 2. Generación enriquecida con IA
Objetivo:
- pasar de plantillas fijas a generación contextual más potente

Entregables sugeridos:
- integración con proveedor de IA
- prompts para posicionamiento, ideas y CTA
- fallback local si la IA no está disponible
- controles básicos de costo o uso

### 3. Mejor experiencia de usuario
Objetivo:
- hacer la app más cómoda para uso repetido

Entregables sugeridos:
- validaciones de formulario más claras
- estados vacíos mejorados
- feedback visual al guardar/generar
- edición más fluida del brief

### 4. Exportación de resultados
Objetivo:
- permitir usar la salida fuera de la app

Entregables sugeridos:
- exportación a Markdown o PDF
- copia rápida del calendario
- exportación de ideas y CTA

### 5. Backend funcional
Objetivo:
- preparar una arquitectura más escalable

Entregables sugeridos:
- endpoints para guardar y leer proyectos
- separación entre frontend y backend
- manejo estructurado de errores

### 6. Cobertura de pruebas ampliada
Objetivo:
- elevar confianza para futuras iteraciones

Entregables sugeridos:
- pruebas de integración
- pruebas de UI
- pruebas de persistencia
- validación de flujos de guardado/carga

## Orden recomendado
1. persistencia real
2. mejor experiencia de usuario
3. exportación
4. integración con IA
5. backend más robusto
6. pruebas ampliadas

## Resultado esperado de la v4
Al cerrar la v4, ContentAgentApp debería poder:
- guardar varios proyectos
- reutilizar briefs previos
- generar resultados más inteligentes
- exportar salidas útiles
- servir como base real para una versión comercial más seria
