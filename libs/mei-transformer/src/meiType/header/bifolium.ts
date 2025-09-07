import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AddSchema } from "../edittrans/add";
import { DamageSchema } from "../edittrans/damage";
import { DelSchema } from "../edittrans/del";
import { GapSchema } from "../edittrans/gap";
import { RestoreSchema } from "../edittrans/restore";
import { AttrBifoliumSurfacesSchema } from "../shared/attr/bifoliumSurfaces";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDimensionsSchema } from "../shared/attr/dimensions";
import { AttrMeasurementSchema } from "../shared/attr/measurement";
import { CutoutSchema } from "./cutout";
import { FoliumSchema } from "./folium";
// import { PatchSchema } from "./patch"; // Circular dependency - handled with Type.Any()

/**
 * Describes a folded sheet of paper.
 * @see https://music-encoding.org/guidelines/v5/elements/bifolium.html
 */
export const BifoliumSchema = Type.Recursive((Self) =>
	Type.Intersect([
		StandardTagSchema,
		AttrCommonSchema,
		AttrDimensionsSchema,
		AttrMeasurementSchema,
		AttrBifoliumSurfacesSchema,
		Type.Object(
			{
				/**
				 * Marks an addition to the text.
				 * @see https://music-encoding.org/guidelines/v5/elements/add.html
				 */
				add: Type.Optional(Type.Union([AddSchema, Type.Array(AddSchema)])),
				/**
				 * Describes a folded sheet of paper.
				 * @see https://music-encoding.org/guidelines/v5/elements/bifolium.html
				 */
				bifolium: Type.Optional(Type.Union([Self, Type.Array(Self)])),
				/**
				 * A cutout is a section of a document sheet that has been removed and is now missing.
				 * @see https://music-encoding.org/guidelines/v5/elements/cutout.html
				 */
				cutout: Type.Optional(
					Type.Union([CutoutSchema, Type.Array(CutoutSchema)]),
				),
				/**
				 * Contains an area of damage to the physical medium.
				 * @see https://music-encoding.org/guidelines/v5/elements/damage.html
				 */
				damage: Type.Optional(
					Type.Union([DamageSchema, Type.Array(DamageSchema)]),
				),
				/**
				 * Contains information deleted, marked as deleted, or otherwise indicated as superfluous or spurious in the copy text by an author, scribe, annotator, or corrector.
				 * @see https://music-encoding.org/guidelines/v5/elements/del.html
				 */
				del: Type.Optional(Type.Union([DelSchema, Type.Array(DelSchema)])),
				/**
				 * Describes a single leaf of paper.
				 * @see https://music-encoding.org/guidelines/v5/elements/folium.html
				 */
				folium: Type.Optional(
					Type.Union([FoliumSchema, Type.Array(FoliumSchema)]),
				),
				/**
				 * Indicates a point where material has been omitted in a transcription, whether as part of sampling practice or for editorial reasons described in the MEI header.
				 * @see https://music-encoding.org/guidelines/v5/elements/gap.html
				 */
				gap: Type.Optional(Type.Union([GapSchema, Type.Array(GapSchema)])),
				/**
				 * Describes a physical writing surface attached to the original document.
				 * @see https://music-encoding.org/guidelines/v5/elements/patch.html
				 */
				patch: Type.Optional(
					Type.Any(), // TODO: Fix circular dependency with PatchSchema
				),
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
	]),
);

export type Bifolium = Static<typeof BifoliumSchema>;
