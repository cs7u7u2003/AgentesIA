# Documentación funcional — ContentAgentApp v3

## Resumen
ContentAgentApp v3 es una aplicación local orientada a ayudar a un usuario a construir una propuesta inicial de contenido a partir de un brief corto.

Su objetivo en esta etapa es reducir el tiempo de arranque para planificar contenido sin depender de servicios externos.

## Objetivo del producto
Permitir que un usuario:
- capture el contexto de su proyecto
- defina audiencia, objetivo, canal y tono
- genere una propuesta inicial de contenido
- obtenga ideas accionables para publicar
- visualice un calendario semanal simple
- conserve su trabajo localmente

## Usuario objetivo
Esta versión está pensada para:
- fundadores
- marketers
- consultores
- creadores
- equipos pequeños que necesitan una guía rápida de contenido

## Flujo funcional actual

### 1. Captura del brief
El usuario completa un formulario con:
- Proyecto
- Nicho
- Audiencia
- Objetivo principal
- Canal principal
- Tono
- Oferta o producto
- Ideas base

### 2. Generación automática
Con esos datos, la aplicación genera:

#### Posicionamiento
Una frase base que resume:
- qué hace el proyecto
- a quién ayuda
- con qué objetivo
- en qué nicho
- con qué tono
- para qué canal

#### Ideas de contenido
La app propone 5 ideas iniciales de publicación.
Estas ideas salen de una combinación entre:
- audiencia
- objetivo
- nicho
- canal
- oferta
- ideas base escritas por el usuario

#### Calendario semanal
La app arma un calendario de lunes a viernes con:
- día
- tema
- formato sugerido

Formatos usados actualmente:
- Post educativo
- Carrusel
- Mini caso
- Checklist
- CTA directo

#### CTA sugerido
La app genera un cierre sugerido para las piezas de contenido, orientado a conversión o contacto.

### 3. Guardado local
El usuario puede guardar el estado del brief en el navegador.
Si vuelve a abrir o refresca la página, la información permanece disponible localmente.

## Resultado funcional entregado por la v3
La v3 entrega un MVP funcional que permite:
- estructurar una estrategia básica de contenido
- transformar un brief en una primera salida usable
- ahorrar tiempo al momento de idear publicaciones
- tener una base visual y operativa para futuras iteraciones

## Alcance actual
Esta versión sí resuelve:
- planificación inicial
- ideación básica
- organización semanal simple
- persistencia local

## Fuera de alcance en v3
Esta versión todavía no incluye:
- autenticación de usuarios
- múltiples proyectos persistidos en backend
- base de datos
- integración con APIs de IA
- exportación a PDF, Excel o Notion
- publicación automática en redes
- analítica de rendimiento
- colaboración multiusuario

## Criterios funcionales ya validados
La funcionalidad actual fue validada con pruebas sobre:
- parseo de topics
- construcción de posicionamiento
- generación de ideas
- fallback sin topics
- construcción del calendario
- construcción del CTA
- disponibilidad del servidor local
- manejo de errores 404 y bloqueo de path traversal

## Estado funcional actual
Estado: **cumple como MVP funcional local**.

La aplicación ya sirve para demostrar el flujo principal de planificación de contenido, aunque todavía no entra en fase de automatización inteligente avanzada.
