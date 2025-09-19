import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import {
	AttrBasicSchema,
	AttrLabelledSchema,
	AttrLinkingSchema,
	AttrMetadataPointingSchema,
	AttrNIntegerSchema,
	AttrResponsibilitySchema,
	AttrTypedSchema,
} from "../../shared";
import { AttrInstrDefAnlSchema } from "../../analytical";
import { AttrInstrDefGesSchema } from "../../gestural";
import { AttrInstrDefLogSchema } from "..";
import { AttrInstrDefVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for InstrDefSchema
 */
const InstrDefBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrInstrDefAnlSchema.entries,
	...AttrInstrDefGesSchema.entries,
	...AttrInstrDefLogSchema.entries,
	...AttrInstrDefVisSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrLinkingSchema.entries,
	...AttrMetadataPointingSchema.entries,
	...AttrNIntegerSchema.entries,
	...AttrResponsibilitySchema.entries,
	...AttrTypedSchema.entries,
});

/**
 * MIDI instrument declaration.
 * @see https://music-encoding.org/guidelines/v5/elements/instrDef.html
 */
export const InstrDefSchema = v.intersect([InstrDefBaseSchema]);

export type InstrDefData = v.InferOutput<typeof InstrDefSchema>;
