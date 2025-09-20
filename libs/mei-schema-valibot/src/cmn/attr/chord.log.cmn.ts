import * as v from "valibot";
import { AttrGracedSchema } from "./graced";

/**
 * Logical domain attributes in the CMN repertoire..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chord.log.cmn.html
 */
export const AttrChordLogCmnSchema = v.object({
	// Inherited attribute classes
	...AttrGracedSchema.entries,
});

export type AttrChordLogCmnData = v.InferOutput<typeof AttrChordLogCmnSchema>;
