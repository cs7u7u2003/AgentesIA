const STORAGE_KEY = 'content-agent-app-state-v3';
const logic = globalThis.ContentLogic;
const form = document.getElementById('brief-form');
const saveBtn = document.getElementById('saveBtn');
const resetBtn = document.getElementById('resetBtn');
const positioningText = document.getElementById('positioningText');
const ideasList = document.getElementById('ideasList');
const calendarList = document.getElementById('calendarList');
const ctaText = document.getElementById('ctaText');
const calendarItemTemplate = document.getElementById('calendarItemTemplate');

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

function render(data) {
  const hasMinimum = data.projectName && data.niche && data.audience;

  if (!hasMinimum) {
    positioningText.textContent = 'Completa el brief para generar una propuesta.';
    ideasList.innerHTML = '';
    calendarList.innerHTML = '';
    ctaText.textContent = 'Aún sin generar.';
    return;
  }

  const ideas = logic.buildIdeas(data);
  const calendar = logic.buildCalendar(ideas);

  positioningText.textContent = logic.buildPositioning(data);
  ctaText.textContent = logic.buildCTA(data);

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
