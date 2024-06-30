import React, { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProops {
	cell: Cell;
	selected: boolean;
	click: (cell: Cell) => void;
}

const CellComponent: FC<CellProops> = ({cell, selected, click}) => {
	return (
		<div
			className={['cell', cell.color, selected ? 'selected' : '', ].join(' ')}
			onClick={() => click(cell)}
			style={{background: cell.available && cell.figure ? 'rgba(155, 90, 155, 0.7)' : ''}}
		>
			{cell.available && !cell.figure && <div className="available"></div>}
			{cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
		</div>		
	);
};

export default CellComponent;
