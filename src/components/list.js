import React from "react";
import Time from "./time";
function List(props){
    const get=props.onGet;
    // const clear=()=>
    // {
    //     props.onClear(true);
    // }
    const del=()=>
    {
        props.onDel(get);
    }
    const edit=()=>
    {
        props.onEdit(get);
    }
    const donee=()=>{
        props.onDone(get)
    }
    return(
        <div className="list">
            {/* <div className="chek"></div> */}
            <div><li>{props.value}</li></div>
            <div className="btn">
                <button onClick={edit}>Edit</button>
                <button><Time date={props.time}/></button>
                <button onClick={donee}>Done</button>
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
