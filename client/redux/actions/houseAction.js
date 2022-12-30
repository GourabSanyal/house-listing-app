export const FETCH_HOUSES = 'FETCH_HOUSES';
export const CREATE_HOUSES = 'CREATE_HOUSES';

export const fetchHouses = () =>{
    return async dispatch => {

// logic to fecth api or houses data
        const result = await fetch('http://192.168.56.1:3000/api/houses');

        const resData = await result.json();

        console.log(resData);

        dispatch({
            type: FETCH_HOUSES,
            payload: resData
        })
    }
}

// export const createHome = ({ title, image, homeType, price, yearBuilt, address, description}) =>{
    
//     return async dispatch => {
//         const response = (await fetch('http://192.168.29.13:3000/api/houses'), {
//             method: 'POST',
//             headers:{
//                 'Content-Type' : 'application/json'
//             },
//             body: JSON.stringify({
//                 title,
//                 image,
//                 homeType,
//                 price,
//                 yearBuilt,
//                 address,
//                 description

//             })
//         })

//         const responseData = await response.json();
//         // console.log(responseData);

//         dispatch({
//             type: CREATE_HOUSES,
//             payload: responseData
//         })

//     }
// }