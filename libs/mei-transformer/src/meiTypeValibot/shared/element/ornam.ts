import * as v from "valibot";
import { AttrOrnamAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import {
	ModelEditLikeSchema,
	ModelTranscriptionLikeSchema,
} from "../../edittrans";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrOrnamGesSchema } from "../../gestural";
import { ModelGraphicPrimitiveLikeSchema } from "../../usersymbols";
import { AttrOrnamVisSchema } from "../../visual";
import {
	AttrCommonSchema,
	AttrOrnamLogSchema,
	ModelTextPhraseLikeLimitedSchema,
} from "..";

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
export const OrnamSchema = v.intersect([
	OrnamBaseSchema,
	ModelEditLikeSchema,
	ModelGraphicPrimitiveLikeSchema,
	ModelTextPhraseLikeLimitedSchema,
	ModelTranscriptionLikeSchema,
]);

export type OrnamData = v.InferOutput<typeof OrnamSchema>;
