import MoonLoader from "react-spinners/MoonLoader";

const LoadingScreen = props => {
    
    return (
        <>
            <div className="fixed top-0 left-0 bg-white w-screen">
                <div className="flex justify-center items-center h-screen">
                    <div className="">
                        <MoonLoader
                            color="#36d7b7"
                        />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default LoadingScreen;