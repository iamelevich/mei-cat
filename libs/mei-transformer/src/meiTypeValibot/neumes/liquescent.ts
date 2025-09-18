import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * liquescent element.
 * @see https://music-encoding.org/guidelines/v5/elements/liquescent.html
 */
export const LiquescentSchema = AnythingObjectSchema; // TODO: implement element

export type LiquescentData = v.InferOutput<typeof LiquescentSchema>;
