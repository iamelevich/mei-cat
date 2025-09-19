import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrMetadataPointingSchema,
	ModelParacontentPartSchema,
	PSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for EpigraphSchema
 */
const EpigraphBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrMetadataPointingSchema.entries,
});

/**
 * Contains a quotation, anonymous or attributed, appearing on a title page.
 * @see https://music-encoding.org/guidelines/v5/elements/epigraph.html
 */
export const EpigraphSchema = v.intersect([
	EpigraphBaseSchema,
	v.object({
		/**
		 * Reference to element p
		 * @see https://music-encoding.org/guidelines/v5/elements/p.html
		 */
		p: v.optional(
			v.union([v.lazy(() => PSchema), v.array(v.lazy(() => PSchema))]),
		),
	}),
	ModelParacontentPartSchema,
]);

export type EpigraphData = v.InferOutput<typeof EpigraphSchema>;
