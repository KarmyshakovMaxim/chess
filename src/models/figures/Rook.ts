import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/bR.png'
import wihteLogo from '../../assets/wR.png'

export class Rook extends Figure {
  
  
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : wihteLogo;
    this.name = FigureNames.ROOK;
  }
}