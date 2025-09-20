import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { ModelFrontAndBackPartSchema } from "../../header/model/frontAndBackPart";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrMetadataPointingSchema } from "../../shared/attr/metadataPointing";
import { ModelMilestoneLikeTextSchema } from "../../shared/model/milestoneLike.text";
import { ModelRelationLikeSchema } from "../../shared/model/relationLike";
import { ModelDivLikeSchema } from "../model/divLike";

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
export const FrontSchema = v.lazy(() =>
	v.intersect([
		FrontBaseSchema,
		ModelDivLikeSchema,
		ModelFrontAndBackPartSchema,
		ModelMilestoneLikeTextSchema,
		ModelRelationLikeSchema,
	]),
);

export type FrontData = v.InferOutput<typeof FrontSchema>;
