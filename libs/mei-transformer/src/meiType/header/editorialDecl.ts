import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * (editorial declaration) – Used to provide details of editorial principles and practices applied during the encoding of musical text.
 * @see https://music-encoding.org/guidelines/v5/elements/editorialDecl.html
 */
export const EditorialDeclSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrDataPointingSchema,
	AttrLangSchema,
	Type.Object(
		{
			// Zero or more head-like elements
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(
				Type.Union([Type.Ref("head"), Type.Array(Type.Ref("head"))]),
			),

			// Choice: One or more p-like elements OR (one or more editorialDeclPart elements followed by zero or more p-like elements)
			/**
			 * One or more text phrases that form a logical prose passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([Type.Ref("p"), Type.Array(Type.Ref("p"))])),

			// Editorial declaration part elements
			/**
			 * States how and under what circumstances corrections have been made in the text.
			 * @see https://music-encoding.org/guidelines/v5/elements/correction.html
			 */
			correction: Type.Optional(
				Type.Union([
					Type.Ref("correction"),
					Type.Array(Type.Ref("correction")),
				]),
			),
			/**
			 * Describes the scope of any analytic or interpretive information added to the transcription of the music.
			 * @see https://music-encoding.org/guidelines/v5/elements/interpretation.html
			 */
			interpretation: Type.Optional(
				Type.Union([
					Type.Ref("interpretation"),
					Type.Array(Type.Ref("interpretation")),
				]),
			),
			/**
			 * Indicates the extent of normalization or regularization of the original source carried out in converting it to electronic form.
			 * @see https://music-encoding.org/guidelines/v5/elements/normalization.html
			 */
			normalization: Type.Optional(
				Type.Union([
					Type.Ref("normalization"),
					Type.Array(Type.Ref("normalization")),
				]),
			),
			/**
			 * Describes the principles according to which the musical text has been segmented, for example into movements, sections, etc.
			 * @see https://music-encoding.org/guidelines/v5/elements/segmentation.html
			 */
			segmentation: Type.Optional(
				Type.Union([
					Type.Ref("segmentation"),
					Type.Array(Type.Ref("segmentation")),
				]),
			),
			/**
			 * Specifies the format used when standardized date or number values are supplied.
			 * @see https://music-encoding.org/guidelines/v5/elements/stdVals.html
			 */
			stdVals: Type.Optional(
				Type.Union([Type.Ref("stdVals"), Type.Array(Type.Ref("stdVals"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
