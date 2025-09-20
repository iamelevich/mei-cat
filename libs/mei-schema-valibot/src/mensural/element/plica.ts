import * as v from "valibot";
import { AttrPlicaAnlSchema } from "../../analytical/attr/plica.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrPlicaGesSchema } from "../../gestural/attr/plica.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrPlicaVisSchema } from "../../visual/attr/plica.vis";
import { AttrPlicaLogSchema } from "../attr/plica.log";

/**
 * Base schema with attribute, to simplify types for PlicaSchema
 */
const PlicaBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrPlicaAnlSchema.entries,
	...AttrPlicaGesSchema.entries,
	...AttrPlicaLogSchema.entries,
	...AttrPlicaVisSchema.entries,
});

/**
 * Plica
 * @see https://music-encoding.org/guidelines/v5/elements/plica.html
 */
export const PlicaSchema = v.lazy(() => v.intersect([PlicaBaseSchema]));

export type PlicaData = v.InferOutput<typeof PlicaSchema>;
