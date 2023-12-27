import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getData from "../api/get_data";

const initialState = {
  characters: [],
  favoriteCharacters: [],
  isFavoriteView: false,
};

const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async () => {
    try {
      const response = await getData();
      return response;
    } catch (error) {
      console.log("Error fetching characters:", error);
      return [];
    }
  }
);

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addFavoriteCharacter: (state, action) => {
      const { id } = action.payload;
      const character = state.characters.find((char) => char.id === id);
      if (character) {
        character.isFavorite = true;
        state.favoriteCharacters.push(character);
      }
    },
    removeFavoriteCharacter: (state, action) => {
      const { id } = action.payload;
      const character = state.characters.find((char) => char.id === id);
      if (character) {
        character.isFavorite = false;
        state.favoriteCharacters = state.favoriteCharacters.filter(
          (char) => char.id !== id
        );
      }
    },
    deleteCharacter: (state, action) => {
      const { id } = action.payload;
      state.characters = state.characters.filter((char) => char.id !== id);
      state.favoriteCharacters = state.favoriteCharacters.filter(
        (char) => char.id !== id
      );
    },
    toggleFavoriteCharacters: (state) => {
      state.isFavoriteView = !state.isFavoriteView;
      console.log("toggle")
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.characters = action.payload;
    });
  },
});

export const getCharacters = () => {
  return async (dispatch) => {
    try {
      await dispatch(fetchCharacters());
    } catch (error) {
      console.log("Error fetching characters:", error);
    }
  };
};

export const {
  addFavoriteCharacter,
  removeFavoriteCharacter,
  deleteCharacter,
  toggleFavoriteCharacters,
} = charactersSlice.actions;

export const charactersReducer = charactersSlice.reducer;
