import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * symProp element.
 * @see https://music-encoding.org/guidelines/v5/elements/symProp.html
 */
export const SymPropSchema = AnythingObjectSchema; // TODO: implement element

export type SymPropData = v.InferOutput<typeof SymPropSchema>;
