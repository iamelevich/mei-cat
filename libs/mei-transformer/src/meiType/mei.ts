import type { AttrId, AttrMeiVersion, AttrResponsibility } from "./attributes";
import type { StandardTag } from "./common";
import type { MeiHead } from "./header";
import type { Music } from "./music";

/**
 * Contains a single MEI-conformant document, consisting of an MEI header and a musical text, either in isolation or as part of an meiCorpus element.
 * @see https://music-encoding.org/guidelines/v5/elements/mei.html
 */
export type Mei = StandardTag &
	AttrId &
	AttrMeiVersion &
	AttrResponsibility & {
		meiHead: MeiHead;
		music: Music;
	};
