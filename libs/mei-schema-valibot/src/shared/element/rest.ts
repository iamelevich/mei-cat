import * as v from "valibot";
import { AttrRestAnlSchema } from "../../analytical/attr/rest.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrRestGesSchema } from "../../gestural/attr/rest.ges";
import { AttrRestVisSchema } from "../../visual/attr/rest.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrRestLogSchema } from "../attr/rest.log";
import { DotSchema } from "./dot";

/**
 * Base schema with attribute, to simplify types for RestSchema
 */
const RestBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrRestAnlSchema.entries,
	...AttrRestGesSchema.entries,
	...AttrRestLogSchema.entries,
	...AttrRestVisSchema.entries,
});

/**
 * A non-sounding event found in the source being transcribed.
 * @see https://music-encoding.org/guidelines/v5/elements/rest.html
 */
export const RestSchema = v.lazy(() =>
	v.intersect([
		RestBaseSchema,
		v.object({
			/**
			 * Reference to element dot
			 * @see https://music-encoding.org/guidelines/v5/elements/dot.html
			 */
			dot: v.optional(v.union([v.array(DotSchema), DotSchema])),
		}),
		ModelAppLikeSchema,
		ModelEditLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type RestData = v.InferOutput<typeof RestSchema>;
