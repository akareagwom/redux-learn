import {redux} from 'redux'

const craeteStore = redux.createStore

// string constant
const BUY_CAKE = 'BUY_CAKE'

//ACTION CREATORS
function buyCake(){
return {
    //type property
    type: BUY_CAKE,
    info: 'First redux action'
} 
}

// (previousState, action) => newState
const initialState = {
    //state default value or parameter in the reducer 
    numOfCakekers: 10,
}
// defining reducer function
const reducer = (state=initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            //when state has more than one property use spread operator
            ...state,
            numOfCakekers: state.numOfCakekers - 1,
        }

        default : return state
    }

}

//holds the application state
const store = craeteStore(reducer)

//getState method
console.log('Initial state', store.getState())
//subscribing to changes
const unsubsribe= store.subscribe(()=>console.log('Updated state', store.getState()))
//dispatch method to update state
//dispatch method takes in actions
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

//call unsubscribe method
unsubsribe()