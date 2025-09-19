import * as v from "valibot";
import {
	AttrChannelizedSchema,
	AttrMidiTempoSchema,
	AttrTimeBaseSchema,
} from "../../midi";
import { AttrMmTempoSchema, AttrTuningSchema } from "../../shared";

/**
 * Gestural domain attributes for scoreDef. The values set in these attributes act as score-wide defaults for attributes that are not set in descendant elements. For example, the grace attribute value here applies to all the grace attribute values in the score (or, more accurately, until the next <gi scheme="MEI">scoreDef</gi> element) without having to individually set each note’s grace attribute value. The midi.* attributes function as default values when creating sounding output. The tune.* attributes provide the capability of recording a tuning reference pitch..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scoreDef.ges.html
 */
export const AttrScoreDefGesSchema = v.object({
	// Inherited attribute classes
	...AttrChannelizedSchema.entries,
	...AttrMidiTempoSchema.entries,
	...AttrMmTempoSchema.entries,
	...AttrTimeBaseSchema.entries,
	...AttrTuningSchema.entries,
});

export type AttrScoreDefGesData = v.InferOutput<typeof AttrScoreDefGesSchema>;
