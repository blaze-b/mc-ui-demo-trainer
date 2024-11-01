import {InShape} from "./Shape";

export class InCircle extends InShape {

  constructor(theX: number, private theY: number, private _radius: number) {
    super(theX, theY);
  }

  public get radius() {
    return this._radius;
  }

  public set radius(radius: number) {
    this._radius = radius;
  }

  public getInfo(): string {
    return super.getInfo() + `, radius=${this._radius}`;
  }

}
