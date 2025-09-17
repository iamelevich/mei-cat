import { Type } from "@sinclair/typebox";
import { NotImplementedTagSchema, StandardTagSchema } from "../common";
import { AttrTransSchema } from "../edittrans/attr/trans";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDimensionsSchema } from "../shared/attr/dimensions";
import { AttrEvidenceSchema } from "../shared/attr/evidence";
import { AttrMeasurementSchema } from "../shared/attr/measurement";
import { AttrXySchema } from "../shared/attr/xy";

/**
 * A cutout is a section of a document sheet that has been removed and is now missing.
 * @see https://music-encoding.org/guidelines/v5/elements/cutout.html
 */
export const CutoutSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrDimensionsSchema,
	AttrEvidenceSchema,
	AttrMeasurementSchema,
	AttrTransSchema,
	AttrXySchema,
	Type.Object(
		{
			/**
			 * Describes the position of the cutout on the parent folium / bifolium.
			 * Allowed values are:
			 *   - `outer.recto` (removed from outer recto side of bifolium.),
			 *   - `inner.verso` (removed from inner verso side of bifolium.),
			 *   - `inner.recto` (removed from inner recto side of bifolium.),
			 *   - `outer.verso` (removed from outer verso side of bifolium.),
			 *   - `recto` (removed from recto side of folium.),
			 *   - `verso` (removed from verso side of folium.)
			 */
			"@removed.from": Type.Union([
				Type.Literal("outer.recto"),
				Type.Literal("inner.verso"),
				Type.Literal("inner.recto"),
				Type.Literal("outer.verso"),
				Type.Literal("recto"),
				Type.Literal("verso"),
			]),
			/**
			 * Describes the method of removing the cutout. Suggested values are:
			 *   - `cut` (section is cleanly cut by a knife, scissor or other sharp blade.),
			 *   - `rip` (section is ripped off the page, leaving a rough edge.)
			 */
			"@removed.by": Type.Optional(
				Type.Union([Type.Literal("cut"), Type.Literal("rip")]),
			),
			/**
			 * Describes a folded sheet of paper.
			 * @see https://music-encoding.org/guidelines/v5/elements/bifolium.html
			 */
			bifolium: Type.Optional(NotImplementedTagSchema), // TODO: think how to fix this recursive issue
			/**
			 * Describes a single leaf of paper.
			 * @see https://music-encoding.org/guidelines/v5/elements/folium.html
			 */
			folium: Type.Optional(
				Type.Union([Type.Ref("folium"), Type.Array(Type.Ref("folium"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
