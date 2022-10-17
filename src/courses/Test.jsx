import axios from "axios";
import { useEffect, useState } from "react";

const Test = props => {
    // const [apiData, setApiData] = useState([]);
    // // const url = 'https://fakestoreapi.com/products'
    // const url = 'https://raw.githubusercontent.com/sanlinhtik3/course-api/main/api.json'
    
    // useEffect(() => {
    //     getData()
    // }, [])

    // async function getData() {
    //     axios.get(url)
    //     .then(function (response) {
    //         // handle success
    //         // console.log(response);
    //         setApiData(response.data)
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         // console.log(error);
    //     })
    //     .then(function () {
    //         // always executed
    //     });
    // }

    // // console.log(apiData)
    // // console.log(apiData.map(api => api.id))


    

    return (
        <>
            {apiData.map(api => {
                return <h1>{api.id}</h1>
            })}
        </>
    )
}

export default Test;