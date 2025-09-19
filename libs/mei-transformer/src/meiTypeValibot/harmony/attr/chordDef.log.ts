import * as v from "valibot";
import { AttrStringtabPositionSchema } from "../../stringtab/attr/stringtab.position";
import { AttrStringtabTuningSchema } from "../../stringtab/attr/stringtab.tuning";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.chordDef.log.html
 */
export const AttrChordDefLogSchema = v.object({
	// Inherited attribute classes
	...AttrStringtabPositionSchema.entries,
	...AttrStringtabTuningSchema.entries,
});

export type AttrChordDefLogData = v.InferOutput<typeof AttrChordDefLogSchema>;
