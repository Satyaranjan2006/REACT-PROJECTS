//single selection
// multiple selection
import { useState } from "react"
import data from './data'
import './style.css'

export default function  Accordian(){

const [selected, setselected] = useState(null)

const [enableMultiSelection, setenableMultiSelection] = useState(false)
const [multiple, setmultiple] = useState([])

function handelSingleSelection(getCurrentId){
    

    setselected(getCurrentId===selected ? null :getCurrentId)
    

}

function handelMultiSelection(getCurrentId) {
let cpymultiple=[...multiple]
const findIndexOfCurrentId=cpymultiple.indexOf(getCurrentId)

if(findIndexOfCurrentId===-1) cpymultiple.push(getCurrentId)
else cpymultiple.splice(findIndexOfCurrentId,1)

setmultiple(cpymultiple)
    
}
console.log(selected,multiple);


    return <div className="wrapper">

        <button onClick={()=>setenableMultiSelection(!enableMultiSelection)}>Enable MultiSelection</button>
        <div className="accordian">
            {
                data && data.length>0 ? (
                    data.map((dataitem)=>(
                        <div className="item">
                            <div onClick={ enableMultiSelection
                                 ?()=> handelMultiSelection(dataitem.id)
                                  : ()=>handelSingleSelection(dataitem.id)} className="title">
                                <h3>{dataitem.question}</h3>
                                <span>+</span>
                            </div>
                            {/* showing answer*/}
                            {
                                enableMultiSelection ?
                                multiple.indexOf(dataitem.id) !== -1 &&
                                <div className="content">{dataitem.answer}</div> :
                                selected===dataitem.id && <div className="content">{dataitem.answer}</div>

                            }
                            {/* {
                                selected===dataitem.id || multiple.indexOf(dataitem.id)? <div className="content">{dataitem.answer}</div> : null
                            } */}
                        </div>
                    ))

                    
                )
                
                : <div>No data found</div>

            }
        </div>
    
    </div>
}