import { Link } from "react-router-dom";

const NotFount404 = props => {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <p className="text-2xl">Oops!</p>
                    <h1 className="text-9xl mb-6">404</h1>
                    <Link to="/">Go Home</Link>
                </div>
            </div>
        </>
    )
}

export default NotFount404;