// fetch parameters to run state simulation

import {useRouter} from 'next/router'
import {useState} from 'react'

export default function Run_Sim(){
    const router = useRouter()
    const [state, setState] = useState({
        name: '',
        nsims: '',
        ndists:'',

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push("/states/" + state.name + "?nsims=" + state.nsims + "&ndists=" + state.ndists )
    }
    const changeHandler = e => {
   setState({...state, [e.target.name]: e.target.value})
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                    <label for="route"> Select a State </label>
                <div>
                    <input type="text" name='name' onChange={changeHandler} />
                </div>
                    <label for="nsims"> Number of Steps </label>
                <div>
                    <input type="number" name='nsims' onChange={changeHandler} />
                </div>
                    <label for="ndists"> Number of Districsts </label>
                <div>
                    <input type="number" name='ndists' onChange={changeHandler} />
                </div>
                <div>
                <button type="submit"> View </button>
                </div>
            </form>
        </div>
    )
}

