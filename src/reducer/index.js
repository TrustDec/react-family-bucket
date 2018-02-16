import { combineReducers } from 'redux';
import buttonclicktext from './buttonclicktext';
import increasedecrease from './increasedecrease';
const chatReducer = combineReducers({
    buttonclicktext,
    //increasedecrease
});
export default chatReducer;