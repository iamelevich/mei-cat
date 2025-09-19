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
 * Base schema with attribute, to simplify types for FrontSchema
 */
const FrontBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrMetadataPointingSchema.entries,
});

/**
 * Bundles prefatory text found before the start of the musical text.
 * @see https://music-encoding.org/guidelines/v5/elements/front.html
 */
export const FrontSchema = v.intersect([
	FrontBaseSchema,
	ModelDivLikeSchema,
	ModelFrontAndBackPartSchema,
	ModelMilestoneLikeTextSchema,
	ModelRelationLikeSchema,
]);

export type FrontData = v.InferOutput<typeof FrontSchema>;
