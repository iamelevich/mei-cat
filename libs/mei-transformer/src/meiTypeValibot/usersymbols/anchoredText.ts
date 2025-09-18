import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * anchoredText element.
 * @see https://music-encoding.org/guidelines/v5/elements/anchoredText.html
 */
export const AnchoredTextSchema = AnythingObjectSchema; // TODO: implement element

export type AnchoredTextData = v.InferOutput<typeof AnchoredTextSchema>;
