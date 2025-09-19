import * as v from "valibot";
import { AttrRefrainAnlSchema } from "../../analytical/attr/refrain.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrRefrainGesSchema } from "../../gestural/attr/refrain.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { DirSchema } from "../../shared/element/dir";
import { DynamSchema } from "../../shared/element/dynam";
import { SpaceSchema } from "../../shared/element/space";
import { TempoSchema } from "../../shared/element/tempo";
import { ModelLbLikeSchema } from "../../shared/model/lbLike";
import { ModelSylLikeSchema } from "../../shared/model/sylLike";
import { AttrRefrainVisSchema } from "../../visual/attr/refrain.vis";
import { AttrRefrainLogSchema } from "../attr/refrain.log";
import { VoltaSchema } from "../element/volta";

/**
 * Base schema with attribute, to simplify types for RefrainSchema
 */
const RefrainBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrRefrainAnlSchema.entries,
	...AttrRefrainGesSchema.entries,
	...AttrRefrainLogSchema.entries,
	...AttrRefrainVisSchema.entries,
});

/**
 * Recurring lyrics, especially at the end of each verse or stanza of a poem or song lyrics; a chorus.
 * @see https://music-encoding.org/guidelines/v5/elements/refrain.html
 */
export const RefrainSchema = v.lazy(() =>
	v.intersect([
		RefrainBaseSchema,
		v.object({
			/**
			 * Reference to element dir
			 * @see https://music-encoding.org/guidelines/v5/elements/dir.html
			 */
			dir: v.optional(v.union([v.array(DirSchema), DirSchema])),
			/**
			 * Reference to element dynam
			 * @see https://music-encoding.org/guidelines/v5/elements/dynam.html
			 */
			dynam: v.optional(v.union([v.array(DynamSchema), DynamSchema])),
			/**
			 * Reference to element space
			 * @see https://music-encoding.org/guidelines/v5/elements/space.html
			 */
			space: v.optional(v.union([v.array(SpaceSchema), SpaceSchema])),
			/**
			 * Reference to element tempo
			 * @see https://music-encoding.org/guidelines/v5/elements/tempo.html
			 */
			tempo: v.optional(v.union([v.array(TempoSchema), TempoSchema])),
			/**
			 * Reference to element volta
			 * @see https://music-encoding.org/guidelines/v5/elements/volta.html
			 */
			volta: v.optional(v.union([v.array(VoltaSchema), VoltaSchema])),
		}),
		ModelAppLikeSchema,
		ModelEditLikeSchema,
		ModelLbLikeSchema,
		ModelSylLikeSchema,
	]),
);

export type RefrainData = v.InferOutput<typeof RefrainSchema>;
