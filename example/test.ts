import shear from "../src/shear.js";

[].slice.call(document.querySelectorAll(".cut")).forEach(_ele => {
    const el = _ele as Element;
    el.addEventListener("click", () => {
        const res = shear(
            el.parentElement.firstElementChild,
            3,
            "<span>...展开</span>",
        );
        console.log(res);
    });
});

document.getElementById("t1").addEventListener("click", () => {
    shear(document.getElementById("truncate1"), 2);
});

document.getElementById("t2").addEventListener("click", () => {
    shear(document.getElementById("truncate2"), 2, "<span>... (more)</span>");
});
