const serialize = ({object}: { object: any }) => {
    if (object === undefined) return undefined
    const formData = new FormData()
    Object.keys(object).forEach(key => {
        if (typeof object[key] !== "object") formData.append(key, object[key])
        else formData.append(key, JSON.stringify(object[key]))
    })
    return formData
}

export default serialize
