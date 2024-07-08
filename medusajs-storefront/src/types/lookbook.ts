interface ProductType{
    id: string;
    name: string;
    price : number;
    url: string;
    dotTop: string;
    dotLeft: string;
}

interface BackgroundImageType {
    imageUrl: string;
    products: ProductType[]
    alt: string;
}

interface LookBookMainContentType {
    buttonText: string
    buttonLink: string;
    titleText: string
}

export interface LookBookType{
    image: BackgroundImageType;
    mainContent: LookBookMainContentType;
}    
    