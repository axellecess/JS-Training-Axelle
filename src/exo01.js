// return true if parameter is a primitive, or false otherwise
export function isPrimitive(x) {
    if(x === null)
    {
        return true;
    }
    else if (
        (typeof x === "object") || (typeof x === "function") )
    {
        return false;
    }
    else
    {
        return true;
    }
}
