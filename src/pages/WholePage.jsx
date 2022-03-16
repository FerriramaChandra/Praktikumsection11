import Header from "./components/Header";
import Todo_List from "./components/Todo_List";

export default function WholePage({Item}) {
    return (
        <>
        <Header/>
        {Item.map((Item)=> <Todo_List Item={Item}/>)}
        </>
    )
}