import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";

/**
 * Contains an individual descriptive category in a user-defined taxonomy, possibly nested within a superordinate category.
 * @see https://music-encoding.org/guidelines/v5/elements/category.html
 */
export const CategorySchema = Type.Recursive((ThisSchema) =>
	Type.Intersect([
		StandardTagSchema,
		AttrCommonSchema,
		AttrAuthorizedSchema,
		AttrBiblSchema,
		AttrDataPointingSchema,
		Type.Object(
			{
				/**
				 * May contain a bibliographic identifier that does not fit within the meiHead element's id attribute, for example because the identifier does not fit the definition of an XML id or because multiple identifiers are needed.
				 * @see https://music-encoding.org/guidelines/v5/elements/altId.html
				 */
				altId: Type.Optional(
					Type.Union([Type.Ref("altId"), Type.Array(Type.Ref("altId"))]),
				),
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
				/**
				 * Contains the name, i.e., label, of a related category.
				 * @see https://music-encoding.org/guidelines/v5/elements/catRel.html
				 */
				catRel: Type.Optional(
					Type.Union([Type.Ref("catRel"), Type.Array(Type.Ref("catRel"))]),
				),
				/**
				 * Contains an individual descriptive category in a user-defined taxonomy, possibly nested within a superordinate category.
				 * @see https://music-encoding.org/guidelines/v5/elements/category.html
				 */
				category: Type.Optional(
					Type.Union([ThisSchema, Type.Array(ThisSchema)]),
				),
			},
			{ additionalProperties: false },
		),
	]),
);
