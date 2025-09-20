import * as v from "valibot";

/**
 * Attributes that describe curvature..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.curvature.html
 */
export const AttrCurvatureSchema = v.object({
	// Direct attributes
	/**
	 * Records the placement of Bezier control points as a series of pairs of space-separated values; <abbr>e.g.</abbr>, <val>19 45 -32 118.</val>
	 */
	"@bezier": v.optional(v.string()),
	/**
	 * Describes a curve as one or more pairs of values with respect to an imaginary line connecting the starting and ending points of the curve. The first value captures a distance to the left (positive value) or right (negative value) of the line, expressed in virtual units. The second value of each pair represents a point along the line, expressed as a percentage of the line’s length. N.B. An MEI virtual unit (vu) is half the distance between adjacent staff lines where the interline space is measured from the middle of a staff line.
	 */
	"@bulge": v.optional(v.string()),
	/**
	 * Describes a curve with a generic term indicating the direction of curvature.
	 */
	"@curvedir": v.optional(v.string()),
});

export type AttrCurvatureData = v.InferOutput<typeof AttrCurvatureSchema>;
