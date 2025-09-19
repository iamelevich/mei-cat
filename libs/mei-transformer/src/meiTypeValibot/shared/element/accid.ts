import * as v from "valibot";
import { AttrAccidAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrAccidGesSchema } from "../../gestural";
import { AttrAccidVisSchema } from "../../visual";
import { AttrAccidLogSchema, AttrCommonSchema } from "..";

/**
 * Base schema with attribute, to simplify types for AccidSchema
 */
const AccidBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAccidAnlSchema.entries,
	...AttrAccidGesSchema.entries,
	...AttrAccidLogSchema.entries,
	...AttrAccidVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * Records a temporary alteration to the pitch of a note.
 * @see https://music-encoding.org/guidelines/v5/elements/accid.html
 */
export const AccidSchema = v.intersect([AccidBaseSchema]);

export type AccidData = v.InferOutput<typeof AccidSchema>;
