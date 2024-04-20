import API_INFO from "../services/api";
const { useState } = require("react");

const useApi = (urlObject) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const call = async(payload, type = "") => {
        setResponse(null); // when new function no response or the original one is sent
        setError(""); // just as response
        setIsLoading(true); // as a function is called its starts loading until response received

        try {
            let res = await API_INFO(urlObject, payload, type); // res send urlobject/payload/type
            setResponse(res.data); // if call successful show the data
        } catch (error) {
            setError(error.message); // if not error is sent
        } finally {
            setIsLoading(false); // in either cases isloading stops
        }
    }
    return {call, response, error, isLoading}; 
}

export default useApi;
