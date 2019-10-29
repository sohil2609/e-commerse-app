import React from 'react';
import "./shop.styles.scss"
import { shopData } from './ship.data';
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component';

export class ShopPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: shopData
        }
    
    }

    render() {
        return (
            <div className="shop-page">
                {
                    this.state.collections
                    .map((collection) => (
                        <CollectionPreview title={collection.title} items={collection.items} key={collection.id}/>
                    ))
                }
                
            </div>
        )
    }
}