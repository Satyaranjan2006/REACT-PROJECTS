import MenuList from "./menu-list";
import { useState } from "react";
import { FaMinus,FaPlus } from "react-icons/fa";


export default function MenuItem({ item }) {
    //why we add a plus icon here? understand but for more clarification

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})
    //  I COULD NOT UNDERSTAND THIS FUNCTION CLEARLY.

    function handleToggleChildren(getCurrentlabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
        })
    }
    console.log(displayCurrentChildren);


    return <li>
        <div className="menu-item" >
            <p>{item.label}</p>

            {item && item.children && item.children.length ? <span onClick={() => handleToggleChildren(item.label)}>
                {
                    displayCurrentChildren[item.label]? <FaMinus color="#fff " size={25} />:<FaPlus color="#fff " size={25} />
                }
            </span> : null}

            {/* QUESTION */}

            {/* // BRO WHY IN ONCLICK FUNCTIONALITY WE PROVIDE ()=> THEN FUNCTION NAME, WE CAN SIMPLY PASS ONLY FUNCTION NAME */}
        </div>
         {item && item.children && item.children.length>0 && displayCurrentChildren[item.label] ?( <MenuList list={item.children} />): null}
        {/* //checking  whether each of listitem has children or not */}
       


    </li>
}