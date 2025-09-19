import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelGraphicLikeSchema } from "../../figtable/model/graphicLike";
import { IncipCodeSchema } from "../../header/element/incipCode";
import { IncipTextSchema } from "../../header/element/incipText";
import { KeySchema } from "../../header/element/key";
import { MensurationSchema } from "../../header/element/mensuration";
import { MeterSchema } from "../../header/element/meter";
import { PerfResSchema } from "../../header/element/perfRes";
import { PerfResListSchema } from "../../header/element/perfResList";
import { AttrBiblSchema } from "../attr/bibl";
import { AttrCommonSchema } from "../attr/common";
import { ClefSchema } from "../element/clef";
import { ClefGrpSchema } from "../element/clefGrp";
import { RoleSchema } from "../element/role";
import { TempoSchema } from "../element/tempo";
import { ModelAnnotLikeSchema } from "../model/annotLike";
import { ModelHeadLikeSchema } from "../model/headLike";
import { ModelScoreLikeSchema } from "../model/scoreLike";

/**
 * Base schema with attribute, to simplify types for IncipSchema
 */
const IncipBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * The opening music and/or words of a musical or textual work.
 * @see https://music-encoding.org/guidelines/v5/elements/incip.html
 */
export const IncipSchema = v.lazy(() =>
	v.intersect([
		IncipBaseSchema,
		v.object({
			/**
			 * Reference to element clef
			 * @see https://music-encoding.org/guidelines/v5/elements/clef.html
			 */
			clef: v.optional(ClefSchema),
			/**
			 * Reference to element clefGrp
			 * @see https://music-encoding.org/guidelines/v5/elements/clefGrp.html
			 */
			clefGrp: v.optional(ClefGrpSchema),
			/**
			 * Reference to element incipCode
			 * @see https://music-encoding.org/guidelines/v5/elements/incipCode.html
			 */
			incipCode: v.optional(
				v.union([v.array(IncipCodeSchema), IncipCodeSchema]),
			),
			/**
			 * Reference to element incipText
			 * @see https://music-encoding.org/guidelines/v5/elements/incipText.html
			 */
			incipText: v.optional(
				v.union([v.array(IncipTextSchema), IncipTextSchema]),
			),
			/**
			 * Reference to element key
			 * @see https://music-encoding.org/guidelines/v5/elements/key.html
			 */
			key: v.optional(KeySchema),
			/**
			 * Reference to element mensuration
			 * @see https://music-encoding.org/guidelines/v5/elements/mensuration.html
			 */
			mensuration: v.optional(MensurationSchema),
			/**
			 * Reference to element meter
			 * @see https://music-encoding.org/guidelines/v5/elements/meter.html
			 */
			meter: v.optional(MeterSchema),
			/**
			 * Reference to element perfRes
			 * @see https://music-encoding.org/guidelines/v5/elements/perfRes.html
			 */
			perfRes: v.optional(PerfResSchema),
			/**
			 * Reference to element perfResList
			 * @see https://music-encoding.org/guidelines/v5/elements/perfResList.html
			 */
			perfResList: v.optional(PerfResListSchema),
			/**
			 * Reference to element role
			 * @see https://music-encoding.org/guidelines/v5/elements/role.html
			 */
			role: v.optional(RoleSchema),
			/**
			 * Reference to element tempo
			 * @see https://music-encoding.org/guidelines/v5/elements/tempo.html
			 */
			tempo: v.optional(TempoSchema),
		}),
		ModelAnnotLikeSchema,
		ModelGraphicLikeSchema,
		ModelHeadLikeSchema,
		ModelScoreLikeSchema,
	]),
);

export type IncipData = v.InferOutput<typeof IncipSchema>;
