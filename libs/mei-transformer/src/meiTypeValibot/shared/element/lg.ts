import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrMetadataPointingSchema,
	AttrXySchema,
	ModelHeadLikeSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrLyricsAnlSchema } from "../../analytical";
import { AttrLyricsGesSchema } from "../../gestural";
import { AttrLyricsLogSchema } from "../../lyrics";
import { AttrLyricsVisSchema } from "../../visual";
import { ModelLgLikeSchema, ModelLLikeSchema } from "../../text";

/**
 * Base schema with attribute, to simplify types for LgSchema
 */
const LgBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrLyricsAnlSchema.entries,
	...AttrLyricsGesSchema.entries,
	...AttrLyricsLogSchema.entries,
	...AttrLyricsVisSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrXySchema.entries,
});

/**
 * May be used for any section of text that is organized as a group of lines; however, it is most often used for a group of verse lines functioning as a formal unit, <abbr>e.g.</abbr>, a stanza, refrain, verse paragraph, etc.
 * @see https://music-encoding.org/guidelines/v5/elements/lg.html
 */
export const LgSchema = v.intersect([
	LgBaseSchema,
	ModelHeadLikeSchema,
	ModelLgLikeSchema,
	ModelLLikeSchema,
]);

export type LgData = v.InferOutput<typeof LgSchema>;
