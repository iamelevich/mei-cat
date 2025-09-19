import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AddSchema,
	DamageSchema,
	DelSchema,
	GapSchema,
	RestoreSchema,
} from "../../edittrans";
import {
	AttrCommonSchema,
	AttrDimensionsSchema,
	AttrMeasurementSchema,
} from "../../shared";
import {
	AttrBifoliumSurfacesSchema,
	ModelBifoliumLikeSchema,
	ModelFoliumLikeSchema,
	ModelPaperModLikeSchema,
} from "..";

/**
 * Base schema with attribute, to simplify types for BifoliumSchema
 */
const BifoliumBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBifoliumSurfacesSchema.entries,
	...AttrCommonSchema.entries,
	...AttrDimensionsSchema.entries,
	...AttrMeasurementSchema.entries,
});

/**
 * Describes a folded sheet of paper.
 * @see https://music-encoding.org/guidelines/v5/elements/bifolium.html
 */
export const BifoliumSchema = v.intersect([
	BifoliumBaseSchema,
	v.object({
		/**
		 * Reference to element add
		 * @see https://music-encoding.org/guidelines/v5/elements/add.html
		 */
		add: v.optional(
			v.union([v.lazy(() => AddSchema), v.array(v.lazy(() => AddSchema))]),
		),
		/**
		 * Reference to element damage
		 * @see https://music-encoding.org/guidelines/v5/elements/damage.html
		 */
		damage: v.optional(
			v.union([
				v.lazy(() => DamageSchema),
				v.array(v.lazy(() => DamageSchema)),
			]),
		),
		/**
		 * Reference to element del
		 * @see https://music-encoding.org/guidelines/v5/elements/del.html
		 */
		del: v.optional(
			v.union([v.lazy(() => DelSchema), v.array(v.lazy(() => DelSchema))]),
		),
		/**
		 * Reference to element gap
		 * @see https://music-encoding.org/guidelines/v5/elements/gap.html
		 */
		gap: v.optional(
			v.union([v.lazy(() => GapSchema), v.array(v.lazy(() => GapSchema))]),
		),
		/**
		 * Reference to element restore
		 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
		 */
		restore: v.optional(
			v.union([
				v.lazy(() => RestoreSchema),
				v.array(v.lazy(() => RestoreSchema)),
			]),
		),
	}),
	ModelBifoliumLikeSchema,
	ModelFoliumLikeSchema,
	ModelPaperModLikeSchema,
]);

export type BifoliumData = v.InferOutput<typeof BifoliumSchema>;
