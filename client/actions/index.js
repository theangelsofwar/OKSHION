export const login=(id,name) => {
    console.log(id,name)
    return {
        type: 'LOG_IN',
        id,
        name
    }
}