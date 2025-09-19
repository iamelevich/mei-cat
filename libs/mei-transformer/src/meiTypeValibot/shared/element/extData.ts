import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrBasicSchema } from "../attr/basic";
import { AttrInternetMediaSchema } from "../attr/internetMedia";
import { AttrLabelledSchema } from "../attr/labelled";
import { AttrPointingSchema } from "../attr/pointing";
import { AttrResponsibilitySchema } from "../attr/responsibility";
import { AttrTypedSchema } from "../attr/typed";
import { AttrWhitespaceSchema } from "../attr/whitespace";
import { MacroAnyXMLSchema } from "../macro/anyXML";

/**
 * Base schema with attribute, to simplify types for ExtDataSchema
 */
const ExtDataBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrBasicSchema.entries,
	...AttrInternetMediaSchema.entries,
	...AttrLabelledSchema.entries,
	...AttrPointingSchema.entries,
	...AttrResponsibilitySchema.entries,
	...AttrTypedSchema.entries,
	...AttrWhitespaceSchema.entries,
});

/**
 * Provides a container element for non-MEI data formats.
 * @see https://music-encoding.org/guidelines/v5/elements/extData.html
 */
export const ExtDataSchema = v.lazy(() =>
	v.intersect([ExtDataBaseSchema, MacroAnyXMLSchema]),
);

export type ExtDataData = v.InferOutput<typeof ExtDataSchema>;
