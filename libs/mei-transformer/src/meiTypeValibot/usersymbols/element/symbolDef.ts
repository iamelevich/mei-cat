import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { GraphicSchema } from "../../figtable";
import {
	AttrCommonSchema,
	AttrCoordinatedSchema,
	AttrDataSelectingSchema,
	ModelAnnotLikeSchema,
	SymbolSchema,
} from "../../shared";
import { ModelGraphicPrimitiveLikeSchema } from "..";
import { MappingSchema, SymNameSchema, SymPropSchema } from ".";

/**
 * Base schema with attribute, to simplify types for SymbolDefSchema
 */
const SymbolDefBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrCoordinatedSchema.entries,
	...AttrDataSelectingSchema.entries,
});

/**
 * Declaration of an individual symbol in a symbolTable.
 * @see https://music-encoding.org/guidelines/v5/elements/symbolDef.html
 */
export const SymbolDefSchema = v.intersect([
	SymbolDefBaseSchema,
	v.object({
		/**
		 * Reference to element graphic
		 * @see https://music-encoding.org/guidelines/v5/elements/graphic.html
		 */
		graphic: v.optional(
			v.union([
				v.lazy(() => GraphicSchema),
				v.array(v.lazy(() => GraphicSchema)),
			]),
		),
		/**
		 * Reference to element mapping
		 * @see https://music-encoding.org/guidelines/v5/elements/mapping.html
		 */
		mapping: v.optional(
			v.union([
				v.lazy(() => MappingSchema),
				v.array(v.lazy(() => MappingSchema)),
			]),
		),
		/**
		 * Reference to element svg_svg
		 * @see https://music-encoding.org/guidelines/v5/elements/svg_svg.html
		 */
		svg_svg: v.optional(
			v.union([
				v.lazy(() => Svg_svgSchema),
				v.array(v.lazy(() => Svg_svgSchema)),
			]),
		),
		/**
		 * Reference to element symbol
		 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
		 */
		symbol: v.optional(
			v.union([
				v.lazy(() => SymbolSchema),
				v.array(v.lazy(() => SymbolSchema)),
			]),
		),
		/**
		 * Reference to element symName
		 * @see https://music-encoding.org/guidelines/v5/elements/symName.html
		 */
		symName: v.optional(v.lazy(() => SymNameSchema)),
		/**
		 * Reference to element symProp
		 * @see https://music-encoding.org/guidelines/v5/elements/symProp.html
		 */
		symProp: v.optional(
			v.union([
				v.lazy(() => SymPropSchema),
				v.array(v.lazy(() => SymPropSchema)),
			]),
		),
	}),
	ModelAnnotLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
]);

export type SymbolDefData = v.InferOutput<typeof SymbolDefSchema>;
