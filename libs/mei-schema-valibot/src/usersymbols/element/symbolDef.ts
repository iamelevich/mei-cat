import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	type GraphicData,
	GraphicSchema,
} from "../../figtable/element/graphic";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrCoordinatedSchema } from "../../shared/attr/coordinated";
import { AttrDataSelectingSchema } from "../../shared/attr/dataSelecting";
import { type SymbolData, SymbolSchema } from "../../shared/element/symbol";
import { ModelAnnotLikeSchema } from "../../shared/model/annotLike";
import { ModelGraphicPrimitiveLikeSchema } from "../model/graphicPrimitiveLike";
import { type MappingData, MappingSchema } from "./mapping";
import { type SymNameData, SymNameSchema } from "./symName";
import { type SymPropData, SymPropSchema } from "./symProp";

/**
 * Base schema with attribute, to simplify types for SymbolDefSchema
 */
const SymbolDefBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrCoordinatedSchema.entries,
	...AttrDataSelectingSchema.entries,
});

type SymbolDefBaseData = v.InferOutput<typeof SymbolDefBaseSchema>;

/**
 * Declaration of an individual symbol in a symbolTable.
 * @see https://music-encoding.org/guidelines/v5/elements/symbolDef.html
 */
export const SymbolDefSchema: v.GenericSchema<SymbolDefData> = v.lazy(() =>
	v.intersect([
		SymbolDefBaseSchema,
		v.object({
			/**
			 * Reference to element graphic
			 * @see https://music-encoding.org/guidelines/v5/elements/graphic.html
			 */
			graphic: v.optional(v.union([v.array(GraphicSchema), GraphicSchema])),
			/**
			 * Reference to element mapping
			 * @see https://music-encoding.org/guidelines/v5/elements/mapping.html
			 */
			mapping: v.optional(v.union([v.array(MappingSchema), MappingSchema])),
			/**
			 * Reference to element svg_svg.
			 * <!-- Use either SVG or MEI elements to "draw" the symbol -->
			 */
			svg_svg: v.optional(v.any()),
			/**
			 * Reference to element symbol
			 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
			 */
			symbol: v.optional(v.union([v.array(SymbolSchema), SymbolSchema])),
			/**
			 * Reference to element symName
			 * @see https://music-encoding.org/guidelines/v5/elements/symName.html
			 */
			symName: v.optional(SymNameSchema),
			/**
			 * Reference to element symProp
			 * @see https://music-encoding.org/guidelines/v5/elements/symProp.html
			 */
			symProp: v.optional(v.union([v.array(SymPropSchema), SymPropSchema])),
		}),
		ModelAnnotLikeSchema,
		ModelGraphicPrimitiveLikeSchema,
	]),
);

export type SymbolDefData = SymbolDefBaseData & {
	graphic?: GraphicData | GraphicData[];
	mapping?: MappingData | MappingData[];
	/** biome-ignore lint/suspicious/noExplicitAny: No definition in MEI schema */
	svg_svg?: any;
	symbol?: SymbolData | SymbolData[];
	symName?: SymNameData;
	symProp?: SymPropData | SymPropData[];
};
