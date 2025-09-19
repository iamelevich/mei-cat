import * as v from "valibot";
import { AttrMultiRestAnlSchema } from "../../analytical/attr/multiRest.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrMultiRestGesSchema } from "../../gestural/attr/multiRest.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMultiRestVisSchema } from "../../visual/attr/multiRest.vis";
import { AttrMultiRestLogSchema } from "../attr/multiRest.log";

/**
 * Base schema with attribute, to simplify types for MultiRestSchema
 */
const MultiRestBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMultiRestAnlSchema.entries,
	...AttrMultiRestGesSchema.entries,
	...AttrMultiRestLogSchema.entries,
	...AttrMultiRestVisSchema.entries,
});

/**
 * Multiple full measure rests compressed into a single bar, frequently found in performer parts.
 * @see https://music-encoding.org/guidelines/v5/elements/multiRest.html
 */
export const MultiRestSchema = v.lazy(() => v.intersect([MultiRestBaseSchema]));

export type MultiRestData = v.InferOutput<typeof MultiRestSchema>;
