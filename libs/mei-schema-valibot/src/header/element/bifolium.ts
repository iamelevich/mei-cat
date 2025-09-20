import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AddSchema } from "../../edittrans/element/add";
import { DamageSchema } from "../../edittrans/element/damage";
import { DelSchema } from "../../edittrans/element/del";
import { GapSchema } from "../../edittrans/element/gap";
import { RestoreSchema } from "../../edittrans/element/restore";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDimensionsSchema } from "../../shared/attr/dimensions";
import { AttrMeasurementSchema } from "../../shared/attr/measurement";
import { AttrBifoliumSurfacesSchema } from "../attr/bifoliumSurfaces";
import { ModelBifoliumLikeSchema } from "../model/bifoliumLike";
import { ModelFoliumLikeSchema } from "../model/foliumLike";
import { ModelPaperModLikeSchema } from "../model/paperModLike";

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
export const BifoliumSchema = v.lazy(() =>
	v.intersect([
		BifoliumBaseSchema,
		v.object({
			/**
			 * Reference to element add
			 * @see https://music-encoding.org/guidelines/v5/elements/add.html
			 */
			add: v.optional(v.union([v.array(AddSchema), AddSchema])),
			/**
			 * Reference to element damage
			 * @see https://music-encoding.org/guidelines/v5/elements/damage.html
			 */
			damage: v.optional(v.union([v.array(DamageSchema), DamageSchema])),
			/**
			 * Reference to element del
			 * @see https://music-encoding.org/guidelines/v5/elements/del.html
			 */
			del: v.optional(v.union([v.array(DelSchema), DelSchema])),
			/**
			 * Reference to element gap
			 * @see https://music-encoding.org/guidelines/v5/elements/gap.html
			 */
			gap: v.optional(v.union([v.array(GapSchema), GapSchema])),
			/**
			 * Reference to element restore
			 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
			 */
			restore: v.optional(v.union([v.array(RestoreSchema), RestoreSchema])),
		}),
		ModelBifoliumLikeSchema,
		ModelFoliumLikeSchema,
		ModelPaperModLikeSchema,
	]),
);

export type BifoliumData = v.InferOutput<typeof BifoliumSchema>;
