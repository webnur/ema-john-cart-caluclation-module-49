import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoader = async () => {
    // get Products
    const productData = await fetch('products.json');
    const products = await productData.json();

    // get Cart
    const savedCart = getStoredCart();
    const initialCart = [];
    // console.log(products)
   for(const id in savedCart){
    const addedProduct = products.find(product => product.id === id);
    // console.log(id, addedProduct)
    if(addedProduct){
        const quantity = savedCart[id];
        addedProduct.quantity = quantity;
        initialCart.push(addedProduct)

    }
   }

    return {products, initialCart};
}