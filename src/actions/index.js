
export const markCheck = (bool) => {
    return{
        type: 'mark',
        payload: bool? 1 : -1
    }
}

export const markAnster = ({anser, quesition}) => ({
    type: 'string',
    anser,
    quesition
})