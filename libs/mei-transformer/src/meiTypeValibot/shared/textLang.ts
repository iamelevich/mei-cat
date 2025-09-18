import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains the language of the text.
 * @see https://music-encoding.org/guidelines/v5/elements/textLang.html
 */
export const TextLangSchema = AnythingObjectSchema; // TODO: implement element

export type TextLangData = v.InferOutput<typeof TextLangSchema>;
