import * as v from "valibot";
import { AttrFingGrpAnlSchema } from "../../analytical/attr/fingGrp.anl";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrFingGrpGesSchema } from "../../gestural/attr/fingGrp.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrFingGrpVisSchema } from "../../visual/attr/fingGrp.vis";
import { AttrFingGrpLogSchema } from "../attr/fingGrp.log";
import { ModelFingeringLikeSchema } from "../model/fingeringLike";

/**
 * Base schema with attribute, to simplify types for FingGrpSchema
 */
const FingGrpBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrFingGrpAnlSchema.entries,
	...AttrFingGrpGesSchema.entries,
	...AttrFingGrpLogSchema.entries,
	...AttrFingGrpVisSchema.entries,
});

/**
 * A group of individual fingers in a fingering indication.
 * @see https://music-encoding.org/guidelines/v5/elements/fingGrp.html
 */
export const FingGrpSchema = v.lazy(() =>
	v.intersect([
		FingGrpBaseSchema,
		ModelEditLikeSchema,
		ModelFingeringLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type FingGrpData = v.InferOutput<typeof FingGrpSchema>;
