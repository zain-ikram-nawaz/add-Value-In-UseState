import ListItem from "../listItem";

function List({arr}){
    const items = arr.map((item,ind)=>{
return( <ListItem key={ind} text={item}/>)
    })
    return(
        <div>
            <ul>
              {items}
            </ul>
        </div>
    )
}
export default List;