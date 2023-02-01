import { router,render } from "./lib";
import about from "./page/about";
import product from "./page/admin/product";
import content from "./page/content";
import home from "./page/home";
import project from "./page/project";
import projectDetail from "./page/projectDetail";

const app = document.querySelector("#app");

router.on("/", ()=>render(home,app));
router.on("/about", ()=>render(about,app));
router.on("/content", ()=>render(content,app));
router.on("/project",()=>render(project,app));
router.on("/project/:id" , (params)=>render(()=> projectDetail(params),app));

router.on("/admin/project", ()=>render(product,app));

router.resolve();