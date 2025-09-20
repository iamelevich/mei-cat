import * as v from "valibot";
import { AttrNeumeAnlSchema } from "../../analytical/attr/neume.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrNeumeGesSchema } from "../../gestural/attr/neume.ges";
import { AttrBasicSchema } from "../../shared/attr/basic";
import { AttrClassedSchema } from "../../shared/attr/classed";
import { AttrLabelledSchema } from "../../shared/attr/labelled";
import { AttrLinkingSchema } from "../../shared/attr/linking";
import { AttrNNumberLikeSchema } from "../../shared/attr/nNumberLike";
import { AttrResponsibilitySchema } from "../../shared/attr/responsibility";
import { AttrNeumeVisSchema } from "../../visual/attr/neume.vis";
import { AttrNeumeLogSchema } from "../attr/neume.log";
import { ModelNeumeModifierLikeSchema } from "../model/neumeModifierLike";
import { ModelNeumePartSchema } from "../model/neumePart";

/**
 * Base schema with attribute, to simplify types for NeumeSchema
 */
const NeumeBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrClassedSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrNNumberLikeSchema.entries,
	...AttrNeumeAnlSchema.entries,
	...AttrNeumeGesSchema.entries,
	...AttrNeumeLogSchema.entries,
	...AttrNeumeVisSchema.entries,
	...AttrResponsibilitySchema.entries,
});

/**
 * Sign representing one or more musical pitches.
 * @see https://music-encoding.org/guidelines/v5/elements/neume.html
 */
export const NeumeSchema = v.lazy(() =>
	v.intersect([
		NeumeBaseSchema,
		ModelAppLikeSchema,
		ModelEditLikeSchema,
		ModelNeumeModifierLikeSchema,
		ModelNeumePartSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type NeumeData = v.InferOutput<typeof NeumeSchema>;
