import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import {
	AddSchema,
	DamageSchema,
	DelSchema,
	GapSchema,
	RestoreSchema,
} from "../../edittrans";
import { ModelBifoliumLikeSchema, ModelFoliumLikeSchema } from "..";

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
export const FoliaDescSchema = v.intersect([
	FoliaDescBaseSchema,
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
]);

export type FoliaDescData = v.InferOutput<typeof FoliaDescSchema>;
