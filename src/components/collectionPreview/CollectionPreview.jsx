import React from 'react'
import CollectionItem from '../../components/collectionItem/CollectionItem'
import './collectionpreview.scss'

const CollectionPreview = ({title, items}) => (
    <div className = "collection-preview">
        <h1 className = "title">{title.toUpperCase()}</h1>
        <div className = "preview">

            {items
                .filter((item ,idx)=>idx < 4)
                .map(({id, ...otheritemsprops})=>(
                    <CollectionItem key = {id} {...otheritemsprops}/>
                ))
            }
        </div>
    </div>
    )

export default CollectionPreview
