import { create, type ExtractState } from 'zustand'
import { axiosApi } from '../axiosApi';

interface JokeStoreState {
    categories: string[];
    joke: string;
    setCategories: (categorues: string[]) => void;
    setJoke: (joke: string) => void;
    getCategoriesList: () => Promise<void>
    getJoke: (category: string) => Promise<void>
}

export const useJokeStore = create<JokeStoreState>((set) => ({
    categories: [],
    joke: '',
    setCategories: (categories) => set(() => ({categories})),
    setJoke:  (joke) => set(() => ({joke})),
    getCategoriesList: async() => {
        try {
            const response = await axiosApi('/categories');
            const categoriesData = response.data;
            set(() => ({categories: categoriesData}));
          } catch (e) {
            console.log(e);
          }
        },
        getJoke: async(category) => {
              try{
                   const response = await axiosApi(`/random?category=${category}`)
                   const jokeData =  response.data;
                   set(() => ({joke: jokeData.value}));
              }catch(e){
                  console.log(e)
              }       
          }

}))
