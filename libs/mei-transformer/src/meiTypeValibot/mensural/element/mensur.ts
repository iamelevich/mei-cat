import * as v from "valibot";
import { AttrMensurAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrMensurGesSchema } from "../../gestural";
import { AttrCommonSchema, AttrMensurLogSchema } from "../../shared";
import { AttrMensurVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for MensurSchema
 */
const MensurBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrMensurAnlSchema.entries,
	...AttrMensurGesSchema.entries,
	...AttrMensurLogSchema.entries,
	...AttrMensurVisSchema.entries,
});

/**
 * Collects information about the metrical relationship between a note value and the next smaller value; that is, either triple or duple.
 * @see https://music-encoding.org/guidelines/v5/elements/mensur.html
 */
export const MensurSchema = v.intersect([MensurBaseSchema]);

export type MensurData = v.InferOutput<typeof MensurSchema>;
