import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrPointingSchema,
	ModelSectionLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrMetaMarkAnlSchema } from "../../analytical";
import { AttrMetaMarkGesSchema } from "../../gestural";
import {
	AttrMetaMarkLogSchema,
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "..";
import { AttrMetaMarkVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for MetaMarkSchema
 */
const MetaMarkBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrMetaMarkAnlSchema.entries,
	...AttrMetaMarkGesSchema.entries,
	...AttrMetaMarkLogSchema.entries,
	...AttrMetaMarkVisSchema.entries,
	...AttrPointingSchema.entries,

	// Direct attributes
	/**
	 * Describes the purpose of the metaMark.
	 */
	"@function": v.optional(v.string()),
});

/**
 * A graphical or textual statement with additional / explanatory information about the musical text. The textual consequences of this intervention are encoded independently via other means; that is, with elements such as <gi scheme="MEI">add</gi>, <gi scheme="MEI">del</gi>, etc.
 * @see https://music-encoding.org/guidelines/v5/elements/metaMark.html
 */
export const MetaMarkSchema = v.intersect([
	MetaMarkBaseSchema,
	ModelEditLikeSchema,
	ModelSectionLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type MetaMarkData = v.InferOutput<typeof MetaMarkSchema>;
