import * as v from "valibot";
import { AttrInstrDefAnlSchema } from "../../analytical/attr/instrDef.anl";
import { StandardTagSchema } from "../../common";
import { AttrInstrDefGesSchema } from "../../gestural/attr/instrDef.ges";
import { AttrBasicSchema } from "../../shared/attr/basic";
import { AttrLabelledSchema } from "../../shared/attr/labelled";
import { AttrLinkingSchema } from "../../shared/attr/linking";
import { AttrMetadataPointingSchema } from "../../shared/attr/metadataPointing";
import { AttrNIntegerSchema } from "../../shared/attr/nInteger";
import { AttrResponsibilitySchema } from "../../shared/attr/responsibility";
import { AttrTypedSchema } from "../../shared/attr/typed";
import { AttrInstrDefVisSchema } from "../../visual/attr/instrDef.vis";
import { AttrInstrDefLogSchema } from "../attr/instrDef.log";

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
export const InstrDefSchema = v.lazy(() => v.intersect([InstrDefBaseSchema]));

export type InstrDefData = v.InferOutput<typeof InstrDefSchema>;
