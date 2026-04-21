import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { axiosApi } from "../../axiosApi";

export const JokePage = () => {
    const {category} = useParams();
    const [joke, setJoke] = useState('')

    useEffect(() => {
        const getJoke = async () => {
            try{
                const response = await axiosApi(`/random?category=${category}`)
                const jokeData = response.data
                setJoke(jokeData.value)
            }catch(e) {
                console.log(e)
            }
        }
        if (category) {
            getJoke()
        }
    },[category])

    return(
        <div>
            Joke Category = {category}
            <p>{joke}</p>
        </div>
    )
}