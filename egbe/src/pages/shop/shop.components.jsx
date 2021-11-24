import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';

import overviewContainer from '../../components/collection-overview/overview.contanier';
import CollectionspageContainer from '../collectionspage/collectionpage.container';


import { fetchCollectionStart } from '../../redux/shop/shop.action';

const ShopPage = ({fetchAsync,match})=> {

    useEffect(()=> {
        fetchAsync();
    },[fetchAsync]);


        return (
    
               <div className='shop-page'>
                <Route exact path={`${match.path}`} 
                 component= {overviewContainer}
                />
                < Route path={`${match.path}/:collectionId`} 
                    component={ CollectionspageContainer} 
                />
        
            </div>
                );
    

} 


const mapDispatchToProps = dispatch => ({
    fetchAsync: ()=> dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);