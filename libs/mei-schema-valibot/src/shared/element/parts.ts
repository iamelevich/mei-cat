import * as v from "valibot";
import { AttrPartsAnlSchema } from "../../analytical/attr/parts.anl";
import { StandardTagSchema } from "../../common";
import { AttrPartsGesSchema } from "../../gestural/attr/parts.ges";
import { AttrPartsVisSchema } from "../../visual/attr/parts.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrMetadataPointingSchema } from "../attr/metadataPointing";
import { AttrPartsLogSchema } from "../attr/parts.log";
import { ModelPartLikeSchema } from "../model/partLike";

/**
 * Base schema with attribute, to simplify types for PartsSchema
 */
const PartsBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrPartsAnlSchema.entries,
	...AttrPartsGesSchema.entries,
	...AttrPartsLogSchema.entries,
	...AttrPartsVisSchema.entries,
});

/**
 * Provides a container for performers' parts.
 * @see https://music-encoding.org/guidelines/v5/elements/parts.html
 */
export const PartsSchema = v.lazy(() =>
	v.intersect([PartsBaseSchema, ModelPartLikeSchema]),
);

export type PartsData = v.InferOutput<typeof PartsSchema>;
