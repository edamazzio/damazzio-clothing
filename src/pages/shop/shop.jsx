import React from 'react'
import {ShopData} from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: ShopData
        }
    }

    render() {
        const {collections} = this.state;
        return <div className='shop-page'>
            {
                collections.map(({id, ...props}) => (
                    <CollectionPreview key={id} {...props} />
                ))
            }
        </div>
    }
}

export default ShopPage;