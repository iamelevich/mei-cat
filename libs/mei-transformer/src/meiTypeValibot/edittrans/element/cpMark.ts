import * as v from "valibot";
import { AttrCpMarkAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrCpMarkGesSchema } from "../../gestural";
import {
	AttrCommonSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "../../shared";
import { AttrCpMarkVisSchema } from "../../visual";
import {
	AttrCpMarkLogSchema,
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "..";

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
