(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
    return;
  }

  root.ContentLogic = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  const formats = ['Post educativo', 'Carrusel', 'Mini caso', 'Checklist', 'CTA directo'];

  function getTopics(raw) {
    return String(raw || '')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
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

  function buildPositioning(data) {
    const offerPart = data.offer ? ` usando ${data.offer}` : '';
    return `${data.projectName} ayuda a ${data.audience} a ${data.goal} dentro de ${data.niche}${offerPart}, con contenido ${toneLabel(data.tone)} para ${channelLabel(data.channel)}.`;
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

  return {
    days,
    formats,
    getTopics,
    toneLabel,
    channelLabel,
    buildPositioning,
    buildIdeas,
    buildCalendar,
    buildCTA
  };
});
