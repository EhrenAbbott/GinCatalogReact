import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        gin_name: "Gin Name",
        country_of_origin: 'Country of Origin',
        tasting_notes: "Tasting Notes",
        pairs_with: "Pairs With",
    },
    reducers: {
        chooseGinName: (state, action) => { state.gin_name = action.payload },
        chooseCountryOfOrigin: (state, action) => { state.country_of_origin = action.payload },
        chooseTastingNotes: (state, action) => { state.tasting_notes = action.payload },
        choosePairsWith: (state, action) => { state.pairs_with = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseGinName, chooseCountryOfOrigin, chooseTastingNotes, choosePairsWith } = rootSlice.actions