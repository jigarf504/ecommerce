
import ProductModel from "../Models/product.model.js";

export const productSeeder = ()  => {

    const options = {
        upsert: true,
        returnNewDocument : true,
        useFindAndModify : false
    };
    const products = [
        {
            name: "Iphone 12",
            image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            price: 70000,
            category: "Mobile"
        },
        {
            name: "Dell",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 40000,
            category: "Laptop"
        },
        {
            name: "Lanavo",
            image: "https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 45000,
            category: "Laptop"
        },
        {
            name: "HP 2nd GEN",
            image: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MjJ8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            price: 50000,
            category: "Laptop"
        },
        {
            name: "Apple M1",
            image: "https://images.unsplash.com/photo-1543652437-15ae836b33e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            price: 82000,
            category: "Laptop"
        },
        {
            name: "Boat Headphone",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            price: 800,
            category: "Headphone"
        },
        {
            name: "Samsung",
            image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            price: 1050,
            category: "Headphone"
        },
        {
            name: "Realme headphone",
            image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            price: 1649,
            category: "Headphone"
        },
        {
            name: "Keychron",
            image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8a2V5Ym9hcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            price: 6000,
            category: "Keyboard"
        },
        {
            name: "Apple keyboard",
            image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2V5Ym9hcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            price: 7000,
            category: "Keyboard"
        },
        {
            name: "lavano keyboard",
            image: "https://images.unsplash.com/photo-1585314614250-d213876625e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGtleWJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 780,
            category: "Keyboard"
        },
        {
            name: "logitech keyboard",
            image: "https://images.unsplash.com/photo-1625130694338-4110ba634e59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGtleWJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 4500,
            category: "Keyboard"
        },
        {
            name: "Samsung keyboard",
            image: "https://images.unsplash.com/photo-1627509493009-9249a2ad2459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGtleWJvYXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            price: 3000,
            category: "Keyboard"
        }
    ];
    products.forEach(async (product) => {
        await ProductModel.create(product)
    })
}
