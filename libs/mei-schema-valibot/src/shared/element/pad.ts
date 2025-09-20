import * as v from "valibot";
import { AttrPadAnlSchema } from "../../analytical/attr/pad.anl";
import { StandardTagSchema } from "../../common";
import { AttrPadGesSchema } from "../../gestural/attr/pad.ges";
import { AttrPadVisSchema } from "../../visual/attr/pad.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrPadLogSchema } from "../attr/pad.log";

/**
 * Base schema with attribute, to simplify types for PadSchema
 */
const PadBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrPadAnlSchema.entries,
	...AttrPadGesSchema.entries,
	...AttrPadLogSchema.entries,
	...AttrPadVisSchema.entries,
});

/**
 * An indication of extra visual space between notational elements.
 * @see https://music-encoding.org/guidelines/v5/elements/pad.html
 */
export const PadSchema = v.lazy(() => v.intersect([PadBaseSchema]));

export type PadData = v.InferOutput<typeof PadSchema>;
