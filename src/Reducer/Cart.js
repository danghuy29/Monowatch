var initialState = {}
if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify({
        item: [],
        total: 0
    }))
  }
  else {
    initialState = JSON.parse(localStorage.getItem("cart"))
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
                window.localStorage.setItem('cart', JSON.stringify({
                    item:state.item,
                    total:total
                }));

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
               window.localStorage.setItem('cart', JSON.stringify({
                item:state.item,
                total:total
            }));
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
           window.localStorage.setItem('cart', JSON.stringify({
            item:state.item,
            total:total
        }));
            return {
                item:state.item,
                total:total
            }

        }
        case 'UPGRADE_CART':{
            let total = 0 
            action.payload.forEach((item,index)=>{
                total = total + item.item.giahientai*item.quantity
            })
            window.localStorage.setItem('cart', JSON.stringify({
                item:action.payload,
                total:total
            }));
            return {
                item:action.payload,
                total:total
            }
        }
        default:
            return state

    }
}

export default cartReducer