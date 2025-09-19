import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrArpegAnlSchema } from "../../analytical";
import { AttrArpegGesSchema } from "../../gestural";
import { AttrArpegLogSchema } from "..";
import { AttrArpegVisSchema } from "../../visual";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";

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
export const ArpegSchema = v.intersect([ArpegBaseSchema]);

export type ArpegData = v.InferOutput<typeof ArpegSchema>;
