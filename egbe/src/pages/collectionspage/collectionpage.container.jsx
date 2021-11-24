import CollectionPage from '../collectionspage/collectionspage';
import { compose } from 'redux';

import { connect } from 'react-redux';
import {createStructuredSelector } from 'reselect';

import { collectionsIsfetching } from '../../redux/shop/shop.selector';

import WithSpinner from '../../components/with-spinner/with-spinner.components';

const mapStateToProps = createStructuredSelector({
isLoading: (state) => !collectionsIsfetching(state)
});

const CollectionspageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionspageContainer;

