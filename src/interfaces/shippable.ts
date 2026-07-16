export interface IShippable {
    calculateShippingFee(distanceInKM: number) : number;
}