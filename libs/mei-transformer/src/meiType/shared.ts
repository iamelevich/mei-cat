/**
 * Component declarations that are shared between two or more modules.
 * @see https://music-encoding.org/guidelines/v5/modules/MEI.shared.html
 */

import { Type } from "@sinclair/typebox";
import type { Static } from "@sinclair/typebox";
import {
	AttrAuthorizedSchema,
	AttrBasicSchema,
	AttrBiblSchema,
	AttrClassedSchema,
	AttrFacsimileSchema,
	AttrFilingSchema,
	AttrLabeledSchema,
	AttrLangSchema,
	AttrLinkingSchema,
	AttrNNumberLikeSchema,
	AttrResponsibilitySchema,
} from "./attributes";
import { NotImplementedTagSchema, StandardTagSchema } from "./common";

/**
 * Title of a bibliographic entity.
 * @see https://music-encoding.org/guidelines/v5/elements/title.html
 */
export const TitleSchema = Type.Union([
	Type.String(),
	Type.Composite([
		StandardTagSchema,
		AttrAuthorizedSchema,
		AttrBasicSchema,
		AttrBiblSchema,
		AttrClassedSchema,
		AttrFilingSchema,
		AttrFacsimileSchema,
		AttrLabeledSchema,
		AttrLangSchema,
		AttrLinkingSchema,
		AttrNNumberLikeSchema,
		AttrResponsibilitySchema,
		Type.Object({
			/**
			 * Indicates the bibliographic level of the title. Allowed values are:
			 *  "a" (Analyzed component, such as an article or chapter, within a larger bibliographic entity.),
			 *  "c" (Collection. A group of items that were not originally published, distributed, or produced together.),
			 *  "d" (Subunit of a collection, , item, folder, box, archival series, subgroup, or subcollection.),
			 *  "i" (Integrating resource, such as a continuously updated loose-leaf service or Web site.),
			 *  "m" (Monograph.),
			 *  "j" (Journal.),
			 *  "s" (Series.),
			 *  "u" (Unpublished (including theses and dissertations unless published by a commercial press).)
			 * @see https://music-encoding.org/guidelines/v5/elements/title.html
			 */
			"@level": Type.Optional(
				Type.Union([
					Type.Literal("a"),
					Type.Literal("c"),
					Type.Literal("d"),
					Type.Literal("i"),
					Type.Literal("m"),
					Type.Literal("j"),
					Type.Literal("s"),
					Type.Literal("u"),
				]),
			),
			/**
			 * Characterizes the title in some sense, using any convenient classification scheme or typology that employs single-token labels.
			 * Suggested values are:
			 *  "main" (Main title.),
			 *  "subordinate" (Subtitle or title of part.),
			 *  "abbreviated" (Abbreviated form of title.),
			 *  "alternative" (Alternate title by which the item is also known.),
			 *  "translated" (Translated form of title.),
			 *  "uniform" (Collective title.),
			 *  "desc" (Descriptive paraphrase of the work.)
			 * @see https://music-encoding.org/guidelines/v5/elements/title.html
			 */
			"@type": Type.Optional(Type.String()),
			abbr: Type.Optional(NotImplementedTagSchema),
			add: Type.Optional(NotImplementedTagSchema),
			address: Type.Optional(NotImplementedTagSchema),
			annot: Type.Optional(NotImplementedTagSchema),
			bibl: Type.Optional(NotImplementedTagSchema),
			biblStruct: Type.Optional(NotImplementedTagSchema),
			bloc: Type.Optional(NotImplementedTagSchema),
			choice: Type.Optional(NotImplementedTagSchema),
			corpName: Type.Optional(NotImplementedTagSchema),
			corr: Type.Optional(NotImplementedTagSchema),
			country: Type.Optional(NotImplementedTagSchema),
			damage: Type.Optional(NotImplementedTagSchema),
			date: Type.Optional(NotImplementedTagSchema),
			del: Type.Optional(NotImplementedTagSchema),
			district: Type.Optional(NotImplementedTagSchema),
			expan: Type.Optional(NotImplementedTagSchema),
			fig: Type.Optional(NotImplementedTagSchema),
			gap: Type.Optional(NotImplementedTagSchema),
			geogFeat: Type.Optional(NotImplementedTagSchema),
			geogName: Type.Optional(NotImplementedTagSchema),
			handShift: Type.Optional(NotImplementedTagSchema),
			identifier: Type.Optional(NotImplementedTagSchema),
			lb: Type.Optional(NotImplementedTagSchema),
			name: Type.Optional(NotImplementedTagSchema),
			num: Type.Optional(NotImplementedTagSchema),
			orig: Type.Optional(NotImplementedTagSchema),
			pb: Type.Optional(NotImplementedTagSchema),
			periodName: Type.Optional(NotImplementedTagSchema),
			persName: Type.Optional(NotImplementedTagSchema),
			postBox: Type.Optional(NotImplementedTagSchema),
			postCode: Type.Optional(NotImplementedTagSchema),
			ptr: Type.Optional(NotImplementedTagSchema),
			ref: Type.Optional(NotImplementedTagSchema),
			reg: Type.Optional(NotImplementedTagSchema),
			region: Type.Optional(NotImplementedTagSchema),
			rend: Type.Optional(NotImplementedTagSchema),
			repository: Type.Optional(NotImplementedTagSchema),
			restore: Type.Optional(NotImplementedTagSchema),
			settlement: Type.Optional(NotImplementedTagSchema),
			sic: Type.Optional(NotImplementedTagSchema),
			stack: Type.Optional(NotImplementedTagSchema),
			street: Type.Optional(NotImplementedTagSchema),
			styleName: Type.Optional(NotImplementedTagSchema),
			subst: Type.Optional(NotImplementedTagSchema),
			supplied: Type.Optional(NotImplementedTagSchema),
			symbol: Type.Optional(NotImplementedTagSchema),
			titlePart: Type.Optional(NotImplementedTagSchema),
			unclear: Type.Optional(NotImplementedTagSchema),
		}),
	]),
]);

export type Title = Static<typeof TitleSchema>;
