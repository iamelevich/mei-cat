import { Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBasicSchema } from "../shared/attr/basic";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrLabelledSchema } from "../shared/attr/labelled";
import { AttrLinkingSchema } from "../shared/attr/linking";
import { AttrNNumberLikeSchema } from "../shared/attr/nNumberLike";
import { AttrResponsibilitySchema } from "../shared/attr/responsibility";

/**
 * Contains the name, i.e., label, of a related category.
 * @see https://music-encoding.org/guidelines/v5/elements/catRel.html
 */
export const CatRelSchema = Type.Intersect([
	StandardTagSchema,
	AttrAuthorizedSchema,
	AttrBasicSchema,
	AttrBiblSchema,
	AttrLabelledSchema,
	AttrLinkingSchema,
	AttrNNumberLikeSchema,
	AttrResponsibilitySchema,
	Type.Object(
		{
			/**
			 * Provides a description of the relationship between the current and the target categories.
			 * @see https://music-encoding.org/guidelines/v5/elements/catRel.html#type
			 */
			"@type": Type.Union([
				Type.Literal("broader"),
				Type.Literal("narrower"),
				Type.Literal("related"),
				Type.Literal("usefor"),
			]),
			/**
			 * A container for document text that identifies the feature to which it is attached. For a "tool tip" or other generated label, use the label attribute.
			 * @see https://music-encoding.org/guidelines/v5/elements/label.html
			 */
			label: Type.Optional(
				Type.Union([Type.Ref("label"), Type.Array(Type.Ref("label"))]),
			),
			/**
			 * Container for text that briefly describes the feature to which it is attached, including its intended usage, purpose, or application as appropriate.
			 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
			 */
			desc: Type.Optional(
				Type.Union([Type.Ref("desc"), Type.Array(Type.Ref("desc"))]),
			),
		},
		{ additionalProperties: false },
	),
]);
