import * as v from "valibot";

/**
 * Attributes that specify element-to-element relationships..
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
 */
export const AttrLinkingSchema = v.object({
	// Direct attributes
	/**
	 * Points to an element of which the current element is a copy.
	 */
	"@copyof": v.optional(v.string()),
	/**
	 * Used to point to other elements that correspond to this one in a generic fashion.
	 */
	"@corresp": v.optional(v.string()),
	/**
	 * points to one or more events in a user-defined collection that are known to be predecessors of the current element.
	 */
	"@follows": v.optional(v.string()),
	/**
	 * Used to point to the next event(s) in a user-defined collection.
	 */
	"@next": v.optional(v.string()),
	/**
	 * Points to one or more events in a user-defined collection that are known to be successors of the current element.
	 */
	"@precedes": v.optional(v.string()),
	/**
	 * Points to the previous event(s) in a user-defined collection.
	 */
	"@prev": v.optional(v.string()),
	/**
	 * Points to an element that is the same as the current element but is not a literal copy of the current element.
	 */
	"@sameas": v.optional(v.string()),
	/**
	 * Points to elements that are synchronous with the current element.
	 */
	"@synch": v.optional(v.string()),
});

export type AttrLinkingData = v.InferOutput<typeof AttrLinkingSchema>;
