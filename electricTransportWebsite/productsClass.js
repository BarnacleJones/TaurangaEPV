class Product{
    constructor(
        productImage,
        productName,
        productMake,
        productModel,
        productPrice,
        productBlurb
    )
    {
        this.productImage = productImage;
        this.productName = productName;
        this.productMake = productMake;
        this.productModel = productModel;
        this.productPrice = productPrice,
        this.productBlurb = productBlurb;
    }

productProfile(){
    const profile = `
    <img src="${this.productImage}" alt="${this.productName}" width="400px"></img>
    <h2>${this.productName}</h2>
    <ul>
    <li>Make/model: ${this.productMake}:${this.productModel}</li>
    <li>Price: ${this.productPrice}</li>
    <li>${this.productBlurb}</li>
    </ul>
    `

    return profile;
}
}

export default Product