import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrFingGrpAnlSchema } from "../../analytical";
import { AttrFingGrpGesSchema } from "../../gestural";
import { AttrFingGrpLogSchema, ModelFingeringLikeSchema } from "..";
import { AttrFingGrpVisSchema } from "../../visual";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";

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
export const FingGrpSchema = v.intersect([
	FingGrpBaseSchema,
	ModelEditLikeSchema,
	ModelFingeringLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type FingGrpData = v.InferOutput<typeof FingGrpSchema>;
