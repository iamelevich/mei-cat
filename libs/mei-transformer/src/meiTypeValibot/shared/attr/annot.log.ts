import * as v from "valibot";
import { AttrAlignmentSchema } from "../../performance";
import {
	AttrDurationAdditiveSchema,
	AttrLayerIdentSchema,
	AttrPartIdentSchema,
	AttrStaffIdentSchema,
	AttrStartEndIdSchema,
	AttrTimestampLogSchema,
	AttrTimestamp2LogSchema,
} from "..";

/**
 * Logical domain attributes for annot. Values for the type attribute can be taken from any convenient typology of annotation suitable to the work in hand; <abbr>e.g.</abbr>, annotation, gloss, citation, digression, preliminary, temporary, etc..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.annot.log.html
 */
export const AttrAnnotLogSchema = v.object({
	// Inherited attribute classes
	...AttrAlignmentSchema.entries,
	...AttrDurationAdditiveSchema.entries,
	...AttrLayerIdentSchema.entries,
	...AttrPartIdentSchema.entries,
	...AttrStaffIdentSchema.entries,
	...AttrStartEndIdSchema.entries,
	...AttrTimestampLogSchema.entries,
	...AttrTimestamp2LogSchema.entries,
});

export type AttrAnnotLogData = v.InferOutput<typeof AttrAnnotLogSchema>;
