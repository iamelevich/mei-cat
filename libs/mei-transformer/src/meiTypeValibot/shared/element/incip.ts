import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { ModelGraphicLikeSchema } from "../../figtable";
import {
	IncipCodeSchema,
	IncipTextSchema,
	KeySchema,
	MensurationSchema,
	MeterSchema,
	PerfResListSchema,
	PerfResSchema,
} from "../../header";
import {
	AttrBiblSchema,
	AttrCommonSchema,
	ModelAnnotLikeSchema,
	ModelHeadLikeSchema,
	ModelScoreLikeSchema,
} from "..";
import { ClefGrpSchema, ClefSchema, RoleSchema, TempoSchema } from ".";

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
export const IncipSchema = v.intersect([
	IncipBaseSchema,
	v.object({
		/**
		 * Reference to element clef
		 * @see https://music-encoding.org/guidelines/v5/elements/clef.html
		 */
		clef: v.optional(v.lazy(() => ClefSchema)),
		/**
		 * Reference to element clefGrp
		 * @see https://music-encoding.org/guidelines/v5/elements/clefGrp.html
		 */
		clefGrp: v.optional(v.lazy(() => ClefGrpSchema)),
		/**
		 * Reference to element incipCode
		 * @see https://music-encoding.org/guidelines/v5/elements/incipCode.html
		 */
		incipCode: v.optional(
			v.union([
				v.lazy(() => IncipCodeSchema),
				v.array(v.lazy(() => IncipCodeSchema)),
			]),
		),
		/**
		 * Reference to element incipText
		 * @see https://music-encoding.org/guidelines/v5/elements/incipText.html
		 */
		incipText: v.optional(
			v.union([
				v.lazy(() => IncipTextSchema),
				v.array(v.lazy(() => IncipTextSchema)),
			]),
		),
		/**
		 * Reference to element key
		 * @see https://music-encoding.org/guidelines/v5/elements/key.html
		 */
		key: v.optional(v.lazy(() => KeySchema)),
		/**
		 * Reference to element mensuration
		 * @see https://music-encoding.org/guidelines/v5/elements/mensuration.html
		 */
		mensuration: v.optional(v.lazy(() => MensurationSchema)),
		/**
		 * Reference to element meter
		 * @see https://music-encoding.org/guidelines/v5/elements/meter.html
		 */
		meter: v.optional(v.lazy(() => MeterSchema)),
		/**
		 * Reference to element perfRes
		 * @see https://music-encoding.org/guidelines/v5/elements/perfRes.html
		 */
		perfRes: v.optional(v.lazy(() => PerfResSchema)),
		/**
		 * Reference to element perfResList
		 * @see https://music-encoding.org/guidelines/v5/elements/perfResList.html
		 */
		perfResList: v.optional(v.lazy(() => PerfResListSchema)),
		/**
		 * Reference to element role
		 * @see https://music-encoding.org/guidelines/v5/elements/role.html
		 */
		role: v.optional(v.lazy(() => RoleSchema)),
		/**
		 * Reference to element tempo
		 * @see https://music-encoding.org/guidelines/v5/elements/tempo.html
		 */
		tempo: v.optional(v.lazy(() => TempoSchema)),
	}),
	ModelAnnotLikeSchema,
	ModelGraphicLikeSchema,
	ModelHeadLikeSchema,
	ModelScoreLikeSchema,
]);

export type IncipData = v.InferOutput<typeof IncipSchema>;
