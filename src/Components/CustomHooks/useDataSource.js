import { useEffect } from "react";
import { useState } from "react"

export const useDataSource = getResourceFunc => {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            const result = await getResourceFunc();
            setResource(result);
        })();
    }, [getResourceFunc]);

    return resource;
}