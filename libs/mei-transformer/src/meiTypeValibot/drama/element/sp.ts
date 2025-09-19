import * as v from "valibot";
import { AttrSpAnlSchema } from "../../analytical/attr/sp.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { ModelFigureLikeSchema } from "../../figtable/model/figureLike";
import { AttrSpGesSchema } from "../../gestural/attr/sp.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { SpeakerSchema } from "../../shared/element/speaker";
import { ModelAnnotLikeSchema } from "../../shared/model/annotLike";
import { ModelMilestoneLikeTextSchema } from "../../shared/model/milestoneLike.text";
import { ModelPLikeSchema } from "../../shared/model/pLike";
import { ListSchema } from "../../text/element/list";
import { ModelLgLikeSchema } from "../../text/model/lgLike";
import { ModelLLikeSchema } from "../../text/model/lLike";
import { ModelQuoteLikeSchema } from "../../text/model/quoteLike";
import { AttrSpVisSchema } from "../../visual/attr/sp.vis";
import { AttrSpLogSchema } from "../attr/sp.log";
import { ModelStageDirLikeSchema } from "../model/stageDirLike";

/**
 * Base schema with attribute, to simplify types for SpSchema
 */
const SpBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrSpAnlSchema.entries,
	...AttrSpGesSchema.entries,
	...AttrSpLogSchema.entries,
	...AttrSpVisSchema.entries,
});

/**
 * Contains an individual speech in a performance text.
 * @see https://music-encoding.org/guidelines/v5/elements/sp.html
 */
export const SpSchema = v.lazy(() =>
	v.intersect([
		SpBaseSchema,
		v.object({
			/**
			 * Reference to element list
			 * @see https://music-encoding.org/guidelines/v5/elements/list.html
			 */
			list: v.union([v.array(ListSchema), ListSchema]),
			/**
			 * Reference to element speaker
			 * @see https://music-encoding.org/guidelines/v5/elements/speaker.html
			 */
			speaker: v.optional(v.union([v.array(SpeakerSchema), SpeakerSchema])),
		}),
		ModelAnnotLikeSchema,
		ModelAppLikeSchema,
		ModelFigureLikeSchema,
		ModelLgLikeSchema,
		ModelLLikeSchema,
		ModelMilestoneLikeTextSchema,
		ModelPLikeSchema,
		ModelQuoteLikeSchema,
		ModelStageDirLikeSchema,
	]),
);

export type SpData = v.InferOutput<typeof SpSchema>;
