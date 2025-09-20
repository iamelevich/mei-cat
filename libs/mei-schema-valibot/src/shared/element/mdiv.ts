import * as v from "valibot";
import { AttrMdivAnlSchema } from "../../analytical/attr/mdiv.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrMdivGesSchema } from "../../gestural/attr/mdiv.ges";
import { AttrMdivVisSchema } from "../../visual/attr/mdiv.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrMdivLogSchema } from "../attr/mdiv.log";
import { AttrMetadataPointingSchema } from "../attr/metadataPointing";
import { ModelMdivLikeSchema } from "../model/mdivLike";
import { ModelPartsLikeSchema } from "../model/partsLike";
import { ModelScoreLikeSchema } from "../model/scoreLike";

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
export const MdivSchema = v.lazy(() =>
	v.intersect([
		MdivBaseSchema,
		ModelMdivLikeSchema,
		ModelPartsLikeSchema,
		ModelScoreLikeSchema,
	]),
);

export type MdivData = v.InferOutput<typeof MdivSchema>;
