import { useEffect } from "react";


const useTitle = (title) => {
    console.log(title)
    useEffect(() => {
        document.title = "Toy Car | " + title
    }, [title])
};

export default useTitle;