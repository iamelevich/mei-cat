import * as v from "valibot";
import { AttrArticAnlSchema } from "../../analytical/attr/artic.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrArticGesSchema } from "../../gestural/attr/artic.ges";
import { AttrArticVisSchema } from "../../visual/attr/artic.vis";
import { AttrArticLogSchema } from "../attr/artic.log";
import { AttrCommonSchema } from "../attr/common";

/**
 * Base schema with attribute, to simplify types for ArticSchema
 */
const ArticBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrArticAnlSchema.entries,
	...AttrArticGesSchema.entries,
	...AttrArticLogSchema.entries,
	...AttrArticVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * An indication of how to play a note or chord.
 * @see https://music-encoding.org/guidelines/v5/elements/artic.html
 */
export const ArticSchema = v.lazy(() => v.intersect([ArticBaseSchema]));

export type ArticData = v.InferOutput<typeof ArticSchema>;
