import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoader = async () => {
    // get Products
    const productData = await fetch('products.json');
    const products = await productData.json();

    // get Cart
    const savedCart = getStoredCart();
    const previousCart = [];
    // console.log(products)
   for(const id in savedCart){
    const addedProduct = products.find(product => product.id === id);
    // console.log(id, addedProduct)
    if(addedProduct){
        const quantity = savedCart[id];
        addedProduct.quantity = quantity;
        previousCart.push(addedProduct)

    }
   }

    return {products, previousCart};
}