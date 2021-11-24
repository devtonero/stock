import {takeLatest, call, put, all} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.action';

import { firestore, convertCollectionsSnapshot } from '../../firebase/firebase';


export function* fetchCollectionAsync() {
    try {const collectionRef = firestore.collection('collections');
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshot, snapShot);
    yield put(fetchCollectionSuccess(collectionsMap))
}catch(error) {
    yield put (fetchCollectionFailure(console.error.message))
}

}

export function* fetchCollectionStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionAsync)

}

export default function* shopSagas() {
    yield all([
        call(fetchCollectionStart), 
         ])
}