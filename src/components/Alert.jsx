import { useState } from "react";

const Alert = props => {
    const [close, setClose] = useState(true)

    const clickClose = () => {
        setClose(!close)
    }

    return (
        <>
        <div className={`transition bg-pink-200 text-center ${close == true ? "" : "hidden"}`}>
            <div className="flex justify-center items-center space-x-5 text-xs">
                <h6 className="m-0 text-pink-600 py-2">
                    <i class="fa-solid fa-triangle-exclamation"></i> dev 0.0.8
                </h6>
                <div onClick={clickClose} className="cursor-pointer">
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Alert;