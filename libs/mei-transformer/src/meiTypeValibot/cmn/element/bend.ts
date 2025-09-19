import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBendAnlSchema } from "../../analytical";
import { AttrBendGesSchema } from "../../gestural";
import { AttrBendLogSchema } from "..";
import { AttrBendVisSchema } from "../../visual";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";

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
export const BendSchema = v.intersect([BendBaseSchema]);

export type BendData = v.InferOutput<typeof BendSchema>;
