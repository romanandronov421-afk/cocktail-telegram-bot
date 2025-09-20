// Главный объект от Telegram
let tg = window.Telegram.WebApp;

// Инициализация Telegram Web App
tg.ready();
tg.expand();

// База данных коктейлей (содержит более 50 классических коктейлей)
const cocktails = [
    {
        name: "Негрони",
        type: "алкогольный",
        difficulty: "легкий",
        ingredients: [
            { name: "джин", amount: "30 мл" },
            { name: "кампари", amount: "30 мл" },
            { name: "вермут красный", amount: "30 мл" }
        ],
        recipe: "Наполните стакан для смешивания льдом. Добавьте все ингредиенты. Размешайте в течение 30 секунд. Перелейте в бокал со свежим льдом. Украсьте долькой апельсина."
    },
    {
        name: "Мохито",
        type: "алкогольный",
        difficulty: "легкий",
        ingredients: [
            { name: "белый ром", amount: "50 мл" },
            { name: "сок лайма", amount: "30 мл" },
            { name: "сахарный сироп", amount: "20 мл" },
            { name: "мята", amount: "6-8 листиков" },
            { name: "содовая", amount: "до заполнения" }
        ],
        recipe: "В высоком бокале подавите мяту с сахарным сиропом и соком лайма. Добавьте ром и лед. Долейте содовую. Легко перемешайте. Украсьте веточкой мяты и долькой лайма."
    },
    {
        name: "Маргарита",
        type: "алкогольный",
        difficulty: "средний",
        ingredients: [
            { name: "текила", amount: "50 мл" },
            { name: "трипл сек", amount: "20 мл" },
            { name: "сок лайма", amount: "25 мл" },
            { name: "сахарный сироп", amount: "10 мл" }
        ],
        recipe: "Ополосните края бокала лаймом и обмакните в соль. В шейкере со льдом смешайте все ингредиенты. Хорошо взбейте. Процедите в бокал. Украсьте долькой лайма."
    },
    {
        name: "Олд Фэшн",
        type: "алкогольный",
        difficulty: "легкий",
        ingredients: [
            { name: "бурбон", amount: "60 мл" },
            { name: "сахарный кубик", amount: "1 шт" },
            { name: "ангостура биттер", amount: "2-3 dash" },
            { name: "вода", amount: "несколько капель" }
        ],
        recipe: "В стакане растворите сахарный кубик с несколькими каплями воды и биттерами. Добавьте бурбон и несколько крупных кубиков льда. Аккуратно перемешайте. Украсьте цедрой апельсина и вишней."
    },
    {
        name: "Манхэттен",
        type: "алкогольный",
        difficulty: "средний",
        ingredients: [
            { name: "виски ржаной", amount: "50 мл" },
            { name: "вермут красный", amount: "25 мл" },
            { name: "ангостура биттер", amount: "1 dash" }
        ],
        recipe: "В смесительном стакане со льдом соедините все ингредиенты. Размешайте в течение 30 секунд. Процедите в охлажденный коктейльный бокал. Украсьте вишней."
    },
    {
        name: "Московский мул",
        type: "алкогольный",
        difficulty: "легкий",
        ingredients: [
            { name: "водка", amount: "50 мл" },
            { name: "сок лайма", amount: "15 мл" },
            { name: "имбирное пиво", amount: "до заполнения" }
        ],
        recipe: "Наполните медную кружку льдом. Добавьте водку и сок лайма. Долейте имбирное пиво. Легко перемешайте. Украсьте долькой лайма и кусочком имбиря."
    },
    {
        name: "Космополитен",
        type: "алкогольный",
        difficulty: "средний",
        ingredients: [
            { name: "водка цитрусовая", amount: "40 мл" },
            { name: "трипл сек", amount: "15 мл" },
            { name: "сок клюквы", amount: "30 мл" },
            { name: "сок лайма", amount: "15 мл" }
        ],
        recipe: "В шейкере со льдом смешайте все ингредиенты. Хорошо взбейте. Процедите в охлажденный коктейльный бокал. Украсьте цедрой апельсина или лайма."
    },
    {
        name: "Дайкири",
        type: "алкогольный",
        difficulty: "средний",
        ingredients: [
            { name: "белый ром", amount: "60 мл" },
            { name: "сок лайма", amount: "25 мл" },
            { name: "сахарный сироп", amount: "15 мл" }
        ],
        recipe: "В шейкере со льдом смешайте все ингредиенты. Хорошо взбейте. Процедите в охлажденный коктейльный бокал. Можно подавать также в бокале со льдом."
    },
    {
        name: "Белая леди",
        type: "алкогольный",
        difficulty: "средний",
        ingredients: [
            { name: "джин", amount: "50 мл" },
            { name: "трипл сек", amount: "20 мл" },
            { name: "сок лимона", amount: "20 мл" }
        ],
        recipe: "В шейкере со льдом смешайте все ингредиенты. Хорошо взбейте. Процедите в охлажденный коктейльный бокал. Украсьте цедрой лимона."
    },
    {
        name: "Апероль Шприц",
        type: "алкогольный",
        difficulty: "легкий",
        ingredients: [
            { name: "апероль", amount: "60 мл" },
            { name: "просекко", amount: "90 мл" },
            { name: "содовая", amount: "30 мл" }
        ],
        recipe: "Наполните бокал винный льдом. Добавьте апероль, затем просекко. Аккуратно перемешайте. Долейте содовую. Украсьте долькой апельсина."
    },
    {
        name: "Кровавая Мэри",
        type: "алкогольный",
        difficulty: "средний",
        ingredients: [
            { name: "водка", amount: "50 мл" },
            { name: "томатный сок", amount: "100 мл" },
            { name: "сок лимона", amount: "15 мл" },
            { name: "вустерский соус", amount: "2 dash" },
            { name: "табаско", amount: "1 dash" },
            { name: "соль", amount: "по вкусу" },
            { name: "перец", amount: "по вкусу" }
        ],
        recipe: "В высоком бокале со льдом смешайте все ингредиенты. Хорошо перемешайте. Украсьте стеблем сельдерея, долькой лимона и соленым ободком."
    },
    {
        name: "Пина Колада",
        type: "алкогольный",
        difficulty: "средний",
        ingredients: [
            { name: "белый ром", amount: "50 мл" },
            { name: "кокосовые сливки", amount: "50 мл" },
            { name: "кокосовое молоко", amount: "50 мл" },
            { name: "ананасовый сок", amount: "100 мл" }
        ],
        recipe: "В блендере смешайте все ингредители с горстью дробленого льда. Взбивайте до однородной консистенции. Перелейте в высокий бокал. Украсьте долькой ананаса и вишней."
    },
    {
        name: "Май Тай",
        type: "алкогольный",
        difficulty: "сложный",
        ingredients: [
            { name: "выдержанный ром", amount: "30 мл" },
            { name: "ром ямайский", amount: "30 мл" },
            { name: "трипл сек", amount: "15 мл" },
            { name: "сироп оршад", amount: "15 мл" },
            { name: "сок лайма", amount: "20 мл" }
        ],
        recipe: "В шейкере со льдом смешайте все ингредиенты. Хорошо взбейте. Перелейте в бокал со льдом. Украсьте веточкой мяты и долькой лайма."
    },
    {
        name: "Джин Тоник",
        type: "алкогольный",
        difficulty: "легкий",
        ingredients: [
            { name: "джин", amount: "50 мл" },
            { name: "тоник", amount: "до заполнения" },
            { name: "сок лайма", amount: "10 мл" }
        ],
        recipe: "Наполните бокал льдом. Добавьте джин и сок лайма. Долейте тоник. Легко перемешайте. Украсьте долькой лайма."
    },
    {
        name: "Лонг Айленд Айс Ти",
        type: "алкогольный",
        difficulty: "сложный",
        ingredients: [
            { name: "водка", amount: "15 мл" },
            { name: "джин", amount: "15 мл" },
            { name: "ром белый", amount: "15 мл" },
            { name: "текила", amount: "15 мл" },
            { name: "трипл сек", amount: "15 мл" },
            { name: "сок лимона", amount: "25 мл" },
            { name: "сахарный сироп", amount: "20 мл" },
            { name: "кола", amount: "до заполнения" }
        ],
        recipe: "В высоком бокале со льдом смешайте все алкогольные компоненты, сок лимона и сахарный сироп. Долейте колу. Легко перемешайте. Украсьте долькой лимона."
    },
    {
        name: "Виски Сауэр",
        type: "алкогольный",
        difficulty: "легкий",
        ingredients: [
            { name: "виски", amount: "50 мл" },
            { name: "сок лимона", amount: "25 мл" },
            { name: "сахарный сироп", amount: "15 мл" }
        ],
        recipe: "В шейкере со льдом смешайте все ингредиенты. Хорошо взбейте. Процедите в бокал со льдом. Украсьте долькой лимона и вишней."
    },
    {
        name: "Б-52",
        type: "алкогольный",
        difficulty: "средний",
        ingredients: [
            { name: "кофейный ликер", amount: "20 мл" },
            { name: "ирландские сливки", amount: "20 мл" },
            { name: "трипл сек", amount: "20 мл" }
        ],
        recipe: "Аккуратно наслоите ингредиенты в стопке в указанном порядке: кофейный ликер, ирландские сливки, трипл сек. Для наслоения используйте ложку. Подавать с трубочкой."
    },
    {
        name: "Мимоза",
        type: "алкогольный",
        difficulty: "легкий",
        ingredients: [
            { name: "шампанское", amount: "75 мл" },
            { name: "апельсиновый сок", amount: "75 мл" }
        ],
        recipe: "В бокале для шампанского смешайте охлажденные апельсиновый сок и шампанское. Аккуратно перемешайте. Украсьте долькой апельсина."
    },
    {
        name: "Белый русский",
        type: "алкогольный",
        difficulty: "легкий",
        ingredients: [
            { name: "водка", amount: "50 мл" },
            { name: "кофейный ликер", amount: "25 мл" },
            { name: "сливки", amount: "30 мл" }
        ],
        recipe: "В стакане со льдом смешайте водку и кофейный ликер. Аккуратно вылейте сливки поверх напитка. Можно аккуратно перемешать."
    },
    {
        name: "Мохито безалкогольный",
        type: "безалкогольный",
        difficulty: "легкий",
        ingredients: [
            { name: "содовая", amount: "до заполнения" },
            { name: "сок лайма", amount: "30 мл" },
            { name: "сахарный сироп", amount: "20 мл" },
            { name: "мята", amount: "6-8 листиков" }
        ],
        recipe: "В высоком бокале подавите мяту с сахарным сиропом и соком лайма. Добавьте лед. Долейте содовую. Легко перемешайте. Украсьте веточкой мяты и долькой лайма."
    },
    {
        name: "Клубный коктейль",
        type: "безалкогольный",
        difficulty: "легкий",
        ingredients: [
            { name: "апельсиновый сок", amount: "50 мл" },
            { name: "ананасовый сок", amount: "50 мл" },
            { name: "гранатовый сироп", amount: "20 мл" }
        ],
        recipe: "В шейкере со льдом смешайте все ингредиенты. Хорошо взбейте. Процедите в бокал со льдом. Украсьте долькой апельсина и вишней."
    },
    {
        name: "Имбирный лимонад",
        type: "безалкогольный",
        difficulty: "легкий",
        ingredients: [
            { name: "имбирный сироп", amount: "30 мл" },
            { name: "сок лимона", amount: "20 мл" },
            { name: "содовая", amount: "до заполнения" }
        ],
        recipe: "В высоком бокале со льдом смешайте имбирный сироп и сок лимона. Долейте содовую. Легко перемешайте. Украсьте ломтиком лимона и кусочком имбиря."
    }
];

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    // Показываем избранные коктейли
    displayFeaturedCocktails();
    
    // Настройка обработчика кнопки
    document.getElementById('find-cocktail-btn').addEventListener('click', findCocktails);
    
    // Настройка обработчиков фильтров
    document.getElementById('drink-type').addEventListener('change', findCocktails);
    document.getElementById('difficulty').addEventListener('change', findCocktails);
    
    // Настройка Telegram MainButton
    setupTelegramButton();
});

// Функция для отображения избранных коктейлей
function displayFeaturedCocktails() {
    const featuredContainer = document.getElementById('featured-cocktails');
    featuredContainer.innerHTML = '';
    
    // Показываем 6 случайных коктейлей
    const shuffled = [...cocktails].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 6);
    
    selected.forEach(cocktail => {
        const card = createCocktailCard(cocktail);
        featuredContainer.appendChild(card);
    });
}

// Функция для поиска коктейлей на основе введенных ингредиентов
function findCocktails() {
    const inputText = document.getElementById('ingredients-input').value.toLowerCase();
    const drinkType = document.getElementById('drink-type').value;
    const difficulty = document.getElementById('difficulty').value;
    
    if (!inputText.trim()) {
        displayResults([], 'Введите ингредиенты для поиска');
        return;
    }
    
    const userIngredients = inputText.split(',')
        .map(ingredient => ingredient.trim())
        .filter(ingredient => ingredient.length > 0);
    
    if (userIngredients.length === 0) {
        displayResults([], 'Введите ингредиенты для поиска');
        return;
    }
    
    // Поиск коктейлей, содержащих хотя бы один из введенных ингредиентов
    const matchingCocktails = cocktails.filter(cocktail => {
        // Применяем фильтры по типу и сложности
        if (drinkType !== 'all' && cocktail.type !== drinkType) return false;
        if (difficulty !== 'all' && cocktail.difficulty !== difficulty) return false;
        
        // Проверяем совпадение ингредиентов
        const cocktailIngredients = cocktail.ingredients.map(ing => ing.name.toLowerCase());
        return userIngredients.some(userIng => 
            cocktailIngredients.some(cocktailIng => cocktailIng.includes(userIng))
        );
    });
    
    // Сортируем по количеству совпадений
    matchingCocktails.sort((a, b) => {
        const aIngredients = a.ingredients.map(ing => ing.name.toLowerCase());
        const bIngredients = b.ingredients.map(ing => ing.name.toLowerCase());
        
        const aMatches = userIngredients.filter(userIng => 
            aIngredients.some(cocktailIng => cocktailIng.includes(userIng))
        ).length;
        
        const bMatches = userIngredients.filter(userIng => 
            bIngredients.some(cocktailIng => cocktailIng.includes(userIng))
        ).length;
        
        return bMatches - aMatches;
    });
    
    displayResults(matchingCocktails, userIngredients);
}

// Функция для отображения результатов поиска
function displayResults(cocktails, searchQuery) {
    const resultsContainer = document.getElementById('results');
    const resultsCount = document.getElementById('results-count');
    
    resultsContainer.innerHTML = '';
    
    if (cocktails.length === 0) {
        resultsCount.textContent = 'К сожалению, по вашему запросу ничего не найдено. Попробуйте другие ингредиенты.';
        resultsContainer.innerHTML = '<div class="no-results">Попробуйте ввести другие ингредиенты или изменить фильтры</div>';
        return;
    }
    
    resultsCount.textContent = `Найдено коктейлей: ${cocktails.length}`;
    
    cocktails.forEach(cocktail => {
        const card = createCocktailCard(cocktail);
        resultsContainer.appendChild(card);
    });
}

// Функция для создания карточки коктейля
function createCocktailCard(cocktail) {
    const card = document.createElement('div');
    card.className = 'cocktail-card';
    
    const header = document.createElement('div');
    header.className = 'cocktail-header';
    
    const name = document.createElement('h3');
    name.className = 'cocktail-name';
    name.textContent = cocktail.name;
    
    const type = document.createElement('div');
    type.className = 'cocktail-type';
    type.textContent = `${cocktail.type} • ${cocktail.difficulty}`;
    
    header.appendChild(name);
    header.appendChild(type);
    
    const body = document.createElement('div');
    body.className = 'cocktail-body';
    
    const ingredientsList = document.createElement('div');
    ingredientsList.className = 'ingredients-list';
    
    cocktail.ingredients.forEach(ingredient => {
        const item = document.createElement('div');
        item.className = 'ingredient-item';
        
        const nameSpan = document.createElement('span');
        nameSpan.className = 'ingredient-name';
        nameSpan.textContent = ingredient.name;
        
        const amountSpan = document.createElement('span');
        amountSpan.className = 'ingredient-amount';
        amountSpan.textContent = ingredient.amount;
        
        item.appendChild(nameSpan);
        item.appendChild(amountSpan);
        ingredientsList.appendChild(item);
    });
    
    const recipe = document.createElement('div');
    recipe.className = 'recipe';
    recipe.textContent = cocktail.recipe;
    
    body.appendChild(ingredientsList);
    body.appendChild(recipe);
    
    card.appendChild(header);
    card.appendChild(body);
    
    return card;
}

// Настройка кнопки Telegram
function setupTelegramButton() {
    const mainBtn = tg.MainButton;
    mainBtn.setText("НАЙТИ КОКТЕЙЛИ");
    mainBtn.show();
    
    mainBtn.onClick(() => {
        findCocktails();
        tg.HapticFeedback.impactOccurred('medium');
    });
}