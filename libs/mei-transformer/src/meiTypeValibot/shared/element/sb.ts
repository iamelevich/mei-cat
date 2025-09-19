import * as v from "valibot";
import { AttrSbAnlSchema } from "../../analytical/attr/sb.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrSbGesSchema } from "../../gestural/attr/sb.ges";
import { AttrSbVisSchema } from "../../visual/attr/sb.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrSbLogSchema } from "../attr/sb.log";
import { AttrSourceSchema } from "../attr/source";

/**
 * Base schema with attribute, to simplify types for SbSchema
 */
const SbBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrSbAnlSchema.entries,
	...AttrSbGesSchema.entries,
	...AttrSbLogSchema.entries,
	...AttrSbVisSchema.entries,
	...AttrSourceSchema.entries,
});

/**
 * An empty formatting element that forces musical notation to begin on a new line.
 * @see https://music-encoding.org/guidelines/v5/elements/sb.html
 */
export const SbSchema = v.lazy(() => v.intersect([SbBaseSchema]));

export type SbData = v.InferOutput<typeof SbSchema>;
