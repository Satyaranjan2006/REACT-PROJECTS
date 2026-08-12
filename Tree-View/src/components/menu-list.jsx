import MenuItem from "./menu-item";
import './style.css'


export default function MenuList({list=[]}){
    //why we conver it from div to ul
    return <ul className="menu-list-container">
        {
            //checking whether the list is present.then after perform operation
            list && list.length? 
            //   QUESTION
            //why we do map on list.from where this list came
            list.map((listItem)=> <MenuItem item={listItem}/>)
            : null
        }
    </ul>
}