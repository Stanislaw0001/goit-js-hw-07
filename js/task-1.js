// 1. Получаем все элементы li.item
const categories = document.querySelectorAll('#categories li.item');

// 2. Выводим общее количество категорий
console.log(`Number of categories: ${categories.length}`);

// 3. Итерируем по каждой категории
categories.forEach((category) => {
  // 4. Находим заголовок (h2) в текущей категории
  const categoryTitle = category.querySelector('h2').textContent;

  // 5. Находим все элементы li внутри текущей категории
  const categoryItems = category.querySelectorAll('li');

  // 6. Выводим заголовок и количество элементов в консоль
  console.log(`Category: ${categoryTitle}, Items: ${categoryItems.length}`);
});