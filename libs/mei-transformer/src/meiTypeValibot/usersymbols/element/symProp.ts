import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared/attr/common";
import { PropNameSchema } from "../element/propName";
import { PropValueSchema } from "../element/propValue";

/**
 * Base schema with attribute, to simplify types for SymPropSchema
 */
const SymPropBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Provides a name and value for some property of the parent symbol.
 * @see https://music-encoding.org/guidelines/v5/elements/symProp.html
 */
export const SymPropSchema = v.lazy(() =>
	v.intersect([
		SymPropBaseSchema,
		v.object({
			/**
			 * Reference to element propName
			 * @see https://music-encoding.org/guidelines/v5/elements/propName.html
			 */
			propName: v.optional(PropNameSchema),
			/**
			 * Reference to element propValue
			 * @see https://music-encoding.org/guidelines/v5/elements/propValue.html
			 */
			propValue: v.optional(PropValueSchema),
		}),
	]),
);

export type SymPropData = v.InferOutput<typeof SymPropSchema>;
