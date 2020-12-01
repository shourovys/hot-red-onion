const SHARE_HANDLE_DRAWER_TOGGLE='SHARE_HANDLE_DRAWER_TOGGLE'

const shareHandleDrawerToggle=(fun)=>{
    return {
        type:SHARE_HANDLE_DRAWER_TOGGLE,
        // name:fun.toString(),
        fun:fun
    }
}