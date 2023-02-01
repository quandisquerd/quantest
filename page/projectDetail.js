
import header from '../component/header';
import { List } from '../data'
import { render } from '../lib';

const projectDetail = ({data:{id}}) => {
    const current= List.find(project=>project.id == id);
    if(!current) return render.navigate('/project');
  return `
  ${header()}
  ${current.name}
  <img src="${current.img}">
  `
}

export default projectDetail