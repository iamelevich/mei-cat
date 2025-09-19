import * as v from "valibot";
import { AttrScoreDefVisCmnSchema } from "../../cmn";
import { AttrScoreDefVisMensuralSchema } from "../../mensural";
import {
	AttrBarringSchema,
	AttrDistancesSchema,
	AttrEndingsSchema,
	AttrLyricStyleSchema,
	AttrMeasureNumbersSchema,
	AttrMultinumMeasuresSchema,
	AttrNotationStyleSchema,
	AttrOneLineStaffSchema,
	AttrOptimizationSchema,
	AttrPagesSchema,
	AttrSpacingSchema,
	AttrStaffItemsSchema,
	AttrSystemsSchema,
	AttrTextStyleSchema,
} from "../../shared";
import { AttrScoreDefVisTablatureSchema } from "../../stringtab";
import {
	AttrCleffingVisSchema,
	AttrKeySigDefaultVisSchema,
	AttrMeterSigDefaultVisSchema,
} from "..";

/**
 * Visual domain attributes for scoreDef in the CMN repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.scoreDef.vis.html
 */
export const AttrScoreDefVisSchema = v.object({
	// Inherited attribute classes
	...AttrBarringSchema.entries,
	...AttrCleffingVisSchema.entries,
	...AttrDistancesSchema.entries,
	...AttrEndingsSchema.entries,
	...AttrKeySigDefaultVisSchema.entries,
	...AttrLyricStyleSchema.entries,
	...AttrMeasureNumbersSchema.entries,
	...AttrMeterSigDefaultVisSchema.entries,
	...AttrMultinumMeasuresSchema.entries,
	...AttrNotationStyleSchema.entries,
	...AttrOneLineStaffSchema.entries,
	...AttrOptimizationSchema.entries,
	...AttrPagesSchema.entries,
	...AttrScoreDefVisCmnSchema.entries,
	...AttrScoreDefVisMensuralSchema.entries,
	...AttrScoreDefVisTablatureSchema.entries,
	...AttrSpacingSchema.entries,
	...AttrStaffItemsSchema.entries,
	...AttrSystemsSchema.entries,
	...AttrTextStyleSchema.entries,

	// Direct attributes
	/**
	 * Defines the height of a "virtual unit" (vu) in terms of real-world units. A single vu is half the distance between adjacent staff lines where the interline space is measured from the middle of a staff line.
	 */
	"@vu.height": v.optional(v.string()),
});

export type AttrScoreDefVisData = v.InferOutput<typeof AttrScoreDefVisSchema>;
