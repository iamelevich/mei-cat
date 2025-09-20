import * as v from "valibot";
import { AttrSymbolAnlSchema } from "../../analytical/attr/symbol.anl";
import { StandardTagSchema } from "../../common";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrSymbolGesSchema } from "../../gestural/attr/symbol.ges";
import { AttrSymbolVisSchema } from "../../visual/attr/symbol.vis";
import { AttrCommonSchema } from "../attr/common";
import { AttrSymbolLogSchema } from "../attr/symbol.log";

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
export const SymbolSchema = v.lazy(() => v.intersect([SymbolBaseSchema]));

export type SymbolData = v.InferOutput<typeof SymbolSchema>;
