import * as v from "valibot";
import { AttrArpegAnlSchema } from "../../analytical/attr/arpeg.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrArpegGesSchema } from "../../gestural/attr/arpeg.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrArpegVisSchema } from "../../visual/attr/arpeg.vis";
import { AttrArpegLogSchema } from "../attr/arpeg.log";

/**
 * Base schema with attribute, to simplify types for ArpegSchema
 */
const ArpegBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrArpegAnlSchema.entries,
	...AttrArpegGesSchema.entries,
	...AttrArpegLogSchema.entries,
	...AttrArpegVisSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * Indicates that the notes of a chord are to be performed successively rather than simultaneously, usually from lowest to highest. Sometimes called a "roll".
 * @see https://music-encoding.org/guidelines/v5/elements/arpeg.html
 */
export const ArpegSchema = v.lazy(() => v.intersect([ArpegBaseSchema]));

export type ArpegData = v.InferOutput<typeof ArpegSchema>;
