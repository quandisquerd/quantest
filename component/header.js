import nav from "./nav"

const header = () => {
  return `
   <link rel="stylesheet" href="style.css">
  ${nav()}`
}

export default header