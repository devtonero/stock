import React from 'react';

import CollectionItems from '../collection-item/collection.components';

import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
  } from './preview.styles';


const PreviewCollection = ({title, items}) => (
    <CollectionPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
            {items.filter((item, idx)=> idx < 4)
            .map((item)=> (
              <CollectionItems key= {item.id} item={item}/>
            ))}
        </PreviewContainer>
    </CollectionPreviewContainer>

);
export default PreviewCollection;