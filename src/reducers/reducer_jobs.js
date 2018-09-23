export default function(state = null, action){
    switch(action.type){
        case 'JOB_LIST': return action.payload
    }
    return state
}