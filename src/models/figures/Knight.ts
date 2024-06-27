import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/bN.png'
import wihteLogo from '../../assets/wN.png'

export class Knight extends Figure {
  
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : wihteLogo;
    this.name = FigureNames.KNIGHT;
  }
}