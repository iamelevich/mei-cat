import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AddSchema } from "../../edittrans/element/add";
import { DamageSchema } from "../../edittrans/element/damage";
import { DelSchema } from "../../edittrans/element/del";
import { GapSchema } from "../../edittrans/element/gap";
import { RestoreSchema } from "../../edittrans/element/restore";
import { AttrCommonSchema } from "../../shared/attr/common";
import { ModelBifoliumLikeSchema } from "../model/bifoliumLike";
import { ModelFoliumLikeSchema } from "../model/foliumLike";

/**
 * Base schema with attribute, to simplify types for FoliaDescSchema
 */
const FoliaDescBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
});

/**
 * Describes the order of folia and bifolia making up the text block of a manuscript or print.
 * @see https://music-encoding.org/guidelines/v5/elements/foliaDesc.html
 */
export const FoliaDescSchema = v.lazy(() =>
	v.intersect([
		FoliaDescBaseSchema,
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
	]),
);

export type FoliaDescData = v.InferOutput<typeof FoliaDescSchema>;
