import * as v from "valibot";
import { AttrMeterConformanceBarSchema } from "../../shared";

/**
 * Logical domain attributes. The n attribute contains a name or number associated with the measure (Read, p. 445). Often, this is an integer, but not always. For example, some measures, especially incomplete measures or those under an ending mark, may have labels that contain an integer plus a suffix, such as '12a'. Measures may even have labels, especially in editorial or analytical uses of MEI, that are entirely non-numeric strings. Measure numbers may be machine-generated instead of encoding them in the markup. However, an explicit measure number should restart numbering with the given value. The join attribute may be used to indicate another measure which metrically completes the current, incomplete one.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.measure.log.html
 */
export const AttrMeasureLogSchema = v.object({
	...AttrMeterConformanceBarSchema.entries,

	/**
	 * Indicates the visual rendition of the left bar line. It is present here only for facilitation of translation from legacy encodings which use it. Usually, it can be safely ignored.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.measure.log.html#left
	 */
	"@left": v.optional(v.string()),

	/**
	 * Indicates the function of the right bar line and is structurally important.
	 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.measure.log.html#right
	 */
	"@right": v.optional(v.string()),
});

export type AttrMeasureLogData = v.InferOutput<typeof AttrMeasureLogSchema>;
