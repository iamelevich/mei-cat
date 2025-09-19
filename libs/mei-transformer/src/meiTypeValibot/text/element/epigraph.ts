import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrMetadataPointingSchema } from "../../shared/attr/metadataPointing";
import { PSchema } from "../../shared/element/p";
import { ModelParacontentPartSchema } from "../../shared/model/paracontentPart";

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
export const EpigraphSchema = v.lazy(() =>
	v.intersect([
		EpigraphBaseSchema,
		v.object({
			/**
			 * Reference to element p
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: v.optional(v.union([v.array(PSchema), PSchema])),
		}),
		ModelParacontentPartSchema,
	]),
);

export type EpigraphData = v.InferOutput<typeof EpigraphSchema>;
