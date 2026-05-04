const test = require('node:test');
const assert = require('node:assert/strict');

const {
  days,
  formats,
  getTopics,
  buildPositioning,
  buildIdeas,
  buildCalendar,
  buildCTA
} = require('../src/contentLogic');

const sample = {
  projectName: 'ContentAgentApp',
  niche: 'IA para negocios',
  audience: 'fundadores y marketers',
  goal: 'captar leads',
  channel: 'linkedin',
  tone: 'tecnico',
  offer: 'consultoría estratégica',
  topics: 'automatización, agentes, productividad'
};

test('getTopics limpia espacios y vacíos', () => {
  assert.deepEqual(getTopics('  automatización, agentes , , productividad  ,'), [
    'automatización',
    'agentes',
    'productividad'
  ]);
});

test('buildPositioning genera una propuesta con contexto clave', () => {
  assert.equal(
    buildPositioning(sample),
    'ContentAgentApp ayuda a fundadores y marketers a captar leads dentro de IA para negocios usando consultoría estratégica, con contenido técnico y accionable para LinkedIn.'
  );
});

test('buildIdeas produce cinco ideas con semillas del brief', () => {
  const ideas = buildIdeas(sample);
  assert.equal(ideas.length, 5);
  assert.match(ideas[0], /captar leads/);
  assert.match(ideas[1], /automatización/);
  assert.match(ideas[2], /agentes/);
  assert.match(ideas[4], /productividad/);
});

test('buildIdeas usa fallback cuando no hay topics', () => {
  const ideas = buildIdeas({ ...sample, topics: '', offer: '' });
  assert.match(ideas[1], /IA para negocios/);
  assert.match(ideas[2], /captar leads/);
  assert.match(ideas[4], /proceso/);
});

test('buildCalendar reparte ideas sobre días y formatos predefinidos', () => {
  const ideas = buildIdeas(sample);
  const calendar = buildCalendar(ideas);
  assert.equal(calendar.length, 5);
  assert.deepEqual(calendar.map((item) => item.day), days);
  assert.deepEqual(calendar.map((item) => item.format), formats);
  assert.equal(calendar[0].topic, ideas[0]);
  assert.equal(calendar[4].topic, ideas[4]);
});

test('buildCTA sugiere cierre alineado con la oferta', () => {
  assert.equal(
    buildCTA(sample),
    'Cierra cada pieza invitando a fundadores y marketers a pedir una demo, diagnóstico o llamada sobre consultoría estratégica.'
  );
});
