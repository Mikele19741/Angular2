export class CarService{
    private isVisible=true;
    showCar()
    {
        this.isVisible=true;
    }
    hideCar()
    {
        this.isVisible=false;
    }
    getVisibility()
    {
        return this.isVisible;
    }
}