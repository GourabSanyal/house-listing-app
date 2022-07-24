export const FETCH_HOUSES = 'FETCH_HOUSES';
export const CREATE_HOUSES = 'CREATE_HOUSES';

export const fetchHouses = () =>{
    return async dispatch =>{

// logic to fecth api or houses data
        const result = await (await fetch('http://localhost:3000/api/houses')).json();

        // const resultData = await result.json();

        // console.log(result);

        dispatch({
            type: FETCH_HOUSES,
            payload: result
        })
    }
}