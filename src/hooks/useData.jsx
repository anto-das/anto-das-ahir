import { useEffect, useState } from "react";


const useData = () => {
     const [projects,setProjects] = useState([]);
    useEffect(()=>{
        fetch('./projects.json')
        .then(res =>res.json())
        .then(data => setProjects(data))
    },[])
    return [projects]
};

export default useData;