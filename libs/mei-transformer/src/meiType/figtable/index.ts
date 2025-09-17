import Type from "typebox";
import { FigSchema } from "./fig";
import { FigDescSchema } from "./figDesc";
import { GraphicSchema } from "./graphic";
import { TableSchema } from "./table";
import { TdSchema } from "./td";
import { ThSchema } from "./th";
import { TrSchema } from "./tr";

export const FigtableModule = Type.Module({
	fig: FigSchema,
	figDesc: FigDescSchema,
	graphic: GraphicSchema,
	table: TableSchema,
	td: TdSchema,
	th: ThSchema,
	tr: TrSchema,
});
