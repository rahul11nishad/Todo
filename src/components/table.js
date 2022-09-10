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
    const itemList=[];
    function check(bul,ind)
    {
        if(bul)
        {
            setDone(done.concat(itemList[ind]));
            del(ind);
        }
    }
    // const itemList=[]
    list.map((item,index)=>{
        return itemList.push(<List key={item.id} value={item.value} onGet={index} onDel={del} onEdit={edit} time={item.id} onCheck={check}/>)
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
    const recent=itemList.length!==0?<div className="container"><div className="recent">Recent</div><div className="clear">clear</div></div>:"";
    const donn=done.length!==0?<div className="container"><button className="done">Done</button><button className="clear">clear</button></div>:"";
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