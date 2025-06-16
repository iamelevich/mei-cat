import type { Static } from "@sinclair/typebox";
import { Type } from "@sinclair/typebox";

/**
 * Attributes that specify element-to-element relationships.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
 */
export const AttrLinkingSchema = Type.Object(
	{
		/**
		 * Points to an element of which the current element is a copy. Value conforms to data.URI.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
		 */
		"@copyof": Type.Optional(Type.String()),
		/**
		 * Used to point to other elements that correspond to this one in a generic fashion. One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
		 */
		"@corresp": Type.Optional(Type.String()),
		/**
		 * points to one or more events in a user-defined collection that are known to be predecessors of the current element. One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
		 */
		"@follows": Type.Optional(Type.String()),
		/**
		 * Used to point to the next event(s) in a user-defined collection. One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
		 */
		"@next": Type.Optional(Type.String()),
		/**
		 * Points to one or more events in a user-defined collection that are known to be successors of the current element. One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
		 */
		"@precedes": Type.Optional(Type.String()),
		/**
		 * Points to the previous event(s) in a user-defined collection. One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
		 */
		"@prev": Type.Optional(Type.String()),
		/**
		 * Points to an element that is the same as the current element but is not a literal copy of the current element. One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
		 */
		"@sameas": Type.Optional(Type.String()),
		/**
		 * Points to elements that are synchronous with the current element. One or more values from data.URI, separated by spaces.
		 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.linking.html
		 */
		"@synch": Type.Optional(Type.String()),
	},
	{ additionalProperties: false },
);

export type AttrLinking = Static<typeof AttrLinkingSchema>;
