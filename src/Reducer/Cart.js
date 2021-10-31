var initialState = {
    item: [],
    total: 0
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART': {
           let checkExisted =false
           let existed = null 
           state.item.map((item,index)=>{
                if (item.item.id === action.payload.item.id){
                    checkExisted = true
                    existed = index
                }
                return null
           })
           if(checkExisted){
                state.item[existed].quantity +=action.payload.quantity
                let total = 0;
                state.item.forEach((item,index)=>{
                    total = total + item.item.giahientai*item.quantity
                })
                return({
                    item:state.item,
                    total:total
                })
           }
           else{
               state.item =[...state.item,action.payload]
               let total = 0;
               state.item.forEach((item,index)=>{
                   total = total + item.item.giahientai*item.quantity
               })
               return ({
                   item:state.item,
                   total:total
               })
           }
           
        }
        case 'DELETE_ITEM_FROM_CART': {
            let deleteItem = null 
            state.item.map((item,index)=>{
                if (item.item.id === action.payload){
                    deleteItem = index
                }
                return null
           })
           let total = state.total - (state.item[deleteItem].quantity *state.item[deleteItem].item.giahientai)
           state.item.splice(deleteItem,1)
            return {
                item:state.item,
                total:total
            }

        }
        default:
            return state

    }
}


export default cartReducer