import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrTransSchema } from "../edittrans/attr/trans";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrEvidenceSchema } from "../shared/attr/evidence";
import { AttrMeasurementSchema } from "../shared/attr/measurement";
import { AttrXySchema } from "../shared/attr/xy";

/**
 * Describes a physical writing surface attached to the original document.
 * @see https://music-encoding.org/guidelines/v5/elements/patch.html
 */
export const PatchSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrEvidenceSchema,
	AttrMeasurementSchema,
	AttrTransSchema,
	AttrXySchema,
	Type.Object(
		{
			/**
			 * Describes the position of the patch on the parent folium / bifolium.
			 * @see https://music-encoding.org/guidelines/v5/elements/patch.html#attached.to
			 */
			"@attached.to": Type.Union([
				Type.Literal("outer.recto"),
				Type.Literal("inner.verso"),
				Type.Literal("inner.recto"),
				Type.Literal("outer.verso"),
				Type.Literal("recto"),
				Type.Literal("verso"),
			]),
			/**
			 * Describes the method of attachment of the patch.
			 * @see https://music-encoding.org/guidelines/v5/elements/patch.html#attached.by
			 */
			"@attached.by": Type.Optional(
				Type.Union([
					Type.Literal("glue"),
					Type.Literal("thread"),
					Type.Literal("needle"),
					Type.Literal("tape"),
					Type.Literal("staple"),
					Type.String(), // Allow other values as well
				]),
			),
			// Choice: model.foliumLike OR model.bifoliumLike
			/**
			 * Describes a single leaf of paper.
			 * @see https://music-encoding.org/guidelines/v5/elements/folium.html
			 */
			folium: Type.Optional(Type.Ref("folium")),
			/**
			 * Describes a folded sheet of paper.
			 * @see https://music-encoding.org/guidelines/v5/elements/bifolium.html
			 */
			bifolium: Type.Optional(Type.Ref("bifolium")),
		},
		{ additionalProperties: false },
	),
]);
