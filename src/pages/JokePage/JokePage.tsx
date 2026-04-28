import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { axiosApi } from "../../axiosApi";
import { useJokeStore } from "../../Store/use-jokes-store";

export const JokePage = () => {
    const {category} = useParams();
    // const [joke, setJoke] = useState('')
    const {joke,getJoke} = useJokeStore()
    useEffect(() => {
        if (category) {
            getJoke(category)
        }
    },[category])

    return(
        <div>
            Joke Category = {category}
            <p>{joke}</p>
        </div>
    )
}