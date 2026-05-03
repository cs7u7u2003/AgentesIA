const STORAGE_KEY = 'content-agent-app-state-v3';
const form = document.getElementById('brief-form');
const saveBtn = document.getElementById('saveBtn');
const resetBtn = document.getElementById('resetBtn');
const positioningText = document.getElementById('positioningText');
const ideasList = document.getElementById('ideasList');
const calendarList = document.getElementById('calendarList');
const ctaText = document.getElementById('ctaText');
const calendarItemTemplate = document.getElementById('calendarItemTemplate');

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const formats = ['Post educativo', 'Carrusel', 'Mini caso', 'Checklist', 'CTA directo'];

function getTopics(raw) {
  return raw
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function getFormData() {
  return {
    projectName: form.projectName.value.trim(),
    niche: form.niche.value.trim(),
    audience: form.audience.value.trim(),
    goal: form.goal.value,
    channel: form.channel.value,
    tone: form.tone.value,
    offer: form.offer.value.trim(),
    topics: form.topics.value.trim()
  };
}

function buildPositioning(data) {
  const offerPart = data.offer ? ` usando ${data.offer}` : '';
  return `${data.projectName} ayuda a ${data.audience} a ${data.goal} dentro de ${data.niche}${offerPart}, con contenido ${toneLabel(data.tone)} para ${channelLabel(data.channel)}.`;
}

function toneLabel(tone) {
  return {
    tecnico: 'técnico y accionable',
    cercano: 'cercano y fácil de aplicar',
    autoridad: 'con autoridad y claridad estratégica',
    directo: 'directo, persuasivo y orientado a conversión'
  }[tone] || 'claro';
}

function channelLabel(channel) {
  return {
    linkedin: 'LinkedIn',
    instagram: 'Instagram',
    blog: 'blog',
    x: 'X / Twitter',
    youtube: 'YouTube'
  }[channel] || channel;
}

function buildIdeas(data) {
  const baseTopics = getTopics(data.topics);
  const seed = baseTopics.length ? baseTopics : [data.niche, data.goal, data.offer || 'proceso', data.channel];

  return [
    `3 errores que frenan a ${data.audience} cuando intentan ${data.goal}`,
    `Guía práctica: cómo aplicar ${seed[0]} en ${channelLabel(data.channel)}`,
    `Caso rápido: resultado posible al usar ${seed[1] || data.niche}`,
    `Checklist para publicar contenido ${toneLabel(data.tone)}`,
    `Mito vs realidad sobre ${seed[2] || data.goal}`
  ];
}

function buildCalendar(ideas) {
  return days.map((day, index) => ({
    day,
    topic: ideas[index % ideas.length],
    format: formats[index % formats.length]
  }));
}

function buildCTA(data) {
  const offerPart = data.offer ? ` sobre ${data.offer}` : '';
  return `Cierra cada pieza invitando a ${data.audience} a pedir una demo, diagnóstico o llamada${offerPart}.`;
}

function render(data) {
  const hasMinimum = data.projectName && data.niche && data.audience;

  if (!hasMinimum) {
    positioningText.textContent = 'Completa el brief para generar una propuesta.';
    ideasList.innerHTML = '';
    calendarList.innerHTML = '';
    ctaText.textContent = 'Aún sin generar.';
    return;
  }

  const ideas = buildIdeas(data);
  const calendar = buildCalendar(ideas);

  positioningText.textContent = buildPositioning(data);
  ctaText.textContent = buildCTA(data);

  ideasList.innerHTML = ideas.map((idea) => `<li>${idea}</li>`).join('');
  calendarList.innerHTML = '';

  calendar.forEach((item) => {
    const node = calendarItemTemplate.content.cloneNode(true);
    node.querySelector('.calendar-day').textContent = item.day;
    node.querySelector('.calendar-topic').textContent = item.topic;
    node.querySelector('.calendar-format').textContent = item.format;
    calendarList.appendChild(node);
  });
}

function saveState() {
  const data = getFormData();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  render(data);
}

function restoreState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    render(getFormData());
    return;
  }

  try {
    const data = JSON.parse(raw);
    Object.entries(data).forEach(([key, value]) => {
      if (form[key]) {
        form[key].value = value;
      }
    });
    render(getFormData());
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    render(getFormData());
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  saveState();
});

form.addEventListener('input', () => render(getFormData()));
saveBtn.addEventListener('click', saveState);
resetBtn.addEventListener('click', () => {
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  render(getFormData());
});

restoreState();
