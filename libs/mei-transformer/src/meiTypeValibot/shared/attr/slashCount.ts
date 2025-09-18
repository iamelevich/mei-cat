import * as v from "valibot";

/**
 * Attributes for slash count.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.slashCount.html
 */
export const AttrSlashCountSchema = v.object({
  // TODO: Add slash count attributes
});

export type AttrSlashCountData = v.InferOutput<typeof AttrSlashCountSchema>;
