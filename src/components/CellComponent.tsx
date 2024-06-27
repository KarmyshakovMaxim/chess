import React, { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProops {
	cell: Cell
}

const CellComponent: FC<CellProops> = ({cell}) => {
	return (
		<div
			className={['cell', cell.color].join(' ')}
		>
			{cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
		</div>		
	);
};

export default CellComponent;
