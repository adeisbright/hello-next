/**
 * Sends a get request to the server
 */
export const getData = async (url : string, token = false) => {
    try {
        const data = await fetch(url, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            redirect: "follow",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                authorization: token ? "Bearer" + " " + token : "",
            },
        });
        let parseRes = await data.json();
        return parseRes;
    } catch (error) {
        return error;
    }
};

