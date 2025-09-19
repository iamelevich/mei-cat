import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, ModelHeadLikeSchema } from "../../shared";
import { SourceSchema } from ".";

/**
 * Base schema with attribute, to simplify types for SourceDescSchema
 */
const SourceDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * A container for the descriptions of the source(s) used in the creation of the electronic file.
 * @see https://music-encoding.org/guidelines/v5/elements/sourceDesc.html
 */
export const SourceDescSchema = v.intersect([
	SourceDescBaseSchema,
	v.object({
		/**
		 * Reference to element source
		 * @see https://music-encoding.org/guidelines/v5/elements/source.html
		 */
		source: v.union([
			v.lazy(() => SourceSchema),
			v.array(v.lazy(() => SourceSchema)),
		]),
	}),
	ModelHeadLikeSchema,
]);

export type SourceDescData = v.InferOutput<typeof SourceDescSchema>;
