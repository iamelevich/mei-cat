import * as v from "valibot";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrDatableSchema } from "../shared/attr/datable";
import { AttrFacsimileSchema } from "../shared/attr/facsimile";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Contains a word or phrase describing an official mark indicating ownership, genuineness, validity, etc.
 * @see https://music-encoding.org/guidelines/v5/elements/stamp.html
 */
export const StampSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrBiblSchema.entries,
	...AttrDatableSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrLangSchema.entries,

	// Content model according to MEI spec:
	// macro.struc-unstrucContent - comprehensive content model including:
	// - text content
	// - model.textPhraseLike elements
	// - model.editLike elements
	// - model.transcriptionLike elements
	// - model.msInline elements
	// - model.physDescPart elements
	// - and many more

	// model.textPhraseLike elements
	/**
	 * A generic element for 1) a shortened form of a word, including an acronym or 2) a shorthand notation.
	 * @see https://music-encoding.org/guidelines/v5/elements/abbr.html
	 */
	abbr: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Provides a statement explaining the text or indicating the basis for an assertion.
	 * @see https://music-encoding.org/guidelines/v5/elements/annot.html
	 */
	annot: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * An empty formatting element that forces text to begin on a new line.
	 * @see https://music-encoding.org/guidelines/v5/elements/lb.html
	 */
	lb: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Proper noun or noun phrase.
	 * @see https://music-encoding.org/guidelines/v5/elements/name.html
	 */
	name: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Numeric information in any form.
	 * @see https://music-encoding.org/guidelines/v5/elements/num.html
	 */
	num: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * An empty formatting element that forces text to begin on a new page.
	 * @see https://music-encoding.org/guidelines/v5/elements/pb.html
	 */
	pb: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * A formatting element indicating special visual rendering, e.g., bold or italicized, of a text word or phrase.
	 * @see https://music-encoding.org/guidelines/v5/elements/rend.html
	 */
	rend: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Keyword or phrase which describes a resource.
	 * @see https://music-encoding.org/guidelines/v5/elements/term.html
	 */
	term: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	// model.editLike elements
	/**
	 * Groups a number of alternative encodings for the same point in a text.
	 * @see https://music-encoding.org/guidelines/v5/elements/choice.html
	 */
	choice: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Groups transcriptional elements when the combination is to be regarded as a single intervention in the text.
	 * @see https://music-encoding.org/guidelines/v5/elements/subst.html
	 */
	subst: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	// model.transcriptionLike elements
	/**
	 * Marks an addition to the text.
	 * @see https://music-encoding.org/guidelines/v5/elements/add.html
	 */
	add: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Contains the correct form of an apparent erroneous passage.
	 * @see https://music-encoding.org/guidelines/v5/elements/corr.html
	 */
	corr: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Contains an area of damage to the physical medium.
	 * @see https://music-encoding.org/guidelines/v5/elements/damage.html
	 */
	damage: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Contains information deleted, marked as deleted, or otherwise indicated as superfluous or spurious in the copy text by an author, scribe, annotator, or corrector.
	 * @see https://music-encoding.org/guidelines/v5/elements/del.html
	 */
	del: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Indicates a point where material has been omitted in a transcription, whether as part of sampling practice or for editorial reasons described in the MEI header.
	 * @see https://music-encoding.org/guidelines/v5/elements/gap.html
	 */
	gap: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Marks the beginning of a passage written in a new hand, or of a change in the scribe, writing style, ink or character of the document hand.
	 * @see https://music-encoding.org/guidelines/v5/elements/handShift.html
	 */
	handShift: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Contains material which is marked as following the original, rather than being normalized or corrected.
	 * @see https://music-encoding.org/guidelines/v5/elements/orig.html
	 */
	orig: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Contains material which has been regularized or normalized in some sense.
	 * @see https://music-encoding.org/guidelines/v5/elements/reg.html
	 */
	reg: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Indicates restoration of material to an earlier state by cancellation of an editorial or authorial marking or instruction.
	 * @see https://music-encoding.org/guidelines/v5/elements/restore.html
	 */
	restore: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Contains apparently incorrect or inaccurate material.
	 * @see https://music-encoding.org/guidelines/v5/elements/sic.html
	 */
	sic: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Contains material supplied by the transcriber or editor for any reason.
	 * @see https://music-encoding.org/guidelines/v5/elements/supplied.html
	 */
	supplied: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),

	/**
	 * Contains material that cannot be transcribed with certainty because it is illegible or inaudible in the source.
	 * @see https://music-encoding.org/guidelines/v5/elements/unclear.html
	 */
	unclear: v.optional(
		v.union([v.lazy(() => v.unknown()), v.array(v.lazy(() => v.unknown()))]),
	),
});

export type StampData = v.InferOutput<typeof StampSchema>;
