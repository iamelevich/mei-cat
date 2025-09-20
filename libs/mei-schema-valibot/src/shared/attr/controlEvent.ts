import * as v from "valibot";
import { AttrTimestampGesSchema } from "../../gestural/attr/timestamp.ges";
import { AttrAlignmentSchema } from "../../performance/attr/alignment";
import { AttrLayerIdentSchema } from "./layerIdent";
import { AttrPartIdentSchema } from "./partIdent";
import { AttrPlistSchema } from "./plist";
import { AttrStaffIdentSchema } from "./staffIdent";
import { AttrTargetEvalSchema } from "./targetEval";
import { AttrTimestampLogSchema } from "./timestamp.log";

/**
 * Attributes shared by events which rely on other events for their existence. For example, a slur/phrase marking must be drawn between or over a group of notes. The slur is therefore a control event..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.controlEvent.html
 */
export const AttrControlEventSchema = v.object({
	// Inherited attribute classes
	...AttrAlignmentSchema.entries,
	...AttrLayerIdentSchema.entries,
	...AttrPartIdentSchema.entries,
	...AttrPlistSchema.entries,
	...AttrStaffIdentSchema.entries,
	...AttrTargetEvalSchema.entries,
	...AttrTimestampGesSchema.entries,
	...AttrTimestampLogSchema.entries,
});

export type AttrControlEventData = v.InferOutput<typeof AttrControlEventSchema>;
