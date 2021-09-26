import React from 'react'
import {Collection, ShopData} from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-previewt";

class ShopPage extends React.Component<{}, {collections: Collection[]}> {
    constructor(props) {
        super(props);

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