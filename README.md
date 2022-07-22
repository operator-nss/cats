# Using The Cat API - Cats as a Service.

# Примечание: https://thecatapi.com/ временно лихорадит. Сервер не выдает заданное количество картинок по запросу. Поэтому я пока переделал эту зависимость на просто смену "page" при каждом запросе картинок котиков.

## 🛠 Технологии:

 - **ReactJS 18**
 - **TypeScript**
 - **Redux Toolkit (хранение данных / котиков)**
 - **React Router v6 (навигация)**
 - **Axios + Fetch (отправка запроса на Api)**
 - **React Hooks (хуки)**
 - **SCSS (стилизация)**
 - **clsx(Младший брат Classnames)**
 - **Loader (загрузка)**
 - **React Content Loader** (Скелетон)
 - **Prettier (форматирование кода)**

### Подробнее о технологиях

- **[TypeScript](https://www.typescriptlang.org/)** — необходим для написания более грамотного JavaScript-кода. Благодаря правильному написанию TS-кода, мы автоматически документируем наш код + наше приложение будет содержать меньше багов из-за строгой типизации.
- **[Redux Toolkit](https://redux-toolkit.js.org/)** — с помощью данной библиотеки, мы сможем создать глобальное хранилище данных для нашего приложения, тем самым, более удобным способом обмениваться информацией между разными компонентами нашего приложения. Данная библиотека активно внедряется во все крупные и малые react-проекты на 2021-2022 г.
- **[React Router v6](https://reactrouter.com/docs/en/v6/getting-started/overview)** — позволит нам создать навигацию по нашему сайту без перезагрузок страницы. Ты, наверное, обратил внимание, что сайт VK или Instagram при переходе по разным разделам, не перезагружает всю страницу, а только определенную часть сайта. Именно эту возможность мы и будем внедрять в наше приложение с помощью React Router.
- **[Axios](https://github.com/axios/axios)** — нам поможет взаимодействовать с серверной частью. Отправлять данные на сервер или получать их при необходимости из сервера уже в наше фронтенд-приложение.
- **[React Hooks](https://ru.reactjs.org/docs/hooks-intro.html)** — это набор готовых функций внутри библиотеки React для решения разнообразных задач, например, хранение данных, определение первого отображения приложения, оптимизаций функций и т.п.
- **[Prettier](https://prettier.io/)** — наш код должен быть не только хорошо написано, но и красиво. С помощью Prettier наш код будет автоматически выровняться внутри нашего редактора кода, тем самым, становиться более читабельным.
- **[SCSS](https://sass-scss.ru/)** — это тот же CSS, но с более мощными возможностями, функциями, переменными, циклами (да, Карл, циклы в CSS) и кучей других крутых решений.
- **[React Content Loader](https://skeletonreact.com/)** — Инструмент для простого создания анимированных компонентов каркасного экрана, заменяющий обычную загрузку и обеспечивающий более удобный интерфейс для пользователей, предоставляющий каркас ваших страниц, например поля-заполнители для содержимого и изображений. Поддерживает React, React Native, Vue и ванильный HTML.

Режим разработки:
1. yarn
2. yarn start

Режим Production:
1. yarn
2. yarn build
