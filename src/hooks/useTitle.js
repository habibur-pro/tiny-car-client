import { useEffect } from "react";


const useTitle = (title) => {
    console.log(title)
    useEffect(() => {
        document.title = title + '-Toy Car'
    }, [title])
};

export default useTitle;