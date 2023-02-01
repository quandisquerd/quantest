import header from "../../component/header";
import { List } from "../../data";
import { useEffect, useState } from "../../lib"


const product = () => {
    const [data,setData]= useState(List);
    
    // setData(dataList);
    useEffect(function () {
      
        const btnn = document.querySelectorAll('.btn-new');
        console.log(btnn);
        for (let btn of btnn) {
            const id = btn.dataset.id;
             
            btn.addEventListener('click', function () {
               const idd= List.length+1
                const newData = (previousData) => [...previousData, {
                    id: idd,
                    name: "san pham 3",
                    img: "https://cpad.ask.fm/450/774/576/-29996968-1tfd7tc-gpggmmc5d0og3a0/original/image.jpg"
                }];
                console.log(idd)
                setData(newData)
            })
        }
    })
    useEffect(function(){
        const btns= document.querySelectorAll('.btn-remove');
  
      
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener('click',function(){
                const newData = data.filter((project)=>project.id!=id);
                
                setData(newData);
            })
        }
    })
  return `${header()}
  <button class="btn-new">New</button>
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