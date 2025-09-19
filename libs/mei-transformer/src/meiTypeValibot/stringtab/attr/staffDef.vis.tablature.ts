import * as v from "valibot";

/**
 * Visual domain attributes for staffDef in the tablature repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.staffDef.vis.tablature.html
 */
export const AttrStaffDefVisTablatureSchema = v.object({
	// Direct attributes
	/**
	 * Attribute that describes the vertical alignment of tablature symbols. Only applicable in cases where the symbols' vertical position does not communicate other information, such as courses (<abbr>i.e.</abbr>, only in German lute tablature). Typical values are <val>top</val> and <val>bottom</val>.
	 */
	"@tab.align": v.optional(v.string()),
	/**
	 * Used in German lute tablature where the vertical alignment of tab notes is consistent but cannot be identified using a typical value of <att>tab.align</att> (<abbr>i.e.</abbr>, <val>top</val> or <val>bottom</val>). Specifies the horizontal strand corresponding to the <att>lines</att> attribute on <gi scheme="MEI">staffDef</gi> that anchors the vertical position of tab notes. This anchorline is used as the vertical starting position when stacking tab notes into chords. Single tab notes simply occupy this position. Chords <q>grow upwards</q> from this position. If the chord extends further than the number of available horizontal strands (<q>lines</q>) above the anchorline, the entire chord is shifted downward until its top tab note is positioned on the top-most line. (Note that in German lute tablature, the lines are conceptual rather than visible).
	 */
	"@tab.anchorline": v.optional(v.string()),
});

export type AttrStaffDefVisTablatureData = v.InferOutput<
	typeof AttrStaffDefVisTablatureSchema
>;
