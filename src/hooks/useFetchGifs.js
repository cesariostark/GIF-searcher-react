import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'


export const useFetchGifs = (category) => {

    const [state, setState] = useState({

        data:[],
        loading: true
    });

    //efectos no pueden ser async
    useEffect( () => {
        
        getGifs(category)
        .then(img => {
            setState({
                data: img,
                loading: false
            });
        })
    }, [category]);

    /* setTimeout(() => {
       setState({
           data: [1,2,3,4,5],
           loading: false
       });
    }, 2500); */
    return state;

}

