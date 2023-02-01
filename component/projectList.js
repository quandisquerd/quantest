// import { List } from "../data"
import projectItem from "./projectItem"

const projectList = ({List}) => {
  return `${List.map((project)=> `${projectItem({project})}`).join('')}`
}

export default projectList