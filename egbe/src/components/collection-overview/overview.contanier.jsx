import CollectionOverview from '../../components/collection-overview/collection-overview.components';
import {createStructuredSelector } from 'reselect';
import { isCollectionsfetching } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
import { compose} from 'redux';

import WithSpinner from '../../components/with-spinner/with-spinner.components';

const mapStateToProps = createStructuredSelector ({
    isLoading: isCollectionsfetching,
   
});

const overviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default overviewContainer;