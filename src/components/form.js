function Form (props)
{
    const handleValue=(event)=>
    {
        props.onHandleValue(event.target.value)
    }
    const handleSubmit=(event)=>
    {
        props.onHandleSubmit(event)
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className='inform'>
                <input type="text" placeholder="Todo.." value={props.value} onChange={handleValue}/>
                <button>+</button>
            </div>
        </form>
    
    )
}
export default Form; 


// class Form extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleValue=this.handleValue.bind(this);
//         this.handleSubmit=this.handleSubmit.bind(this)
//     }
//     handleValue(event)
//     {
//         this.props.onHandleValue(event.target.value);
//     }
//     handleSubmit(event)
//     {
//         this.props.onHandleSubmit(event)
//     }
//   render(){
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div className='inform'>
//           <input type="text" placeholder="Todo.." value={this.props.value} onChange={this.handleValue}/>
//           <button>+</button>
//         </div>
//       </form>
//     )
//   }
// }

