export const addNewItem = (item)=>{
    return({
        type:'ADD_ITEM_TO_CART',
        payload:item,
    })
}
export const deleteItem = (item)=>{
    return({
        type:'DELETE_ITEM_FROM_CART',
        payload:item,
    })
}