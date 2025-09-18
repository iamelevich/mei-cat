import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * hex element.
 * @see https://music-encoding.org/guidelines/v5/elements/hex.html
 */
export const HexSchema = AnythingObjectSchema; // TODO: implement element

export type HexData = v.InferOutput<typeof HexSchema>;
