import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AddSchema } from "../edittrans/add";
import { DamageSchema } from "../edittrans/damage";
import { DelSchema } from "../edittrans/del";
import { GapSchema } from "../edittrans/gap";
import { RestoreSchema } from "../edittrans/restore";
import { AttrCommonSchema } from "../shared/attr/common";
import { BifoliumSchema } from "./bifolium";
import { FoliumSchema } from "./folium";

/**
 * Describes the order of folia and bifolia making up the text block of a manuscript or print.
 * @see https://music-encoding.org/guidelines/v5/elements/foliaDesc.html
 */
export const FoliaDescSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	Type.Object(
		{
			// model.foliumLike elements
			/**
			 * Describes a single leaf of paper.
			 * @see https://music-encoding.org/guidelines/v5/elements/folium.html
			 */
			folium: Type.Optional(
				Type.Union([FoliumSchema, Type.Array(FoliumSchema)]),
			),
			// model.bifoliumLike elements
			/**
			 * Describes a folded sheet of paper.
			 * @see https://music-encoding.org/guidelines/v5/elements/bifolium.html
			 */
			bifolium: Type.Optional(
				Type.Union([BifoliumSchema, Type.Array(BifoliumSchema)]),
			),
			// Editorial and transcriptional elements
			/**
			 * Contains information deleted, marked as deleted, or otherwise indicated as superfluous or spurious in the copy text by an author, scribe, annotator, or corrector.
			 * @see https://music-encoding.org/guidelines/v5/elements/del.html
			 */
			del: Type.Optional(Type.Union([DelSchema, Type.Array(DelSchema)])),
			/**
			 * Marks an addition to the text.
			 * @see https://music-encoding.org/guidelines/v5/elements/add.html
			 */
			add: Type.Optional(Type.Union([AddSchema, Type.Array(AddSchema)])),
			/**
			 * Contains an area of damage to the physical medium.
			 * @see https://music-encoding.org/guidelines/v5/elements/damage.html
			 */
			damage: Type.Optional(
				Type.Union([DamageSchema, Type.Array(DamageSchema)]),
			),
			/**
			 * Indicates a point where material has been omitted in a transcription, whether as part of sampling practice or for editorial reasons described in the MEI header.
			 * @see https://music-encoding.org/guidelines/v5/elements/gap.html
			 */
			gap: Type.Optional(Type.Union([GapSchema, Type.Array(GapSchema)])),
			/**
			 * Indicates restoration of material to an earlier state by cancellation of an editorial or authorial marking or instruction.
			 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
			 */
			restore: Type.Optional(
				Type.Union([RestoreSchema, Type.Array(RestoreSchema)]),
			),
		},
		{ additionalProperties: false },
	),
]);

export type FoliaDesc = Static<typeof FoliaDescSchema>;
