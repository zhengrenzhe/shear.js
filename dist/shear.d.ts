declare module 'utils' {
	export const isMS: boolean;
	export function toArr<T>(iterable: ArrayLike<T>): T[];
	export function createFragment(htmlString: string): DocumentFragment;
	export function getTextNodes(root: Node): Text[];

}
declare module 'edge' {
	 function getPos(targetNode: Node, lineClamp: number): Range;
	export default getPos;

}
declare module 'returns' {
	 function returns(isCuted: boolean, fullHTML?: string, cutedHTML?: string, cutedWithAfterHTML?: string): {
	    isCuted: boolean;
	    fullHTML: string;
	    cutedHTML: string;
	    cutedWithAfterHTML: string;
	};
	export { returns };

}
declare module 'shear.js' {
	 function shear(targetNode: Element, lineClamp?: number, afterHTML?: string): {
	    isCuted: boolean;
	    fullHTML: string;
	    cutedHTML: string;
	    cutedWithAfterHTML: string;
	};
	export default shear;

}
