import * as v from "valibot";
import { AttrAlignmentSchema } from "../../performance/attr/alignment";
import { AttrDurationAdditiveSchema } from "../attr/duration.additive";
import { AttrLayerIdentSchema } from "../attr/layerIdent";
import { AttrPartIdentSchema } from "../attr/partIdent";
import { AttrStaffIdentSchema } from "../attr/staffIdent";
import { AttrStartEndIdSchema } from "../attr/startEndId";
import { AttrTimestampLogSchema } from "../attr/timestamp.log";
import { AttrTimestamp2LogSchema } from "../attr/timestamp2.log";

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
