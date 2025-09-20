import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrBasicSchema } from "../../shared/attr/basic";
import { AttrClassedSchema } from "../../shared/attr/classed";
import { AttrLabelledSchema } from "../../shared/attr/labelled";
import { AttrLangSchema } from "../../shared/attr/lang";
import { AttrLinkingSchema } from "../../shared/attr/linking";
import { AttrNNumberLikeSchema } from "../../shared/attr/nNumberLike";
import { AttrResponsibilitySchema } from "../../shared/attr/responsibility";
import { AttrXySchema } from "../../shared/attr/xy";
import { LabelSchema } from "../../shared/element/label";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { LiSchema } from "./li";

/**
 * Base schema with attribute, to simplify types for ListSchema
 */
const ListBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrClassedSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLangSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrNNumberLikeSchema.entries,
	...AttrResponsibilitySchema.entries,
	...AttrXySchema.entries,

	// Direct attributes
	/**
	 * Used to indicate the format of a list. In a <val>simple</val> list, <gi scheme="MEI">li</gi> elements are not numbered or bulleted. In a <val>marked</val> list, the sequence of the list items is not critical, and a bullet, box, dash, or other character is displayed at the start of each <gi scheme="MEI">item</gi>. In an <val>ordered</val> list, the sequence of the items is important, and each <gi scheme="MEI">li</gi> is lettered or numbered. Style sheet functions should be used to specify the mark or numeration system for each <gi scheme="MEI">li</gi>.
	 */
	"@form": v.optional(v.string()),
	/**
	 * Captures the nature of the content of a list.
	 */
	"@type": v.optional(v.string()),
});

/**
 * A formatting element that contains a series of items separated from one another and arranged in a linear, often vertical, sequence.
 * @see https://music-encoding.org/guidelines/v5/elements/list.html
 */
export const ListSchema = v.lazy(() =>
	v.intersect([
		ListBaseSchema,
		v.object({
			/**
			 * Reference to element label
			 * @see https://music-encoding.org/guidelines/v5/elements/label.html
			 */
			label: v.optional(v.union([v.array(LabelSchema), LabelSchema])),
			/**
			 * Reference to element li
			 * @see https://music-encoding.org/guidelines/v5/elements/li.html
			 */
			li: v.optional(v.union([v.array(LiSchema), LiSchema])),
		}),
		ModelHeadLikeSchema,
	]),
);

export type ListData = v.InferOutput<typeof ListSchema>;
