import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { AttrCpMarkAnlSchema } from "../../analytical";
import { AttrCpMarkGesSchema } from "../../gestural";
import {
	AttrCpMarkLogSchema,
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "..";
import { AttrCpMarkVisSchema } from "../../visual";
import { AttrFacsimileSchema } from "../../facsimile";

/**
 * Base schema with attribute, to simplify types for CpMarkSchema
 */
const CpMarkBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrCpMarkAnlSchema.entries,
	...AttrCpMarkGesSchema.entries,
	...AttrCpMarkLogSchema.entries,
	...AttrCpMarkVisSchema.entries,
	...AttrFacsimileSchema.entries,
});

/**
 * A verbal or graphical indication to copy musical material written elsewhere.
 * @see https://music-encoding.org/guidelines/v5/elements/cpMark.html
 */
export const CpMarkSchema = v.intersect([
	CpMarkBaseSchema,
	ModelEditLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type CpMarkData = v.InferOutput<typeof CpMarkSchema>;
