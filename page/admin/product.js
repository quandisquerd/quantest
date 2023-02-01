import header from "../../component/header";
import { List } from "../../data";
import { useEffect, useState } from "../../lib"


const product = () => {
    const [data,setData]= useState(List);
    useEffect(function(){
        const btns= document.querySelectorAll('.btn-remove');
        console.log(btns);
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener('click',function(){
                const newData = data.filter((project)=>project.id!=id);
                setData(newData);
            })
        }
    })
  return `${header()}
  <table border="1px" cellspacing="1px" cellpadding="1px">
      <thead>
        <th>Stt</th>
        <th>Name</th>
        <th>Image</th>
        <th>Remove</th>
      </thead>
      <tbody>
      ${data.map((product,index)=> `
      <tr>
        <td>${index+1}</td>
         <td>${product.name}</td>
          <td><img src="${product.img}"></td>
           <td><button data-id="${product.id}" class="btn-remove">Remove</button></td>
        
        </tr>
      `)}
      
      </tbody>
    </table>`
}

export default product