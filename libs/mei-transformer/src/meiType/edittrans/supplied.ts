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
import { AttrAgentIdentSchema } from "./attr/agentIdent";
import { AttrEditSchema } from "./attr/edit";
import { AttrReasonIdentSchema } from "./attr/reasonIdent";
import { GapSchema } from "./gap";
import { UnclearSchema } from "./unclear";

/**
 * Contains material supplied by the transcriber or editor for any reason.
 * @see https://music-encoding.org/guidelines/v5/elements/supplied.html
 */
export const SuppliedSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrAgentIdentSchema,
	AttrEditSchema,
	AttrExtentSchema,
	AttrFacsimileSchema,
	AttrLangSchema,
	AttrTextRenditionSchema,
	AttrReasonIdentSchema,
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
			 * Paragraph.
			 * @see https://music-encoding.org/guidelines/v5/elements/p.html
			 */
			p: Type.Optional(Type.Union([PSchema, Type.Array(PSchema)])),

			/**
			 * Substitution.
			 * @see https://music-encoding.org/guidelines/v5/elements/subst.html
			 */
			subst: Type.Optional(NotImplementedTagSchema), // TODO: Not implemented because of circular dependency

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

			/**
			 * Damage.
			 * @see https://music-encoding.org/guidelines/v5/elements/damage.html
			 */
			damage: Type.Optional(NotImplementedTagSchema), // TODO: Not implemented because of circular dependency

			/**
			 * Deletion.
			 * @see https://music-encoding.org/guidelines/v5/elements/del.html
			 */
			del: Type.Optional(NotImplementedTagSchema), // TODO: Not implemented because of circular dependency

			/**
			 * Hand shift.
			 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html
			 */
			handShift: Type.Optional(NotImplementedTagSchema), // TODO: Not implemented because of circular dependency

			/**
			 * Original text.
			 * @see https://music-encoding.org/guidelines/v5/elements/orig.html
			 */
			orig: Type.Optional(NotImplementedTagSchema), // TODO: Not implemented because of circular dependency

			/**
			 * Regularization.
			 * @see https://music-encoding.org/guidelines/v5/elements/reg.html
			 */
			reg: Type.Optional(NotImplementedTagSchema), // TODO: Not implemented because of circular dependency

			/**
			 * Restoration.
			 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
			 */
			restore: Type.Optional(NotImplementedTagSchema), // TODO: Not implemented because of circular dependency

			/**
			 * Sic.
			 * @see https://music-encoding.org/guidelines/v5/elements/sic.html
			 */
			sic: Type.Optional(NotImplementedTagSchema), // TODO: Not implemented because of circular dependency

			/**
			 * Supplied text (nested).
			 * @see https://music-encoding.org/guidelines/v5/elements/supplied.html
			 */
			supplied: Type.Optional(NotImplementedTagSchema), // TODO: Not implemented because of circular dependency

			// Note: The supplied element can contain many more element types according to the MEI spec,
			// including model.divLike, model.editLike, model.editTransPart, model.fLike,
			// model.graphicPrimitiveLike, model.keyAccidLike, model.layerPart,
			// model.milestoneLike.music, model.neumeComponentModifierLike, model.neumeModifierLike,
			// model.neumePart, model.sectionPart, model.staffGrpLike, etc.
			// These are not implemented here to avoid circular dependencies and keep the schema manageable.
		},
		{ additionalProperties: false },
	),
]);

export type Supplied = Static<typeof SuppliedSchema>;
