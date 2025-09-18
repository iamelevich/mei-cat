import * as v from "valibot";
import { AttrMetaMarkAnlSchema } from "../analytical/attr/metaMark.anl";
import { StandardTagSchema } from "../common";
import { AttrFacsimileSchema } from "../facsimile";
import { AttrMetaMarkGesSchema } from "../gestural/attr/metaMark.ges";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrPointingSchema,
	SectionLikeSchema,
	TextPhraseLikeLimitedSchema,
} from "../shared";
import { AttrMetaMarkVisSchema } from "../visual/attr/metaMark.vis";
import { AttrMetaMarkLogSchema } from "./attr/metaMark.log";
import { EditLikeSchema, TranscriptionLikeSchema } from "./model";

/**
 * A graphical or textual statement with additional / explanatory information about the musical text.
 * @see https://music-encoding.org/guidelines/v5/elements/metaMark.html
 */
export const MetaMarkSchema = v.intersect([
	v.object({
		...StandardTagSchema.entries,
		...AttrCommonSchema.entries,
		...AttrFacsimileSchema.entries,
		...AttrLangSchema.entries,
		...AttrMetaMarkLogSchema.entries,
		...AttrMetaMarkVisSchema.entries,
		...AttrMetaMarkGesSchema.entries,
		...AttrMetaMarkAnlSchema.entries,
		...AttrPointingSchema.entries,

		/**
		 * Describes the purpose of the metaMark.
		 * @see https://music-encoding.org/guidelines/v5/elements/metaMark.html#function
		 */
		"@function": v.optional(v.string()),
	}),
	EditLikeSchema,
	SectionLikeSchema,
	TextPhraseLikeLimitedSchema,
	TranscriptionLikeSchema,
]);

export type MetaMarkData = v.InferOutput<typeof MetaMarkSchema>;
