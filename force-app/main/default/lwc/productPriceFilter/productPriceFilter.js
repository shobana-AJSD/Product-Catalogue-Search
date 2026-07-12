import { LightningElement } from 'lwc';
import PRODUCT_IMAGES from '@salesforce/resourceUrl/ProductCatalogue';
export default class ProductPriceFilter extends LightningElement {
    maxPrice=0;
    minPrice=500;
    value=0;
        products = [

        // ======================
        // Mouse
        // ======================

        {
            id: 1,
            category: 'Mouse',
            name: 'Logitech M331 Silent Plus',
            price: 799,
            image: PRODUCT_IMAGES + '/Products/logi-01.jpg'
        },
        {
            id: 2,
            category: 'Mouse',
            name: 'Logitech M650 Wireless',
            price: 1799,
            image: PRODUCT_IMAGES + '/Products/logi-02.jpg'
        },
        {
            id: 3,
            category: 'Mouse',
            name: 'Logi 250 Dual Mode Wireless Mouse',
            price: 1199,
            image: PRODUCT_IMAGES + '/Products/logi-03.jpg'
        },
        {
            id: 4,
            category: 'Mouse',
            name: 'HP MS3320W Wireless Mouse',
            price: 1599,
            image: PRODUCT_IMAGES + '/Products/HP-04.jpg'
        },

        // ======================
        // Monitors
        // ======================

        {
            id: 5,
            category: 'Monitor',
            name: 'BenQ-3" Monitor',
            price: 12499,
            image: PRODUCT_IMAGES +'/Products/BenQ-3.jpg'
        },
        {
            id: 6,
            category: 'Monitor',
            name: 'LG UltraFine 24" IPS',
            price: 11499,
            image: PRODUCT_IMAGES +'/Products/LG-02.jpg'
        },
        {
            id: 7,
            category: 'Monitor',
            name: 'Samsung 24" IPS Monitor',
            price: 9999,
            image: PRODUCT_IMAGES + '/Products/samsung-01.jpg'
        },
        {
            id: 8,
            category: 'Monitor',
            name: 'Dell UltraSharp U2424H 24" IPS Monitor',
            price: 16999,
            image: PRODUCT_IMAGES + '/Products/Dell-05.jpg'
        }

    ];
    get filteredProducts() {
    return this.products.filter(product =>
        product.price >= this.minPrice &&
        product.price <= this.maxPrice
    );
}
    // get productsFound()
    // {
    //     return this.filteredProducts;
    // }
onPriceChange(event)
{
    this.maxPrice=event.detail.value;
    this.value=event.detail.value;
}
}
