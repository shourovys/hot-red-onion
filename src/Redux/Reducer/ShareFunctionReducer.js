import {SHARE_HANDLE_DRAWER_TOGGLE} from '../Action/ShareFunctionAction'
const initFun={
    fun:{}
}

export const ShareFunctionReducer=(state=initFun,action)=>{
    switch (action.type) {
        case SHARE_HANDLE_DRAWER_TOGGLE:
            // const name=action.name;
            const newFun={
                ...state,
                [action.fun]:action.fun
            }
            return {
                fun:newFun
            }
        default:
           return state
    }
}