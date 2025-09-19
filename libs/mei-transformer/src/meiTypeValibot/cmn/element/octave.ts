import * as v from "valibot";
import { AttrOctaveAnlSchema } from "../../analytical/attr/octave.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrOctaveGesSchema } from "../../gestural/attr/octave.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelTextPhraseLikeLimitedSchema } from "../../shared/model/textPhraseLike.limited";
import { AttrOctaveVisSchema } from "../../visual/attr/octave.vis";
import { AttrOctaveLogSchema } from "../attr/octave.log";

/**
 * Base schema with attribute, to simplify types for OctaveSchema
 */
const OctaveBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrOctaveAnlSchema.entries,
	...AttrOctaveGesSchema.entries,
	...AttrOctaveLogSchema.entries,
	...AttrOctaveVisSchema.entries,
});

/**
 * An indication that a passage should be performed one or more octaves above or below its written pitch.
 * @see https://music-encoding.org/guidelines/v5/elements/octave.html
 */
export const OctaveSchema = v.lazy(() =>
	v.intersect([OctaveBaseSchema, ModelTextPhraseLikeLimitedSchema]),
);

export type OctaveData = v.InferOutput<typeof OctaveSchema>;
