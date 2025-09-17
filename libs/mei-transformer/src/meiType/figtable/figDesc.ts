import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AbbrSchema } from "../shared/abbr";
import { AnnotSchema } from "../shared/annot";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrTextRenditionSchema } from "../shared/attr/textRendition";
import { LbSchema } from "../shared/lb";
import { NameSchema } from "../shared/name";
import { NumSchema } from "../shared/num";
import { PSchema } from "../shared/p";
import { RendSchema } from "../shared/rend";
import { TermSchema } from "../shared/term";

/**
 * Contains a brief prose description of the appearance or content of a graphic figure, for use when documenting an image without displaying it.
 * @see https://music-encoding.org/guidelines/v5/elements/figDesc.html
 */
export const FigDescSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrTextRenditionSchema,
	Type.Object(
		{
			// Content from model.textComponentLike and model.textPhraseLike.limited
			// According to MEI spec, figDesc can contain:
			// - Elements from model.textComponentLike (like p, div, etc.)
			// - Elements from model.textPhraseLike.limited (like rend, abbr, name, etc.)

			/**
			 * Abbreviation or expansion.
			 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
			 */
			abbr: Type.Optional(Type.Union([AbbrSchema, Type.Array(AbbrSchema)])),

			/**
			 * Annotation.
			 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
			 */
			annot: Type.Optional(Type.Union([AnnotSchema, Type.Array(AnnotSchema)])),

			/**
			 * Line break.
			 * @see https://music-encoding.org/guidelines/v5/elements/lb.html
			 */
			lb: Type.Optional(Type.Union([LbSchema, Type.Array(LbSchema)])),

			/**
			 * Name.
			 * @see https://music-encoding.org/guidelines/v5/elements/name.html
			 */
			name: Type.Optional(Type.Union([NameSchema, Type.Array(NameSchema)])),

			/**
			 * Numeric information.
			 * @see https://music-encoding.org/guidelines/v5/elements/num.html
			 */
			num: Type.Optional(Type.Union([NumSchema, Type.Array(NumSchema)])),

			/**
			 * Paragraph.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([PSchema, Type.Array(PSchema)])),

			/**
			 * Rendering.
			 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
			 */
			rend: Type.Optional(Type.Union([RendSchema, Type.Array(RendSchema)])),

			/**
			 * Term.
			 * @see https://music-encoding.org/guidelines/v5/elements/term.html
			 */
			term: Type.Optional(Type.Union([TermSchema, Type.Array(TermSchema)])),

			// Note: Additional elements from model.textComponentLike and model.textPhraseLike.limited
			// could be added here as needed. The current implementation covers the most commonly used ones.
		},
		{ additionalProperties: false },
	),
]);
