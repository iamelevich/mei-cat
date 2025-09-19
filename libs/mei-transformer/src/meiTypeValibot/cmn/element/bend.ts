import * as v from "valibot";
import { AttrBendAnlSchema } from "../../analytical/attr/bend.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBendGesSchema } from "../../gestural/attr/bend.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrBendVisSchema } from "../../visual/attr/bend.vis";
import { AttrBendLogSchema } from "../attr/bend.log";

/**
 * Base schema with attribute, to simplify types for BendSchema
 */
const BendBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBendAnlSchema.entries,
	...AttrBendGesSchema.entries,
	...AttrBendLogSchema.entries,
	...AttrBendVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * A variation in pitch (often micro-tonal) upwards or downwards during the course of a note.
 * @see https://music-encoding.org/guidelines/v5/elements/bend.html
 */
export const BendSchema = v.lazy(() => v.intersect([BendBaseSchema]));

export type BendData = v.InferOutput<typeof BendSchema>;
