import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDimensionsSchema } from "../shared/attr/dimensions";
import { AttrMeasurementSchema } from "../shared/attr/measurement";
import { AttrFoliumSurfacesSchema } from "./attr/foliumSurfaces";
// import { PatchSchema } from "./patch"; // Circular dependency - handled with Type.Any()

/**
 * Describes a single leaf of paper.
 * @see https://music-encoding.org/guidelines/v5/elements/folium.html
 */
export const FoliumSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrDimensionsSchema,
	AttrMeasurementSchema,
	AttrFoliumSurfacesSchema,
	Type.Object(
		{
			// model.paperModLike elements
			/**
			 * A cutout is a section of a document sheet that has been removed and is now missing.
			 * @see https://music-encoding.org/guidelines/v5/elements/cutout.html
			 */
			cutout: Type.Optional(Type.Any()), // TODO: Fix circular dependency with CutoutSchema
			/**
			 * Describes a physical writing surface attached to the original document.
			 * @see https://music-encoding.org/guidelines/v5/elements/patch.html
			 */
			patch: Type.Optional(Type.Any()), // TODO: Fix circular dependency with PatchSchema
		},
		{ additionalProperties: false },
	),
]);

export type Folium = Static<typeof FoliumSchema>;
