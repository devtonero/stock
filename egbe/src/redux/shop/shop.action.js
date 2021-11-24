import ShopActionTypes from "./shop.types";

import { firestore, convertCollectionsSnapshot } from '../../firebase/firebase';


export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap

})

export const fetchCollectionFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
});

export const fetchCollectionAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart());
        
        collectionRef.get().then(snapshot =>{
            const collectionsMap = convertCollectionsSnapshot(snapshot);
            dispatch(fetchCollectionSuccess(collectionsMap));
        }).catch(error => dispatch(fetchCollectionFailure(error.message)));

    }
};


