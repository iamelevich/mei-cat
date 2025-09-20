import * as v from "valibot";
import { AttrMensurAnlSchema } from "../../analytical/attr/mensur.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrMensurGesSchema } from "../../gestural/attr/mensur.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrMensurLogSchema } from "../../shared/attr/mensur.log";
import { AttrMensurVisSchema } from "../../visual/attr/mensur.vis";

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
export const MensurSchema = v.lazy(() => v.intersect([MensurBaseSchema]));

export type MensurData = v.InferOutput<typeof MensurSchema>;
