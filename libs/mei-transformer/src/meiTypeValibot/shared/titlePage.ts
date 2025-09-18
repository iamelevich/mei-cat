import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains the title page.
 * @see https://music-encoding.org/guidelines/v5/elements/titlePage.html
 */
export const TitlePageSchema = AnythingObjectSchema; // TODO: implement element

export type TitlePageData = v.InferOutput<typeof TitlePageSchema>;
