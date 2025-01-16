export const isEmpty = (value) => {
    return value.trim().length === 0
}

export const hasMinLength = (value, length) => {
    return value.trim().length < length
}

export const isNotBetween = (value, minLength, maxLength) => {
    return value.trim().length < minLength || value.trim().length > maxLength
}