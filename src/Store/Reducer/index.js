import { createStore, combineReducers } from "redux";
import { registerBooks } from "./registerBooks";
import { getBooks } from "./getBooks";
import { getPDFBookPurchaseInfos } from "./getPDFBookPurchaseInfos";

const rootReducer = combineReducers({
    registerBooks,
    getBooks,
    getPDFBookPurchaseInfos
})


export default function configureStore() {
    const store = createStore(rootReducer);

    return {store}
}