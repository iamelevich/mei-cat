import * as v from "valibot";
import { AttrPlicaAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrPlicaGesSchema } from "../../gestural";
import { AttrCommonSchema } from "../../shared";
import { AttrPlicaVisSchema } from "../../visual";
import { AttrPlicaLogSchema } from "..";

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
export const PlicaSchema = v.intersect([PlicaBaseSchema]);

export type PlicaData = v.InferOutput<typeof PlicaSchema>;
