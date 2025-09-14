import { type Static, Type } from "@sinclair/typebox";
import { NotImplementedTagSchema, StandardTagSchema } from "../common";
// Import child element schemas - avoiding circular references
import { AbbrSchema } from "../shared/abbr";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrExtentSchema } from "../shared/attr/extent";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrTextRenditionSchema } from "../shared/attr/textRendition";
import { PSchema } from "../shared/p";
import { AttrEditSchema } from "./attr/edit";
import { AttrTransSchema } from "./attr/trans";
import { GapSchema } from "./gap";
import { OrigSchema } from "./orig";
import { RegSchema } from "./reg";
import { RestoreSchema } from "./restore";
import { SicSchema } from "./sic";
import { SubstSchema } from "./subst";
import { SuppliedSchema } from "./supplied";
import { UnclearSchema } from "./unclear";

/**
 * Contains information deleted, marked as deleted, or otherwise indicated as superfluous or spurious in the copy text by an author, scribe, annotator, or corrector.
 * @see https://music-encoding.org/guidelines/v5/elements/del.html
 */
export const DelSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrEditSchema,
	AttrExtentSchema,
	AttrFacsimileSchema,
	AttrLangSchema,
	AttrTextRenditionSchema,
	AttrTransSchema,
	Type.Object(
		{
			// Child elements - zero or more of each
			// Note: This is a simplified version with key elements to avoid circular references
			// Additional elements can be added as needed

			/**
			 * Abbreviation or expansion.
			 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
			 */
			abbr: Type.Optional(Type.Union([AbbrSchema, Type.Array(AbbrSchema)])),

			/**
			 * Gap.
			 * @see https://music-encoding.org/guidelines/v5/elements/gap.html
			 */
			gap: Type.Optional(Type.Union([GapSchema, Type.Array(GapSchema)])),

			/**
			 * Original text.
			 * @see https://music-encoding.org/guidelines/v5/elements/orig.html
			 */
			orig: Type.Optional(Type.Union([OrigSchema, Type.Array(OrigSchema)])),

			/**
			 * Paragraph.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([PSchema, Type.Array(PSchema)])),

			/**
			 * Regularization.
			 * @see https://music-encoding.org/guidelines/v5/elements/reg.html
			 */
			reg: Type.Optional(Type.Union([RegSchema, Type.Array(RegSchema)])),

			/**
			 * Restoration.
			 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
			 */
			restore: Type.Optional(
				Type.Union([RestoreSchema, Type.Array(RestoreSchema)]),
			),

			/**
			 * Sic.
			 * @see https://music-encoding.org/guidelines/v5/elements/sic.html
			 */
			sic: Type.Optional(Type.Union([SicSchema, Type.Array(SicSchema)])),

			/**
			 * Substitution.
			 * @see https://music-encoding.org/guidelines/v5/elements/subst.html
			 */
			subst: Type.Optional(Type.Union([SubstSchema, Type.Array(SubstSchema)])),

			/**
			 * Supplied text.
			 * @see https://music-encoding.org/guidelines/v5/elements/supplied.html
			 */
			supplied: Type.Optional(
				Type.Union([SuppliedSchema, Type.Array(SuppliedSchema)]),
			),

			/**
			 * Unclear text.
			 * @see https://music-encoding.org/guidelines/v5/elements/unclear.html
			 */
			unclear: Type.Optional(
				Type.Union([UnclearSchema, Type.Array(UnclearSchema)]),
			),

			// Elements that would create circular dependencies
			/**
			 * Addition.
			 * @see https://music-encoding.org/guidelines/v5/elements/add.html
			 */
			add: Type.Optional(NotImplementedTagSchema), // TODO: Not implemented because of circular dependency

			/**
			 * Correction.
			 * @see https://music-encoding.org/guidelines/v5/elements/corr.html
			 */
			corr: Type.Optional(NotImplementedTagSchema), // TODO: Not implemented because of circular dependency
		},
		{ additionalProperties: false },
	),
]);

export type Del = Static<typeof DelSchema>;
