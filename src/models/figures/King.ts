import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/bK.png'
import wihteLogo from '../../assets/wK.png'

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : wihteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target)) return false;
    const absX = Math.abs(target.x - this.cell.x);
    const absY = Math.abs(target.y - this.cell.y);

    if(absX <= 1 && absY <= 1) return true;
    return false;
  }
}
