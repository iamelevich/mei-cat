import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Groups symbols.
 * @see https://music-encoding.org/guidelines/v5/elements/grpSym.html
 */
export const GrpSymSchema = AnythingObjectSchema; // TODO: implement element

export type GrpSymData = v.InferOutput<typeof GrpSymSchema>;
