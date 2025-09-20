import * as v from "valibot";
import { AttrNcAnlSchema } from "../../analytical/attr/nc.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrNcGesSchema } from "../../gestural/attr/nc.ges";
import { AttrBasicSchema } from "../../shared/attr/basic";
import { AttrClassedSchema } from "../../shared/attr/classed";
import { AttrLabelledSchema } from "../../shared/attr/labelled";
import { AttrLinkingSchema } from "../../shared/attr/linking";
import { AttrNNumberLikeSchema } from "../../shared/attr/nNumberLike";
import { AttrResponsibilitySchema } from "../../shared/attr/responsibility";
import { AttrNcVisSchema } from "../../visual/attr/nc.vis";
import { AttrNcLogSchema } from "../attr/nc.log";
import { ModelNeumeComponentModifierLikeSchema } from "../model/neumeComponentModifierLike";
import { ModelNeumeModifierLikeSchema } from "../model/neumeModifierLike";

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
export const NcSchema = v.lazy(() =>
	v.intersect([
		NcBaseSchema,
		ModelAppLikeSchema,
		ModelEditLikeSchema,
		ModelNeumeComponentModifierLikeSchema,
		ModelNeumeModifierLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type NcData = v.InferOutput<typeof NcSchema>;
