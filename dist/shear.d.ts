declare module 'shear.js' {
	 function shear(targetNode: Element, lineClamp?: number, afterHTML?: string): {
	    isCuted: boolean;
	    fullHTML: string;
	    cutedHTML: string;
	    cutedWithAfterHTML: string;
	};
	export default shear;

}
