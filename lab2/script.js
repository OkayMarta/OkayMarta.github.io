/**
 *  Додаємо обробник події DOMContentLoaded, щоб гарантувати,
 *  що скрипт виконується після повного завантаження DOM.
 */
document.addEventListener('DOMContentLoaded', function() {

    /**
     * Масив об'єктів, що представляють статті.
     * Кожен об'єкт містить інформацію про статтю:
     * id, заголовок, дату публікації, зображення, альтернативний текст для зображення,
     * текст статті (масив параграфів) та масив коментарів.
     */
    const articles = [
        {
            id: "article1",
            title: "Гофбург – серце імперського Відня",
            date: "16.02.2025",
            image: "images/image7.jpg",
            alt: "Гофбург",
            text: [
                "Гофбург – це величний палацовий комплекс у самому серці Відня, що століттями був резиденцією австрійських монархів. Його розкішні зали, витончені фасади та внутрішні двори переносять у часи імперської величі. Сьогодні Гофбург вражає своєю архітектурною пишністю та є важливим культурним центром міста.",
                "Цікавий факт: палац служив офіційною резиденцією Габсбургів понад 600 років. Тут розташовані Імператорські покої, колекція коштовностей та знаменита Іспанська школа верхової їзди, де можна побачити елегантних липіцанських коней у дії.",
                "Гофбург зачаровує своєю історією, і кожен куточок цього палацу – мовчазний свідок минулих епох, які залишили незабутній слід у серці Відня."
            ],
            comments: [] // Масив для коментарів
        },
        {
            id: "article2",
            title: "Палац Шенбрунн – перлина Відня",
            date: "15.02.2025",
            image: "images/image4.jpg",
            alt: "Палац Шенбрунн",
            text: [
                "Шенбрунн – один із найвеличніших палаців Європи, що став символом імператорської величі Австрії. Розташований у Відні, цей бароковий комплекс слугував літньою резиденцією Габсбургів протягом кількох століть. Його розкішні зали пам’ятають Марію Терезію, Франца Йосифа та імператрицю Сісі.",
                "З пагорба Глорієтта відкривається вражаюча панорама на палац і місто. Навколо – доглянуті сади, що змінюються з пір року, надаючи Шенбрунну особливого шарму. Сьогодні цей історичний ансамбль є об’єктом Світової спадщини ЮНЕСКО та однією з найпопулярніших туристичних локацій Австрії.",
                "Відвідування Шенбрунна – це подорож у минуле, де велич та краса гармонійно поєднуються з історією."
            ],
            comments: []
        },
        {
            id: "article3",
            title: "Собор Святого Віта – серце Праги",
            date: "05.02.2024",
            image: "images/image5.jpg",
            alt: "Собор Святого Віта",
            text: [
                "Собор Святого Віта – головний храм Чехії та справжній шедевр готичної архітектури. Він височіє в серці Празького граду, вражаючи своїми витонченими шпилями, величними вітражами та багатим декором. Будівництво собору тривало майже 600 років, і кожна епоха залишила свій слід у його величному образі.",
                "Цікавий факт: у соборі зберігаються королівські регалії Чехії, зокрема корона святого Вацлава, яка використовується лише під час коронації. Також тут знаходиться гробниця Карла IV – одного з найвидатніших правителів Чехії.",
                "Собор Святого Віта – це не лише місце поклоніння, а й жива історія Праги, яка зачаровує кожного, хто його відвідує."
            ],
            comments: []
        },
        {
            id: "article4",
            title: "Венеція – місто на воді",
            date: "06.07.2023",
            image: "images/image6.jpg",
            alt: "Венеціанський канал",
            text: [
                "Венеція – унікальне місто, де вулиці замінені каналами, а автомобілі – витонченими гондолами. Прогулянка на гондолі вузькими водними шляхами – це незабутній досвід, що дозволяє відчути романтику цього стародавнього міста. Кожен канал приховує свою історію, а кожна будівля на березі – мовчазний свідок минулих століть.",
                "Цікавий факт: щоб стати гондольєром у Венеції, потрібно пройти суворе навчання та скласти іспит. У місті існує обмежена кількість ліцензій, а професія часто передається у спадок. Традиційний одяг гондольєрів – чорно-біла або червоно-біла смугаста сорочка – став одним із символів Венеції.",
                "Венеція зачаровує своєю атмосферою, і кожна подорож цими каналами – це мить, яку хочеться зберегти назавжди."
            ],
            comments: []
        }
    ];

    /**
     * Функція для рендерингу статей на сторінці.
     * @param {Array} articles Масив об'єктів статей.
     */
    function renderArticles(articles) {
        const articlesContainer = document.querySelector('.articles-list'); // Контейнер для статей

        // Використовуємо цикл while для ітерації по масиву статей
        let i = 0;
        while (i < articles.length) {
            const article = articles[i];

            // Формуємо HTML-код для кожної статті
            const articleHTML = `
                <article id="${article.id}" class="article-item">
                    <div class="publication-header">
                        <h3 class="publication-title"><a href="#${article.id}">${article.title}</a></h3>
                        <p class="publication-date">${article.date}</p>
                        <div class="publication-actions">
                            <button class="like-btn" data-article-id="${article.id}">Подобається</button>
                        </div>
                    </div>
                    <article class="publication-content">
                        <div class="publication-image">
                            <img src="${article.image}" alt="${article.alt}">
                        </div>
                        <div class="publication-text">
                            ${article.text.map(paragraph => `<p>${paragraph}</p>`).join('')}
                            <a href="#articles" class="collapse-btn">Згорнути</a>
                        </div>
                    </article>

                    <div class="comment-section">
                        <h4>Коментарі</h4>
                        <form class="comment-form">
                            <div class="form-group">
                                <label for="comment-name-${article.id}">Ваше ім'я:</label>
                                <input type="text" id="comment-name-${article.id}" class="comment-name-input" placeholder="Ваше ім'я">
                            </div>
                            <div class="form-group">
                                <label for="comment-text-${article.id}">Ваш коментар:</label>
                                <textarea id="comment-text-${article.id}" class="comment-text-input" placeholder="Ваш коментар"></textarea>
                            </div>
                            <button type="submit" class="submit-comment-btn">Надіслати</button>
                        </form>
                        <div class="comments-list" id="comments-list-${article.id}">
                            <!-- Місце для виведення коментарів -->
                        </div>
                    </div>
                </article>
            `;

            // Додаємо HTML-код статті в контейнер
            articlesContainer.insertAdjacentHTML('beforeend', articleHTML);
            i++;
        }
    }

    /**
     * Функція для обробки кліку по кнопці "Подобається".
     * Додає або видаляє клас 'article-item--liked' у елемента статті.
     * @param {Event} event Об'єкт події.
     */
    function toggleLike(event) {
        const button = event.target;
        const articleId = button.dataset.articleId; // Отримуємо ID статті з data-атрибута

        // Перевіряємо наявність ID статті
        if (!articleId) {
            console.error("Не знайдено data-article-id");
            return;
        }

        const articleItem = button.closest('.article-item'); // Знаходимо найближчий батьківський елемент з класом .article-item
        // Перевіряємо, чи знайдено елемент статті
        if (!articleItem) {
            console.error("Не знайдено елемент статті");
            return;
        }

        articleItem.classList.toggle('article-item--liked'); // Додаємо/видаляємо клас, що змінює зовнішній вигляд
    }

    /**
     * Функція для додавання коментаря до статті.
     * @param {Event} event Об'єкт події.
     */
    function addComment(event) {
        event.preventDefault(); // Запобігаємо стандартній поведінці форми

        const button = event.target;
        const form = button.closest('.comment-form'); // Знаходимо форму

        // Перевіряємо, чи знайдено форму
        if (!form) {
            console.error("Form not found.");
            return;
        }

        const articleId = form.closest('.article-item').id;  // Отримуємо ідентифікатор статті

        // Перевіряємо наявність ID статті
        if (!articleId) {
            console.error("Article ID not found.");
            return;
        }

        // Отримуємо елементи вводу імені, тексту коментаря та список коментарів
        const nameInput = form.querySelector(`#comment-name-${articleId}`);
        const textInput = form.querySelector(`#comment-text-${articleId}`);
        const commentsList = document.getElementById(`comments-list-${articleId}`);

        // Перевіряємо, чи всі необхідні елементи знайдені
        if (!nameInput || !textInput || !commentsList) {
            console.error("Не знайдено одне з полів (nameInput, textInput, commentsList)");
            return;
        }

        // Отримуємо значення полів вводу, видаляючи зайві пробіли
        const name = nameInput.value.trim();
        const text = textInput.value.trim();

        // Перевіряємо, чи заповнені поля
        if (!name || !text) {
            alert("Будь ласка, заповніть всі поля коментаря!");
            return;
        }

        // Створюємо об'єкт коментаря
        const comment = {
            name: name,
            text: text,
        };

        // Оновлюємо список коментарів
        updateCommentList(articleId, comment);
        // Очищуємо поля вводу
        nameInput.value = "";
        textInput.value = "";
    }
     /**
     * Функція для оновлення списку коментарів до статті
     * @param {string} articleId Ідентифікатор статті
     * @param {object} comment Об'єкт коментаря, який потрібно додати
     */
    function updateCommentList(articleId, comment) {
        const commentsList = document.getElementById(`comments-list-${articleId}`);

        // Перевірка чи існує список коментарів
        if (!commentsList) {
            console.error("Не знайдено commentsList для статті з id:", articleId);
            return;
        }

        // Знаходимо статтю в масиві articles
        const article = articles.find(article => article.id === articleId);
        if (!article) {
            console.error("Не знайдено статтю з id:", articleId);
            return;
        }

        // Додаємо коментар в масив comments
        article.comments.push(comment);


        // Очищаємо commentsList
        commentsList.innerHTML = '';

        // Використовуємо цикл for для виведення коментарів
        for (let i = 0; i < article.comments.length; i++) {
            const currentComment = article.comments[i];
            // Формуємо HTML-код для кожного коментаря
            const commentHTML = `
                <div class="comment-item">
                    <p class="comment-author">${currentComment.name}</p>
                    <p class="comment-text">${currentComment.text}</p>
                </div>
            `;
            // Додаємо HTML-код коментаря до списку коментарів
            commentsList.insertAdjacentHTML('beforeend', commentHTML);
        }
    }

    /**
     * Функція для виділення елементів списку майбутніх подорожей.
     * Парні елементи отримують світло-сірий фон, непарні - білий.
     */
    function highlightElements() {
        const travelItems = document.querySelectorAll('.future-travels-section .travel-item');

        // Перевірка чи існують елементи
        if (!travelItems || travelItems.length === 0) {
            console.error("Travel items not found.");
            return;
        }

        // Ітеруємо по елементам і встановлюємо фон
        for (let i = 0; i < travelItems.length; i++) {
            if (i % 2 === 0) {
                travelItems[i].style.backgroundColor = '#f9f9f9'; // Світло сірий для парних
            } else {
                travelItems[i].style.backgroundColor = '#ffffff'; // Білий для непарних
            }
        }
    }

    /**
     * Функція для розгортання/згортання повного тексту статті.
     * @param {Event} event Об'єкт події.
     */
    function toggleArticleExpansion(event) {
        event.preventDefault(); // Зупиняємо стандартну поведінку посилання

        const link = event.target.closest('.publication-title a'); // Перевіряємо, чи клікнули на заголовок
        const collapseBtn = event.target.closest('.collapse-btn'); // Перевіряємо, чи клікнули на кнопку "Згорнути"

        // Якщо клік був не на заголовку і не на кнопці "Згорнути", виходимо з функції
        if (!link && !collapseBtn) {
             return;
        }

        const articleItem = (link || collapseBtn).closest('.article-item'); // Знаходимо найближчий батьківський .article-item

        // Якщо елемент статті не знайдено, виводимо помилку
        if (!articleItem) {
            console.error("Article item not found");
            return;
        }

        articleItem.classList.toggle('article-item--expanded'); // Перемикаємо клас, що відповідає за розгортання/згортання
    }



    // Отримуємо контейнер статей і додаємо обробники подій
    const articlesContainer = document.querySelector('.articles-list');
    if (articlesContainer) {
        renderArticles(articles); // Рендеримо статті

        // Додаємо обробник події 'click' на контейнер статей (делегування подій)
        articlesContainer.addEventListener('click', function(event) {
            // Перевіряємо, чи клікнули на кнопку "Подобається"
            if (event.target.classList.contains('like-btn')) {
                toggleLike(event); // Викликаємо функцію для обробки лайків
            }
            // Перевіряємо, чи клікнули на заголовок статті або кнопку "Згорнути"
            else if (event.target.closest('.publication-title a') || event.target.closest('.collapse-btn')) {
                toggleArticleExpansion(event); // Викликаємо функцію для розгортання/згортання статті
            }
        });

        // Додаємо обробник події 'submit' на контейнер статей для обробки відправки коментарів (делегування подій)
        articlesContainer.addEventListener('submit', function(event) {
             // Перевіряємо, чи відправлена форма коментаря
            if (event.target.classList.contains('comment-form')) {
                addComment(event); // Викликаємо функцію для додавання коментаря
            }
        });
    }

    highlightElements(); // Викликаємо функцію для підсвічування елементів списку
});