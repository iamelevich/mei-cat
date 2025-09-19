import * as v from "valibot";
import { AttrPartAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrPartGesSchema } from "../../gestural";
import { ModelDivLikeSchema } from "../../text";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";
import { AttrPartVisSchema } from "../../visual";
import {
	AttrCommonSchema,
	AttrMetadataPointingSchema,
	AttrPartLogSchema,
	ModelAnnotLikeSchema,
	ModelMilestoneLikeMusicSchema,
	ModelScoreDefLikeSchema,
	ModelScorePartSchema,
	ModelStaffDefLikeSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for PartSchema
 */
const PartBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrPartAnlSchema.entries,
	...AttrPartGesSchema.entries,
	...AttrPartLogSchema.entries,
	...AttrPartVisSchema.entries,
});

/**
 * An alternative visual rendition of the score from the point of view of a particular performer (or group of performers).
 * @see https://music-encoding.org/guidelines/v5/elements/part.html
 */
export const PartSchema = v.intersect([
	PartBaseSchema,
	ModelAnnotLikeSchema,
	ModelAppLikeSchema,
	ModelDivLikeSchema,
	ModelEditLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
	ModelMilestoneLikeMusicSchema,
	ModelScoreDefLikeSchema,
	ModelScorePartSchema,
	ModelStaffDefLikeSchema,
	ModelTranscriptionLikeSchema,
]);

export type PartData = v.InferOutput<typeof PartSchema>;
