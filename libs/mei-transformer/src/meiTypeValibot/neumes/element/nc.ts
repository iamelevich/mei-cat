import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBasicSchema,
	AttrClassedSchema,
	AttrLabelledSchema,
	AttrLinkingSchema,
	AttrNNumberLikeSchema,
	AttrResponsibilitySchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrNcAnlSchema } from "../../analytical";
import { AttrNcGesSchema } from "../../gestural";
import {
	AttrNcLogSchema,
	ModelNeumeComponentModifierLikeSchema,
	ModelNeumeModifierLikeSchema,
} from "..";
import { AttrNcVisSchema } from "../../visual";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";

/**
 * Base schema with attribute, to simplify types for NcSchema
 */
const NcBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrClassedSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrNNumberLikeSchema.entries,
	...AttrNcAnlSchema.entries,
	...AttrNcGesSchema.entries,
	...AttrNcLogSchema.entries,
	...AttrNcVisSchema.entries,
	...AttrResponsibilitySchema.entries,
});

/**
 * Sign representing a single pitched event, although the exact pitch may not be known.
 * @see https://music-encoding.org/guidelines/v5/elements/nc.html
 */
export const NcSchema = v.intersect([
	NcBaseSchema,
	ModelAppLikeSchema,
	ModelEditLikeSchema,
	ModelNeumeComponentModifierLikeSchema,
	ModelNeumeModifierLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type NcData = v.InferOutput<typeof NcSchema>;
