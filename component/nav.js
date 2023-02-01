import { menu } from "../data"

const nav = () => {
  return `
  ${menu.map(({name,path}) => `<li><a href="${path}">${name}</a></li>`).join("")}`
}

export default nav