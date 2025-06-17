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

  document.getElementById('buyButton').addEventListener('click', function(event) {
    const checkbox = document.getElementById('checkbox');
    const label = document.getElementById('termsLabel');
    
    if (!checkbox.checked) {
      event.preventDefault(); // Отменяем отправку формы
      label.style.color = 'red';
      label.style.textDecoration = 'underline';
      
      // Возвращаем обычный стиль через 2 секунды
      setTimeout(() => {
        label.style.color = '';
        label.style.textDecoration = '';
      }, 2000);
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


  function addNumbers() {
      // Получаем значения из полей ввода
      const num1 = parseFloat(document.getElementById('number1').value);
      const num2 = parseFloat(document.getElementById('number2').value);
      
      // Проверяем, что введены числа
      if (isNaN(num1) || isNaN(num2)) {
          document.getElementById('result').textContent = 'Пожалуйста, введите числа в оба поля';
          return;
      }
      
      // Складываем числа и выводим результат
      const sum = num1 + num2;
      document.getElementById('result').textContent = `Результат: ${sum}`;
  }

  let count = 0;
        
  let hoverCount = 0;
        
  function changeButtonText() {
      hoverCount++;
      const button = document.getElementById('forbidden-button');
      button.textContent = `Даже не вздумай! X${hoverCount}`;
      
      // Меняем цвет кнопки в зависимости от количества наведений
      const red = Math.min(200 + hoverCount * 5, 255);
      button.style.backgroundColor = `rgb(${red}, 40, 40)`;
  }

  const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        const header = document.querySelector('header');
        
        // Проверяем сохранённую тему в localStorage
        if (localStorage.getItem('theme') === 'light') {
            body.classList.add('light-theme');
            themeToggle.textContent = 'Тёмная тема';
        }
        
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (body.classList.contains('light-theme')) {
                // Переключаем на тёмную тему
                body.classList.remove('light-theme');
                themeToggle.textContent = 'Светлая тема';
                localStorage.setItem('theme', 'dark');
            } else {
                // Переключаем на светлую тему
                body.classList.add('light-theme');
                themeToggle.textContent = 'Тёмная тема';
                localStorage.setItem('theme', 'light');
            }
        });

        function sortNumbers() {
          const input = document.getElementById('mass').value;
          const container = document.querySelector('.sortirovka');
          
          // Удаляем предыдущий результат, если он есть
          const oldResult = document.getElementById('sort-result');
          if (oldResult) {
            container.removeChild(oldResult);
          }
        
          // Преобразуем строку в массив чисел
          const numbers = input.split(',')
            .map(item => parseFloat(item.trim()))
            .filter(item => !isNaN(item));
        
          // Создаем элемент для результата
          const resultElement = document.createElement('p');
          resultElement.id = 'sort-result';
          
          if (numbers.length === 0) {
            resultElement.textContent = 'Ошибка: введите числа через запятую (например: 5, 2, 8, 1)';
            resultElement.style.color = 'red';
          } else {
            // Сортируем числа
            const sortedNumbers = [...numbers].sort((a, b) => a - b);
            
            resultElement.innerHTML = `
              <strong>Введённые числа:</strong> ${numbers.join(', ')}<br>
              <strong>Отсортированные числа:</strong> ${sortedNumbers.join(', ')}
            `;
            resultElement.style.color = 'black';
          }
        
          // Добавляем результат в конец контейнера
          container.appendChild(resultElement);
        }

