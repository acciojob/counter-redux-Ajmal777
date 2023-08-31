const initialState = 0;

const counterReducer = (count = initialState, action) => {
    switch(action.type){
        case 'INCREMENT' : return ++count;
        case 'DECREMENT' : return --count;
        default: return count;
    }
}

export default counterReducer