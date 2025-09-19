import * as v from "valibot";
import { AttrVoltaAnlSchema } from "../../analytical/attr/volta.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrVoltaGesSchema } from "../../gestural/attr/volta.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { DirSchema } from "../../shared/element/dir";
import { DynamSchema } from "../../shared/element/dynam";
import { SpaceSchema } from "../../shared/element/space";
import { TempoSchema } from "../../shared/element/tempo";
import { ModelLbLikeSchema } from "../../shared/model/lbLike";
import { ModelSylLikeSchema } from "../../shared/model/sylLike";
import { AttrVoltaVisSchema } from "../../visual/attr/volta.vis";
import { AttrVoltaLogSchema } from "../attr/volta.log";

/**
 * Base schema with attribute, to simplify types for VoltaSchema
 */
const VoltaBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,
	...AttrVoltaAnlSchema.entries,
	...AttrVoltaGesSchema.entries,
	...AttrVoltaLogSchema.entries,
	...AttrVoltaVisSchema.entries,
});

/**
 * Sung text for a specific iteration of a repeated section of music.
 * @see https://music-encoding.org/guidelines/v5/elements/volta.html
 */
export const VoltaSchema = v.lazy(() =>
	v.intersect([
		VoltaBaseSchema,
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
		}),
		ModelAppLikeSchema,
		ModelEditLikeSchema,
		ModelLbLikeSchema,
		ModelSylLikeSchema,
	]),
);

export type VoltaData = v.InferOutput<typeof VoltaSchema>;
