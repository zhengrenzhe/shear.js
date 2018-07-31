declare module 'edge' {
	 function getTextNodes(root: Node): Text[]; function getPos(targetNode: Node, lineClamp: number): Range;
	export default getPos;
	export { getTextNodes };

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
