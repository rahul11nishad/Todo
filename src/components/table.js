import List from "./list";
import React, { useState } from "react";
function Table(props){
    const list=props.items;
    const [done,setDone]=useState([])
    const edit=(ind)=>
    {
        const colist=list[ind]
        props.onEdit(colist.value,ind)    
    }
    const del=(ind)=>{
        props.onDel(ind)
    }
    // const ondone=(ind)=>{
    //     props.onDone(ind)
    // }
    const clear=()=>{
        props.onClear(true);
    }
    const itemList=[];
    function donee(ind)
    {
        setDone(done.concat(itemList[ind]));
        props.onDone(ind);
        // del(ind);
    }
    const doneClear=()=>{
        setDone([]);
    }

    // const itemList=[]
    list.map((item,index)=>{
        return itemList.push(<List key={item.id} value={item.value} onGet={index} onDel={del} onEdit={edit} time={item.id} onDone={donee}/>)
    }
    )
    // function check(bul,ind)
    // {
    //     if(bul)
    //     {
    //         setDone(done.push(itemList[ind]));
    //         itemList.splice(ind,1);
    //     }
    // }
    // <button className="done">Done</button>
    const recent=itemList.length!==0?<div className="containerDone"><button className="recent">Recent</button><button className="clear" onClick={clear}>clear</button></div>:"";
    const donn=done.length!==0?<div className="containerDone"><button className="done">Done</button><button className="clear" onClick={doneClear}>clear</button></div>:"";
    return(
        <div className='table'>
            <ul>
                {recent}
                {itemList}
                {donn}
                {done}
            </ul>
	    </div>
    )
}
export default Table;
// class Taable extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.edit=this.edit.bind(this);
// 	}
//   render(){
//     const array=this.props.items;
//     const rows=[];
//     array.forEach((item)=>{
//         rows.unshift(
//             <List item={item.value} key={item.id}/>
//         )
//     })
//     return (
//       <div className='table'>
// 		<ul>
// 			{rows}
// 		</ul>
// 	  </div>
//     )
//   }
// }