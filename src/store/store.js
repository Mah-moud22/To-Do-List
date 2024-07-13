import {createStore} from "redux"
import Reducer_Fun from "./reducer"
import {composeWithDevTools} from "redux-devtools-extension" 
const myStore = createStore(Reducer_Fun,composeWithDevTools());
export default myStore;