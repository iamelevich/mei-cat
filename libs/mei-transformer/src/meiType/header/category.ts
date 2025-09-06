import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrAuthorizedSchema } from "../shared/attr/authorized";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDataPointingSchema } from "../shared/attr/dataPointing";
import { DescSchema } from "../shared/desc";
import { LabelSchema } from "../shared/label";
import { AltIdSchema } from "./altId";
import { CatRelSchema } from "./catRel";

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
					Type.Union([AltIdSchema, Type.Array(AltIdSchema)]),
				),
				/**
				 * A container for document text that identifies the feature to which it is attached. For a "tool tip" or other generated label, use the label attribute.
				 * @see https://music-encoding.org/guidelines/v5/elements/label.html
				 */
				label: Type.Optional(
					Type.Union([LabelSchema, Type.Array(LabelSchema)]),
				),
				/**
				 * Container for text that briefly describes the feature to which it is attached, including its intended usage, purpose, or application as appropriate.
				 * @see https://music-encoding.org/guidelines/v5/elements/desc.html
				 */
				desc: Type.Optional(Type.Union([DescSchema, Type.Array(DescSchema)])),
				/**
				 * Contains the name, i.e., label, of a related category.
				 * @see https://music-encoding.org/guidelines/v5/elements/catRel.html
				 */
				catRel: Type.Optional(
					Type.Union([CatRelSchema, Type.Array(CatRelSchema)]),
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

export type Category = Static<typeof CategorySchema>;
