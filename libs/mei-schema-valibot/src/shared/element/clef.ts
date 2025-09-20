import * as v from "valibot";
import { AttrClefAnlSchema } from "../../analytical/attr/clef.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrClefGesSchema } from "../../gestural/attr/clef.ges";
import { AttrClefVisSchema } from "../../visual/attr/clef.vis";
import { AttrClefLogSchema } from "../attr/clef.log";
import { AttrCommonSchema } from "../attr/common";
import { AttrEventSchema } from "../attr/event";

/**
 * Base schema with attribute, to simplify types for ClefSchema
 */
const ClefBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrClefAnlSchema.entries,
	...AttrClefGesSchema.entries,
	...AttrClefLogSchema.entries,
	...AttrClefVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrEventSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * Indication of the exact location of a particular note on the staff and, therefore, the other notes as well.
 * @see https://music-encoding.org/guidelines/v5/elements/clef.html
 */
export const ClefSchema = v.lazy(() => v.intersect([ClefBaseSchema]));

export type ClefData = v.InferOutput<typeof ClefSchema>;
