import * as v from "valibot";
import { ArgumentSchema } from "../argument";
import { BackSchema } from "../back";
import { DivSchema } from "../div";
import { EpigraphSchema } from "../epigraph";
import { FrontSchema } from "../front";
import { ImprimaturSchema } from "../imprimatur";
import { LSchema } from "../l";
import { LiSchema } from "../li";
import { ListSchema } from "../list";
import { QuoteSchema } from "../quote";

/**
 * Groups elements used to represent the back matter of a text.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.backLike.html
 */
export const BackLikeSchema = v.object({
  /**
   * A prose description of the appearance, content, or usage of an element.
   * @see https://music-encoding.org/guidelines/v5/elements/argument.html
   */
  argument: v.optional(
    v.union([v.lazy(() => ArgumentSchema), v.array(v.lazy(() => ArgumentSchema))]),
  ),

  /**
   * Contains any appendixes, advertisements, indexes, etc. following the main body of a musical text.
   * @see https://music-encoding.org/guidelines/v5/elements/back.html
   */
  back: v.optional(
    v.union([v.lazy(() => BackSchema), v.array(v.lazy(() => BackSchema))]),
  ),

  /**
   * Major structural division of text, such as a preface, chapter or section.
   * @see https://music-encoding.org/guidelines/v5/elements/div.html
   */
  div: v.optional(
    v.union([v.lazy(() => DivSchema), v.array(v.lazy(() => DivSchema))]),
  ),

  /**
   * Contains a quotation, anonymous or attributed, appearing on a title page.
   * @see https://music-encoding.org/guidelines/v5/elements/epigraph.html
   */
  epigraph: v.optional(
    v.union([v.lazy(() => EpigraphSchema), v.array(v.lazy(() => EpigraphSchema))]),
  ),

  /**
   * Bundles prefatory text found before the start of the musical text.
   * @see https://music-encoding.org/guidelines/v5/elements/front.html
   */
  front: v.optional(
    v.union([v.lazy(() => FrontSchema), v.array(v.lazy(() => FrontSchema))]),
  ),

  /**
   * Contains a formal statement authorizing the publication of a work, sometimes required to appear on a title page or its verso.
   * @see https://music-encoding.org/guidelines/v5/elements/imprimatur.html
   */
  imprimatur: v.optional(
    v.union([v.lazy(() => ImprimaturSchema), v.array(v.lazy(() => ImprimaturSchema))]),
  ),

  /**
   * A visual line consisting of text. May include text and other inline elements.
   * @see https://music-encoding.org/guidelines/v5/elements/l.html
   */
  l: v.optional(
    v.union([v.lazy(() => LSchema), v.array(v.lazy(() => LSchema))]),
  ),

  /**
   * Single instance or exemplar of an item in a list.
   * @see https://music-encoding.org/guidelines/v5/elements/li.html
   */
  li: v.optional(
    v.union([v.lazy(() => LiSchema), v.array(v.lazy(() => LiSchema))]),
  ),

  /**
   * A formatting element that contains a series of items separated from one another and arranged in a vertical, horizontal, or matrix-like manner.
   * @see https://music-encoding.org/guidelines/v5/elements/list.html
   */
  list: v.optional(
    v.union([v.lazy(() => ListSchema), v.array(v.lazy(() => ListSchema))]),
  ),

  /**
   * Contains a passage which is distinguished from the surrounding text using quotation marks or a similar method. Use q for inline quotations.
   * @see https://music-encoding.org/guidelines/v5/elements/quote.html
   */
  quote: v.optional(
    v.union([v.lazy(() => QuoteSchema), v.array(v.lazy(() => QuoteSchema))]),
  ),
});

export type BackLikeData = v.InferOutput<typeof BackLikeSchema>;
