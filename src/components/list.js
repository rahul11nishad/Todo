import React from "react";
import Time from "./time";
function List(props){
    const get=props.onGet;
    const del=()=>
    {
        props.onDel(get);
    }
    const edit=()=>
    {
        props.onEdit(get);
    }
    const check=(e)=>{
        props.onCheck(e.target.checked,get)
    }
    return(
        <div className="list">
            <div className="chek"><label>Done</label><input type="checkbox" onClick={check}/></div>
            <div className="time"><li>{props.value}</li><Time date={props.time}/></div>
            <div className="btn">
                <button onClick={edit}>Edit</button>
                <button onClick={del}>Delete</button>
            </div>
        </div>
    )
}
export default List;

// class Rows extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.del=this.del.bind(this)
// 	}
//   render(){
//     const item=this.props.item;
//     return(
//       <div className='list'><li>{item}</li><button className='edit'>Edit</button>  <button className='del' onClick={this.del}>Delete</button></div>
//     )
//   }
//   del()
//   {
// 	const item=this.props.item;
// 	const kee=this.props.key;
// 	const ob={value:item,id:kee}
// 	this.props.onEdit(ob);
//   }
// }
