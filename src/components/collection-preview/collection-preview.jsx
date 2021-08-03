import React from 'react'

import './collection-preview.scss'
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='titule'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, index) => index < 4)
                    .map(({id, ...props}) => (
                        <CollectionItem key={id} {...props}/>
                    ))
            }
        </div>
    </div>
)

export default CollectionPreview;