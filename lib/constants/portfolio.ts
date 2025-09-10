import { Project, ToggleOption } from "../definitions";
import { countProjectType } from "../utils";

export const portfolio: Project[] = [
  {
    title: "A book showcase",
    description:
      "A book showcase web app developed to " +
      "display books based on the language, likes, reviews, and random books based on the seed value provided. In this app, the user can know " +
      "about the details of a book clicking on the accordion. Although the book data used here aren't real, the layout can inspire real book " +
      "showcase apps.",
    repoLinks: {
      frontEndRepo: "https://github.com/nayem-uddin/itransition-task-5.git",
    },
    cover: "/bookshowcase.png",
    type: "frontEnd",
    techStack: [
      "React.js",
      "CSS",
      "Bootstrap",
      "Faker.js",
      "React-CSV",
      "Fabric",
    ],
  },
  {
    title: "A presentation builder",
    description:
      "A full-stack web app to build collaborative online presentations. It has a lot of features, " +
      "like in-browser presentation mode, slides with markdown-supported resizable and draggable textboxes, etc. " +
      "The app can display the real-time changes made on a slide.",
    repoLinks: {
      frontEndRepo:
        "https://github.com/nayem-uddin/itransition-task-6-frontend.git",
      backEndRepo:
        "https://github.com/nayem-uddin/itransition-task-6-backend.git",
    },
    cover: "/slidebuilder.png",
    type: "fullStack",
    techStack: [
      "React.js",
      "CSS",
      "Bootstrap",
      "Spectacle",
      "React RND",
      "React Markdown",
      "React Hook Form",
      "Socket.IO",
      "Express.js",
      "Sequelize",
      "MySQL",
    ],
  },
  {
    title: "A cloud-based survey app",
    description:
      "A full-stack web app for online form building. In this app, " +
      "A user can create forms, view and fill in public forms or the forms that they are given access to, control the access to their created " +
      "forms, edit and delete forms created by them, filter the forms based on search queries and tags, and sort the " +
      "forms on the homepage based on popularity and date of creation. The title and description boxes of the form and its questions are " +
      "markdown-supported, and the questions can be re-organized using the drag-n-drop technique. " +
      "Also, the users can like and comment on a form, and the likes and comments are updated and viewed instantly. " +
      "However, the admins are the supreme authority here; they can control user and admin access and handle forms like the creators despite " +
      "not being the creators. " +
      "In addition, the users can register if they want to use the other services, and they can report an issue to the admins if they find any.",
    repoLinks: {
      frontEndRepo: `https://github.com/nayem-uddin/itransition-project-frontend.git`,
      backEndRepo: `https://github.com/nayem-uddin/itransition-project-backend.git`,
    },
    cover: `/form.png`,
    type: "fullStack",
    techStack: [
      "React.js",
      "CSS",
      "Bootstrap",
      "Material UI",
      "Fuse.js",
      "React-RND",
      "React-Markdown",
      "React Hook Form",
      "Socket.IO",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "Sequelize",
      "MySQL",
      "Salesforce API",
      "Google Dropbox API",
    ],
  },
  {
    title: "A static authenticator web app",
    repoLinks: {
      frontEndRepo: "https://github.com/nayem-uddin/static-auth-webapp.git",
    },
    cover: "/auth.png",
    description:
      "A static web app integrated with an external API for creating and handling user profiles. " +
      "When the user logs in, the user data is extracted from a JSON Web Token (JWT) received from " +
      "the API and displayed on the user dashboard. In addition, if the user wants to change the login password, they can make a request from their " +
      "dashboard. After that, they are sent an email with an OTP which they need to put on the UI to verify their identity. After successful " +
      "identity verification, they are allowed to change their password, and then they can either continue the running session or log out and " +
      "start a new session.",
    type: "frontEnd",
    techStack: ["Next.js", "Tailwind CSS", "Material UI", "jwt-decode"],
  },

  {
    title: "A recipe finder app",
    description:
      "A basic recipe finder web app built that can display recipes based on the search of the user. " +
      "This app fetches the queried recipes using a third-party API.",
    repoLinks: {
      frontEndRepo: "https://github.com/nayem-uddin/find-recipe.git",
    },
    cover: "/recipefinder.png",
    type: "frontEnd",
    techStack: ["React.js", "CSS"],
  },
  {
    title: "A todos manager app",
    repoLinks: {
      frontEndRepo: "https://github.com/nayem-uddin/Todo-app.git",
    },
    description:
      "A todos manager web app using which a user can manage their todos i.e., " +
      "add new todos, mark existing todos as complete/to-do, and delete todos. This is a demo app, and so no data is stored permanently " +
      "in this app.",
    cover: "/todo.png",
    type: "frontEnd",
    techStack: ["React.js", "CSS", "Bootstrap"],
  },
  {
    title: "A restaurant webpage",
    repoLinks: {
      frontEndRepo: "https://github.com/nayem-uddin/restaurant.git",
    },
    description: `A static and responsive demo restaurant webpage.`,
    cover: "/restaurant.png",
    type: "frontEnd",
    techStack: ["HTML", "CSS"],
  },
  {
    title: "A login and signup system",
    repoLinks: {
      frontEndRepo:
        "https://github.com/nayem-uddin/API-based-login-and-signup-system.git",
      backEndRepo: "https://github.com/nayem-uddin/api.git",
    },
    description:
      "A basic user login and signup system. In this app, the user can only log in or sign up, but cannot update their profile details.",
    cover: "/login.png",
    type: "fullStack",
    techStack: ["HTML", "CSS", "Flask", "MySQL"],
  },
  {
    title: "A simple online calculator",
    description:
      "A simple calculator able to perform simple arithmetic operations only.",
    repoLinks: {
      frontEndRepo: "https://github.com/nayem-uddin/simple-calculator.git",
    },
    cover: "/calculator.png",
    type: "frontEnd",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
];
export const toggleOptions: ToggleOption[] = [
  { label: "All", value: "all", count: portfolio.length },
  {
    label: "Full-stack",
    value: "fullStack",
    count: countProjectType("fullStack", portfolio),
  },
  {
    label: "Front-end",
    value: "frontEnd",
    count: countProjectType("frontEnd", portfolio),
  },
];
