import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrCommonSchema,
	AttrLangSchema,
	AttrMetadataPointingSchema,
	ModelMilestoneLikeTextSchema,
	ModelRelationLikeSchema,
} from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { ModelDivLikeSchema } from "..";
import { ModelFrontAndBackPartSchema } from "../../header";

/**
 * Base schema with attribute, to simplify types for BackSchema
 */
const BackBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrMetadataPointingSchema.entries,
});

/**
 * Contains any appendixes, advertisements, indexes, etc. following the main body of a musical text.
 * @see https://music-encoding.org/guidelines/v5/elements/back.html
 */
export const BackSchema = v.intersect([
	BackBaseSchema,
	ModelDivLikeSchema,
	ModelFrontAndBackPartSchema,
	ModelMilestoneLikeTextSchema,
	ModelRelationLikeSchema,
]);

export type BackData = v.InferOutput<typeof BackSchema>;
