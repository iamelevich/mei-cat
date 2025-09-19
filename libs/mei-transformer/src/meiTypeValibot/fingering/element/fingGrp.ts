import * as v from "valibot";
import { AttrFingGrpAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrFingGrpGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrFingGrpVisSchema } from "../../visual";
import { AttrFingGrpLogSchema, ModelFingeringLikeSchema } from "..";

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
