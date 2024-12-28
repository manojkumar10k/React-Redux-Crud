import { createSlice } from "@reduxjs/toolkit";
import { Data } from "./Data";



const slice = createSlice({
    name:"users",
    initialState:Data,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload)
        },
        Editpage :(state,action)=>{
             const {id,name,email} = action.payload
            
           const edit = state.find((e)=>{ return e.id == id
           })  
           if (edit) {
             edit.name = name
             edit.email = email
           }
        },
        Delete: (state,action)=>{
          const {id} = (action.payload)
          const de =state.find((e)=>{return e.id == id})
          if (de) {
            return state.filter((e)=>{return e.id !== id})
          }
        }
    }
})
export const {addUser,Editpage,Delete}=slice.actions;
export default slice.reducer

 
 