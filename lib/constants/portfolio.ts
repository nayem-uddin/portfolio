import { Project } from "../definitions";

export const portfolio: Project[] = [
  {
    title: "A book showcase",
    description: `A book showcase web app developed with React.js, CSS, and Bootstrap to develop the UI, and third-party libraries, 
    such as Faker.js, React-CSV, Fabric, etc., to add other functionalities like getting random books, book cover generation, export to CSV, etc. 
    It displays books based on the language, likes, reviews, and random books based on the seed value provided. In this app, the user can know 
    about the details of a book clicking on the accordion. Although the book data used here aren't real, the layout can inspire real book 
    showcase apps.`,
    frontEndRepo: "https://github.com/nayem-uddin/itransition-task-5.git",
    cover: "/bookshowcase.png",
  },
  {
    title: "A presentation builder",
    description: `A full-stack web app to build collaborative online presentations. Its UI is built with React.js, CSS, and Bootstrap. To
    implement the features, like presentation mode, markdown-supported resizable and draggable textboxes, etc., some third-party 
    libraries (e.g., Spectacle, React RND, React Markdown, etc.) are used. The app can display the real-time changes made on a 
    slide using Socket.IO. The slide data, user details, and other information are stored in a MySQL database.`,
    frontEndRepo:
      "https://github.com/nayem-uddin/itransition-task-6-frontend.git",
    backEndRepo:
      "https://github.com/nayem-uddin/itransition-task-6-backend.git",
    cover: "/slidebuilder.png",
  },
  {
    title: "A cloud-based survey app",
    description: `A full-stack web app for online form building. Its UI is made with React.js, CSS, Bootstrap, and Material UI.
    A user can create forms, view and fill in public forms or the forms that they are given access to, control the access to their created
    forms, edit and delete forms created by them, filter the forms based on search queries and tags, and sort the
    forms on the homepage based on popularity and date of creation. The title and description boxes of the form and its questions are 
    markdown-supported, and the questions can be re-organized using the drag-n-drop technique.
    These features were implemented using several third-party libraries, such as Fuse.js, React-RND, React-Markdown, etc.
    Also, the users can like and comment on a form, and the likes and comments are updated and viewed instantly with the help of Socket.IO.
    However, the admins are the supreme authority here; they can control user and admin access and handle forms like the creators despite
    not being the creators. For global state management, Redux Toolkit is used in this project. As for the backend, Express.js is used for
    the REST API development, and for database management, Sequelize is used, with the MySQL dialect. In addition, this app is integrated with 
    Salesforce and Google Dropbox to store the data of the users interested to use other services and to store reports of the users facing issues 
    using the app, respectively.`,
    frontEndRepo: `https://github.com/nayem-uddin/itransition-project-frontend.git`,
    backEndRepo: `https://github.com/nayem-uddin/itransition-project-backend.git`,
    cover: `/form.png`,
  },
  {
    title: "A static authenticator web app",
    frontEndRepo: "https://github.com/nayem-uddin/static-auth-webapp.git",
    cover: "/auth.png",
    description: `A static web app integrated with an external API for creating and handling user profiles. The UI of this app is built with 
    Next.js, Tailwind CSS, and Material UI. When the user logs in, the user data is extracted from a JavaScript Web Token (JWT) received from
    the API and displayed on the user dashboard. In addition, if the user wants to change the login password, they can make a request from their
    dashboard. After that, they are sent an email with an OTP which they need to put on the UI to verify their identity. After successful
    identity verification, they are allowed to change their password, and then they can either continue the running session or log out and
    start a new session.`,
  },

  {
    title: "A recipe finder app",
    description: `A basic recipe finder web app built with React.js and CSS. It can display recipes based on the search of the user. 
    This app fetches the queried recipes using a third-party API.`,
    frontEndRepo: "https://github.com/nayem-uddin/find-recipe.git",
    cover: "/recipefinder.png",
  },
  {
    title: "A todos manager app",
    frontEndRepo: "https://github.com/nayem-uddin/Todo-app.git",
    description: `A todos manager web app built with React, CSS, and Bootstrap. Using this app, a user can manage their todos i.e.,
    add new todos, mark existing todos as complete/to-do, and delete todos. This is a demo app, and so no data is stored permanently 
    in this app.`,
    cover: "/todo.png",
  },
  {
    title: "A restaurant webpage",
    frontEndRepo: "https://github.com/nayem-uddin/restaurant.git",
    description: `A static and responsive demo restaurant webpage built with HTML and CSS.`,
    cover: "/restaurant.png",
  },
  {
    title: "A login and signup system",
    frontEndRepo:
      "https://github.com/nayem-uddin/API-based-login-and-signup-system.git",
    backEndRepo: "https://github.com/nayem-uddin/api.git",
    description:
      "A basic user login and signup system having an UI built with HTML and CSS and a REST API built with Flask.",
    cover: "/login.png",
  },
  {
    title: "A simple online calculator",
    description: `A simple calculator built with HTML, CSS, and JavaScript. This calculator can perform simple arithmetic operations only.`,
    frontEndRepo: "https://github.com/nayem-uddin/simple-calculator.git",
    cover: "/calculator.png",
  },
];
