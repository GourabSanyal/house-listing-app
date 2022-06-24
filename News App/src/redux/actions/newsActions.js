
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

 export const fetchArticles = () => {
     return async dispatch => {
     
         //logic to fetch data
        const result =  await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a7476fc4474b40d0baf37e82dbd31fc7') 

        //logic to transfer data to json format
        const resultData = await result.json(); 
        // console.log(resultData);

         dispatch({             
             type: FETCH_ARTICLES, // type tells the reducer what action to take
             payload: resultData // is the data reduce will user to update the state
         })
     }
 }

 export const toggleFavorites = url =>{
     return{
         type: TOGGLE_FAVORITES,
         payload: url
     }
 }