import { createSlice } from "@reduxjs/toolkit";

export const SavedSlice = createSlice({ 
    name:"booking",
    initialState:{
        booking:[],
    },
    reducers:{
        savedPlaces:(state,action) => {
            state.booking.push({...action.payload}) //they will save all the details 
        }
    }
});

export const {savedPlaces} = SavedSlice.actions

export default SavedSlice.reducer