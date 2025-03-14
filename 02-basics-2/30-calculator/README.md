# Калькулятор

👷🏻 _Задача нормальной сложности_\
📚 _Закрепление материала_

<!--start_statement-->

Требуется создать Vue приложение с простым калькулятором из двух полей ввода операндов и выбора оператора
радио-кнопками. В калькуляторе всегда должно отображаться текущее значение выражения и обновляться при изменении
операндов или оператора.

Обратите внимание, преобразовывать введённые значения через `Number`, `parseInt` и даже использовать модификатор
[v-model.number](https://vuejs.org/guide/essentials/forms.html#number) не требуется. Начиная с версии **Vue 3.2.0**, если
элемент имеет `type="number"`, модификатор [v-model.number](https://vuejs.org/guide/essentials/forms.html#number) применяется
[автоматически](https://github.com/vuejs/core/commit/3056e9b3dcb1ab0bd18227c6fa7bf283f98f6ef6).

### Результат

<img src="https://i.imgur.com/vF0uqdK.gif" alt="Example" />

<!--end_statement-->

---

## Инструкция

📝 Для решения задачи отредактируйте файл: `CalculatorApp.js`.

🚀 Команда запуска для ручного тестирования: `npm run dev`\
Приложение будет доступно на [http://localhost:5173/02-basics-2/30-calculator/](http://localhost:5173/02-basics-2/30-calculator/).

✅ Доступно автоматическое тестирование: `npm test calculator`
