import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrMdivLogSchema,
	AttrMetadataPointingSchema,
	ModelMdivLikeSchema,
	ModelPartsLikeSchema,
	ModelScoreLikeSchema,
} from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrMdivAnlSchema } from "../../analytical";
import { AttrMdivGesSchema } from "../../gestural";
import { AttrMdivVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for MdivSchema
 */
const MdivBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMdivAnlSchema.entries,
	...AttrMdivGesSchema.entries,
	...AttrMdivLogSchema.entries,
	...AttrMdivVisSchema.entries,
	...AttrMetadataPointingSchema.entries,
});

/**
 * Contains a subdivision of the body of a musical text.
 * @see https://music-encoding.org/guidelines/v5/elements/mdiv.html
 */
export const MdivSchema = v.intersect([
	MdivBaseSchema,
	ModelMdivLikeSchema,
	ModelPartsLikeSchema,
	ModelScoreLikeSchema,
]);

export type MdivData = v.InferOutput<typeof MdivSchema>;
