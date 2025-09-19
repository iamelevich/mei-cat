import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, AttrMetadataPointingSchema } from "../../shared";
import { GenStateSchema, type GenStateData } from ".";

/**
 * Base schema with attribute, to simplify types for GenDescSchema
 */
const GenDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMetadataPointingSchema.entries,

	// Direct attributes
	/**
	 * When set to "true" the child elements are known to be in chronological order. When set to "false" or when not provided, the order of child elements is unknown.
	 */
	"@ordered": v.optional(v.string()),
});

type GenDescBaseData = v.InferOutput<typeof GenDescBaseSchema>;

/**
 * Bundles information about the textual development of a work.
 * @see https://music-encoding.org/guidelines/v5/elements/genDesc.html
 */
export const GenDescSchema: v.GenericSchema<GenDescData> = v.intersect([
	GenDescBaseSchema,
	v.object({
		/**
		 * Reference to element genDesc
		 * @see https://music-encoding.org/guidelines/v5/elements/genDesc.html
		 */
		genDesc: v.optional(
			v.union([
				v.lazy(() => GenDescSchema),
				v.array(v.lazy(() => GenDescSchema)),
			]),
		),
		/**
		 * Reference to element genState
		 * @see https://music-encoding.org/guidelines/v5/elements/genState.html
		 */
		genState: v.optional(
			v.union([
				v.lazy(() => GenStateSchema),
				v.array(v.lazy(() => GenStateSchema)),
			]),
		),
	}),
]);

export type GenDescData = GenDescBaseData & {
	genDesc?: GenDescData | GenDescData[];
	genState?: GenStateData | GenStateData[];
};
