export const required = (value: string) => {
    return value ? undefined
        : 'Message required'
}

export const maxLengthCreater = (maxLength: number) => (value: string) => {
    if (value.length > maxLength) {
        return `Max ${maxLength} simbols`
    } else {
        return undefined
    }
}