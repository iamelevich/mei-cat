import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrNcGrpAnlSchema } from "../../analytical";
import { AttrNcGrpGesSchema } from "../../gestural";
import {
	AttrNcGrpLogSchema,
	ModelNeumeModifierLikeSchema,
	type ModelNeumeModifierLikeData,
} from "..";
import { AttrNcGrpVisSchema } from "../../visual";
import { ModelAppLikeSchema, type ModelAppLikeData } from "../../critapp";
import {
	ModelEditLikeSchema,
	type ModelEditLikeData,
	ModelTranscriptionLikeSchema,
	type ModelTranscriptionLikeData,
} from "../../edittrans";
import { NcSchema, type NcData } from ".";

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
export const NcGrpSchema: v.GenericSchema<NcGrpData> = v.intersect([
	NcGrpBaseSchema,
	v.object({
		/**
		 * Reference to element nc
		 * @see https://music-encoding.org/guidelines/v5/elements/nc.html
		 */
		nc: v.optional(
			v.union([v.lazy(() => NcSchema), v.array(v.lazy(() => NcSchema))]),
		),
		/**
		 * Reference to element ncGrp
		 * @see https://music-encoding.org/guidelines/v5/elements/ncGrp.html
		 */
		ncGrp: v.optional(
			v.union([v.lazy(() => NcGrpSchema), v.array(v.lazy(() => NcGrpSchema))]),
		),
	}),
	ModelAppLikeSchema,
	ModelEditLikeSchema,
	ModelNeumeModifierLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type NcGrpData = NcGrpBaseData & {
	nc?: NcData | NcData[];
	ncGrp?: NcGrpData | NcGrpData[];
} & ModelAppLikeData &
	ModelEditLikeData &
	ModelNeumeModifierLikeData &
	ModelTranscriptionLikeData;
