import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { AttrEvidenceSchema } from "../attr/evidence";
import { AttrLangSchema } from "../attr/lang";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for LyricistSchema
 */
const LyricistBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEvidenceSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * Person or organization who is a writer of the text of a song.
 * @see https://music-encoding.org/guidelines/v5/elements/lyricist.html
 */
export const LyricistSchema = v.lazy(() =>
	v.intersect([LyricistBaseSchema, ModelTextPhraseLikeLimitedSchema]),
);

export type LyricistData = v.InferOutput<typeof LyricistSchema>;
