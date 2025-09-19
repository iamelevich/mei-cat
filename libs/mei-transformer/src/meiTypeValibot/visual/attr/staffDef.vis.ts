import * as v from "valibot";
import { AttrStaffDefVisCmnSchema } from "../../cmn/attr/staffDef.vis.cmn";
import { AttrStaffDefVisMensuralSchema } from "../../mensural/attr/staffDef.vis.mensural";
import { AttrBarringSchema } from "../../shared/attr/barring";
import { AttrDistancesSchema } from "../../shared/attr/distances";
import { AttrLyricStyleSchema } from "../../shared/attr/lyricStyle";
import { AttrMultinumMeasuresSchema } from "../../shared/attr/multinumMeasures";
import { AttrNotationStyleSchema } from "../../shared/attr/notationStyle";
import { AttrOneLineStaffSchema } from "../../shared/attr/oneLineStaff";
import { AttrScalableSchema } from "../../shared/attr/scalable";
import { AttrStaffItemsSchema } from "../../shared/attr/staffItems";
import { AttrTextStyleSchema } from "../../shared/attr/textStyle";
import { AttrVisibilitySchema } from "../../shared/attr/visibility";
import { AttrStaffDefVisTablatureSchema } from "../../stringtab/attr/staffDef.vis.tablature";
import { AttrCleffingVisSchema } from "../attr/cleffing.vis";
import { AttrGuitarGridVisSchema } from "../attr/guitarGrid.vis";
import { AttrKeySigDefaultVisSchema } from "../attr/keySigDefault.vis";
import { AttrMeterSigDefaultVisSchema } from "../attr/meterSigDefault.vis";

/**
 * Visual domain attributes for staffDef..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffDef.vis.html
 */
export const AttrStaffDefVisSchema = v.object({
	// Inherited attribute classes
	...AttrBarringSchema.entries,
	...AttrCleffingVisSchema.entries,
	...AttrDistancesSchema.entries,
	...AttrGuitarGridVisSchema.entries,
	...AttrKeySigDefaultVisSchema.entries,
	...AttrLyricStyleSchema.entries,
	...AttrMeterSigDefaultVisSchema.entries,
	...AttrMultinumMeasuresSchema.entries,
	...AttrNotationStyleSchema.entries,
	...AttrOneLineStaffSchema.entries,
	...AttrScalableSchema.entries,
	...AttrStaffDefVisCmnSchema.entries,
	...AttrStaffDefVisMensuralSchema.entries,
	...AttrStaffDefVisTablatureSchema.entries,
	...AttrStaffItemsSchema.entries,
	...AttrTextStyleSchema.entries,
	...AttrVisibilitySchema.entries,

	// Direct attributes
	/**
	 * Indicates the number of layers and their stem directions.
	 */
	"@layerscheme": v.optional(v.string()),
	/**
	 * Captures the colors of the staff lines.
	 */
	"@lines.color": v.optional(v.string()),
	/**
	 * Records whether all staff lines are visible.
	 */
	"@lines.visible": v.optional(v.string()),
	/**
	 * Records the absolute distance (as opposed to the relative distances recorded in <gi scheme="MEI">scoreDef</gi> elements) between this staff and the preceding one in the same system. This value is meaningless for the first staff in a system since the spacing.system attribute indicates the spacing between systems.
	 */
	"@spacing": v.optional(v.string()),
});

export type AttrStaffDefVisData = v.InferOutput<typeof AttrStaffDefVisSchema>;
