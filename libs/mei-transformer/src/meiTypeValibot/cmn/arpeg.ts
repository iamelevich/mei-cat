import * as v from "valibot";
import { AttrArpegAnlSchema } from "../analytical/attr/arpeg.anl";
import { StandardTagSchema } from "../common";
import { AttrFacsimileSchema } from "../facsimile";
import { AttrArpegGesSchema } from "../gestural/attr/arpeg.ges";
import { AttrCommonSchema } from "../shared";
import { AttrArpegVisSchema } from "../visual/attr/arpeg.vis";
import { AttrArpegLogSchema } from "./attr/arpeg.log";

/**
 * Indicates that the notes of a chord are to be performed successively rather than simultaneously, usually from lowest to highest. Sometimes called a "roll".
 * @see https://music-encoding.org/guidelines/v5/elements/arpeg.html
 */
export const ArpegSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrArpegLogSchema.entries,
	...AttrArpegVisSchema.entries,
	...AttrArpegGesSchema.entries,
	...AttrArpegAnlSchema.entries,
});

export type ArpegData = v.InferOutput<typeof ArpegSchema>;
