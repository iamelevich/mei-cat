import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrAuthorizedSchema } from "../../shared/attr/authorized";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrLangSchema } from "../../shared/attr/lang";
import { MacroStrucUnstrucContentSchema } from "../../shared/macro/struc-unstrucContent";

/**
 * Base schema with attribute, to simplify types for CarrierFormSchema
 */
const CarrierFormBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrLangSchema.entries,
});

/**
 * The specific class of material to which the physical carrier of the source/manifestation belongs (<abbr>e.g.</abbr>, sound cassette, videodisc, microfilm cartridge, transparency, etc.). The carrier for a manifestation comprising multiple physical components may include more than one form (<abbr>e.g.</abbr>, a filmstrip with an accompanying booklet, a separate sound disc carrying the sound track for a film, etc.).
 * @see https://music-encoding.org/guidelines/v5/elements/carrierForm.html
 */
export const CarrierFormSchema = v.lazy(() =>
	v.intersect([CarrierFormBaseSchema, MacroStrucUnstrucContentSchema]),
);

export type CarrierFormData = v.InferOutput<typeof CarrierFormSchema>;
