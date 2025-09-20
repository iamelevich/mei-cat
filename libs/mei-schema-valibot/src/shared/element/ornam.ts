import * as v from "valibot";
import { AttrOrnamAnlSchema } from "../../analytical/attr/ornam.anl";
import { StandardTagSchema } from "../../common";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrOrnamGesSchema } from "../../gestural/attr/ornam.ges";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols/model/graphicPrimitiveLike";
import { AttrOrnamVisSchema } from "../../visual/attr/ornam.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrOrnamLogSchema } from "../attr/ornam.log";
import { ModelTextPhraseLikeLimitedSchema } from "../model/textPhraseLike.limited";

/**
 * Base schema with attribute, to simplify types for OrnamSchema
 */
const OrnamBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrOrnamAnlSchema.entries,
	...AttrOrnamGesSchema.entries,
	...AttrOrnamLogSchema.entries,
	...AttrOrnamVisSchema.entries,
});

/**
 * An element indicating an ornament that is not a mordent, turn, or trill.
 * @see https://music-encoding.org/guidelines/v5/elements/ornam.html
 */
export const OrnamSchema = v.lazy(() =>
	v.intersect([
		OrnamBaseSchema,
		ModelEditLikeSchema,
		ModelGraphicPrimitiveLikeSchema,
		ModelTextPhraseLikeLimitedSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type OrnamData = v.InferOutput<typeof OrnamSchema>;
