function Time(props)
{
    return(
        <small>{props.date.getHours()>12?`${props.date.getHours()}:${props.date.getMinutes()} pm`:`${props.date.getHours()}:${props.date.getMinutes()} am`}</small>
    )
}
export default Time;