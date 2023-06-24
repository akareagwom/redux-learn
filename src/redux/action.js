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