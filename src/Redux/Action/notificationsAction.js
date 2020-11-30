export const INFO='INFO';
export const SUCCESS='SUCCESS';
export const WARNING='WARNING';
export const ERROR='ERROR';

export const info=(data)=>{
   return {
        type:INFO,
        data:data
    }
}
export const success=(data)=>{
   return {
        type:SUCCESS,
        data:data
    }
}
export const warning=(data)=>{
   return {
        type:WARNING,
        data:data
    }
}
export const error=(data)=>{
   return {
        type:ERROR,
        data:data
    }
}