import header from "../component/header"
import projectList from "../component/projectList"
import { List } from "../data"
const project = () => {
  return `${header()}${projectList({List})}`
}

export default project