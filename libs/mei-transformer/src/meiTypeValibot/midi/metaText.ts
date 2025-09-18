import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * metaText element.
 * @see https://music-encoding.org/guidelines/v5/elements/metaText.html
 */
export const MetaTextSchema = AnythingObjectSchema; // TODO: implement element

export type MetaTextData = v.InferOutput<typeof MetaTextSchema>;
