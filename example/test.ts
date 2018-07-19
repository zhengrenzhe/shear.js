import shear from "../src/index";

[].slice.call(document.querySelectorAll(".cut")).forEach(_ele => {
    const el = _ele as Element;
    el.addEventListener("click", () => {
        const res = shear(
            el.parentElement.firstElementChild,
            7,
            "<span>...展开</span>",
        );
        console.log(res);
    });
});
