export const DELETE_FEATURES = 'DELETE_FEATURES';
export const ADD_FEATURES = 'ADD_FEATURES';

export const deleteFeature = (item) =>{
    return {
        type: DELETE_FEATURES,
        payload: item

    }
}

export const addFeature = (item) =>{
    console.log(addFeature.type)
    return {
        type:ADD_FEATURES,
        payload: item
    }
}


