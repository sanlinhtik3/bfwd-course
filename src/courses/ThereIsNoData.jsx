import { Link } from "react-router-dom";

const ThereIsNoData = props => {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <p className="text-2xl">Oops!</p>
                    <h1 className="text-5xl mb-6">ThereIsNoData</h1>
                    <Link to="/">Go Home</Link>
                </div>
            </div>
        </>
    )
}

export default ThereIsNoData;