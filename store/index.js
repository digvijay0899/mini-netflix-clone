  export const state = () => ({
    movieListData:[],
    movies: [],
    showLoader:false,
  })
  
  export const getters = {
    getMovieDetails(state) {
      return state.movies;
    },
    getmovieListData(state) {
      return state.movieListData;
    },
    getLoaderDetails(state) {
      return state.showLoader;
    }
  }
  
  export const mutations = {
    movieDetailsData(state, movies) {
    state.movies.push(movies)
    },
    movieListData(state, movies) {
    state.movieListData = movies;
    },
    showLoader(state, data) {
    state.showLoader = data;
    },
  }
  
  export const actions = {
    movieDetailsData({ commit }, data) {
      commit("movieDetailsData", data);
    },
    movieListData({ commit }, data) {
      commit("movieListData", data);
    },
    showLoader({ commit }, data) {
      commit("showLoader", data);
    },

 
  }
  
