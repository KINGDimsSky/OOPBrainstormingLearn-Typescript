export interface IProduct { 
    showDetailsProduct () : string;
    getFinalPrice () : number;
    restock (stock : number) : void;
}

export interface IDigitalProductsProps {
    id : number,
    name : string,
    price : number,
    stock ?: number,
    downloadLink : string
}

export interface IPhysicalProduct {
    id : number,
    name : string,
    price : number,
    stock : number,
    weight: number
}
