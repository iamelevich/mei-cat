import * as v from "valibot";
import { AttrSymbolAnlSchema } from "../../analytical";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile";
import { AttrSymbolGesSchema } from "../../gestural";
import { AttrSymbolVisSchema } from "../../visual";
import { AttrCommonSchema, AttrSymbolLogSchema } from "..";

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
