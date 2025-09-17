import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDimensionsSchema } from "../shared/attr/dimensions";
import { AttrMeasurementSchema } from "../shared/attr/measurement";
import { AttrFoliumSurfacesSchema } from "./attr/foliumSurfaces";

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
			cutout: Type.Optional(Type.Ref("cutout")), // Fixed circular dependency with Type.Ref
			/**
			 * Describes a physical writing surface attached to the original document.
			 * @see https://music-encoding.org/guidelines/v5/elements/patch.html
			 */
			patch: Type.Optional(Type.Ref("patch")), // Fixed circular dependency with Type.Ref
		},
		{ additionalProperties: false },
	),
]);
