import React from 'react';

import PreviewCollection from '../../components/preview-collection/preview-collection';

import './collection-overview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsforOverview} from '../../redux/shop/shop.selector';

const CollectionOverview = ({collections}) =>(
    <div className='collections-overview'>
         {
          collections.map(({id, ...othercollectionprops}) => (
              <PreviewCollection key={id} {...othercollectionprops}/>
                  ))
                }

    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsforOverview
  })
export default connect(mapStateToProps)(CollectionOverview);