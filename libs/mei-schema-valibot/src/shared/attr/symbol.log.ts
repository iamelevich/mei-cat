import * as v from "valibot";
import { AttrStartIdSchema } from "./startId";

/**
 * Logical domain attributes..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.symbol.log.html
 */
export const AttrSymbolLogSchema = v.object({
	// Inherited attribute classes
	...AttrStartIdSchema.entries,
});

export type AttrSymbolLogData = v.InferOutput<typeof AttrSymbolLogSchema>;
