import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './components/form'
import Table from './components/table'; 
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={value:'',items:[]}
        this.handleValue=this.handleValue.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.del=this.del.bind(this);
        this.done=this.done.bind(this);
		    this.edit=this.edit.bind(this)
        this.clear=this.clear.bind(this)
    }
    handleValue(text)
    {
        this.setState({value:text});
    }
    handleSubmit(event)
    {
        event.preventDefault();
        if(this.state.value.length===0)
        {
            return ;
        }
        const item={
            value:this.state.value,
            id:new Date(),
        }
        this.setState(state=>({
            items:state.items.concat(item),
            value:'',
        }))
    }
    del(ind)
    {
		this.state.items.splice(ind,1)
		this.setState({items:this.state.items})
    }
    done(ind)
    {
		this.state.items.splice(ind,1)
		this.setState({items:this.state.items})
    }
	edit(text,ind)
	{
		this.state.items.splice(ind,1)
		this.setState({value:text});
		this.setState({items:this.state.items})
	}
  clear(bool)
  {
    if(bool)
    {
      this.setState(state=>({
        items:[],
        // value:''
      }))
    }
  }
  render(){
    const arrs=this.state.items
    return (
      <div className='main'>
        <h1>ToDo</h1>
        <Form  value={this.state.value} onHandleValue={this.handleValue} onHandleSubmit={this.handleSubmit}/>
        <Table items={arrs} onDel={this.del} onEdit={this.edit} onDone={this.done} onClear={this.clear}/>
      </div>
    )
  }
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>)

