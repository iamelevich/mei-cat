/**
 * Component declarations that are shared between two or more modules.
 * @see https://music-encoding.org/guidelines/v5/modules/MEI.shared.html
 */

import type {
	AttrAuthorized,
	AttrBasic,
	AttrBibl,
	AttrClassed,
	AttrFacsimile,
	AttrFiling,
	AttrLabeled,
	AttrLang,
	AttrLinking,
	AttrNNumberLike,
	AttrResponsibility,
} from "./attributes";
import type { StandardTag } from "./common";

/**
 * Title of a bibliographic entity.
 * @see https://music-encoding.org/guidelines/v5/elements/title.html
 */
export type Title = StandardTag &
	AttrAuthorized &
	AttrBasic &
	AttrBibl &
	AttrClassed &
	AttrFiling &
	AttrFacsimile &
	AttrLabeled &
	AttrLang &
	AttrLinking &
	AttrNNumberLike &
	AttrResponsibility & {
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
		level?: "a" | "c" | "d" | "i" | "m" | "j" | "s" | "u";
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
		type?:
			| "main"
			| "subordinate"
			| "abbreviated"
			| "alternative"
			| "translated"
			| "uniform"
			| "desc";
	};
