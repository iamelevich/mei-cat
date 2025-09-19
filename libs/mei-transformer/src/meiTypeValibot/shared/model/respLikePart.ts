import * as v from "valibot";
import {
	type ArrangerData,
	ArrangerSchema,
	type AuthorData,
	AuthorSchema,
	type ComposerData,
	ComposerSchema,
	type ContributorData,
	ContributorSchema,
	type EditorData,
	EditorSchema,
	type FunderData,
	FunderSchema,
	type LibrettistData,
	LibrettistSchema,
	type LyricistData,
	LyricistSchema,
	type SponsorData,
	SponsorSchema,
} from "..";

/**
 * Groups elements that delineate particular responsibilities as opposed to the respStmt element that provides for generic statements of responsibility.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.respLikePart.html
 */
export const ModelRespLikePartSchema: v.GenericSchema<ModelRespLikePartData> =
	v.object({
		/**
		 * A person or organization who transcribes a musical composition, usually for a different medium from that of the original; in an arrangement the musical substance remains essentially unchanged.
		 * @see https://music-encoding.org/guidelines/v5/elements/arranger.html
		 */
		arranger: v.optional(
			v.union([
				v.lazy(() => ArrangerSchema),
				v.array(v.lazy(() => ArrangerSchema)),
			]),
		),
		/**
		 * The name of the creator of the intellectual content of a non-musical, literary work.
		 * @see https://music-encoding.org/guidelines/v5/elements/author.html
		 */
		author: v.optional(
			v.union([
				v.lazy(() => AuthorSchema),
				v.array(v.lazy(() => AuthorSchema)),
			]),
		),
		/**
		 * The name of the creator of the intellectual content of a musical work.
		 * @see https://music-encoding.org/guidelines/v5/elements/composer.html
		 */
		composer: v.optional(
			v.union([
				v.lazy(() => ComposerSchema),
				v.array(v.lazy(() => ComposerSchema)),
			]),
		),
		/**
		 * Names of individuals, institutions, or organizations responsible for contributions to the intellectual content of a work, where the specialized elements for authors, editors, etc. do not suffice or do not apply.
		 * @see https://music-encoding.org/guidelines/v5/elements/contributor.html
		 */
		contributor: v.optional(
			v.union([
				v.lazy(() => ContributorSchema),
				v.array(v.lazy(() => ContributorSchema)),
			]),
		),
		/**
		 * The name of the individual(s), institution(s) or organization(s) acting in an editorial capacity.
		 * @see https://music-encoding.org/guidelines/v5/elements/editor.html
		 */
		editor: v.optional(
			v.union([
				v.lazy(() => EditorSchema),
				v.array(v.lazy(() => EditorSchema)),
			]),
		),
		/**
		 * Names of individuals, institutions, or organizations responsible for funding. Funders provide financial support for a project; they are distinct from sponsors, who provide intellectual support and authority.
		 * @see https://music-encoding.org/guidelines/v5/elements/funder.html
		 */
		funder: v.optional(
			v.union([
				v.lazy(() => FunderSchema),
				v.array(v.lazy(() => FunderSchema)),
			]),
		),
		/**
		 * Person or organization who is a writer of the text of an opera, oratorio, etc.
		 * @see https://music-encoding.org/guidelines/v5/elements/librettist.html
		 */
		librettist: v.optional(
			v.union([
				v.lazy(() => LibrettistSchema),
				v.array(v.lazy(() => LibrettistSchema)),
			]),
		),
		/**
		 * Person or organization who is a writer of the text of a song.
		 * @see https://music-encoding.org/guidelines/v5/elements/lyricist.html
		 */
		lyricist: v.optional(
			v.union([
				v.lazy(() => LyricistSchema),
				v.array(v.lazy(() => LyricistSchema)),
			]),
		),
		/**
		 * Names of sponsoring individuals, organizations or institutions. Sponsors give their intellectual authority to a project; they are to be distinguished from funders, who provide the funding but do not necessarily take intellectual responsibility.
		 * @see https://music-encoding.org/guidelines/v5/elements/sponsor.html
		 */
		sponsor: v.optional(
			v.union([
				v.lazy(() => SponsorSchema),
				v.array(v.lazy(() => SponsorSchema)),
			]),
		),
	});

export type ModelRespLikePartData = {
	arranger?: ArrangerData | ArrangerData[];
	author?: AuthorData | AuthorData[];
	composer?: ComposerData | ComposerData[];
	contributor?: ContributorData | ContributorData[];
	editor?: EditorData | EditorData[];
	funder?: FunderData | FunderData[];
	librettist?: LibrettistData | LibrettistData[];
	lyricist?: LyricistData | LyricistData[];
	sponsor?: SponsorData | SponsorData[];
};
