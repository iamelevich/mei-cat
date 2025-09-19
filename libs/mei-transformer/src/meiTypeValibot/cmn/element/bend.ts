import * as v from "valibot";
import { AttrBendAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrBendGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrBendVisSchema } from "../../visual";
import { AttrBendLogSchema } from "..";

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
