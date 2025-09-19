import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrCommonSchema, AttrSymbolLogSchema } from "..";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrSymbolAnlSchema } from "../../analytical";
import { AttrSymbolGesSchema } from "../../gestural";
import { AttrSymbolVisSchema } from "../../visual";

/**
 * Base schema with attribute, to simplify types for SymbolSchema
 */
const SymbolBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrSymbolAnlSchema.entries,
	...AttrSymbolGesSchema.entries,
	...AttrSymbolLogSchema.entries,
	...AttrSymbolVisSchema.entries,
});

/**
 * A reference to a previously defined symbol.
 * @see https://music-encoding.org/guidelines/v5/elements/symbol.html
 */
export const SymbolSchema = v.intersect([SymbolBaseSchema]);

export type SymbolData = v.InferOutput<typeof SymbolSchema>;
