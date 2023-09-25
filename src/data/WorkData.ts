import ResponsiveDashboard from "../assets/responsive-dashboard-light.webp";
import GPT3Landing from "../assets/gpt3-landing.webp";
import CovidTracker from "../assets/covid-tracker.webp";
import RestaurantLanding from "../assets/restaurant-landing.webp";

const data: {
  title: string;
  techStack: string;
  description: string;
  image: any;
  siteUrl: string;
  codeUrl: string;
}[] = [
  {
    title: "Frontend Mentor Challenge",
    techStack: "HTML, JS, SCSS",
    description:
      "A Fully responsive Dashboard site made using plain HTML and Javascript for adding some functionalities. On top of that, styling is done using an CSS preprocessor called as SASS/SCSS. It has Dark and Light mode toggle upon which color scheme changes of whole website. The previous preference about color mode is saved in localstorage and hence it persists even after reload.",
    image: ResponsiveDashboard,
    siteUrl: "https://vanilla-responsive-dashboard.netlify.app/",
    codeUrl:
      "https://github.com/durwankurnaik/responsive-vanilla-dashboard-challenge",
  },
  {
    title: "GPT-3 Landing page",
    techStack: "ReactJS, CSS",
    description:
      "This is a figma design that is coded using ReactJS and styled using CSS. It is a landing page for OpenGPT-3. It is a clean modern and responsive website which brings for a great UI/UX experience.",
    image: GPT3Landing,
    siteUrl: "https://modern-ui-project.web.app/",
    codeUrl: "https://github.com/durwankurnaik/modern-ui-implementation-1",
  },
  {
    title: "Covid Tracker",
    techStack: "ReactJS, ChartJS, CSS",
    description:
      "A Covid-19 stats tracker made using ReactJS and ChartJS which is styled using CSS. It fetches data from an external API and represents it in an easy to understand format. Charts are made using ChartJS library and it helps in visualising the data more clearly.",
    image: CovidTracker,
    siteUrl: "https://covid-19-tracker-12c1f.web.app/",
    codeUrl: "https://github.com/durwankurnaik/covid-19-tracker",
  },
  {
    title: "Restaurant Landing page",
    techStack: "ReactJS, CSS",
    description:
      "A modern looking and clean responsive figma design implemented using ReactJS and styled using CSS.",
    image: RestaurantLanding,
    siteUrl: "https://restaurant-landingpage.web.app/",
    codeUrl: "https://github.com/durwankurnaik/modern-ui-implementation-2",
  },
];

export default data;
