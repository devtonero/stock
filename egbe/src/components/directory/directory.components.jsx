import React from 'react';

import MenuItem from '../menu-item/menu-item.components';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDic } from '../../redux/deirectory/directory.selectors';

import './directory.styles.scss';


const Directory =({sections}) => (
  <div className='directory-menu'>
           { sections.map(({id, ...othersectionsProps}) => (
               <MenuItem key={id} {...othersectionsProps} />
           ) )
           }
        </div>)
  

const mapStateToProps = createStructuredSelector ({
 sections: selectDic 
})
export default connect(mapStateToProps)(Directory);