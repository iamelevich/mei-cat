import * as v from "valibot";
import { AttrAlignmentSchema } from "../../performance/attr/alignment";
import { AttrLayerIdentSchema } from "../../shared/attr/layerIdent";
import { AttrPartIdentSchema } from "../../shared/attr/partIdent";
import { AttrPlistSchema } from "../../shared/attr/plist";
import { AttrStaffIdentSchema } from "../../shared/attr/staffIdent";
import { AttrTargetEvalSchema } from "../../shared/attr/targetEval";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.signifLet.log.html
 */
export const AttrSignifLetLogSchema = v.object({
	// Inherited attribute classes
	...AttrAlignmentSchema.entries,
	...AttrLayerIdentSchema.entries,
	...AttrPartIdentSchema.entries,
	...AttrPlistSchema.entries,
	...AttrStaffIdentSchema.entries,
	...AttrTargetEvalSchema.entries,
});

export type AttrSignifLetLogData = v.InferOutput<typeof AttrSignifLetLogSchema>;
