import {PulseLoader} from 'react-spinners'
export default function Loading(){
    return(
        <div className="flex justify-center items-center h-80">
            <PulseLoader color="#0c0a09" size="20px " />
        </div>
    )
}