import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates a tie marking.
 * @see https://music-encoding.org/guidelines/v5/elements/tie.html
 */
export const TieSchema = AnythingObjectSchema; // TODO: implement element

export type TieData = v.InferOutput<typeof TieSchema>;
