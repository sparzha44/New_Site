document.getElementById('aboutLink').addEventListener('click', function(event) {
 event.preventDefault(); // предотвращает переход по ссылке
 alert(`UnnomineGigs — это динамичная и страстная команда профессионалов, специализирующаяся на организации живых музыкальных мероприятий и концертов. Наша миссия — создавать незабываемые музыкальные впечатления для слушателей и поддерживать развитие музыкальной сцены, объединяя исполнителей и поклонников.

Мы тщательно подбираем площадки, координируем все этапы организации — от выбора артистов до технического обеспечения и маркетинга. Благодаря нашему опыту и страсти к музыке, мы превращаем каждое мероприятие в уникальное событие, оставляющее яркие воспоминания у участников.

UnnomineGigs — это место, где рождаются новые таланты, собираются любители музыки и создается атмосфера настоящего живого звука. Мы гордимся своей работой и стремимся делать каждую встречу с музыкой особенной!`);
});

  // Скрипт для увеличения и уменьшения возраста
  const ageInput = document.getElementById('age');
  document.getElementById('increase').addEventListener('click', () => {
    let current = parseInt(ageInput.value);
    if (current < parseInt(ageInput.max)) {
      ageInput.value = current + 1;
    }
  });
  document.getElementById('decrease').addEventListener('click', () => {
    let current = parseInt(ageInput.value);
    if (current > parseInt(ageInput.min)) {
      ageInput.value = current - 1;
    }
  });

  // Обработка отправки формы
  document.getElementById('purchaseForm').addEventListener('submit', function(event) {
    const age = parseInt(ageInput.value);
    if (age < 16) {
      alert('Вход запрещен для лиц младше 16 лет.');
      event.preventDefault(); // отменить отправку формы
    } else if (age < 18) {
      alert('Вход разрешен только в сопровождении взрослых.');
      event.preventDefault(); // отменить отправку формы
    }
    // иначе форма отправляется
  });