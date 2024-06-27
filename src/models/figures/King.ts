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
}