import * as v from "valibot";
import { AttrScoreDefVisCmnSchema } from "../../cmn/attr/scoreDef.vis.cmn";
import { AttrScoreDefVisMensuralSchema } from "../../mensural/attr/scoreDef.vis.mensural";
import { AttrBarringSchema } from "../../shared/attr/barring";
import { AttrDistancesSchema } from "../../shared/attr/distances";
import { AttrEndingsSchema } from "../../shared/attr/endings";
import { AttrLyricStyleSchema } from "../../shared/attr/lyricStyle";
import { AttrMeasureNumbersSchema } from "../../shared/attr/measureNumbers";
import { AttrMultinumMeasuresSchema } from "../../shared/attr/multinumMeasures";
import { AttrNotationStyleSchema } from "../../shared/attr/notationStyle";
import { AttrOneLineStaffSchema } from "../../shared/attr/oneLineStaff";
import { AttrOptimizationSchema } from "../../shared/attr/optimization";
import { AttrPagesSchema } from "../../shared/attr/pages";
import { AttrSpacingSchema } from "../../shared/attr/spacing";
import { AttrStaffItemsSchema } from "../../shared/attr/staffItems";
import { AttrSystemsSchema } from "../../shared/attr/systems";
import { AttrTextStyleSchema } from "../../shared/attr/textStyle";
import { AttrScoreDefVisTablatureSchema } from "../../stringtab/attr/scoreDef.vis.tablature";
import { AttrCleffingVisSchema } from "../attr/cleffing.vis";
import { AttrKeySigDefaultVisSchema } from "../attr/keySigDefault.vis";
import { AttrMeterSigDefaultVisSchema } from "../attr/meterSigDefault.vis";

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
