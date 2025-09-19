import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema } from "../../shared";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrPlicaAnlSchema } from "../../analytical";
import { AttrPlicaGesSchema } from "../../gestural";
import { AttrPlicaLogSchema } from "..";
import { AttrPlicaVisSchema } from "../../visual";

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
