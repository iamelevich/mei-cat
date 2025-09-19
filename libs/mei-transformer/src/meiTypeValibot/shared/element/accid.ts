import * as v from "valibot";
import { AttrAccidAnlSchema } from "../../analytical/attr/accid.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrAccidGesSchema } from "../../gestural/attr/accid.ges";
import { AttrAccidVisSchema } from "../../visual/attr/accid.vis";
import { AttrAccidLogSchema } from "../attr/accid.log";
import { AttrCommonSchema } from "../attr/common";

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
export const AccidSchema = v.lazy(() => v.intersect([AccidBaseSchema]));

export type AccidData = v.InferOutput<typeof AccidSchema>;
