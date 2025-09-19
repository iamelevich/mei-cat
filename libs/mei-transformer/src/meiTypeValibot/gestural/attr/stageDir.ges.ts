import * as v from "valibot";
import { AttrTimestamp2GesSchema } from "..";

/**
 * Gestural domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.stageDir.ges.html
 */
export const AttrStageDirGesSchema = v.object({
	// Inherited attribute classes
	...AttrTimestamp2GesSchema.entries,
});

export type AttrStageDirGesData = v.InferOutput<typeof AttrStageDirGesSchema>;
