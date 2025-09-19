import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { SymbolSchema } from "../../shared/element/symbol";

/**
 * Base schema with attribute, to simplify types for MappingSchema
 */
const MappingBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * One or more characters which are related to the parent symbol in some respect, as specified by the type attribute.
 * @see https://music-encoding.org/guidelines/v5/elements/mapping.html
 */
export const MappingSchema = v.lazy(() =>
	v.intersect([
		MappingBaseSchema,
		v.object({
			/**
			 * Reference to element symbol
			 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
			 */
			symbol: v.optional(v.union([v.array(SymbolSchema), SymbolSchema])),
		}),
	]),
);

export type MappingData = v.InferOutput<typeof MappingSchema>;
