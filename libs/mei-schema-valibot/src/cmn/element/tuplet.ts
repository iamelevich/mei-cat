import * as v from "valibot";
import { AttrTupletAnlSchema } from "../../analytical/attr/tuplet.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrTupletGesSchema } from "../../gestural/attr/tuplet.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelEventLikeSchema } from "../../shared/model/eventLike";
import { AttrTupletVisSchema } from "../../visual/attr/tuplet.vis";
import { AttrTupletLogSchema } from "../attr/tuplet.log";
import { ModelEventLikeCmnSchema } from "../model/eventLike.cmn";

/**
 * Base schema with attribute, to simplify types for TupletSchema
 */
const TupletBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrTupletAnlSchema.entries,
	...AttrTupletGesSchema.entries,
	...AttrTupletLogSchema.entries,
	...AttrTupletVisSchema.entries,
});

/**
 * A group of notes with "irregular" (sometimes called "irrational") rhythmic values, for example, three notes in the time normally occupied by two or nine in the time of five.
 * @see https://music-encoding.org/guidelines/v5/elements/tuplet.html
 */
export const TupletSchema = v.lazy(() =>
	v.intersect([
		TupletBaseSchema,
		ModelAppLikeSchema,
		ModelEditLikeSchema,
		ModelEventLikeSchema,
		ModelEventLikeCmnSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type TupletData = v.InferOutput<typeof TupletSchema>;
