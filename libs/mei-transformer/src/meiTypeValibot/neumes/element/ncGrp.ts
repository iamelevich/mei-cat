import * as v from "valibot";
import { AttrNcGrpAnlSchema } from "../../analytical/attr/ncGrp.anl";
import { StandardTagSchema } from "../../common";
import {
	type ModelAppLikeData,
	ModelAppLikeSchema,
} from "../../critapp/model/appLike";
import {
	type ModelEditLikeData,
	ModelEditLikeSchema,
} from "../../edittrans/model/editLike";
import {
	type ModelTranscriptionLikeData,
	ModelTranscriptionLikeSchema,
} from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrNcGrpGesSchema } from "../../gestural/attr/ncGrp.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrNcGrpVisSchema } from "../../visual/attr/ncGrp.vis";
import { AttrNcGrpLogSchema } from "../attr/ncGrp.log";
import { type NcData, NcSchema } from "../element/nc";
import {
	type ModelNeumeModifierLikeData,
	ModelNeumeModifierLikeSchema,
} from "../model/neumeModifierLike";

/**
 * Base schema with attribute, to simplify types for NcGrpSchema
 */
const NcGrpBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrNcGrpAnlSchema.entries,
	...AttrNcGrpGesSchema.entries,
	...AttrNcGrpLogSchema.entries,
	...AttrNcGrpVisSchema.entries,
});

type NcGrpBaseData = v.InferOutput<typeof NcGrpBaseSchema>;

/**
 * Collection of one or more neume components.
 * @see https://music-encoding.org/guidelines/v5/elements/ncGrp.html
 */
export const NcGrpSchema: v.GenericSchema<NcGrpData> = v.lazy(() =>
	v.intersect([
		NcGrpBaseSchema,
		v.object({
			/**
			 * Reference to element nc
			 * @see https://music-encoding.org/guidelines/v5/elements/nc.html
			 */
			nc: v.optional(v.union([NcSchema, v.array(NcSchema)])),
			/**
			 * Reference to element ncGrp
			 * @see https://music-encoding.org/guidelines/v5/elements/ncGrp.html
			 */
			ncGrp: v.optional(v.union([NcGrpSchema, v.array(NcGrpSchema)])),
		}),
		ModelAppLikeSchema,
		ModelEditLikeSchema,
		ModelNeumeModifierLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type NcGrpData = NcGrpBaseData & {
	nc?: NcData | NcData[];
	ncGrp?: NcGrpData | NcGrpData[];
} & ModelAppLikeData &
	ModelEditLikeData &
	ModelNeumeModifierLikeData &
	ModelTranscriptionLikeData;
