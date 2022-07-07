Using The Cat API - Cats as a Service.

Because everyday is a Caturday))

🛠 Технологии:

ReactJS 18
TypeScript
Redux Toolkit (хранение данных / котиков)
React Router v6 (навигация)
Axios + Fetch (отправка запроса на Api)
React Hooks (хуки)
SCSS (стилизация)
clsx(Младший брат Classnames)
Content Loader (загрузка)
Prettier (форматирование кода)

Подробнее о технологиях
TypeScript — необходим для написания более грамотного JavaScript-кода. Благодаря правильному написанию TS-кода, мы автоматически документируем наш код + наше приложение будет содержать меньше багов из-за строгой типизации.
Redux Toolkit — с помощью данной библиотеки, мы сможем создать глобальное хранилище данных для нашего приложения, тем самым, более удобным способом обмениваться информацией между разными компонентами нашего приложения. Данная библиотека активно внедряется во все крупные и малые react-проекты на 2021-2022 г.
React Router v6 — позволит нам создать навигацию по нашему сайту без перезагрузок страницы. Ты, наверное, обратил внимание, что сайт VK или Instagram при переходе по разным разделам, не перезагружает всю страницу, а только определенную часть сайта. Именно эту возможность мы и будем внедрять в наше приложение с помощью React Router.
Axios — нам поможет взаимодействовать с серверной частью. Отправлять данные на сервер или получать их при необходимости из сервера уже в наше фронтенд-приложение.
React Hooks — это набор готовых функций внутри библиотеки React для решения разнообразных задач, например, хранение данных, определение первого отображения приложения, оптимизаций функций и т.п.
Prettier — наш код должен быть не только хорошо написано, но и красиво. С помощью Prettier наш код будет автоматически выровняться внутри нашего редактора кода, тем самым, становиться более читабельным.
SCSS — это тот же CSS, но с более мощными возможностями, функциями, переменными, циклами (да, Карл, циклы в CSS) и кучей других крутых решений.

Режим разработки:
yarn
yarn start

Режим Production:
yarn
yarn build