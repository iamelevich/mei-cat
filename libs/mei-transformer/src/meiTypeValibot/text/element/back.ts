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
export const BackSchema = v.lazy(() =>
	v.intersect([
		BackBaseSchema,
		ModelDivLikeSchema,
		ModelFrontAndBackPartSchema,
		ModelMilestoneLikeTextSchema,
		ModelRelationLikeSchema,
	]),
);

export type BackData = v.InferOutput<typeof BackSchema>;
