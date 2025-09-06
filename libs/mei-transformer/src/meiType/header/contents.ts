import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrPointingSchema } from "../shared/attr/pointing";
import { HeadSchema } from "../shared/head";
import { LabelSchema } from "../shared/label";
import { PSchema } from "../shared/p";
import { ContentItemSchema } from "./contentItem";

/**
 * List of the material contained within a resource.
 * @see https://music-encoding.org/guidelines/v5/elements/contents.html
 */
export const ContentsSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrPointingSchema,
	Type.Object(
		{
			/**
			 * Contains any heading, for example, the title of a section of text, or the heading of a list.
			 * @see https://music-encoding.org/guidelines/v5/elements/head.html
			 */
			head: Type.Optional(Type.Union([HeadSchema, Type.Array(HeadSchema)])),
			/**
			 * One or more text phrases that form a logical prose passage.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([PSchema, Type.Array(PSchema)])),
			/**
			 * A container for document text that identifies the feature to which it is attached. For a "tool tip" or other generated label, use the label attribute.
			 * @see https://music-encoding.org/guidelines/v5/elements/label.html
			 */
			label: Type.Optional(Type.Union([LabelSchema, Type.Array(LabelSchema)])),
			/**
			 * Contains a single entry within a content description element.
			 * @see https://music-encoding.org/guidelines/v5/elements/contentItem.html
			 */
			contentItem: Type.Optional(
				Type.Union([ContentItemSchema, Type.Array(ContentItemSchema)]),
			),
		},
		{ additionalProperties: false },
	),
]);

export type Contents = Static<typeof ContentsSchema>;
