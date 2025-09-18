import type * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Indicates an ossia.
 * @see https://music-encoding.org/guidelines/v5/elements/ossia.html
 */
export const OssiaSchema = AnythingObjectSchema; // TODO: implement element

export type OssiaData = v.InferOutput<typeof OssiaSchema>;
