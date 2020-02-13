import Home from "../landing-pages/pages/";
import About from "../landing-pages/pages/about";
import Contact from "../landing-pages/pages/contact";
import Hire from "../landing-pages/pages/hire";
import Mentorship from "../landing-pages/pages/mentorship";
import Faq from "../pages/faq"

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: "/about-us",
    name: "About Us",
    component: About
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/learn",
    name: "Learn",
    component: Home
  },
  {
    path: "/blog",
    name: "Blog",
    component: Home
  },
  {
    path: "/hire",
    name: "Hire",
    component: Hire
  },
  {
    path: "/mentorship",
    name: "Mentorship",
    component: Mentorship
  },
  {
    path: "/faq",
    name: "FAQ",
    component: Faq
  },
];

export default routes;
