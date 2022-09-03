import List from "./list";
// import React from "react";
function Table(props){
    const list=props.items;
    const edit=(ind)=>
    {
        const colist=list[ind]
        props.onEdit(colist.value,ind)    
    }
    const del=(ind)=>{
        props.onDel(ind)
    }
    const itemList=[]
    list.map((item,index)=>{
        return itemList.push(<List key={item.id} value={item.value} onGet={index} onDel={del} onEdit={edit} time={item.id}/>)
    }
    )
    return(
        <div className='table'>
            <ul>
                {itemList}
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