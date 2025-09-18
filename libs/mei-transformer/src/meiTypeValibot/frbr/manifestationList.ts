import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Groups elements that represent manifestation lists.
 * @see https://music-encoding.org/guidelines/v5/elements/manifestationList.html
 */
export const ManifestationListSchema = AnythingObjectSchema; // TODO: implement element

export type ManifestationListData = v.InferOutput<typeof ManifestationListSchema>;
