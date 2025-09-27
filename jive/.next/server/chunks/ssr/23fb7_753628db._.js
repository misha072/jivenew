module.exports = {

"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>defaultAttributes
});
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "toKebabCase": ()=>toKebabCase
});
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>createLucideIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, ...rest }, ref)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
            ref,
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
            width: size,
            height: size,
            stroke: color,
            strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
            className: [
                "lucide",
                `lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`,
                className
            ].join(" "),
            ...rest
        }, [
            ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
            ...Array.isArray(children) ? children : [
                children
            ]
        ]);
    });
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/hammer.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>Hammer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Hammer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Hammer", [
    [
        "path",
        {
            d: "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",
            key: "eefl8a"
        }
    ],
    [
        "path",
        {
            d: "m18 15 4-4",
            key: "16gjal"
        }
    ],
    [
        "path",
        {
            d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",
            key: "b7pghm"
        }
    ]
]);
;
 //# sourceMappingURL=hammer.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/hammer.js [app-ssr] (ecmascript) <export default as Hammer>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Hammer": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/hammer.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>Check
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Check", [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
]);
;
 //# sourceMappingURL=check.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Check": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>X
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("X", [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
]);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "X": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/brain.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>Brain
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Brain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Brain", [
    [
        "path",
        {
            d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
            key: "l5xja"
        }
    ],
    [
        "path",
        {
            d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
            key: "ep3f8r"
        }
    ],
    [
        "path",
        {
            d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
            key: "1p4c4q"
        }
    ],
    [
        "path",
        {
            d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
            key: "tmeiqw"
        }
    ],
    [
        "path",
        {
            d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
            key: "105sqy"
        }
    ],
    [
        "path",
        {
            d: "M3.477 10.896a4 4 0 0 1 .585-.396",
            key: "ql3yin"
        }
    ],
    [
        "path",
        {
            d: "M19.938 10.5a4 4 0 0 1 .585.396",
            key: "1qfode"
        }
    ],
    [
        "path",
        {
            d: "M6 18a4 4 0 0 1-1.967-.516",
            key: "2e4loj"
        }
    ],
    [
        "path",
        {
            d: "M19.967 17.484A4 4 0 0 1 18 18",
            key: "159ez6"
        }
    ]
]);
;
 //# sourceMappingURL=brain.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/brain.js [app-ssr] (ecmascript) <export default as Brain>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Brain": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/brain.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>ChevronDown
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ChevronDown", [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ChevronDown": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>ChevronRight
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ChevronRight", [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-right.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ChevronRight": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>Copy
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Copy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Copy", [
    [
        "rect",
        {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea"
        }
    ],
    [
        "path",
        {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf"
        }
    ]
]);
;
 //# sourceMappingURL=copy.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Copy": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>User
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const User = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("User", [
    [
        "path",
        {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }
    ]
]);
;
 //# sourceMappingURL=user.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "User": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/bot.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>Bot
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Bot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Bot", [
    [
        "path",
        {
            d: "M12 8V4H8",
            key: "hb8ula"
        }
    ],
    [
        "rect",
        {
            width: "16",
            height: "12",
            x: "4",
            y: "8",
            rx: "2",
            key: "enze0r"
        }
    ],
    [
        "path",
        {
            d: "M2 14h2",
            key: "vft8re"
        }
    ],
    [
        "path",
        {
            d: "M20 14h2",
            key: "4cs60a"
        }
    ],
    [
        "path",
        {
            d: "M15 13v2",
            key: "1xurst"
        }
    ],
    [
        "path",
        {
            d: "M9 13v2",
            key: "rq6x2g"
        }
    ]
]);
;
 //# sourceMappingURL=bot.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/bot.js [app-ssr] (ecmascript) <export default as Bot>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Bot": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/bot.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/hash.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>Hash
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Hash", [
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "9",
            y2: "9",
            key: "4lhtct"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "15",
            y2: "15",
            key: "vyu0kd"
        }
    ],
    [
        "line",
        {
            x1: "10",
            x2: "8",
            y1: "3",
            y2: "21",
            key: "1ggp8o"
        }
    ],
    [
        "line",
        {
            x1: "16",
            x2: "14",
            y1: "3",
            y2: "21",
            key: "weycgp"
        }
    ]
]);
;
 //# sourceMappingURL=hash.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/hash.js [app-ssr] (ecmascript) <export default as Hash>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Hash": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/hash.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/git-compare.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>GitCompare
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const GitCompare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("GitCompare", [
    [
        "circle",
        {
            cx: "18",
            cy: "18",
            r: "3",
            key: "1xkwt0"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "6",
            r: "3",
            key: "1lh9wr"
        }
    ],
    [
        "path",
        {
            d: "M13 6h3a2 2 0 0 1 2 2v7",
            key: "1yeb86"
        }
    ],
    [
        "path",
        {
            d: "M11 18H8a2 2 0 0 1-2-2V9",
            key: "19pyzm"
        }
    ]
]);
;
 //# sourceMappingURL=git-compare.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/git-compare.js [app-ssr] (ecmascript) <export default as GitCompare>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GitCompare": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$compare$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$compare$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/git-compare.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>TriangleAlert
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const TriangleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("TriangleAlert", [
    [
        "path",
        {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq"
        }
    ],
    [
        "path",
        {
            d: "M12 9v4",
            key: "juzpu7"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ]
]);
;
 //# sourceMappingURL=triangle-alert.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "AlertTriangle": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>Plus
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Plus", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
]);
;
 //# sourceMappingURL=plus.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Plus": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>Minus
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Minus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Minus", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ]
]);
;
 //# sourceMappingURL=minus.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript) <export default as Minus>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Minus": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/minus.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>SquarePen
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const SquarePen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("SquarePen", [
    [
        "path",
        {
            d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
            key: "1m0v6g"
        }
    ],
    [
        "path",
        {
            d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",
            key: "1lpok0"
        }
    ]
]);
;
 //# sourceMappingURL=square-pen.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript) <export default as Edit>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Edit": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/bug.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>Bug
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Bug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Bug", [
    [
        "path",
        {
            d: "m8 2 1.88 1.88",
            key: "fmnt4t"
        }
    ],
    [
        "path",
        {
            d: "M14.12 3.88 16 2",
            key: "qol33r"
        }
    ],
    [
        "path",
        {
            d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",
            key: "d7y7pr"
        }
    ],
    [
        "path",
        {
            d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",
            key: "xs1cw7"
        }
    ],
    [
        "path",
        {
            d: "M12 20v-9",
            key: "1qisl0"
        }
    ],
    [
        "path",
        {
            d: "M6.53 9C4.6 8.8 3 7.1 3 5",
            key: "32zzws"
        }
    ],
    [
        "path",
        {
            d: "M6 13H2",
            key: "82j7cp"
        }
    ],
    [
        "path",
        {
            d: "M3 21c0-2.1 1.7-3.9 3.8-4",
            key: "4p0ekp"
        }
    ],
    [
        "path",
        {
            d: "M20.97 5c0 2.1-1.6 3.8-3.5 4",
            key: "18gb23"
        }
    ],
    [
        "path",
        {
            d: "M22 13h-4",
            key: "1jl80f"
        }
    ],
    [
        "path",
        {
            d: "M17.2 17c2.1.1 3.8 1.9 3.8 4",
            key: "k3fwyw"
        }
    ]
]);
;
 //# sourceMappingURL=bug.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/bug.js [app-ssr] (ecmascript) <export default as Bug>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Bug": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/bug.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/network.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>Network
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Network = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Network", [
    [
        "rect",
        {
            x: "16",
            y: "16",
            width: "6",
            height: "6",
            rx: "1",
            key: "4q2zg0"
        }
    ],
    [
        "rect",
        {
            x: "2",
            y: "16",
            width: "6",
            height: "6",
            rx: "1",
            key: "8cvhb9"
        }
    ],
    [
        "rect",
        {
            x: "9",
            y: "2",
            width: "6",
            height: "6",
            rx: "1",
            key: "1egb70"
        }
    ],
    [
        "path",
        {
            d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
            key: "1jsf9p"
        }
    ],
    [
        "path",
        {
            d: "M12 12V8",
            key: "2874zd"
        }
    ]
]);
;
 //# sourceMappingURL=network.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/network.js [app-ssr] (ecmascript) <export default as Network>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Network": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/network.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>MessageSquare
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const MessageSquare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("MessageSquare", [
    [
        "path",
        {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
            key: "1lielz"
        }
    ]
]);
;
 //# sourceMappingURL=message-square.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "MessageSquare": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>Database
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Database = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Database", [
    [
        "ellipse",
        {
            cx: "12",
            cy: "5",
            rx: "9",
            ry: "3",
            key: "msslwz"
        }
    ],
    [
        "path",
        {
            d: "M3 5V19A9 3 0 0 0 21 19V5",
            key: "1wlel7"
        }
    ],
    [
        "path",
        {
            d: "M3 12A9 3 0 0 0 21 12",
            key: "mv7ke4"
        }
    ]
]);
;
 //# sourceMappingURL=database.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Database": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>Trash2
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Trash2", [
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
            key: "4alrt4"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
            key: "v07s0e"
        }
    ],
    [
        "line",
        {
            x1: "10",
            x2: "10",
            y1: "11",
            y2: "17",
            key: "1uufr5"
        }
    ],
    [
        "line",
        {
            x1: "14",
            x2: "14",
            y1: "11",
            y2: "17",
            key: "xtxkd"
        }
    ]
]);
;
 //# sourceMappingURL=trash-2.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Trash2": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>RefreshCw
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const RefreshCw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("RefreshCw", [
    [
        "path",
        {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc"
        }
    ],
    [
        "path",
        {
            d: "M21 3v5h-5",
            key: "1q7to0"
        }
    ],
    [
        "path",
        {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3"
        }
    ],
    [
        "path",
        {
            d: "M8 16H3v5",
            key: "1cv678"
        }
    ]
]);
;
 //# sourceMappingURL=refresh-cw.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "RefreshCw": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/grip-horizontal.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": ()=>GripHorizontal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const GripHorizontal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("GripHorizontal", [
    [
        "circle",
        {
            cx: "12",
            cy: "9",
            r: "1",
            key: "124mty"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "9",
            r: "1",
            key: "1ruzo2"
        }
    ],
    [
        "circle",
        {
            cx: "5",
            cy: "9",
            r: "1",
            key: "1a8b28"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "15",
            r: "1",
            key: "1e56xg"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "15",
            r: "1",
            key: "1a92ep"
        }
    ],
    [
        "circle",
        {
            cx: "5",
            cy: "15",
            r: "1",
            key: "5r1jwy"
        }
    ]
]);
;
 //# sourceMappingURL=grip-horizontal.js.map
}),
"[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/grip-horizontal.js [app-ssr] (ecmascript) <export default as GripHorizontal>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GripHorizontal": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/lucide-react/dist/esm/icons/grip-horizontal.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/cedar-os/node_modules/diff/lib/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Diff": ()=>Diff,
    "applyPatch": ()=>applyPatch,
    "applyPatches": ()=>applyPatches,
    "canonicalize": ()=>canonicalize,
    "convertChangesToDMP": ()=>convertChangesToDMP,
    "convertChangesToXML": ()=>convertChangesToXML,
    "createPatch": ()=>createPatch,
    "createTwoFilesPatch": ()=>createTwoFilesPatch,
    "diffArrays": ()=>diffArrays,
    "diffChars": ()=>diffChars,
    "diffCss": ()=>diffCss,
    "diffJson": ()=>diffJson,
    "diffLines": ()=>diffLines,
    "diffSentences": ()=>diffSentences,
    "diffTrimmedLines": ()=>diffTrimmedLines,
    "diffWords": ()=>diffWords,
    "diffWordsWithSpace": ()=>diffWordsWithSpace,
    "formatPatch": ()=>formatPatch,
    "merge": ()=>merge,
    "parsePatch": ()=>parsePatch,
    "reversePatch": ()=>reversePatch,
    "structuredPatch": ()=>structuredPatch
});
function Diff() {}
Diff.prototype = {
    diff: function diff(oldString, newString) {
        var _options$timeout;
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var callback = options.callback;
        if (typeof options === 'function') {
            callback = options;
            options = {};
        }
        var self = this;
        function done(value) {
            value = self.postProcess(value, options);
            if (callback) {
                setTimeout(function() {
                    callback(value);
                }, 0);
                return true;
            } else {
                return value;
            }
        }
        // Allow subclasses to massage the input prior to running
        oldString = this.castInput(oldString, options);
        newString = this.castInput(newString, options);
        oldString = this.removeEmpty(this.tokenize(oldString, options));
        newString = this.removeEmpty(this.tokenize(newString, options));
        var newLen = newString.length, oldLen = oldString.length;
        var editLength = 1;
        var maxEditLength = newLen + oldLen;
        if (options.maxEditLength != null) {
            maxEditLength = Math.min(maxEditLength, options.maxEditLength);
        }
        var maxExecutionTime = (_options$timeout = options.timeout) !== null && _options$timeout !== void 0 ? _options$timeout : Infinity;
        var abortAfterTimestamp = Date.now() + maxExecutionTime;
        var bestPath = [
            {
                oldPos: -1,
                lastComponent: undefined
            }
        ];
        // Seed editLength = 0, i.e. the content starts with the same values
        var newPos = this.extractCommon(bestPath[0], newString, oldString, 0, options);
        if (bestPath[0].oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
            // Identity per the equality and tokenizer
            return done(buildValues(self, bestPath[0].lastComponent, newString, oldString, self.useLongestToken));
        }
        // Once we hit the right edge of the edit graph on some diagonal k, we can
        // definitely reach the end of the edit graph in no more than k edits, so
        // there's no point in considering any moves to diagonal k+1 any more (from
        // which we're guaranteed to need at least k+1 more edits).
        // Similarly, once we've reached the bottom of the edit graph, there's no
        // point considering moves to lower diagonals.
        // We record this fact by setting minDiagonalToConsider and
        // maxDiagonalToConsider to some finite value once we've hit the edge of
        // the edit graph.
        // This optimization is not faithful to the original algorithm presented in
        // Myers's paper, which instead pointlessly extends D-paths off the end of
        // the edit graph - see page 7 of Myers's paper which notes this point
        // explicitly and illustrates it with a diagram. This has major performance
        // implications for some common scenarios. For instance, to compute a diff
        // where the new text simply appends d characters on the end of the
        // original text of length n, the true Myers algorithm will take O(n+d^2)
        // time while this optimization needs only O(n+d) time.
        var minDiagonalToConsider = -Infinity, maxDiagonalToConsider = Infinity;
        // Main worker method. checks all permutations of a given edit length for acceptance.
        function execEditLength() {
            for(var diagonalPath = Math.max(minDiagonalToConsider, -editLength); diagonalPath <= Math.min(maxDiagonalToConsider, editLength); diagonalPath += 2){
                var basePath = void 0;
                var removePath = bestPath[diagonalPath - 1], addPath = bestPath[diagonalPath + 1];
                if (removePath) {
                    // No one else is going to attempt to use this value, clear it
                    bestPath[diagonalPath - 1] = undefined;
                }
                var canAdd = false;
                if (addPath) {
                    // what newPos will be after we do an insertion:
                    var addPathNewPos = addPath.oldPos - diagonalPath;
                    canAdd = addPath && 0 <= addPathNewPos && addPathNewPos < newLen;
                }
                var canRemove = removePath && removePath.oldPos + 1 < oldLen;
                if (!canAdd && !canRemove) {
                    // If this path is a terminal then prune
                    bestPath[diagonalPath] = undefined;
                    continue;
                }
                // Select the diagonal that we want to branch from. We select the prior
                // path whose position in the old string is the farthest from the origin
                // and does not pass the bounds of the diff graph
                if (!canRemove || canAdd && removePath.oldPos < addPath.oldPos) {
                    basePath = self.addToPath(addPath, true, false, 0, options);
                } else {
                    basePath = self.addToPath(removePath, false, true, 1, options);
                }
                newPos = self.extractCommon(basePath, newString, oldString, diagonalPath, options);
                if (basePath.oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
                    // If we have hit the end of both strings, then we are done
                    return done(buildValues(self, basePath.lastComponent, newString, oldString, self.useLongestToken));
                } else {
                    bestPath[diagonalPath] = basePath;
                    if (basePath.oldPos + 1 >= oldLen) {
                        maxDiagonalToConsider = Math.min(maxDiagonalToConsider, diagonalPath - 1);
                    }
                    if (newPos + 1 >= newLen) {
                        minDiagonalToConsider = Math.max(minDiagonalToConsider, diagonalPath + 1);
                    }
                }
            }
            editLength++;
        }
        // Performs the length of edit iteration. Is a bit fugly as this has to support the
        // sync and async mode which is never fun. Loops over execEditLength until a value
        // is produced, or until the edit length exceeds options.maxEditLength (if given),
        // in which case it will return undefined.
        if (callback) {
            (function exec() {
                setTimeout(function() {
                    if (editLength > maxEditLength || Date.now() > abortAfterTimestamp) {
                        return callback();
                    }
                    if (!execEditLength()) {
                        exec();
                    }
                }, 0);
            })();
        } else {
            while(editLength <= maxEditLength && Date.now() <= abortAfterTimestamp){
                var ret = execEditLength();
                if (ret) {
                    return ret;
                }
            }
        }
    },
    addToPath: function addToPath(path, added, removed, oldPosInc, options) {
        var last = path.lastComponent;
        if (last && !options.oneChangePerToken && last.added === added && last.removed === removed) {
            return {
                oldPos: path.oldPos + oldPosInc,
                lastComponent: {
                    count: last.count + 1,
                    added: added,
                    removed: removed,
                    previousComponent: last.previousComponent
                }
            };
        } else {
            return {
                oldPos: path.oldPos + oldPosInc,
                lastComponent: {
                    count: 1,
                    added: added,
                    removed: removed,
                    previousComponent: last
                }
            };
        }
    },
    extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath, options) {
        var newLen = newString.length, oldLen = oldString.length, oldPos = basePath.oldPos, newPos = oldPos - diagonalPath, commonCount = 0;
        while(newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(oldString[oldPos + 1], newString[newPos + 1], options)){
            newPos++;
            oldPos++;
            commonCount++;
            if (options.oneChangePerToken) {
                basePath.lastComponent = {
                    count: 1,
                    previousComponent: basePath.lastComponent,
                    added: false,
                    removed: false
                };
            }
        }
        if (commonCount && !options.oneChangePerToken) {
            basePath.lastComponent = {
                count: commonCount,
                previousComponent: basePath.lastComponent,
                added: false,
                removed: false
            };
        }
        basePath.oldPos = oldPos;
        return newPos;
    },
    equals: function equals(left, right, options) {
        if (options.comparator) {
            return options.comparator(left, right);
        } else {
            return left === right || options.ignoreCase && left.toLowerCase() === right.toLowerCase();
        }
    },
    removeEmpty: function removeEmpty(array) {
        var ret = [];
        for(var i = 0; i < array.length; i++){
            if (array[i]) {
                ret.push(array[i]);
            }
        }
        return ret;
    },
    castInput: function castInput(value) {
        return value;
    },
    tokenize: function tokenize(value) {
        return Array.from(value);
    },
    join: function join(chars) {
        return chars.join('');
    },
    postProcess: function postProcess(changeObjects) {
        return changeObjects;
    }
};
function buildValues(diff, lastComponent, newString, oldString, useLongestToken) {
    // First we convert our linked list of components in reverse order to an
    // array in the right order:
    var components = [];
    var nextComponent;
    while(lastComponent){
        components.push(lastComponent);
        nextComponent = lastComponent.previousComponent;
        delete lastComponent.previousComponent;
        lastComponent = nextComponent;
    }
    components.reverse();
    var componentPos = 0, componentLen = components.length, newPos = 0, oldPos = 0;
    for(; componentPos < componentLen; componentPos++){
        var component = components[componentPos];
        if (!component.removed) {
            if (!component.added && useLongestToken) {
                var value = newString.slice(newPos, newPos + component.count);
                value = value.map(function(value, i) {
                    var oldValue = oldString[oldPos + i];
                    return oldValue.length > value.length ? oldValue : value;
                });
                component.value = diff.join(value);
            } else {
                component.value = diff.join(newString.slice(newPos, newPos + component.count));
            }
            newPos += component.count;
            // Common case
            if (!component.added) {
                oldPos += component.count;
            }
        } else {
            component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
            oldPos += component.count;
        }
    }
    return components;
}
var characterDiff = new Diff();
function diffChars(oldStr, newStr, options) {
    return characterDiff.diff(oldStr, newStr, options);
}
function longestCommonPrefix(str1, str2) {
    var i;
    for(i = 0; i < str1.length && i < str2.length; i++){
        if (str1[i] != str2[i]) {
            return str1.slice(0, i);
        }
    }
    return str1.slice(0, i);
}
function longestCommonSuffix(str1, str2) {
    var i;
    // Unlike longestCommonPrefix, we need a special case to handle all scenarios
    // where we return the empty string since str1.slice(-0) will return the
    // entire string.
    if (!str1 || !str2 || str1[str1.length - 1] != str2[str2.length - 1]) {
        return '';
    }
    for(i = 0; i < str1.length && i < str2.length; i++){
        if (str1[str1.length - (i + 1)] != str2[str2.length - (i + 1)]) {
            return str1.slice(-i);
        }
    }
    return str1.slice(-i);
}
function replacePrefix(string, oldPrefix, newPrefix) {
    if (string.slice(0, oldPrefix.length) != oldPrefix) {
        throw Error("string ".concat(JSON.stringify(string), " doesn't start with prefix ").concat(JSON.stringify(oldPrefix), "; this is a bug"));
    }
    return newPrefix + string.slice(oldPrefix.length);
}
function replaceSuffix(string, oldSuffix, newSuffix) {
    if (!oldSuffix) {
        return string + newSuffix;
    }
    if (string.slice(-oldSuffix.length) != oldSuffix) {
        throw Error("string ".concat(JSON.stringify(string), " doesn't end with suffix ").concat(JSON.stringify(oldSuffix), "; this is a bug"));
    }
    return string.slice(0, -oldSuffix.length) + newSuffix;
}
function removePrefix(string, oldPrefix) {
    return replacePrefix(string, oldPrefix, '');
}
function removeSuffix(string, oldSuffix) {
    return replaceSuffix(string, oldSuffix, '');
}
function maximumOverlap(string1, string2) {
    return string2.slice(0, overlapCount(string1, string2));
}
// Nicked from https://stackoverflow.com/a/60422853/1709587
function overlapCount(a, b) {
    // Deal with cases where the strings differ in length
    var startA = 0;
    if (a.length > b.length) {
        startA = a.length - b.length;
    }
    var endB = b.length;
    if (a.length < b.length) {
        endB = a.length;
    }
    // Create a back-reference for each index
    //   that should be followed in case of a mismatch.
    //   We only need B to make these references:
    var map = Array(endB);
    var k = 0; // Index that lags behind j
    map[0] = 0;
    for(var j = 1; j < endB; j++){
        if (b[j] == b[k]) {
            map[j] = map[k]; // skip over the same character (optional optimisation)
        } else {
            map[j] = k;
        }
        while(k > 0 && b[j] != b[k]){
            k = map[k];
        }
        if (b[j] == b[k]) {
            k++;
        }
    }
    // Phase 2: use these references while iterating over A
    k = 0;
    for(var i = startA; i < a.length; i++){
        while(k > 0 && a[i] != b[k]){
            k = map[k];
        }
        if (a[i] == b[k]) {
            k++;
        }
    }
    return k;
}
/**
 * Returns true if the string consistently uses Windows line endings.
 */ function hasOnlyWinLineEndings(string) {
    return string.includes('\r\n') && !string.startsWith('\n') && !string.match(/[^\r]\n/);
}
/**
 * Returns true if the string consistently uses Unix line endings.
 */ function hasOnlyUnixLineEndings(string) {
    return !string.includes('\r\n') && string.includes('\n');
}
// Based on https://en.wikipedia.org/wiki/Latin_script_in_Unicode
//
// Ranges and exceptions:
// Latin-1 Supplement, 0080–00FF
//  - U+00D7  × Multiplication sign
//  - U+00F7  ÷ Division sign
// Latin Extended-A, 0100–017F
// Latin Extended-B, 0180–024F
// IPA Extensions, 0250–02AF
// Spacing Modifier Letters, 02B0–02FF
//  - U+02C7  ˇ &#711;  Caron
//  - U+02D8  ˘ &#728;  Breve
//  - U+02D9  ˙ &#729;  Dot Above
//  - U+02DA  ˚ &#730;  Ring Above
//  - U+02DB  ˛ &#731;  Ogonek
//  - U+02DC  ˜ &#732;  Small Tilde
//  - U+02DD  ˝ &#733;  Double Acute Accent
// Latin Extended Additional, 1E00–1EFF
var extendedWordChars = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}";
// Each token is one of the following:
// - A punctuation mark plus the surrounding whitespace
// - A word plus the surrounding whitespace
// - Pure whitespace (but only in the special case where this the entire text
//   is just whitespace)
//
// We have to include surrounding whitespace in the tokens because the two
// alternative approaches produce horribly broken results:
// * If we just discard the whitespace, we can't fully reproduce the original
//   text from the sequence of tokens and any attempt to render the diff will
//   get the whitespace wrong.
// * If we have separate tokens for whitespace, then in a typical text every
//   second token will be a single space character. But this often results in
//   the optimal diff between two texts being a perverse one that preserves
//   the spaces between words but deletes and reinserts actual common words.
//   See https://github.com/kpdecker/jsdiff/issues/160#issuecomment-1866099640
//   for an example.
//
// Keeping the surrounding whitespace of course has implications for .equals
// and .join, not just .tokenize.
// This regex does NOT fully implement the tokenization rules described above.
// Instead, it gives runs of whitespace their own "token". The tokenize method
// then handles stitching whitespace tokens onto adjacent word or punctuation
// tokens.
var tokenizeIncludingWhitespace = new RegExp("[".concat(extendedWordChars, "]+|\\s+|[^").concat(extendedWordChars, "]"), 'ug');
var wordDiff = new Diff();
wordDiff.equals = function(left, right, options) {
    if (options.ignoreCase) {
        left = left.toLowerCase();
        right = right.toLowerCase();
    }
    return left.trim() === right.trim();
};
wordDiff.tokenize = function(value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var parts;
    if (options.intlSegmenter) {
        if (options.intlSegmenter.resolvedOptions().granularity != 'word') {
            throw new Error('The segmenter passed must have a granularity of "word"');
        }
        parts = Array.from(options.intlSegmenter.segment(value), function(segment) {
            return segment.segment;
        });
    } else {
        parts = value.match(tokenizeIncludingWhitespace) || [];
    }
    var tokens = [];
    var prevPart = null;
    parts.forEach(function(part) {
        if (/\s/.test(part)) {
            if (prevPart == null) {
                tokens.push(part);
            } else {
                tokens.push(tokens.pop() + part);
            }
        } else if (/\s/.test(prevPart)) {
            if (tokens[tokens.length - 1] == prevPart) {
                tokens.push(tokens.pop() + part);
            } else {
                tokens.push(prevPart + part);
            }
        } else {
            tokens.push(part);
        }
        prevPart = part;
    });
    return tokens;
};
wordDiff.join = function(tokens) {
    // Tokens being joined here will always have appeared consecutively in the
    // same text, so we can simply strip off the leading whitespace from all the
    // tokens except the first (and except any whitespace-only tokens - but such
    // a token will always be the first and only token anyway) and then join them
    // and the whitespace around words and punctuation will end up correct.
    return tokens.map(function(token, i) {
        if (i == 0) {
            return token;
        } else {
            return token.replace(/^\s+/, '');
        }
    }).join('');
};
wordDiff.postProcess = function(changes, options) {
    if (!changes || options.oneChangePerToken) {
        return changes;
    }
    var lastKeep = null;
    // Change objects representing any insertion or deletion since the last
    // "keep" change object. There can be at most one of each.
    var insertion = null;
    var deletion = null;
    changes.forEach(function(change) {
        if (change.added) {
            insertion = change;
        } else if (change.removed) {
            deletion = change;
        } else {
            if (insertion || deletion) {
                // May be false at start of text
                dedupeWhitespaceInChangeObjects(lastKeep, deletion, insertion, change);
            }
            lastKeep = change;
            insertion = null;
            deletion = null;
        }
    });
    if (insertion || deletion) {
        dedupeWhitespaceInChangeObjects(lastKeep, deletion, insertion, null);
    }
    return changes;
};
function diffWords(oldStr, newStr, options) {
    // This option has never been documented and never will be (it's clearer to
    // just call `diffWordsWithSpace` directly if you need that behavior), but
    // has existed in jsdiff for a long time, so we retain support for it here
    // for the sake of backwards compatibility.
    if ((options === null || options === void 0 ? void 0 : options.ignoreWhitespace) != null && !options.ignoreWhitespace) {
        return diffWordsWithSpace(oldStr, newStr, options);
    }
    return wordDiff.diff(oldStr, newStr, options);
}
function dedupeWhitespaceInChangeObjects(startKeep, deletion, insertion, endKeep) {
    // Before returning, we tidy up the leading and trailing whitespace of the
    // change objects to eliminate cases where trailing whitespace in one object
    // is repeated as leading whitespace in the next.
    // Below are examples of the outcomes we want here to explain the code.
    // I=insert, K=keep, D=delete
    // 1. diffing 'foo bar baz' vs 'foo baz'
    //    Prior to cleanup, we have K:'foo ' D:' bar ' K:' baz'
    //    After cleanup, we want:   K:'foo ' D:'bar ' K:'baz'
    //
    // 2. Diffing 'foo bar baz' vs 'foo qux baz'
    //    Prior to cleanup, we have K:'foo ' D:' bar ' I:' qux ' K:' baz'
    //    After cleanup, we want K:'foo ' D:'bar' I:'qux' K:' baz'
    //
    // 3. Diffing 'foo\nbar baz' vs 'foo baz'
    //    Prior to cleanup, we have K:'foo ' D:'\nbar ' K:' baz'
    //    After cleanup, we want K'foo' D:'\nbar' K:' baz'
    //
    // 4. Diffing 'foo baz' vs 'foo\nbar baz'
    //    Prior to cleanup, we have K:'foo\n' I:'\nbar ' K:' baz'
    //    After cleanup, we ideally want K'foo' I:'\nbar' K:' baz'
    //    but don't actually manage this currently (the pre-cleanup change
    //    objects don't contain enough information to make it possible).
    //
    // 5. Diffing 'foo   bar baz' vs 'foo  baz'
    //    Prior to cleanup, we have K:'foo  ' D:'   bar ' K:'  baz'
    //    After cleanup, we want K:'foo  ' D:' bar ' K:'baz'
    //
    // Our handling is unavoidably imperfect in the case where there's a single
    // indel between keeps and the whitespace has changed. For instance, consider
    // diffing 'foo\tbar\nbaz' vs 'foo baz'. Unless we create an extra change
    // object to represent the insertion of the space character (which isn't even
    // a token), we have no way to avoid losing information about the texts'
    // original whitespace in the result we return. Still, we do our best to
    // output something that will look sensible if we e.g. print it with
    // insertions in green and deletions in red.
    // Between two "keep" change objects (or before the first or after the last
    // change object), we can have either:
    // * A "delete" followed by an "insert"
    // * Just an "insert"
    // * Just a "delete"
    // We handle the three cases separately.
    if (deletion && insertion) {
        var oldWsPrefix = deletion.value.match(/^\s*/)[0];
        var oldWsSuffix = deletion.value.match(/\s*$/)[0];
        var newWsPrefix = insertion.value.match(/^\s*/)[0];
        var newWsSuffix = insertion.value.match(/\s*$/)[0];
        if (startKeep) {
            var commonWsPrefix = longestCommonPrefix(oldWsPrefix, newWsPrefix);
            startKeep.value = replaceSuffix(startKeep.value, newWsPrefix, commonWsPrefix);
            deletion.value = removePrefix(deletion.value, commonWsPrefix);
            insertion.value = removePrefix(insertion.value, commonWsPrefix);
        }
        if (endKeep) {
            var commonWsSuffix = longestCommonSuffix(oldWsSuffix, newWsSuffix);
            endKeep.value = replacePrefix(endKeep.value, newWsSuffix, commonWsSuffix);
            deletion.value = removeSuffix(deletion.value, commonWsSuffix);
            insertion.value = removeSuffix(insertion.value, commonWsSuffix);
        }
    } else if (insertion) {
        // The whitespaces all reflect what was in the new text rather than
        // the old, so we essentially have no information about whitespace
        // insertion or deletion. We just want to dedupe the whitespace.
        // We do that by having each change object keep its trailing
        // whitespace and deleting duplicate leading whitespace where
        // present.
        if (startKeep) {
            insertion.value = insertion.value.replace(/^\s*/, '');
        }
        if (endKeep) {
            endKeep.value = endKeep.value.replace(/^\s*/, '');
        }
    // otherwise we've got a deletion and no insertion
    } else if (startKeep && endKeep) {
        var newWsFull = endKeep.value.match(/^\s*/)[0], delWsStart = deletion.value.match(/^\s*/)[0], delWsEnd = deletion.value.match(/\s*$/)[0];
        // Any whitespace that comes straight after startKeep in both the old and
        // new texts, assign to startKeep and remove from the deletion.
        var newWsStart = longestCommonPrefix(newWsFull, delWsStart);
        deletion.value = removePrefix(deletion.value, newWsStart);
        // Any whitespace that comes straight before endKeep in both the old and
        // new texts, and hasn't already been assigned to startKeep, assign to
        // endKeep and remove from the deletion.
        var newWsEnd = longestCommonSuffix(removePrefix(newWsFull, newWsStart), delWsEnd);
        deletion.value = removeSuffix(deletion.value, newWsEnd);
        endKeep.value = replacePrefix(endKeep.value, newWsFull, newWsEnd);
        // If there's any whitespace from the new text that HASN'T already been
        // assigned, assign it to the start:
        startKeep.value = replaceSuffix(startKeep.value, newWsFull, newWsFull.slice(0, newWsFull.length - newWsEnd.length));
    } else if (endKeep) {
        // We are at the start of the text. Preserve all the whitespace on
        // endKeep, and just remove whitespace from the end of deletion to the
        // extent that it overlaps with the start of endKeep.
        var endKeepWsPrefix = endKeep.value.match(/^\s*/)[0];
        var deletionWsSuffix = deletion.value.match(/\s*$/)[0];
        var overlap = maximumOverlap(deletionWsSuffix, endKeepWsPrefix);
        deletion.value = removeSuffix(deletion.value, overlap);
    } else if (startKeep) {
        // We are at the END of the text. Preserve all the whitespace on
        // startKeep, and just remove whitespace from the start of deletion to
        // the extent that it overlaps with the end of startKeep.
        var startKeepWsSuffix = startKeep.value.match(/\s*$/)[0];
        var deletionWsPrefix = deletion.value.match(/^\s*/)[0];
        var _overlap = maximumOverlap(startKeepWsSuffix, deletionWsPrefix);
        deletion.value = removePrefix(deletion.value, _overlap);
    }
}
var wordWithSpaceDiff = new Diff();
wordWithSpaceDiff.tokenize = function(value) {
    // Slightly different to the tokenizeIncludingWhitespace regex used above in
    // that this one treats each individual newline as a distinct tokens, rather
    // than merging them into other surrounding whitespace. This was requested
    // in https://github.com/kpdecker/jsdiff/issues/180 &
    //    https://github.com/kpdecker/jsdiff/issues/211
    var regex = new RegExp("(\\r?\\n)|[".concat(extendedWordChars, "]+|[^\\S\\n\\r]+|[^").concat(extendedWordChars, "]"), 'ug');
    return value.match(regex) || [];
};
function diffWordsWithSpace(oldStr, newStr, options) {
    return wordWithSpaceDiff.diff(oldStr, newStr, options);
}
function generateOptions(options, defaults) {
    if (typeof options === 'function') {
        defaults.callback = options;
    } else if (options) {
        for(var name in options){
            /* istanbul ignore else */ if (options.hasOwnProperty(name)) {
                defaults[name] = options[name];
            }
        }
    }
    return defaults;
}
var lineDiff = new Diff();
lineDiff.tokenize = function(value, options) {
    if (options.stripTrailingCr) {
        // remove one \r before \n to match GNU diff's --strip-trailing-cr behavior
        value = value.replace(/\r\n/g, '\n');
    }
    var retLines = [], linesAndNewlines = value.split(/(\n|\r\n)/);
    // Ignore the final empty token that occurs if the string ends with a new line
    if (!linesAndNewlines[linesAndNewlines.length - 1]) {
        linesAndNewlines.pop();
    }
    // Merge the content and line separators into single tokens
    for(var i = 0; i < linesAndNewlines.length; i++){
        var line = linesAndNewlines[i];
        if (i % 2 && !options.newlineIsToken) {
            retLines[retLines.length - 1] += line;
        } else {
            retLines.push(line);
        }
    }
    return retLines;
};
lineDiff.equals = function(left, right, options) {
    // If we're ignoring whitespace, we need to normalise lines by stripping
    // whitespace before checking equality. (This has an annoying interaction
    // with newlineIsToken that requires special handling: if newlines get their
    // own token, then we DON'T want to trim the *newline* tokens down to empty
    // strings, since this would cause us to treat whitespace-only line content
    // as equal to a separator between lines, which would be weird and
    // inconsistent with the documented behavior of the options.)
    if (options.ignoreWhitespace) {
        if (!options.newlineIsToken || !left.includes('\n')) {
            left = left.trim();
        }
        if (!options.newlineIsToken || !right.includes('\n')) {
            right = right.trim();
        }
    } else if (options.ignoreNewlineAtEof && !options.newlineIsToken) {
        if (left.endsWith('\n')) {
            left = left.slice(0, -1);
        }
        if (right.endsWith('\n')) {
            right = right.slice(0, -1);
        }
    }
    return Diff.prototype.equals.call(this, left, right, options);
};
function diffLines(oldStr, newStr, callback) {
    return lineDiff.diff(oldStr, newStr, callback);
}
// Kept for backwards compatibility. This is a rather arbitrary wrapper method
// that just calls `diffLines` with `ignoreWhitespace: true`. It's confusing to
// have two ways to do exactly the same thing in the API, so we no longer
// document this one (library users should explicitly use `diffLines` with
// `ignoreWhitespace: true` instead) but we keep it around to maintain
// compatibility with code that used old versions.
function diffTrimmedLines(oldStr, newStr, callback) {
    var options = generateOptions(callback, {
        ignoreWhitespace: true
    });
    return lineDiff.diff(oldStr, newStr, options);
}
var sentenceDiff = new Diff();
sentenceDiff.tokenize = function(value) {
    return value.split(/(\S.+?[.!?])(?=\s+|$)/);
};
function diffSentences(oldStr, newStr, callback) {
    return sentenceDiff.diff(oldStr, newStr, callback);
}
var cssDiff = new Diff();
cssDiff.tokenize = function(value) {
    return value.split(/([{}:;,]|\s+)/);
};
function diffCss(oldStr, newStr, callback) {
    return cssDiff.diff(oldStr, newStr, callback);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var jsonDiff = new Diff();
// Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
// dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:
jsonDiff.useLongestToken = true;
jsonDiff.tokenize = lineDiff.tokenize;
jsonDiff.castInput = function(value, options) {
    var undefinedReplacement = options.undefinedReplacement, _options$stringifyRep = options.stringifyReplacer, stringifyReplacer = _options$stringifyRep === void 0 ? function(k, v) {
        return typeof v === 'undefined' ? undefinedReplacement : v;
    } : _options$stringifyRep;
    return typeof value === 'string' ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, '  ');
};
jsonDiff.equals = function(left, right, options) {
    return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'), options);
};
function diffJson(oldObj, newObj, options) {
    return jsonDiff.diff(oldObj, newObj, options);
}
// This function handles the presence of circular references by bailing out when encountering an
// object that is already on the "stack" of items being processed. Accepts an optional replacer
function canonicalize(obj, stack, replacementStack, replacer, key) {
    stack = stack || [];
    replacementStack = replacementStack || [];
    if (replacer) {
        obj = replacer(key, obj);
    }
    var i;
    for(i = 0; i < stack.length; i += 1){
        if (stack[i] === obj) {
            return replacementStack[i];
        }
    }
    var canonicalizedObj;
    if ('[object Array]' === Object.prototype.toString.call(obj)) {
        stack.push(obj);
        canonicalizedObj = new Array(obj.length);
        replacementStack.push(canonicalizedObj);
        for(i = 0; i < obj.length; i += 1){
            canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
        }
        stack.pop();
        replacementStack.pop();
        return canonicalizedObj;
    }
    if (obj && obj.toJSON) {
        obj = obj.toJSON();
    }
    if (_typeof(obj) === 'object' && obj !== null) {
        stack.push(obj);
        canonicalizedObj = {};
        replacementStack.push(canonicalizedObj);
        var sortedKeys = [], _key;
        for(_key in obj){
            /* istanbul ignore else */ if (Object.prototype.hasOwnProperty.call(obj, _key)) {
                sortedKeys.push(_key);
            }
        }
        sortedKeys.sort();
        for(i = 0; i < sortedKeys.length; i += 1){
            _key = sortedKeys[i];
            canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
        }
        stack.pop();
        replacementStack.pop();
    } else {
        canonicalizedObj = obj;
    }
    return canonicalizedObj;
}
var arrayDiff = new Diff();
arrayDiff.tokenize = function(value) {
    return value.slice();
};
arrayDiff.join = arrayDiff.removeEmpty = function(value) {
    return value;
};
function diffArrays(oldArr, newArr, callback) {
    return arrayDiff.diff(oldArr, newArr, callback);
}
function unixToWin(patch) {
    if (Array.isArray(patch)) {
        return patch.map(unixToWin);
    }
    return _objectSpread2(_objectSpread2({}, patch), {}, {
        hunks: patch.hunks.map(function(hunk) {
            return _objectSpread2(_objectSpread2({}, hunk), {}, {
                lines: hunk.lines.map(function(line, i) {
                    var _hunk$lines;
                    return line.startsWith('\\') || line.endsWith('\r') || (_hunk$lines = hunk.lines[i + 1]) !== null && _hunk$lines !== void 0 && _hunk$lines.startsWith('\\') ? line : line + '\r';
                })
            });
        })
    });
}
function winToUnix(patch) {
    if (Array.isArray(patch)) {
        return patch.map(winToUnix);
    }
    return _objectSpread2(_objectSpread2({}, patch), {}, {
        hunks: patch.hunks.map(function(hunk) {
            return _objectSpread2(_objectSpread2({}, hunk), {}, {
                lines: hunk.lines.map(function(line) {
                    return line.endsWith('\r') ? line.substring(0, line.length - 1) : line;
                })
            });
        })
    });
}
/**
 * Returns true if the patch consistently uses Unix line endings (or only involves one line and has
 * no line endings).
 */ function isUnix(patch) {
    if (!Array.isArray(patch)) {
        patch = [
            patch
        ];
    }
    return !patch.some(function(index) {
        return index.hunks.some(function(hunk) {
            return hunk.lines.some(function(line) {
                return !line.startsWith('\\') && line.endsWith('\r');
            });
        });
    });
}
/**
 * Returns true if the patch uses Windows line endings and only Windows line endings.
 */ function isWin(patch) {
    if (!Array.isArray(patch)) {
        patch = [
            patch
        ];
    }
    return patch.some(function(index) {
        return index.hunks.some(function(hunk) {
            return hunk.lines.some(function(line) {
                return line.endsWith('\r');
            });
        });
    }) && patch.every(function(index) {
        return index.hunks.every(function(hunk) {
            return hunk.lines.every(function(line, i) {
                var _hunk$lines2;
                return line.startsWith('\\') || line.endsWith('\r') || ((_hunk$lines2 = hunk.lines[i + 1]) === null || _hunk$lines2 === void 0 ? void 0 : _hunk$lines2.startsWith('\\'));
            });
        });
    });
}
function parsePatch(uniDiff) {
    var diffstr = uniDiff.split(/\n/), list = [], i = 0;
    function parseIndex() {
        var index = {};
        list.push(index);
        // Parse diff metadata
        while(i < diffstr.length){
            var line = diffstr[i];
            // File header found, end parsing diff metadata
            if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
                break;
            }
            // Diff index
            var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);
            if (header) {
                index.index = header[1];
            }
            i++;
        }
        // Parse file headers if they are defined. Unified diff requires them, but
        // there's no technical issues to have an isolated hunk without file header
        parseFileHeader(index);
        parseFileHeader(index);
        // Parse hunks
        index.hunks = [];
        while(i < diffstr.length){
            var _line = diffstr[i];
            if (/^(Index:\s|diff\s|\-\-\-\s|\+\+\+\s|===================================================================)/.test(_line)) {
                break;
            } else if (/^@@/.test(_line)) {
                index.hunks.push(parseHunk());
            } else if (_line) {
                throw new Error('Unknown line ' + (i + 1) + ' ' + JSON.stringify(_line));
            } else {
                i++;
            }
        }
    }
    // Parses the --- and +++ headers, if none are found, no lines
    // are consumed.
    function parseFileHeader(index) {
        var fileHeader = /^(---|\+\+\+)\s+(.*)\r?$/.exec(diffstr[i]);
        if (fileHeader) {
            var keyPrefix = fileHeader[1] === '---' ? 'old' : 'new';
            var data = fileHeader[2].split('\t', 2);
            var fileName = data[0].replace(/\\\\/g, '\\');
            if (/^".*"$/.test(fileName)) {
                fileName = fileName.substr(1, fileName.length - 2);
            }
            index[keyPrefix + 'FileName'] = fileName;
            index[keyPrefix + 'Header'] = (data[1] || '').trim();
            i++;
        }
    }
    // Parses a hunk
    // This assumes that we are at the start of a hunk.
    function parseHunk() {
        var chunkHeaderIndex = i, chunkHeaderLine = diffstr[i++], chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
        var hunk = {
            oldStart: +chunkHeader[1],
            oldLines: typeof chunkHeader[2] === 'undefined' ? 1 : +chunkHeader[2],
            newStart: +chunkHeader[3],
            newLines: typeof chunkHeader[4] === 'undefined' ? 1 : +chunkHeader[4],
            lines: []
        };
        // Unified Diff Format quirk: If the chunk size is 0,
        // the first number is one lower than one would expect.
        // https://www.artima.com/weblogs/viewpost.jsp?thread=164293
        if (hunk.oldLines === 0) {
            hunk.oldStart += 1;
        }
        if (hunk.newLines === 0) {
            hunk.newStart += 1;
        }
        var addCount = 0, removeCount = 0;
        for(; i < diffstr.length && (removeCount < hunk.oldLines || addCount < hunk.newLines || (_diffstr$i = diffstr[i]) !== null && _diffstr$i !== void 0 && _diffstr$i.startsWith('\\')); i++){
            var _diffstr$i;
            var operation = diffstr[i].length == 0 && i != diffstr.length - 1 ? ' ' : diffstr[i][0];
            if (operation === '+' || operation === '-' || operation === ' ' || operation === '\\') {
                hunk.lines.push(diffstr[i]);
                if (operation === '+') {
                    addCount++;
                } else if (operation === '-') {
                    removeCount++;
                } else if (operation === ' ') {
                    addCount++;
                    removeCount++;
                }
            } else {
                throw new Error("Hunk at line ".concat(chunkHeaderIndex + 1, " contained invalid line ").concat(diffstr[i]));
            }
        }
        // Handle the empty block count case
        if (!addCount && hunk.newLines === 1) {
            hunk.newLines = 0;
        }
        if (!removeCount && hunk.oldLines === 1) {
            hunk.oldLines = 0;
        }
        // Perform sanity checking
        if (addCount !== hunk.newLines) {
            throw new Error('Added line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
        }
        if (removeCount !== hunk.oldLines) {
            throw new Error('Removed line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
        }
        return hunk;
    }
    while(i < diffstr.length){
        parseIndex();
    }
    return list;
}
// Iterator that traverses in the range of [min, max], stepping
// by distance from a given start position. I.e. for [0, 4], with
// start of 2, this will iterate 2, 3, 1, 4, 0.
function distanceIterator(start, minLine, maxLine) {
    var wantForward = true, backwardExhausted = false, forwardExhausted = false, localOffset = 1;
    return function iterator() {
        if (wantForward && !forwardExhausted) {
            if (backwardExhausted) {
                localOffset++;
            } else {
                wantForward = false;
            }
            // Check if trying to fit beyond text length, and if not, check it fits
            // after offset location (or desired location on first iteration)
            if (start + localOffset <= maxLine) {
                return start + localOffset;
            }
            forwardExhausted = true;
        }
        if (!backwardExhausted) {
            if (!forwardExhausted) {
                wantForward = true;
            }
            // Check if trying to fit before text beginning, and if not, check it fits
            // before offset location
            if (minLine <= start - localOffset) {
                return start - localOffset++;
            }
            backwardExhausted = true;
            return iterator();
        }
    // We tried to fit hunk before text beginning and beyond text length, then
    // hunk can't fit on the text. Return undefined
    };
}
function applyPatch(source, uniDiff) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (typeof uniDiff === 'string') {
        uniDiff = parsePatch(uniDiff);
    }
    if (Array.isArray(uniDiff)) {
        if (uniDiff.length > 1) {
            throw new Error('applyPatch only works with a single input.');
        }
        uniDiff = uniDiff[0];
    }
    if (options.autoConvertLineEndings || options.autoConvertLineEndings == null) {
        if (hasOnlyWinLineEndings(source) && isUnix(uniDiff)) {
            uniDiff = unixToWin(uniDiff);
        } else if (hasOnlyUnixLineEndings(source) && isWin(uniDiff)) {
            uniDiff = winToUnix(uniDiff);
        }
    }
    // Apply the diff to the input
    var lines = source.split('\n'), hunks = uniDiff.hunks, compareLine = options.compareLine || function(lineNumber, line, operation, patchContent) {
        return line === patchContent;
    }, fuzzFactor = options.fuzzFactor || 0, minLine = 0;
    if (fuzzFactor < 0 || !Number.isInteger(fuzzFactor)) {
        throw new Error('fuzzFactor must be a non-negative integer');
    }
    // Special case for empty patch.
    if (!hunks.length) {
        return source;
    }
    // Before anything else, handle EOFNL insertion/removal. If the patch tells us to make a change
    // to the EOFNL that is redundant/impossible - i.e. to remove a newline that's not there, or add a
    // newline that already exists - then we either return false and fail to apply the patch (if
    // fuzzFactor is 0) or simply ignore the problem and do nothing (if fuzzFactor is >0).
    // If we do need to remove/add a newline at EOF, this will always be in the final hunk:
    var prevLine = '', removeEOFNL = false, addEOFNL = false;
    for(var i = 0; i < hunks[hunks.length - 1].lines.length; i++){
        var line = hunks[hunks.length - 1].lines[i];
        if (line[0] == '\\') {
            if (prevLine[0] == '+') {
                removeEOFNL = true;
            } else if (prevLine[0] == '-') {
                addEOFNL = true;
            }
        }
        prevLine = line;
    }
    if (removeEOFNL) {
        if (addEOFNL) {
            // This means the final line gets changed but doesn't have a trailing newline in either the
            // original or patched version. In that case, we do nothing if fuzzFactor > 0, and if
            // fuzzFactor is 0, we simply validate that the source file has no trailing newline.
            if (!fuzzFactor && lines[lines.length - 1] == '') {
                return false;
            }
        } else if (lines[lines.length - 1] == '') {
            lines.pop();
        } else if (!fuzzFactor) {
            return false;
        }
    } else if (addEOFNL) {
        if (lines[lines.length - 1] != '') {
            lines.push('');
        } else if (!fuzzFactor) {
            return false;
        }
    }
    /**
   * Checks if the hunk can be made to fit at the provided location with at most `maxErrors`
   * insertions, substitutions, or deletions, while ensuring also that:
   * - lines deleted in the hunk match exactly, and
   * - wherever an insertion operation or block of insertion operations appears in the hunk, the
   *   immediately preceding and following lines of context match exactly
   *
   * `toPos` should be set such that lines[toPos] is meant to match hunkLines[0].
   *
   * If the hunk can be applied, returns an object with properties `oldLineLastI` and
   * `replacementLines`. Otherwise, returns null.
   */ function applyHunk(hunkLines, toPos, maxErrors) {
        var hunkLinesI = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var lastContextLineMatched = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
        var patchedLines = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
        var patchedLinesLength = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
        var nConsecutiveOldContextLines = 0;
        var nextContextLineMustMatch = false;
        for(; hunkLinesI < hunkLines.length; hunkLinesI++){
            var hunkLine = hunkLines[hunkLinesI], operation = hunkLine.length > 0 ? hunkLine[0] : ' ', content = hunkLine.length > 0 ? hunkLine.substr(1) : hunkLine;
            if (operation === '-') {
                if (compareLine(toPos + 1, lines[toPos], operation, content)) {
                    toPos++;
                    nConsecutiveOldContextLines = 0;
                } else {
                    if (!maxErrors || lines[toPos] == null) {
                        return null;
                    }
                    patchedLines[patchedLinesLength] = lines[toPos];
                    return applyHunk(hunkLines, toPos + 1, maxErrors - 1, hunkLinesI, false, patchedLines, patchedLinesLength + 1);
                }
            }
            if (operation === '+') {
                if (!lastContextLineMatched) {
                    return null;
                }
                patchedLines[patchedLinesLength] = content;
                patchedLinesLength++;
                nConsecutiveOldContextLines = 0;
                nextContextLineMustMatch = true;
            }
            if (operation === ' ') {
                nConsecutiveOldContextLines++;
                patchedLines[patchedLinesLength] = lines[toPos];
                if (compareLine(toPos + 1, lines[toPos], operation, content)) {
                    patchedLinesLength++;
                    lastContextLineMatched = true;
                    nextContextLineMustMatch = false;
                    toPos++;
                } else {
                    if (nextContextLineMustMatch || !maxErrors) {
                        return null;
                    }
                    // Consider 3 possibilities in sequence:
                    // 1. lines contains a *substitution* not included in the patch context, or
                    // 2. lines contains an *insertion* not included in the patch context, or
                    // 3. lines contains a *deletion* not included in the patch context
                    // The first two options are of course only possible if the line from lines is non-null -
                    // i.e. only option 3 is possible if we've overrun the end of the old file.
                    return lines[toPos] && (applyHunk(hunkLines, toPos + 1, maxErrors - 1, hunkLinesI + 1, false, patchedLines, patchedLinesLength + 1) || applyHunk(hunkLines, toPos + 1, maxErrors - 1, hunkLinesI, false, patchedLines, patchedLinesLength + 1)) || applyHunk(hunkLines, toPos, maxErrors - 1, hunkLinesI + 1, false, patchedLines, patchedLinesLength);
                }
            }
        }
        // Before returning, trim any unmodified context lines off the end of patchedLines and reduce
        // toPos (and thus oldLineLastI) accordingly. This allows later hunks to be applied to a region
        // that starts in this hunk's trailing context.
        patchedLinesLength -= nConsecutiveOldContextLines;
        toPos -= nConsecutiveOldContextLines;
        patchedLines.length = patchedLinesLength;
        return {
            patchedLines: patchedLines,
            oldLineLastI: toPos - 1
        };
    }
    var resultLines = [];
    // Search best fit offsets for each hunk based on the previous ones
    var prevHunkOffset = 0;
    for(var _i = 0; _i < hunks.length; _i++){
        var hunk = hunks[_i];
        var hunkResult = void 0;
        var maxLine = lines.length - hunk.oldLines + fuzzFactor;
        var toPos = void 0;
        for(var maxErrors = 0; maxErrors <= fuzzFactor; maxErrors++){
            toPos = hunk.oldStart + prevHunkOffset - 1;
            var iterator = distanceIterator(toPos, minLine, maxLine);
            for(; toPos !== undefined; toPos = iterator()){
                hunkResult = applyHunk(hunk.lines, toPos, maxErrors);
                if (hunkResult) {
                    break;
                }
            }
            if (hunkResult) {
                break;
            }
        }
        if (!hunkResult) {
            return false;
        }
        // Copy everything from the end of where we applied the last hunk to the start of this hunk
        for(var _i2 = minLine; _i2 < toPos; _i2++){
            resultLines.push(lines[_i2]);
        }
        // Add the lines produced by applying the hunk:
        for(var _i3 = 0; _i3 < hunkResult.patchedLines.length; _i3++){
            var _line = hunkResult.patchedLines[_i3];
            resultLines.push(_line);
        }
        // Set lower text limit to end of the current hunk, so next ones don't try
        // to fit over already patched text
        minLine = hunkResult.oldLineLastI + 1;
        // Note the offset between where the patch said the hunk should've applied and where we
        // applied it, so we can adjust future hunks accordingly:
        prevHunkOffset = toPos + 1 - hunk.oldStart;
    }
    // Copy over the rest of the lines from the old text
    for(var _i4 = minLine; _i4 < lines.length; _i4++){
        resultLines.push(lines[_i4]);
    }
    return resultLines.join('\n');
}
// Wrapper that supports multiple file patches via callbacks.
function applyPatches(uniDiff, options) {
    if (typeof uniDiff === 'string') {
        uniDiff = parsePatch(uniDiff);
    }
    var currentIndex = 0;
    function processIndex() {
        var index = uniDiff[currentIndex++];
        if (!index) {
            return options.complete();
        }
        options.loadFile(index, function(err, data) {
            if (err) {
                return options.complete(err);
            }
            var updatedContent = applyPatch(data, index, options);
            options.patched(index, updatedContent, function(err) {
                if (err) {
                    return options.complete(err);
                }
                processIndex();
            });
        });
    }
    processIndex();
}
function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
    if (!options) {
        options = {};
    }
    if (typeof options === 'function') {
        options = {
            callback: options
        };
    }
    if (typeof options.context === 'undefined') {
        options.context = 4;
    }
    if (options.newlineIsToken) {
        throw new Error('newlineIsToken may not be used with patch-generation functions, only with diffing functions');
    }
    if (!options.callback) {
        return diffLinesResultToPatch(diffLines(oldStr, newStr, options));
    } else {
        var _options = options, _callback = _options.callback;
        diffLines(oldStr, newStr, _objectSpread2(_objectSpread2({}, options), {}, {
            callback: function callback(diff) {
                var patch = diffLinesResultToPatch(diff);
                _callback(patch);
            }
        }));
    }
    function diffLinesResultToPatch(diff) {
        // STEP 1: Build up the patch with no "\ No newline at end of file" lines and with the arrays
        //         of lines containing trailing newline characters. We'll tidy up later...
        if (!diff) {
            return;
        }
        diff.push({
            value: '',
            lines: []
        }); // Append an empty value to make cleanup easier
        function contextLines(lines) {
            return lines.map(function(entry) {
                return ' ' + entry;
            });
        }
        var hunks = [];
        var oldRangeStart = 0, newRangeStart = 0, curRange = [], oldLine = 1, newLine = 1;
        var _loop = function _loop() {
            var current = diff[i], lines = current.lines || splitLines(current.value);
            current.lines = lines;
            if (current.added || current.removed) {
                var _curRange;
                // If we have previous context, start with that
                if (!oldRangeStart) {
                    var prev = diff[i - 1];
                    oldRangeStart = oldLine;
                    newRangeStart = newLine;
                    if (prev) {
                        curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
                        oldRangeStart -= curRange.length;
                        newRangeStart -= curRange.length;
                    }
                }
                // Output our changes
                (_curRange = curRange).push.apply(_curRange, _toConsumableArray(lines.map(function(entry) {
                    return (current.added ? '+' : '-') + entry;
                })));
                // Track the updated file position
                if (current.added) {
                    newLine += lines.length;
                } else {
                    oldLine += lines.length;
                }
            } else {
                // Identical context lines. Track line changes
                if (oldRangeStart) {
                    // Close out any changes that have been output (or join overlapping)
                    if (lines.length <= options.context * 2 && i < diff.length - 2) {
                        var _curRange2;
                        // Overlapping
                        (_curRange2 = curRange).push.apply(_curRange2, _toConsumableArray(contextLines(lines)));
                    } else {
                        var _curRange3;
                        // end the range and output
                        var contextSize = Math.min(lines.length, options.context);
                        (_curRange3 = curRange).push.apply(_curRange3, _toConsumableArray(contextLines(lines.slice(0, contextSize))));
                        var _hunk = {
                            oldStart: oldRangeStart,
                            oldLines: oldLine - oldRangeStart + contextSize,
                            newStart: newRangeStart,
                            newLines: newLine - newRangeStart + contextSize,
                            lines: curRange
                        };
                        hunks.push(_hunk);
                        oldRangeStart = 0;
                        newRangeStart = 0;
                        curRange = [];
                    }
                }
                oldLine += lines.length;
                newLine += lines.length;
            }
        };
        for(var i = 0; i < diff.length; i++){
            _loop();
        }
        // Step 2: eliminate the trailing `\n` from each line of each hunk, and, where needed, add
        //         "\ No newline at end of file".
        for(var _i = 0, _hunks = hunks; _i < _hunks.length; _i++){
            var hunk = _hunks[_i];
            for(var _i2 = 0; _i2 < hunk.lines.length; _i2++){
                if (hunk.lines[_i2].endsWith('\n')) {
                    hunk.lines[_i2] = hunk.lines[_i2].slice(0, -1);
                } else {
                    hunk.lines.splice(_i2 + 1, 0, '\\ No newline at end of file');
                    _i2++; // Skip the line we just added, then continue iterating
                }
            }
        }
        return {
            oldFileName: oldFileName,
            newFileName: newFileName,
            oldHeader: oldHeader,
            newHeader: newHeader,
            hunks: hunks
        };
    }
}
function formatPatch(diff) {
    if (Array.isArray(diff)) {
        return diff.map(formatPatch).join('\n');
    }
    var ret = [];
    if (diff.oldFileName == diff.newFileName) {
        ret.push('Index: ' + diff.oldFileName);
    }
    ret.push('===================================================================');
    ret.push('--- ' + diff.oldFileName + (typeof diff.oldHeader === 'undefined' ? '' : '\t' + diff.oldHeader));
    ret.push('+++ ' + diff.newFileName + (typeof diff.newHeader === 'undefined' ? '' : '\t' + diff.newHeader));
    for(var i = 0; i < diff.hunks.length; i++){
        var hunk = diff.hunks[i];
        // Unified Diff Format quirk: If the chunk size is 0,
        // the first number is one lower than one would expect.
        // https://www.artima.com/weblogs/viewpost.jsp?thread=164293
        if (hunk.oldLines === 0) {
            hunk.oldStart -= 1;
        }
        if (hunk.newLines === 0) {
            hunk.newStart -= 1;
        }
        ret.push('@@ -' + hunk.oldStart + ',' + hunk.oldLines + ' +' + hunk.newStart + ',' + hunk.newLines + ' @@');
        ret.push.apply(ret, hunk.lines);
    }
    return ret.join('\n') + '\n';
}
function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
    var _options2;
    if (typeof options === 'function') {
        options = {
            callback: options
        };
    }
    if (!((_options2 = options) !== null && _options2 !== void 0 && _options2.callback)) {
        var patchObj = structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options);
        if (!patchObj) {
            return;
        }
        return formatPatch(patchObj);
    } else {
        var _options3 = options, _callback2 = _options3.callback;
        structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, _objectSpread2(_objectSpread2({}, options), {}, {
            callback: function callback(patchObj) {
                if (!patchObj) {
                    _callback2();
                } else {
                    _callback2(formatPatch(patchObj));
                }
            }
        }));
    }
}
function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
    return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
}
/**
 * Split `text` into an array of lines, including the trailing newline character (where present)
 */ function splitLines(text) {
    var hasTrailingNl = text.endsWith('\n');
    var result = text.split('\n').map(function(line) {
        return line + '\n';
    });
    if (hasTrailingNl) {
        result.pop();
    } else {
        result.push(result.pop().slice(0, -1));
    }
    return result;
}
function arrayEqual(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    return arrayStartsWith(a, b);
}
function arrayStartsWith(array, start) {
    if (start.length > array.length) {
        return false;
    }
    for(var i = 0; i < start.length; i++){
        if (start[i] !== array[i]) {
            return false;
        }
    }
    return true;
}
function calcLineCount(hunk) {
    var _calcOldNewLineCount = calcOldNewLineCount(hunk.lines), oldLines = _calcOldNewLineCount.oldLines, newLines = _calcOldNewLineCount.newLines;
    if (oldLines !== undefined) {
        hunk.oldLines = oldLines;
    } else {
        delete hunk.oldLines;
    }
    if (newLines !== undefined) {
        hunk.newLines = newLines;
    } else {
        delete hunk.newLines;
    }
}
function merge(mine, theirs, base) {
    mine = loadPatch(mine, base);
    theirs = loadPatch(theirs, base);
    var ret = {};
    // For index we just let it pass through as it doesn't have any necessary meaning.
    // Leaving sanity checks on this to the API consumer that may know more about the
    // meaning in their own context.
    if (mine.index || theirs.index) {
        ret.index = mine.index || theirs.index;
    }
    if (mine.newFileName || theirs.newFileName) {
        if (!fileNameChanged(mine)) {
            // No header or no change in ours, use theirs (and ours if theirs does not exist)
            ret.oldFileName = theirs.oldFileName || mine.oldFileName;
            ret.newFileName = theirs.newFileName || mine.newFileName;
            ret.oldHeader = theirs.oldHeader || mine.oldHeader;
            ret.newHeader = theirs.newHeader || mine.newHeader;
        } else if (!fileNameChanged(theirs)) {
            // No header or no change in theirs, use ours
            ret.oldFileName = mine.oldFileName;
            ret.newFileName = mine.newFileName;
            ret.oldHeader = mine.oldHeader;
            ret.newHeader = mine.newHeader;
        } else {
            // Both changed... figure it out
            ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
            ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
            ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
            ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
        }
    }
    ret.hunks = [];
    var mineIndex = 0, theirsIndex = 0, mineOffset = 0, theirsOffset = 0;
    while(mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length){
        var mineCurrent = mine.hunks[mineIndex] || {
            oldStart: Infinity
        }, theirsCurrent = theirs.hunks[theirsIndex] || {
            oldStart: Infinity
        };
        if (hunkBefore(mineCurrent, theirsCurrent)) {
            // This patch does not overlap with any of the others, yay.
            ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
            mineIndex++;
            theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
        } else if (hunkBefore(theirsCurrent, mineCurrent)) {
            // This patch does not overlap with any of the others, yay.
            ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
            theirsIndex++;
            mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
        } else {
            // Overlap, merge as best we can
            var mergedHunk = {
                oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
                oldLines: 0,
                newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
                newLines: 0,
                lines: []
            };
            mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
            theirsIndex++;
            mineIndex++;
            ret.hunks.push(mergedHunk);
        }
    }
    return ret;
}
function loadPatch(param, base) {
    if (typeof param === 'string') {
        if (/^@@/m.test(param) || /^Index:/m.test(param)) {
            return parsePatch(param)[0];
        }
        if (!base) {
            throw new Error('Must provide a base reference or pass in a patch');
        }
        return structuredPatch(undefined, undefined, base, param);
    }
    return param;
}
function fileNameChanged(patch) {
    return patch.newFileName && patch.newFileName !== patch.oldFileName;
}
function selectField(index, mine, theirs) {
    if (mine === theirs) {
        return mine;
    } else {
        index.conflict = true;
        return {
            mine: mine,
            theirs: theirs
        };
    }
}
function hunkBefore(test, check) {
    return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
}
function cloneHunk(hunk, offset) {
    return {
        oldStart: hunk.oldStart,
        oldLines: hunk.oldLines,
        newStart: hunk.newStart + offset,
        newLines: hunk.newLines,
        lines: hunk.lines
    };
}
function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
    // This will generally result in a conflicted hunk, but there are cases where the context
    // is the only overlap where we can successfully merge the content here.
    var mine = {
        offset: mineOffset,
        lines: mineLines,
        index: 0
    }, their = {
        offset: theirOffset,
        lines: theirLines,
        index: 0
    };
    // Handle any leading content
    insertLeading(hunk, mine, their);
    insertLeading(hunk, their, mine);
    // Now in the overlap content. Scan through and select the best changes from each.
    while(mine.index < mine.lines.length && their.index < their.lines.length){
        var mineCurrent = mine.lines[mine.index], theirCurrent = their.lines[their.index];
        if ((mineCurrent[0] === '-' || mineCurrent[0] === '+') && (theirCurrent[0] === '-' || theirCurrent[0] === '+')) {
            // Both modified ...
            mutualChange(hunk, mine, their);
        } else if (mineCurrent[0] === '+' && theirCurrent[0] === ' ') {
            var _hunk$lines;
            // Mine inserted
            (_hunk$lines = hunk.lines).push.apply(_hunk$lines, _toConsumableArray(collectChange(mine)));
        } else if (theirCurrent[0] === '+' && mineCurrent[0] === ' ') {
            var _hunk$lines2;
            // Theirs inserted
            (_hunk$lines2 = hunk.lines).push.apply(_hunk$lines2, _toConsumableArray(collectChange(their)));
        } else if (mineCurrent[0] === '-' && theirCurrent[0] === ' ') {
            // Mine removed or edited
            removal(hunk, mine, their);
        } else if (theirCurrent[0] === '-' && mineCurrent[0] === ' ') {
            // Their removed or edited
            removal(hunk, their, mine, true);
        } else if (mineCurrent === theirCurrent) {
            // Context identity
            hunk.lines.push(mineCurrent);
            mine.index++;
            their.index++;
        } else {
            // Context mismatch
            conflict(hunk, collectChange(mine), collectChange(their));
        }
    }
    // Now push anything that may be remaining
    insertTrailing(hunk, mine);
    insertTrailing(hunk, their);
    calcLineCount(hunk);
}
function mutualChange(hunk, mine, their) {
    var myChanges = collectChange(mine), theirChanges = collectChange(their);
    if (allRemoves(myChanges) && allRemoves(theirChanges)) {
        // Special case for remove changes that are supersets of one another
        if (arrayStartsWith(myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
            var _hunk$lines3;
            (_hunk$lines3 = hunk.lines).push.apply(_hunk$lines3, _toConsumableArray(myChanges));
            return;
        } else if (arrayStartsWith(theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
            var _hunk$lines4;
            (_hunk$lines4 = hunk.lines).push.apply(_hunk$lines4, _toConsumableArray(theirChanges));
            return;
        }
    } else if (arrayEqual(myChanges, theirChanges)) {
        var _hunk$lines5;
        (_hunk$lines5 = hunk.lines).push.apply(_hunk$lines5, _toConsumableArray(myChanges));
        return;
    }
    conflict(hunk, myChanges, theirChanges);
}
function removal(hunk, mine, their, swap) {
    var myChanges = collectChange(mine), theirChanges = collectContext(their, myChanges);
    if (theirChanges.merged) {
        var _hunk$lines6;
        (_hunk$lines6 = hunk.lines).push.apply(_hunk$lines6, _toConsumableArray(theirChanges.merged));
    } else {
        conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
    }
}
function conflict(hunk, mine, their) {
    hunk.conflict = true;
    hunk.lines.push({
        conflict: true,
        mine: mine,
        theirs: their
    });
}
function insertLeading(hunk, insert, their) {
    while(insert.offset < their.offset && insert.index < insert.lines.length){
        var line = insert.lines[insert.index++];
        hunk.lines.push(line);
        insert.offset++;
    }
}
function insertTrailing(hunk, insert) {
    while(insert.index < insert.lines.length){
        var line = insert.lines[insert.index++];
        hunk.lines.push(line);
    }
}
function collectChange(state) {
    var ret = [], operation = state.lines[state.index][0];
    while(state.index < state.lines.length){
        var line = state.lines[state.index];
        // Group additions that are immediately after subtractions and treat them as one "atomic" modify change.
        if (operation === '-' && line[0] === '+') {
            operation = '+';
        }
        if (operation === line[0]) {
            ret.push(line);
            state.index++;
        } else {
            break;
        }
    }
    return ret;
}
function collectContext(state, matchChanges) {
    var changes = [], merged = [], matchIndex = 0, contextChanges = false, conflicted = false;
    while(matchIndex < matchChanges.length && state.index < state.lines.length){
        var change = state.lines[state.index], match = matchChanges[matchIndex];
        // Once we've hit our add, then we are done
        if (match[0] === '+') {
            break;
        }
        contextChanges = contextChanges || change[0] !== ' ';
        merged.push(match);
        matchIndex++;
        // Consume any additions in the other block as a conflict to attempt
        // to pull in the remaining context after this
        if (change[0] === '+') {
            conflicted = true;
            while(change[0] === '+'){
                changes.push(change);
                change = state.lines[++state.index];
            }
        }
        if (match.substr(1) === change.substr(1)) {
            changes.push(change);
            state.index++;
        } else {
            conflicted = true;
        }
    }
    if ((matchChanges[matchIndex] || '')[0] === '+' && contextChanges) {
        conflicted = true;
    }
    if (conflicted) {
        return changes;
    }
    while(matchIndex < matchChanges.length){
        merged.push(matchChanges[matchIndex++]);
    }
    return {
        merged: merged,
        changes: changes
    };
}
function allRemoves(changes) {
    return changes.reduce(function(prev, change) {
        return prev && change[0] === '-';
    }, true);
}
function skipRemoveSuperset(state, removeChanges, delta) {
    for(var i = 0; i < delta; i++){
        var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);
        if (state.lines[state.index + i] !== ' ' + changeContent) {
            return false;
        }
    }
    state.index += delta;
    return true;
}
function calcOldNewLineCount(lines) {
    var oldLines = 0;
    var newLines = 0;
    lines.forEach(function(line) {
        if (typeof line !== 'string') {
            var myCount = calcOldNewLineCount(line.mine);
            var theirCount = calcOldNewLineCount(line.theirs);
            if (oldLines !== undefined) {
                if (myCount.oldLines === theirCount.oldLines) {
                    oldLines += myCount.oldLines;
                } else {
                    oldLines = undefined;
                }
            }
            if (newLines !== undefined) {
                if (myCount.newLines === theirCount.newLines) {
                    newLines += myCount.newLines;
                } else {
                    newLines = undefined;
                }
            }
        } else {
            if (newLines !== undefined && (line[0] === '+' || line[0] === ' ')) {
                newLines++;
            }
            if (oldLines !== undefined && (line[0] === '-' || line[0] === ' ')) {
                oldLines++;
            }
        }
    });
    return {
        oldLines: oldLines,
        newLines: newLines
    };
}
function reversePatch(structuredPatch) {
    if (Array.isArray(structuredPatch)) {
        return structuredPatch.map(reversePatch).reverse();
    }
    return _objectSpread2(_objectSpread2({}, structuredPatch), {}, {
        oldFileName: structuredPatch.newFileName,
        oldHeader: structuredPatch.newHeader,
        newFileName: structuredPatch.oldFileName,
        newHeader: structuredPatch.oldHeader,
        hunks: structuredPatch.hunks.map(function(hunk) {
            return {
                oldLines: hunk.newLines,
                oldStart: hunk.newStart,
                newLines: hunk.oldLines,
                newStart: hunk.oldStart,
                lines: hunk.lines.map(function(l) {
                    if (l.startsWith('-')) {
                        return "+".concat(l.slice(1));
                    }
                    if (l.startsWith('+')) {
                        return "-".concat(l.slice(1));
                    }
                    return l;
                })
            };
        })
    });
}
// See: http://code.google.com/p/google-diff-match-patch/wiki/API
function convertChangesToDMP(changes) {
    var ret = [], change, operation;
    for(var i = 0; i < changes.length; i++){
        change = changes[i];
        if (change.added) {
            operation = 1;
        } else if (change.removed) {
            operation = -1;
        } else {
            operation = 0;
        }
        ret.push([
            operation,
            change.value
        ]);
    }
    return ret;
}
function convertChangesToXML(changes) {
    var ret = [];
    for(var i = 0; i < changes.length; i++){
        var change = changes[i];
        if (change.added) {
            ret.push('<ins>');
        } else if (change.removed) {
            ret.push('<del>');
        }
        ret.push(escapeHTML(change.value));
        if (change.added) {
            ret.push('</ins>');
        } else if (change.removed) {
            ret.push('</del>');
        }
    }
    return ret.join('');
}
function escapeHTML(s) {
    var n = s;
    n = n.replace(/&/g, '&amp;');
    n = n.replace(/</g, '&lt;');
    n = n.replace(/>/g, '&gt;');
    n = n.replace(/"/g, '&quot;');
    return n;
}
;
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/pm/state/dist/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

// state/index.ts
__turbopack_context__.s({});
;
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/pm/state/dist/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$pm$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/pm/state/dist/index.js [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/pm/view/dist/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

// view/index.ts
__turbopack_context__.s({});
;
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/pm/view/dist/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$pm$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/pm/view/dist/index.js [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/pm/keymap/dist/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

// keymap/index.ts
__turbopack_context__.s({});
;
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/pm/keymap/dist/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$pm$2f$keymap$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/pm/keymap/dist/index.js [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/pm/model/dist/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

// model/index.ts
__turbopack_context__.s({});
;
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/pm/model/dist/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$pm$2f$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/pm/model/dist/index.js [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/pm/transform/dist/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

// transform/index.ts
__turbopack_context__.s({});
;
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/pm/transform/dist/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$pm$2f$transform$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/pm/transform/dist/index.js [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/pm/commands/dist/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

// commands/index.ts
__turbopack_context__.s({});
;
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/pm/commands/dist/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$pm$2f$commands$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/pm/commands/dist/index.js [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/pm/schema-list/dist/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

// schema-list/index.ts
__turbopack_context__.s({});
;
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/pm/schema-list/dist/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$pm$2f$schema$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/pm/schema-list/dist/index.js [app-ssr] (ecmascript) <locals>");
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/extension-document/dist/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Document": ()=>Document,
    "default": ()=>Document
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/core/dist/index.js [app-ssr] (ecmascript)");
;
/**
 * The default document node which represents the top level node of the editor.
 * @see https://tiptap.dev/api/nodes/document
 */ const Document = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"].create({
    name: 'doc',
    topNode: true,
    content: 'block+'
});
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/extension-placeholder/dist/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Placeholder": ()=>Placeholder,
    "default": ()=>Placeholder
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$pm$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/pm/state/dist/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-state/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$pm$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/pm/view/dist/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-view/dist/index.js [app-ssr] (ecmascript)");
;
;
;
/**
 * This extension allows you to add a placeholder to your editor.
 * A placeholder is a text that appears when the editor or a node is empty.
 * @see https://www.tiptap.dev/api/extensions/placeholder
 */ const Placeholder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Extension"].create({
    name: 'placeholder',
    addOptions () {
        return {
            emptyEditorClass: 'is-editor-empty',
            emptyNodeClass: 'is-empty',
            placeholder: 'Write something …',
            showOnlyWhenEditable: true,
            showOnlyCurrent: true,
            includeChildren: false
        };
    },
    addProseMirrorPlugins () {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Plugin"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PluginKey"]('placeholder'),
                props: {
                    decorations: ({ doc, selection })=>{
                        const active = this.editor.isEditable || !this.options.showOnlyWhenEditable;
                        const { anchor } = selection;
                        const decorations = [];
                        if (!active) {
                            return null;
                        }
                        const isEmptyDoc = this.editor.isEmpty;
                        doc.descendants((node, pos)=>{
                            const hasAnchor = anchor >= pos && anchor <= pos + node.nodeSize;
                            const isEmpty = !node.isLeaf && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNodeEmpty"])(node);
                            if ((hasAnchor || !this.options.showOnlyCurrent) && isEmpty) {
                                const classes = [
                                    this.options.emptyNodeClass
                                ];
                                if (isEmptyDoc) {
                                    classes.push(this.options.emptyEditorClass);
                                }
                                const decoration = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Decoration"].node(pos, pos + node.nodeSize, {
                                    class: classes.join(' '),
                                    'data-placeholder': typeof this.options.placeholder === 'function' ? this.options.placeholder({
                                        editor: this.editor,
                                        node,
                                        pos,
                                        hasAnchor
                                    }) : this.options.placeholder
                                });
                                decorations.push(decoration);
                            }
                            return this.options.includeChildren;
                        });
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DecorationSet"].create(doc, decorations);
                    }
                }
            })
        ];
    }
});
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/extension-bubble-menu/dist/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "BubbleMenu": ()=>BubbleMenu,
    "BubbleMenuPlugin": ()=>BubbleMenuPlugin,
    "BubbleMenuView": ()=>BubbleMenuView,
    "default": ()=>BubbleMenu
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$pm$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/pm/state/dist/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-state/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tippy$2e$js$2f$dist$2f$tippy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tippy.js/dist/tippy.esm.js [app-ssr] (ecmascript)");
;
;
;
class BubbleMenuView {
    constructor({ editor, element, view, tippyOptions = {}, updateDelay = 250, shouldShow }){
        this.preventHide = false;
        this.shouldShow = ({ view, state, from, to })=>{
            const { doc, selection } = state;
            const { empty } = selection;
            // Sometime check for `empty` is not enough.
            // Doubleclick an empty paragraph returns a node size of 2.
            // So we check also for an empty text size.
            const isEmptyTextBlock = !doc.textBetween(from, to).length && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTextSelection"])(state.selection);
            // When clicking on a element inside the bubble menu the editor "blur" event
            // is called and the bubble menu item is focussed. In this case we should
            // consider the menu as part of the editor and keep showing the menu
            const isChildOfMenu = this.element.contains(document.activeElement);
            const hasEditorFocus = view.hasFocus() || isChildOfMenu;
            if (!hasEditorFocus || empty || isEmptyTextBlock || !this.editor.isEditable) {
                return false;
            }
            return true;
        };
        this.mousedownHandler = ()=>{
            this.preventHide = true;
        };
        this.dragstartHandler = ()=>{
            this.hide();
        };
        this.focusHandler = ()=>{
            // we use `setTimeout` to make sure `selection` is already updated
            setTimeout(()=>this.update(this.editor.view));
        };
        this.blurHandler = ({ event })=>{
            var _a;
            if (this.preventHide) {
                this.preventHide = false;
                return;
            }
            if ((event === null || event === void 0 ? void 0 : event.relatedTarget) && ((_a = this.element.parentNode) === null || _a === void 0 ? void 0 : _a.contains(event.relatedTarget))) {
                return;
            }
            if ((event === null || event === void 0 ? void 0 : event.relatedTarget) === this.editor.view.dom) {
                return;
            }
            this.hide();
        };
        this.tippyBlurHandler = (event)=>{
            this.blurHandler({
                event
            });
        };
        this.handleDebouncedUpdate = (view, oldState)=>{
            const selectionChanged = !(oldState === null || oldState === void 0 ? void 0 : oldState.selection.eq(view.state.selection));
            const docChanged = !(oldState === null || oldState === void 0 ? void 0 : oldState.doc.eq(view.state.doc));
            if (!selectionChanged && !docChanged) {
                return;
            }
            if (this.updateDebounceTimer) {
                clearTimeout(this.updateDebounceTimer);
            }
            this.updateDebounceTimer = window.setTimeout(()=>{
                this.updateHandler(view, selectionChanged, docChanged, oldState);
            }, this.updateDelay);
        };
        this.updateHandler = (view, selectionChanged, docChanged, oldState)=>{
            var _a, _b, _c;
            const { state, composing } = view;
            const { selection } = state;
            const isSame = !selectionChanged && !docChanged;
            if (composing || isSame) {
                return;
            }
            this.createTooltip();
            // support for CellSelections
            const { ranges } = selection;
            const from = Math.min(...ranges.map((range)=>range.$from.pos));
            const to = Math.max(...ranges.map((range)=>range.$to.pos));
            const shouldShow = (_a = this.shouldShow) === null || _a === void 0 ? void 0 : _a.call(this, {
                editor: this.editor,
                element: this.element,
                view,
                state,
                oldState,
                from,
                to
            });
            if (!shouldShow) {
                this.hide();
                return;
            }
            (_b = this.tippy) === null || _b === void 0 ? void 0 : _b.setProps({
                getReferenceClientRect: ((_c = this.tippyOptions) === null || _c === void 0 ? void 0 : _c.getReferenceClientRect) || (()=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNodeSelection"])(state.selection)) {
                        let node = view.nodeDOM(from);
                        if (node) {
                            const nodeViewWrapper = node.dataset.nodeViewWrapper ? node : node.querySelector('[data-node-view-wrapper]');
                            if (nodeViewWrapper) {
                                node = nodeViewWrapper.firstChild;
                            }
                            if (node) {
                                return node.getBoundingClientRect();
                            }
                        }
                    }
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["posToDOMRect"])(view, from, to);
                })
            });
            this.show();
        };
        this.editor = editor;
        this.element = element;
        this.view = view;
        this.updateDelay = updateDelay;
        if (shouldShow) {
            this.shouldShow = shouldShow;
        }
        this.element.addEventListener('mousedown', this.mousedownHandler, {
            capture: true
        });
        this.view.dom.addEventListener('dragstart', this.dragstartHandler);
        this.editor.on('focus', this.focusHandler);
        this.editor.on('blur', this.blurHandler);
        this.tippyOptions = tippyOptions;
        // Detaches menu content from its current parent
        this.element.remove();
        this.element.style.visibility = 'visible';
    }
    createTooltip() {
        const { element: editorElement } = this.editor.options;
        const editorIsAttached = !!editorElement.parentElement;
        this.element.tabIndex = 0;
        if (this.tippy || !editorIsAttached) {
            return;
        }
        this.tippy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tippy$2e$js$2f$dist$2f$tippy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(editorElement, {
            duration: 0,
            getReferenceClientRect: null,
            content: this.element,
            interactive: true,
            trigger: 'manual',
            placement: 'top',
            hideOnClick: 'toggle',
            ...this.tippyOptions
        });
        // maybe we have to hide tippy on its own blur event as well
        if (this.tippy.popper.firstChild) {
            this.tippy.popper.firstChild.addEventListener('blur', this.tippyBlurHandler);
        }
    }
    update(view, oldState) {
        const { state } = view;
        const hasValidSelection = state.selection.from !== state.selection.to;
        if (this.updateDelay > 0 && hasValidSelection) {
            this.handleDebouncedUpdate(view, oldState);
            return;
        }
        const selectionChanged = !(oldState === null || oldState === void 0 ? void 0 : oldState.selection.eq(view.state.selection));
        const docChanged = !(oldState === null || oldState === void 0 ? void 0 : oldState.doc.eq(view.state.doc));
        this.updateHandler(view, selectionChanged, docChanged, oldState);
    }
    show() {
        var _a;
        (_a = this.tippy) === null || _a === void 0 ? void 0 : _a.show();
    }
    hide() {
        var _a;
        (_a = this.tippy) === null || _a === void 0 ? void 0 : _a.hide();
    }
    destroy() {
        var _a, _b;
        if ((_a = this.tippy) === null || _a === void 0 ? void 0 : _a.popper.firstChild) {
            this.tippy.popper.firstChild.removeEventListener('blur', this.tippyBlurHandler);
        }
        (_b = this.tippy) === null || _b === void 0 ? void 0 : _b.destroy();
        this.element.removeEventListener('mousedown', this.mousedownHandler, {
            capture: true
        });
        this.view.dom.removeEventListener('dragstart', this.dragstartHandler);
        this.editor.off('focus', this.focusHandler);
        this.editor.off('blur', this.blurHandler);
    }
}
const BubbleMenuPlugin = (options)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Plugin"]({
        key: typeof options.pluginKey === 'string' ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PluginKey"](options.pluginKey) : options.pluginKey,
        view: (view)=>new BubbleMenuView({
                view,
                ...options
            })
    });
};
/**
 * This extension allows you to create a bubble menu.
 * @see https://tiptap.dev/api/extensions/bubble-menu
 */ const BubbleMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Extension"].create({
    name: 'bubbleMenu',
    addOptions () {
        return {
            element: null,
            tippyOptions: {},
            pluginKey: 'bubbleMenu',
            updateDelay: undefined,
            shouldShow: null
        };
    },
    addProseMirrorPlugins () {
        if (!this.options.element) {
            return [];
        }
        return [
            BubbleMenuPlugin({
                pluginKey: this.options.pluginKey,
                editor: this.editor,
                element: this.options.element,
                tippyOptions: this.options.tippyOptions,
                updateDelay: this.options.updateDelay,
                shouldShow: this.options.shouldShow
            })
        ];
    }
});
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/extension-floating-menu/dist/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "FloatingMenu": ()=>FloatingMenu,
    "FloatingMenuPlugin": ()=>FloatingMenuPlugin,
    "FloatingMenuView": ()=>FloatingMenuView,
    "default": ()=>FloatingMenu
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$pm$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/pm/state/dist/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-state/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tippy$2e$js$2f$dist$2f$tippy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tippy.js/dist/tippy.esm.js [app-ssr] (ecmascript)");
;
;
;
class FloatingMenuView {
    getTextContent(node) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getText"])(node, {
            textSerializers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTextSerializersFromSchema"])(this.editor.schema)
        });
    }
    constructor({ editor, element, view, tippyOptions = {}, shouldShow }){
        this.preventHide = false;
        this.shouldShow = ({ view, state })=>{
            const { selection } = state;
            const { $anchor, empty } = selection;
            const isRootDepth = $anchor.depth === 1;
            const isEmptyTextBlock = $anchor.parent.isTextblock && !$anchor.parent.type.spec.code && !$anchor.parent.textContent && $anchor.parent.childCount === 0 && !this.getTextContent($anchor.parent);
            if (!view.hasFocus() || !empty || !isRootDepth || !isEmptyTextBlock || !this.editor.isEditable) {
                return false;
            }
            return true;
        };
        this.mousedownHandler = ()=>{
            this.preventHide = true;
        };
        this.focusHandler = ()=>{
            // we use `setTimeout` to make sure `selection` is already updated
            setTimeout(()=>this.update(this.editor.view));
        };
        this.blurHandler = ({ event })=>{
            var _a;
            if (this.preventHide) {
                this.preventHide = false;
                return;
            }
            if ((event === null || event === void 0 ? void 0 : event.relatedTarget) && ((_a = this.element.parentNode) === null || _a === void 0 ? void 0 : _a.contains(event.relatedTarget))) {
                return;
            }
            if ((event === null || event === void 0 ? void 0 : event.relatedTarget) === this.editor.view.dom) {
                return;
            }
            this.hide();
        };
        this.tippyBlurHandler = (event)=>{
            this.blurHandler({
                event
            });
        };
        this.editor = editor;
        this.element = element;
        this.view = view;
        if (shouldShow) {
            this.shouldShow = shouldShow;
        }
        this.element.addEventListener('mousedown', this.mousedownHandler, {
            capture: true
        });
        this.editor.on('focus', this.focusHandler);
        this.editor.on('blur', this.blurHandler);
        this.tippyOptions = tippyOptions;
        // Detaches menu content from its current parent
        this.element.remove();
        this.element.style.visibility = 'visible';
    }
    createTooltip() {
        const { element: editorElement } = this.editor.options;
        const editorIsAttached = !!editorElement.parentElement;
        this.element.tabIndex = 0;
        if (this.tippy || !editorIsAttached) {
            return;
        }
        this.tippy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tippy$2e$js$2f$dist$2f$tippy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(editorElement, {
            duration: 0,
            getReferenceClientRect: null,
            content: this.element,
            interactive: true,
            trigger: 'manual',
            placement: 'right',
            hideOnClick: 'toggle',
            ...this.tippyOptions
        });
        // maybe we have to hide tippy on its own blur event as well
        if (this.tippy.popper.firstChild) {
            this.tippy.popper.firstChild.addEventListener('blur', this.tippyBlurHandler);
        }
    }
    update(view, oldState) {
        var _a, _b, _c;
        const { state } = view;
        const { doc, selection } = state;
        const { from, to } = selection;
        const isSame = oldState && oldState.doc.eq(doc) && oldState.selection.eq(selection);
        if (isSame) {
            return;
        }
        this.createTooltip();
        const shouldShow = (_a = this.shouldShow) === null || _a === void 0 ? void 0 : _a.call(this, {
            editor: this.editor,
            view,
            state,
            oldState
        });
        if (!shouldShow) {
            this.hide();
            return;
        }
        (_b = this.tippy) === null || _b === void 0 ? void 0 : _b.setProps({
            getReferenceClientRect: ((_c = this.tippyOptions) === null || _c === void 0 ? void 0 : _c.getReferenceClientRect) || (()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["posToDOMRect"])(view, from, to))
        });
        this.show();
    }
    show() {
        var _a;
        (_a = this.tippy) === null || _a === void 0 ? void 0 : _a.show();
    }
    hide() {
        var _a;
        (_a = this.tippy) === null || _a === void 0 ? void 0 : _a.hide();
    }
    destroy() {
        var _a, _b;
        if ((_a = this.tippy) === null || _a === void 0 ? void 0 : _a.popper.firstChild) {
            this.tippy.popper.firstChild.removeEventListener('blur', this.tippyBlurHandler);
        }
        (_b = this.tippy) === null || _b === void 0 ? void 0 : _b.destroy();
        this.element.removeEventListener('mousedown', this.mousedownHandler, {
            capture: true
        });
        this.editor.off('focus', this.focusHandler);
        this.editor.off('blur', this.blurHandler);
    }
}
const FloatingMenuPlugin = (options)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Plugin"]({
        key: typeof options.pluginKey === 'string' ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PluginKey"](options.pluginKey) : options.pluginKey,
        view: (view)=>new FloatingMenuView({
                view,
                ...options
            })
    });
};
/**
 * This extension allows you to create a floating menu.
 * @see https://tiptap.dev/api/extensions/floating-menu
 */ const FloatingMenu = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Extension"].create({
    name: 'floatingMenu',
    addOptions () {
        return {
            element: null,
            tippyOptions: {},
            pluginKey: 'floatingMenu',
            shouldShow: null
        };
    },
    addProseMirrorPlugins () {
        if (!this.options.element) {
            return [];
        }
        return [
            FloatingMenuPlugin({
                pluginKey: this.options.pluginKey,
                editor: this.editor,
                element: this.options.element,
                tippyOptions: this.options.tippyOptions,
                shouldShow: this.options.shouldShow
            })
        ];
    }
});
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/react/dist/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "BubbleMenu": ()=>BubbleMenu,
    "EditorConsumer": ()=>EditorConsumer,
    "EditorContent": ()=>EditorContent,
    "EditorContext": ()=>EditorContext,
    "EditorProvider": ()=>EditorProvider,
    "FloatingMenu": ()=>FloatingMenu,
    "NodeViewContent": ()=>NodeViewContent,
    "NodeViewWrapper": ()=>NodeViewWrapper,
    "PureEditorContent": ()=>PureEditorContent,
    "ReactNodeView": ()=>ReactNodeView,
    "ReactNodeViewContext": ()=>ReactNodeViewContext,
    "ReactNodeViewRenderer": ()=>ReactNodeViewRenderer,
    "ReactRenderer": ()=>ReactRenderer,
    "useCurrentEditor": ()=>useCurrentEditor,
    "useEditor": ()=>useEditor,
    "useEditorState": ()=>useEditorState,
    "useReactNodeView": ()=>useReactNodeView
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$extension$2d$bubble$2d$menu$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/extension-bubble-menu/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$extension$2d$floating$2d$menu$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/extension-floating-menu/dist/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}
var shim = {
    exports: {}
};
var useSyncExternalStoreShim_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hasRequiredUseSyncExternalStoreShim_production_min;
function requireUseSyncExternalStoreShim_production_min() {
    if (hasRequiredUseSyncExternalStoreShim_production_min) return useSyncExternalStoreShim_production_min;
    hasRequiredUseSyncExternalStoreShim_production_min = 1;
    var e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    function h(a, b) {
        return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var k = "function" === typeof Object.is ? Object.is : h, l = e.useState, m = e.useEffect, n = e.useLayoutEffect, p = e.useDebugValue;
    function q(a, b) {
        var d = b(), f = l({
            inst: {
                value: d,
                getSnapshot: b
            }
        }), c = f[0].inst, g = f[1];
        n(function() {
            c.value = d;
            c.getSnapshot = b;
            r(c) && g({
                inst: c
            });
        }, [
            a,
            d,
            b
        ]);
        m(function() {
            r(c) && g({
                inst: c
            });
            return a(function() {
                r(c) && g({
                    inst: c
                });
            });
        }, [
            a
        ]);
        p(d);
        return d;
    }
    function r(a) {
        var b = a.getSnapshot;
        a = a.value;
        try {
            var d = b();
            return !k(a, d);
        } catch (f) {
            return !0;
        }
    }
    function t(a, b) {
        return b();
    }
    var u = ("TURBOPACK compile-time truthy", 1) ? t : "TURBOPACK unreachable";
    useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u;
    return useSyncExternalStoreShim_production_min;
}
var useSyncExternalStoreShim_development = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hasRequiredUseSyncExternalStoreShim_development;
function requireUseSyncExternalStoreShim_development() {
    if (hasRequiredUseSyncExternalStoreShim_development) return useSyncExternalStoreShim_development;
    hasRequiredUseSyncExternalStoreShim_development = 1;
    if ("TURBOPACK compile-time truthy", 1) {
        (function() {
            /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
            }
            var React$1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
            var ReactSharedInternals = React$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            function error(format) {
                {
                    {
                        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                            args[_key2 - 1] = arguments[_key2];
                        }
                        printWarning('error', format, args);
                    }
                }
            }
            function printWarning(level, format, args) {
                // When changing this logic, you might want to also
                // update consoleWithStackDev.www.js as well.
                {
                    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                    var stack = ReactDebugCurrentFrame.getStackAddendum();
                    if (stack !== '') {
                        format += '%s';
                        args = args.concat([
                            stack
                        ]);
                    } // eslint-disable-next-line react-internal/safe-string-coercion
                    var argsWithFormat = args.map(function(item) {
                        return String(item);
                    }); // Careful: RN currently depends on this prefix
                    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
                    // breaks IE9: https://github.com/facebook/react/issues/13610
                    // eslint-disable-next-line react-internal/no-production-logging
                    Function.prototype.apply.call(console[level], console, argsWithFormat);
                }
            }
            /**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */ function is(x, y) {
                return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
                ;
            }
            var objectIs = typeof Object.is === 'function' ? Object.is : is;
            // dispatch for CommonJS interop named imports.
            var useState = React$1.useState, useEffect = React$1.useEffect, useLayoutEffect = React$1.useLayoutEffect, useDebugValue = React$1.useDebugValue;
            var didWarnOld18Alpha = false;
            var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
            // because of a very particular set of implementation details and assumptions
            // -- change any one of them and it will break. The most important assumption
            // is that updates are always synchronous, because concurrent rendering is
            // only available in versions of React that also have a built-in
            // useSyncExternalStore API. And we only use this shim when the built-in API
            // does not exist.
            //
            // Do not assume that the clever hacks used by this hook also work in general.
            // The point of this shim is to replace the need for hacks by other libraries.
            function useSyncExternalStore(subscribe, getSnapshot, // React do not expose a way to check if we're hydrating. So users of the shim
            // will need to track that themselves and return the correct value
            // from `getSnapshot`.
            getServerSnapshot) {
                {
                    if (!didWarnOld18Alpha) {
                        if (React$1.startTransition !== undefined) {
                            didWarnOld18Alpha = true;
                            error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
                        }
                    }
                }
                // breaks the rules of React, and only works here because of specific
                // implementation details, most importantly that updates are
                // always synchronous.
                var value = getSnapshot();
                {
                    if (!didWarnUncachedGetSnapshot) {
                        var cachedValue = getSnapshot();
                        if (!objectIs(value, cachedValue)) {
                            error('The result of getSnapshot should be cached to avoid an infinite loop');
                            didWarnUncachedGetSnapshot = true;
                        }
                    }
                }
                // re-render whenever the subscribed state changes by updating an some
                // arbitrary useState hook. Then, during render, we call getSnapshot to read
                // the current value.
                //
                // Because we don't actually use the state returned by the useState hook, we
                // can save a bit of memory by storing other stuff in that slot.
                //
                // To implement the early bailout, we need to track some things on a mutable
                // object. Usually, we would put that in a useRef hook, but we can stash it in
                // our useState hook instead.
                //
                // To force a re-render, we call forceUpdate({inst}). That works because the
                // new object always fails an equality check.
                var _useState = useState({
                    inst: {
                        value: value,
                        getSnapshot: getSnapshot
                    }
                }), inst = _useState[0].inst, forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
                // in the layout phase so we can access it during the tearing check that
                // happens on subscribe.
                useLayoutEffect(function() {
                    inst.value = value;
                    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
                    // commit phase if there was an interleaved mutation. In concurrent mode
                    // this can happen all the time, but even in synchronous mode, an earlier
                    // effect may have mutated the store.
                    if (checkIfSnapshotChanged(inst)) {
                        // Force a re-render.
                        forceUpdate({
                            inst: inst
                        });
                    }
                }, [
                    subscribe,
                    value,
                    getSnapshot
                ]);
                useEffect(function() {
                    // Check for changes right before subscribing. Subsequent changes will be
                    // detected in the subscription handler.
                    if (checkIfSnapshotChanged(inst)) {
                        // Force a re-render.
                        forceUpdate({
                            inst: inst
                        });
                    }
                    var handleStoreChange = function() {
                        // TODO: Because there is no cross-renderer API for batching updates, it's
                        // up to the consumer of this library to wrap their subscription event
                        // with unstable_batchedUpdates. Should we try to detect when this isn't
                        // the case and print a warning in development?
                        // The store changed. Check if the snapshot changed since the last time we
                        // read from the store.
                        if (checkIfSnapshotChanged(inst)) {
                            // Force a re-render.
                            forceUpdate({
                                inst: inst
                            });
                        }
                    }; // Subscribe to the store and return a clean-up function.
                    return subscribe(handleStoreChange);
                }, [
                    subscribe
                ]);
                useDebugValue(value);
                return value;
            }
            function checkIfSnapshotChanged(inst) {
                var latestGetSnapshot = inst.getSnapshot;
                var prevValue = inst.value;
                try {
                    var nextValue = latestGetSnapshot();
                    return !objectIs(prevValue, nextValue);
                } catch (error) {
                    return true;
                }
            }
            function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
                // Note: The shim does not use getServerSnapshot, because pre-18 versions of
                // React do not expose a way to check if we're hydrating. So users of the shim
                // will need to track that themselves and return the correct value
                // from `getSnapshot`.
                return getSnapshot();
            }
            var canUseDOM = !!("undefined" !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
            var isServerEnvironment = !canUseDOM;
            var shim = ("TURBOPACK compile-time truthy", 1) ? useSyncExternalStore$1 : "TURBOPACK unreachable";
            var useSyncExternalStore$2 = React$1.useSyncExternalStore !== undefined ? React$1.useSyncExternalStore : shim;
            useSyncExternalStoreShim_development.useSyncExternalStore = useSyncExternalStore$2;
            /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
            }
        })();
    }
    return useSyncExternalStoreShim_development;
}
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    shim.exports = requireUseSyncExternalStoreShim_development();
}
var shimExports = shim.exports;
const mergeRefs = (...refs)=>{
    return (node)=>{
        refs.forEach((ref)=>{
            if (typeof ref === 'function') {
                ref(node);
            } else if (ref) {
                ref.current = node;
            }
        });
    };
};
/**
 * This component renders all of the editor's node views.
 */ const Portals = ({ contentComponent })=>{
    // For performance reasons, we render the node view portals on state changes only
    const renderers = shimExports.useSyncExternalStore(contentComponent.subscribe, contentComponent.getSnapshot, contentComponent.getServerSnapshot);
    // This allows us to directly render the portals without any additional wrapper
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, Object.values(renderers));
};
function getInstance() {
    const subscribers = new Set();
    let renderers = {};
    return {
        /**
         * Subscribe to the editor instance's changes.
         */ subscribe (callback) {
            subscribers.add(callback);
            return ()=>{
                subscribers.delete(callback);
            };
        },
        getSnapshot () {
            return renderers;
        },
        getServerSnapshot () {
            return renderers;
        },
        /**
         * Adds a new NodeView Renderer to the editor.
         */ setRenderer (id, renderer) {
            renderers = {
                ...renderers,
                [id]: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createPortal(renderer.reactElement, renderer.element, id)
            };
            subscribers.forEach((subscriber)=>subscriber());
        },
        /**
         * Removes a NodeView Renderer from the editor.
         */ removeRenderer (id) {
            const nextRenderers = {
                ...renderers
            };
            delete nextRenderers[id];
            renderers = nextRenderers;
            subscribers.forEach((subscriber)=>subscriber());
        }
    };
}
class PureEditorContent extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Component {
    constructor(props){
        var _a;
        super(props);
        this.editorContentRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createRef();
        this.initialized = false;
        this.state = {
            hasContentComponentInitialized: Boolean((_a = props.editor) === null || _a === void 0 ? void 0 : _a.contentComponent)
        };
    }
    componentDidMount() {
        this.init();
    }
    componentDidUpdate() {
        this.init();
    }
    init() {
        const editor = this.props.editor;
        if (editor && !editor.isDestroyed && editor.options.element) {
            if (editor.contentComponent) {
                return;
            }
            const element = this.editorContentRef.current;
            element.append(...editor.options.element.childNodes);
            editor.setOptions({
                element
            });
            editor.contentComponent = getInstance();
            // Has the content component been initialized?
            if (!this.state.hasContentComponentInitialized) {
                // Subscribe to the content component
                this.unsubscribeToContentComponent = editor.contentComponent.subscribe(()=>{
                    this.setState((prevState)=>{
                        if (!prevState.hasContentComponentInitialized) {
                            return {
                                hasContentComponentInitialized: true
                            };
                        }
                        return prevState;
                    });
                    // Unsubscribe to previous content component
                    if (this.unsubscribeToContentComponent) {
                        this.unsubscribeToContentComponent();
                    }
                });
            }
            editor.createNodeViews();
            this.initialized = true;
        }
    }
    componentWillUnmount() {
        const editor = this.props.editor;
        if (!editor) {
            return;
        }
        this.initialized = false;
        if (!editor.isDestroyed) {
            editor.view.setProps({
                nodeViews: {}
            });
        }
        if (this.unsubscribeToContentComponent) {
            this.unsubscribeToContentComponent();
        }
        editor.contentComponent = null;
        if (!editor.options.element.firstChild) {
            return;
        }
        const newElement = document.createElement('div');
        newElement.append(...editor.options.element.childNodes);
        editor.setOptions({
            element: newElement
        });
    }
    render() {
        const { editor, innerRef, ...rest } = this.props;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: mergeRefs(innerRef, this.editorContentRef),
            ...rest
        }), (editor === null || editor === void 0 ? void 0 : editor.contentComponent) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Portals, {
            contentComponent: editor.contentComponent
        }));
    }
}
// EditorContent should be re-created whenever the Editor instance changes
const EditorContentWithKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        return Math.floor(Math.random() * 0xffffffff).toString();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props.editor
    ]);
    // Can't use JSX here because it conflicts with the type definition of Vue's JSX, so use createElement
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(PureEditorContent, {
        key,
        innerRef: ref,
        ...props
    });
});
const EditorContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(EditorContentWithKey);
var react = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (a instanceof Map && b instanceof Map) {
            if (a.size !== b.size) return false;
            for (i of a.entries())if (!b.has(i[0])) return false;
            for (i of a.entries())if (!equal(i[1], b.get(i[0]))) return false;
            return true;
        }
        if (a instanceof Set && b instanceof Set) {
            if (a.size !== b.size) return false;
            for (i of a.entries())if (!b.has(i[0])) return false;
            return true;
        }
        if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (a[i] !== b[i]) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            var key = keys[i];
            if (key === '_owner' && a.$$typeof) {
                continue;
            }
            if (!equal(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
};
var deepEqual = /*@__PURE__*/ getDefaultExportFromCjs(react);
var withSelector = {
    exports: {}
};
var withSelector_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hasRequiredWithSelector_production_min;
function requireWithSelector_production_min() {
    if (hasRequiredWithSelector_production_min) return withSelector_production_min;
    hasRequiredWithSelector_production_min = 1;
    var h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], n = shimExports;
    function p(a, b) {
        return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var q = "function" === typeof Object.is ? Object.is : p, r = n.useSyncExternalStore, t = h.useRef, u = h.useEffect, v = h.useMemo, w = h.useDebugValue;
    withSelector_production_min.useSyncExternalStoreWithSelector = function(a, b, e, l, g) {
        var c = t(null);
        if (null === c.current) {
            var f = {
                hasValue: !1,
                value: null
            };
            c.current = f;
        } else f = c.current;
        c = v(function() {
            function a(a) {
                if (!c) {
                    c = !0;
                    d = a;
                    a = l(a);
                    if (void 0 !== g && f.hasValue) {
                        var b = f.value;
                        if (g(b, a)) return k = b;
                    }
                    return k = a;
                }
                b = k;
                if (q(d, a)) return b;
                var e = l(a);
                if (void 0 !== g && g(b, e)) return b;
                d = a;
                return k = e;
            }
            var c = !1, d, k, m = void 0 === e ? null : e;
            return [
                function() {
                    return a(b());
                },
                null === m ? void 0 : function() {
                    return a(m());
                }
            ];
        }, [
            b,
            e,
            l,
            g
        ]);
        var d = r(a, c[0], c[1]);
        u(function() {
            f.hasValue = !0;
            f.value = d;
        }, [
            d
        ]);
        w(d);
        return d;
    };
    return withSelector_production_min;
}
var withSelector_development = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hasRequiredWithSelector_development;
function requireWithSelector_development() {
    if (hasRequiredWithSelector_development) return withSelector_development;
    hasRequiredWithSelector_development = 1;
    if ("TURBOPACK compile-time truthy", 1) {
        (function() {
            /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
            }
            var React$1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
            var shim = shimExports;
            /**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */ function is(x, y) {
                return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
                ;
            }
            var objectIs = typeof Object.is === 'function' ? Object.is : is;
            var useSyncExternalStore = shim.useSyncExternalStore;
            // for CommonJS interop.
            var useRef = React$1.useRef, useEffect = React$1.useEffect, useMemo = React$1.useMemo, useDebugValue = React$1.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.
            function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
                // Use this to track the rendered snapshot.
                var instRef = useRef(null);
                var inst;
                if (instRef.current === null) {
                    inst = {
                        hasValue: false,
                        value: null
                    };
                    instRef.current = inst;
                } else {
                    inst = instRef.current;
                }
                var _useMemo = useMemo(function() {
                    // Track the memoized state using closure variables that are local to this
                    // memoized instance of a getSnapshot function. Intentionally not using a
                    // useRef hook, because that state would be shared across all concurrent
                    // copies of the hook/component.
                    var hasMemo = false;
                    var memoizedSnapshot;
                    var memoizedSelection;
                    var memoizedSelector = function(nextSnapshot) {
                        if (!hasMemo) {
                            // The first time the hook is called, there is no memoized result.
                            hasMemo = true;
                            memoizedSnapshot = nextSnapshot;
                            var _nextSelection = selector(nextSnapshot);
                            if (isEqual !== undefined) {
                                // Even if the selector has changed, the currently rendered selection
                                // may be equal to the new selection. We should attempt to reuse the
                                // current value if possible, to preserve downstream memoizations.
                                if (inst.hasValue) {
                                    var currentSelection = inst.value;
                                    if (isEqual(currentSelection, _nextSelection)) {
                                        memoizedSelection = currentSelection;
                                        return currentSelection;
                                    }
                                }
                            }
                            memoizedSelection = _nextSelection;
                            return _nextSelection;
                        } // We may be able to reuse the previous invocation's result.
                        // We may be able to reuse the previous invocation's result.
                        var prevSnapshot = memoizedSnapshot;
                        var prevSelection = memoizedSelection;
                        if (objectIs(prevSnapshot, nextSnapshot)) {
                            // The snapshot is the same as last time. Reuse the previous selection.
                            return prevSelection;
                        } // The snapshot has changed, so we need to compute a new selection.
                        // The snapshot has changed, so we need to compute a new selection.
                        var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
                        // has changed. If it hasn't, return the previous selection. That signals
                        // to React that the selections are conceptually equal, and we can bail
                        // out of rendering.
                        // If a custom isEqual function is provided, use that to check if the data
                        // has changed. If it hasn't, return the previous selection. That signals
                        // to React that the selections are conceptually equal, and we can bail
                        // out of rendering.
                        if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
                            return prevSelection;
                        }
                        memoizedSnapshot = nextSnapshot;
                        memoizedSelection = nextSelection;
                        return nextSelection;
                    }; // Assigning this to a constant so that Flow knows it can't change.
                    // Assigning this to a constant so that Flow knows it can't change.
                    var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;
                    var getSnapshotWithSelector = function() {
                        return memoizedSelector(getSnapshot());
                    };
                    var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function() {
                        return memoizedSelector(maybeGetServerSnapshot());
                    };
                    return [
                        getSnapshotWithSelector,
                        getServerSnapshotWithSelector
                    ];
                }, [
                    getSnapshot,
                    getServerSnapshot,
                    selector,
                    isEqual
                ]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
                var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
                useEffect(function() {
                    inst.hasValue = true;
                    inst.value = value;
                }, [
                    value
                ]);
                useDebugValue(value);
                return value;
            }
            withSelector_development.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
            /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
            }
        })();
    }
    return withSelector_development;
}
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    withSelector.exports = requireWithSelector_development();
}
var withSelectorExports = withSelector.exports;
const useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
/**
 * To synchronize the editor instance with the component state,
 * we need to create a separate instance that is not affected by the component re-renders.
 */ class EditorStateManager {
    constructor(initialEditor){
        this.transactionNumber = 0;
        this.lastTransactionNumber = 0;
        this.subscribers = new Set();
        this.editor = initialEditor;
        this.lastSnapshot = {
            editor: initialEditor,
            transactionNumber: 0
        };
        this.getSnapshot = this.getSnapshot.bind(this);
        this.getServerSnapshot = this.getServerSnapshot.bind(this);
        this.watch = this.watch.bind(this);
        this.subscribe = this.subscribe.bind(this);
    }
    /**
     * Get the current editor instance.
     */ getSnapshot() {
        if (this.transactionNumber === this.lastTransactionNumber) {
            return this.lastSnapshot;
        }
        this.lastTransactionNumber = this.transactionNumber;
        this.lastSnapshot = {
            editor: this.editor,
            transactionNumber: this.transactionNumber
        };
        return this.lastSnapshot;
    }
    /**
     * Always disable the editor on the server-side.
     */ getServerSnapshot() {
        return {
            editor: null,
            transactionNumber: 0
        };
    }
    /**
     * Subscribe to the editor instance's changes.
     */ subscribe(callback) {
        this.subscribers.add(callback);
        return ()=>{
            this.subscribers.delete(callback);
        };
    }
    /**
     * Watch the editor instance for changes.
     */ watch(nextEditor) {
        this.editor = nextEditor;
        if (this.editor) {
            /**
             * This will force a re-render when the editor state changes.
             * This is to support things like `editor.can().toggleBold()` in components that `useEditor`.
             * This could be more efficient, but it's a good trade-off for now.
             */ const fn = ()=>{
                this.transactionNumber += 1;
                this.subscribers.forEach((callback)=>callback());
            };
            const currentEditor = this.editor;
            currentEditor.on('transaction', fn);
            return ()=>{
                currentEditor.off('transaction', fn);
            };
        }
        return undefined;
    }
}
/**
 * This hook allows you to watch for changes on the editor instance.
 * It will allow you to select a part of the editor state and re-render the component when it changes.
 * @example
 * ```tsx
 * const editor = useEditor({...options})
 * const { currentSelection } = useEditorState({
 *  editor,
 *  selector: snapshot => ({ currentSelection: snapshot.editor.state.selection }),
 * })
 */ function useEditorState(options) {
    var _a;
    const [editorStateManager] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new EditorStateManager(options.editor));
    // Using the `useSyncExternalStore` hook to sync the editor instance with the component state
    const selectedState = withSelectorExports.useSyncExternalStoreWithSelector(editorStateManager.subscribe, editorStateManager.getSnapshot, editorStateManager.getServerSnapshot, options.selector, (_a = options.equalityFn) !== null && _a !== void 0 ? _a : deepEqual);
    useIsomorphicLayoutEffect(()=>{
        return editorStateManager.watch(options.editor);
    }, [
        options.editor,
        editorStateManager
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebugValue"])(selectedState);
    return selectedState;
}
const isDev = ("TURBOPACK compile-time value", "development") !== 'production';
const isSSR = "undefined" === 'undefined';
const isNext = isSSR || Boolean("undefined" !== 'undefined' && window.next);
/**
 * This class handles the creation, destruction, and re-creation of the editor instance.
 */ class EditorInstanceManager {
    constructor(options){
        /**
         * The current editor instance.
         */ this.editor = null;
        /**
         * The subscriptions to notify when the editor instance
         * has been created or destroyed.
         */ this.subscriptions = new Set();
        /**
         * Whether the editor has been mounted.
         */ this.isComponentMounted = false;
        /**
         * The most recent dependencies array.
         */ this.previousDeps = null;
        /**
         * The unique instance ID. This is used to identify the editor instance. And will be re-generated for each new instance.
         */ this.instanceId = '';
        this.options = options;
        this.subscriptions = new Set();
        this.setEditor(this.getInitialEditor());
        this.scheduleDestroy();
        this.getEditor = this.getEditor.bind(this);
        this.getServerSnapshot = this.getServerSnapshot.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.refreshEditorInstance = this.refreshEditorInstance.bind(this);
        this.scheduleDestroy = this.scheduleDestroy.bind(this);
        this.onRender = this.onRender.bind(this);
        this.createEditor = this.createEditor.bind(this);
    }
    setEditor(editor) {
        this.editor = editor;
        this.instanceId = Math.random().toString(36).slice(2, 9);
        // Notify all subscribers that the editor instance has been created
        this.subscriptions.forEach((cb)=>cb());
    }
    getInitialEditor() {
        if (this.options.current.immediatelyRender === undefined) {
            if ("TURBOPACK compile-time truthy", 1) {
                // TODO in the next major release, we should throw an error here
                if ("TURBOPACK compile-time truthy", 1) {
                    /**
                     * Throw an error in development, to make sure the developer is aware that tiptap cannot be SSR'd
                     * and that they need to set `immediatelyRender` to `false` to avoid hydration mismatches.
                     */ console.warn('Tiptap Error: SSR has been detected, please set `immediatelyRender` explicitly to `false` to avoid hydration mismatches.');
                }
                // Best faith effort in production, run the code in the legacy mode to avoid hydration mismatches and errors in production
                return null;
            }
            //TURBOPACK unreachable
            ;
        }
        if (this.options.current.immediatelyRender && isSSR && isDev) {
            // Warn in development, to make sure the developer is aware that tiptap cannot be SSR'd, set `immediatelyRender` to `false` to avoid hydration mismatches.
            throw new Error('Tiptap Error: SSR has been detected, and `immediatelyRender` has been set to `true` this is an unsupported configuration that may result in errors, explicitly set `immediatelyRender` to `false` to avoid hydration mismatches.');
        }
        if (this.options.current.immediatelyRender) {
            return this.createEditor();
        }
        return null;
    }
    /**
     * Create a new editor instance. And attach event listeners.
     */ createEditor() {
        const optionsToApply = {
            ...this.options.current,
            // Always call the most recent version of the callback function by default
            onBeforeCreate: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onBeforeCreate) === null || _b === void 0 ? void 0 : _b.call(_a, ...args);
            },
            onBlur: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onBlur) === null || _b === void 0 ? void 0 : _b.call(_a, ...args);
            },
            onCreate: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onCreate) === null || _b === void 0 ? void 0 : _b.call(_a, ...args);
            },
            onDestroy: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onDestroy) === null || _b === void 0 ? void 0 : _b.call(_a, ...args);
            },
            onFocus: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onFocus) === null || _b === void 0 ? void 0 : _b.call(_a, ...args);
            },
            onSelectionUpdate: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onSelectionUpdate) === null || _b === void 0 ? void 0 : _b.call(_a, ...args);
            },
            onTransaction: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onTransaction) === null || _b === void 0 ? void 0 : _b.call(_a, ...args);
            },
            onUpdate: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onUpdate) === null || _b === void 0 ? void 0 : _b.call(_a, ...args);
            },
            onContentError: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onContentError) === null || _b === void 0 ? void 0 : _b.call(_a, ...args);
            },
            onDrop: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onDrop) === null || _b === void 0 ? void 0 : _b.call(_a, ...args);
            },
            onPaste: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onPaste) === null || _b === void 0 ? void 0 : _b.call(_a, ...args);
            }
        };
        const editor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Editor"](optionsToApply);
        // no need to keep track of the event listeners, they will be removed when the editor is destroyed
        return editor;
    }
    /**
     * Get the current editor instance.
     */ getEditor() {
        return this.editor;
    }
    /**
     * Always disable the editor on the server-side.
     */ getServerSnapshot() {
        return null;
    }
    /**
     * Subscribe to the editor instance's changes.
     */ subscribe(onStoreChange) {
        this.subscriptions.add(onStoreChange);
        return ()=>{
            this.subscriptions.delete(onStoreChange);
        };
    }
    static compareOptions(a, b) {
        return Object.keys(a).every((key)=>{
            if ([
                'onCreate',
                'onBeforeCreate',
                'onDestroy',
                'onUpdate',
                'onTransaction',
                'onFocus',
                'onBlur',
                'onSelectionUpdate',
                'onContentError',
                'onDrop',
                'onPaste'
            ].includes(key)) {
                // we don't want to compare callbacks, they are always different and only registered once
                return true;
            }
            // We often encourage putting extensions inlined in the options object, so we will do a slightly deeper comparison here
            if (key === 'extensions' && a.extensions && b.extensions) {
                if (a.extensions.length !== b.extensions.length) {
                    return false;
                }
                return a.extensions.every((extension, index)=>{
                    var _a;
                    if (extension !== ((_a = b.extensions) === null || _a === void 0 ? void 0 : _a[index])) {
                        return false;
                    }
                    return true;
                });
            }
            if (a[key] !== b[key]) {
                // if any of the options have changed, we should update the editor options
                return false;
            }
            return true;
        });
    }
    /**
     * On each render, we will create, update, or destroy the editor instance.
     * @param deps The dependencies to watch for changes
     * @returns A cleanup function
     */ onRender(deps) {
        // The returned callback will run on each render
        return ()=>{
            this.isComponentMounted = true;
            // Cleanup any scheduled destructions, since we are currently rendering
            clearTimeout(this.scheduledDestructionTimeout);
            if (this.editor && !this.editor.isDestroyed && deps.length === 0) {
                // if the editor does exist & deps are empty, we don't need to re-initialize the editor generally
                if (!EditorInstanceManager.compareOptions(this.options.current, this.editor.options)) {
                    // But, the options are different, so we need to update the editor options
                    // Still, this is faster than re-creating the editor
                    this.editor.setOptions({
                        ...this.options.current,
                        editable: this.editor.isEditable
                    });
                }
            } else {
                // When the editor:
                // - does not yet exist
                // - is destroyed
                // - the deps array changes
                // We need to destroy the editor instance and re-initialize it
                this.refreshEditorInstance(deps);
            }
            return ()=>{
                this.isComponentMounted = false;
                this.scheduleDestroy();
            };
        };
    }
    /**
     * Recreate the editor instance if the dependencies have changed.
     */ refreshEditorInstance(deps) {
        if (this.editor && !this.editor.isDestroyed) {
            // Editor instance already exists
            if (this.previousDeps === null) {
                // If lastDeps has not yet been initialized, reuse the current editor instance
                this.previousDeps = deps;
                return;
            }
            const depsAreEqual = this.previousDeps.length === deps.length && this.previousDeps.every((dep, index)=>dep === deps[index]);
            if (depsAreEqual) {
                // deps exist and are equal, no need to recreate
                return;
            }
        }
        if (this.editor && !this.editor.isDestroyed) {
            // Destroy the editor instance if it exists
            this.editor.destroy();
        }
        this.setEditor(this.createEditor());
        // Update the lastDeps to the current deps
        this.previousDeps = deps;
    }
    /**
     * Schedule the destruction of the editor instance.
     * This will only destroy the editor if it was not mounted on the next tick.
     * This is to avoid destroying the editor instance when it's actually still mounted.
     */ scheduleDestroy() {
        const currentInstanceId = this.instanceId;
        const currentEditor = this.editor;
        // Wait two ticks to see if the component is still mounted
        this.scheduledDestructionTimeout = setTimeout(()=>{
            if (this.isComponentMounted && this.instanceId === currentInstanceId) {
                // If still mounted on the following tick, with the same instanceId, do not destroy the editor
                if (currentEditor) {
                    // just re-apply options as they might have changed
                    currentEditor.setOptions(this.options.current);
                }
                return;
            }
            if (currentEditor && !currentEditor.isDestroyed) {
                currentEditor.destroy();
                if (this.instanceId === currentInstanceId) {
                    this.setEditor(null);
                }
            }
        // This allows the effect to run again between ticks
        // which may save us from having to re-create the editor
        }, 1);
    }
}
function useEditor(options = {}, deps = []) {
    const mostRecentOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(options);
    mostRecentOptions.current = options;
    const [instanceManager] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new EditorInstanceManager(mostRecentOptions));
    const editor = shimExports.useSyncExternalStore(instanceManager.subscribe, instanceManager.getEditor, instanceManager.getServerSnapshot);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebugValue"])(editor);
    // This effect will handle creating/updating the editor instance
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(instanceManager.onRender(deps));
    // The default behavior is to re-render on each transaction
    // This is legacy behavior that will be removed in future versions
    useEditorState({
        editor,
        selector: ({ transactionNumber })=>{
            if (options.shouldRerenderOnTransaction === false) {
                // This will prevent the editor from re-rendering on each transaction
                return null;
            }
            // This will avoid re-rendering on the first transaction when `immediatelyRender` is set to `true`
            if (options.immediatelyRender && transactionNumber === 0) {
                return 0;
            }
            return transactionNumber + 1;
        }
    });
    return editor;
}
const EditorContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    editor: null
});
const EditorConsumer = EditorContext.Consumer;
/**
 * A hook to get the current editor instance.
 */ const useCurrentEditor = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(EditorContext);
/**
 * This is the provider component for the editor.
 * It allows the editor to be accessible across the entire component tree
 * with `useCurrentEditor`.
 */ function EditorProvider({ children, slotAfter, slotBefore, editorContainerProps = {}, ...editorOptions }) {
    const editor = useEditor(editorOptions);
    if (!editor) {
        return null;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(EditorContext.Provider, {
        value: {
            editor
        }
    }, slotBefore, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(EditorConsumer, null, ({ editor: currentEditor })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(EditorContent, {
            editor: currentEditor,
            ...editorContainerProps
        })), children, slotAfter);
}
const BubbleMenu = (props)=>{
    const [element, setElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { editor: currentEditor } = useCurrentEditor();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var _a;
        if (!element) {
            return;
        }
        if (((_a = props.editor) === null || _a === void 0 ? void 0 : _a.isDestroyed) || (currentEditor === null || currentEditor === void 0 ? void 0 : currentEditor.isDestroyed)) {
            return;
        }
        const { pluginKey = 'bubbleMenu', editor, tippyOptions = {}, updateDelay, shouldShow = null } = props;
        const menuEditor = editor || currentEditor;
        if (!menuEditor) {
            console.warn('BubbleMenu component is not rendered inside of an editor component or does not have editor prop.');
            return;
        }
        const plugin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$extension$2d$bubble$2d$menu$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BubbleMenuPlugin"])({
            updateDelay,
            editor: menuEditor,
            element,
            pluginKey,
            shouldShow,
            tippyOptions
        });
        menuEditor.registerPlugin(plugin);
        return ()=>{
            menuEditor.unregisterPlugin(pluginKey);
        };
    }, [
        props.editor,
        currentEditor,
        element
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setElement,
        className: props.className,
        style: {
            visibility: 'hidden'
        }
    }, props.children);
};
const FloatingMenu = (props)=>{
    const [element, setElement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { editor: currentEditor } = useCurrentEditor();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var _a;
        if (!element) {
            return;
        }
        if (((_a = props.editor) === null || _a === void 0 ? void 0 : _a.isDestroyed) || (currentEditor === null || currentEditor === void 0 ? void 0 : currentEditor.isDestroyed)) {
            return;
        }
        const { pluginKey = 'floatingMenu', editor, tippyOptions = {}, shouldShow = null } = props;
        const menuEditor = editor || currentEditor;
        if (!menuEditor) {
            console.warn('FloatingMenu component is not rendered inside of an editor component or does not have editor prop.');
            return;
        }
        const plugin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$extension$2d$floating$2d$menu$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingMenuPlugin"])({
            pluginKey,
            editor: menuEditor,
            element,
            tippyOptions,
            shouldShow
        });
        menuEditor.registerPlugin(plugin);
        return ()=>{
            menuEditor.unregisterPlugin(pluginKey);
        };
    }, [
        props.editor,
        currentEditor,
        element
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: setElement,
        className: props.className,
        style: {
            visibility: 'hidden'
        }
    }, props.children);
};
const ReactNodeViewContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    onDragStart: undefined
});
const useReactNodeView = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ReactNodeViewContext);
const NodeViewContent = (props)=>{
    const Tag = props.as || 'div';
    const { nodeViewContentRef } = useReactNodeView();
    return(// @ts-ignore
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Tag, {
        ...props,
        ref: nodeViewContentRef,
        "data-node-view-content": "",
        style: {
            whiteSpace: 'pre-wrap',
            ...props.style
        }
    }));
};
const NodeViewWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { onDragStart } = useReactNodeView();
    const Tag = props.as || 'div';
    return(// @ts-ignore
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Tag, {
        ...props,
        ref: ref,
        "data-node-view-wrapper": "",
        onDragStart: onDragStart,
        style: {
            whiteSpace: 'normal',
            ...props.style
        }
    }));
});
/**
 * Check if a component is a class component.
 * @param Component
 * @returns {boolean}
 */ function isClassComponent(Component) {
    return !!(typeof Component === 'function' && Component.prototype && Component.prototype.isReactComponent);
}
/**
 * Check if a component is a forward ref component.
 * @param Component
 * @returns {boolean}
 */ function isForwardRefComponent(Component) {
    return !!(typeof Component === 'object' && Component.$$typeof && (Component.$$typeof.toString() === 'Symbol(react.forward_ref)' || Component.$$typeof.description === 'react.forward_ref'));
}
/**
 * Check if a component is a memoized component.
 * @param Component
 * @returns {boolean}
 */ function isMemoComponent(Component) {
    return !!(typeof Component === 'object' && Component.$$typeof && (Component.$$typeof.toString() === 'Symbol(react.memo)' || Component.$$typeof.description === 'react.memo'));
}
/**
 * Check if a component can safely receive a ref prop.
 * This includes class components, forwardRef components, and memoized components
 * that wrap forwardRef or class components.
 * @param Component
 * @returns {boolean}
 */ function canReceiveRef(Component) {
    // Check if it's a class component
    if (isClassComponent(Component)) {
        return true;
    }
    // Check if it's a forwardRef component
    if (isForwardRefComponent(Component)) {
        return true;
    }
    // Check if it's a memoized component
    if (isMemoComponent(Component)) {
        // For memoized components, check the wrapped component
        const wrappedComponent = Component.type;
        if (wrappedComponent) {
            return isClassComponent(wrappedComponent) || isForwardRefComponent(wrappedComponent);
        }
    }
    return false;
}
/**
 * Check if we're running React 19+ by detecting if function components support ref props
 * @returns {boolean}
 */ function isReact19Plus() {
    // React 19 is detected by checking React version if available
    // In practice, we'll use a more conservative approach and assume React 18 behavior
    // unless we can definitively detect React 19
    try {
        // @ts-ignore
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]) {
            const majorVersion = parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"].split('.')[0], 10);
            return majorVersion >= 19;
        }
    } catch  {
    // Fallback to React 18 behavior if we can't determine version
    }
    return false;
}
/**
 * The ReactRenderer class. It's responsible for rendering React components inside the editor.
 * @example
 * new ReactRenderer(MyComponent, {
 *   editor,
 *   props: {
 *     foo: 'bar',
 *   },
 *   as: 'span',
 * })
*/ class ReactRenderer {
    /**
     * Immediately creates element and renders the provided React component.
     */ constructor(component, { editor, props = {}, as = 'div', className = '' }){
        this.ref = null;
        this.id = Math.floor(Math.random() * 0xFFFFFFFF).toString();
        this.component = component;
        this.editor = editor;
        this.props = props;
        this.element = document.createElement(as);
        this.element.classList.add('react-renderer');
        if (className) {
            this.element.classList.add(...className.split(' '));
        }
        // If the editor is already initialized, we will need to
        // synchronously render the component to ensure it renders
        // together with Prosemirror's rendering.
        if (this.editor.isInitialized) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"])(()=>{
                this.render();
            });
        } else {
            queueMicrotask(()=>{
                this.render();
            });
        }
    }
    /**
     * Render the React component.
     */ render() {
        var _a;
        const Component = this.component;
        const props = this.props;
        const editor = this.editor;
        // Handle ref forwarding with React 18/19 compatibility
        const isReact19 = isReact19Plus();
        const componentCanReceiveRef = canReceiveRef(Component);
        const elementProps = {
            ...props
        };
        // Always remove ref if the component cannot receive it (unless React 19+)
        if (elementProps.ref && !(isReact19 || componentCanReceiveRef)) {
            delete elementProps.ref;
        }
        // Only assign our own ref if allowed
        if (!elementProps.ref && (isReact19 || componentCanReceiveRef)) {
            // @ts-ignore - Setting ref prop for compatible components
            elementProps.ref = (ref)=>{
                this.ref = ref;
            };
        }
        this.reactElement = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Component, {
            ...elementProps
        });
        (_a = editor === null || editor === void 0 ? void 0 : editor.contentComponent) === null || _a === void 0 ? void 0 : _a.setRenderer(this.id, this);
    }
    /**
     * Re-renders the React component with new props.
     */ updateProps(props = {}) {
        this.props = {
            ...this.props,
            ...props
        };
        this.render();
    }
    /**
     * Destroy the React component.
     */ destroy() {
        var _a;
        const editor = this.editor;
        (_a = editor === null || editor === void 0 ? void 0 : editor.contentComponent) === null || _a === void 0 ? void 0 : _a.removeRenderer(this.id);
    }
    /**
     * Update the attributes of the element that holds the React component.
     */ updateAttributes(attributes) {
        Object.keys(attributes).forEach((key)=>{
            this.element.setAttribute(key, attributes[key]);
        });
    }
}
class ReactNodeView extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeView"] {
    constructor(component, props, options){
        super(component, props, options);
        if (!this.node.isLeaf) {
            if (this.options.contentDOMElementTag) {
                this.contentDOMElement = document.createElement(this.options.contentDOMElementTag);
            } else {
                this.contentDOMElement = document.createElement(this.node.isInline ? 'span' : 'div');
            }
            this.contentDOMElement.dataset.nodeViewContentReact = '';
            this.contentDOMElement.dataset.nodeViewWrapper = '';
            // For some reason the whiteSpace prop is not inherited properly in Chrome and Safari
            // With this fix it seems to work fine
            // See: https://github.com/ueberdosis/tiptap/issues/1197
            this.contentDOMElement.style.whiteSpace = 'inherit';
            const contentTarget = this.dom.querySelector('[data-node-view-content]');
            if (!contentTarget) {
                return;
            }
            contentTarget.appendChild(this.contentDOMElement);
        }
    }
    /**
     * Setup the React component.
     * Called on initialization.
     */ mount() {
        const props = {
            editor: this.editor,
            node: this.node,
            decorations: this.decorations,
            innerDecorations: this.innerDecorations,
            view: this.view,
            selected: false,
            extension: this.extension,
            HTMLAttributes: this.HTMLAttributes,
            getPos: ()=>this.getPos(),
            updateAttributes: (attributes = {})=>this.updateAttributes(attributes),
            deleteNode: ()=>this.deleteNode(),
            ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRef"])()
        };
        if (!this.component.displayName) {
            const capitalizeFirstChar = (string)=>{
                return string.charAt(0).toUpperCase() + string.substring(1);
            };
            this.component.displayName = capitalizeFirstChar(this.extension.name);
        }
        const onDragStart = this.onDragStart.bind(this);
        const nodeViewContentRef = (element)=>{
            if (element && this.contentDOMElement && element.firstChild !== this.contentDOMElement) {
                // remove the nodeViewWrapper attribute from the element
                if (element.hasAttribute('data-node-view-wrapper')) {
                    element.removeAttribute('data-node-view-wrapper');
                }
                element.appendChild(this.contentDOMElement);
            }
        };
        const context = {
            onDragStart,
            nodeViewContentRef
        };
        const Component = this.component;
        // For performance reasons, we memoize the provider component
        // And all of the things it requires are declared outside of the component, so it doesn't need to re-render
        const ReactNodeViewProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])((componentProps)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(ReactNodeViewContext.Provider, {
                value: context
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(Component, componentProps));
        });
        ReactNodeViewProvider.displayName = 'ReactNodeView';
        let as = this.node.isInline ? 'span' : 'div';
        if (this.options.as) {
            as = this.options.as;
        }
        const { className = '' } = this.options;
        this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this);
        this.renderer = new ReactRenderer(ReactNodeViewProvider, {
            editor: this.editor,
            props,
            as,
            className: `node-${this.node.type.name} ${className}`.trim()
        });
        this.editor.on('selectionUpdate', this.handleSelectionUpdate);
        this.updateElementAttributes();
    }
    /**
     * Return the DOM element.
     * This is the element that will be used to display the node view.
     */ get dom() {
        var _a;
        if (this.renderer.element.firstElementChild && !((_a = this.renderer.element.firstElementChild) === null || _a === void 0 ? void 0 : _a.hasAttribute('data-node-view-wrapper'))) {
            throw Error('Please use the NodeViewWrapper component for your node view.');
        }
        return this.renderer.element;
    }
    /**
     * Return the content DOM element.
     * This is the element that will be used to display the rich-text content of the node.
     */ get contentDOM() {
        if (this.node.isLeaf) {
            return null;
        }
        return this.contentDOMElement;
    }
    /**
     * On editor selection update, check if the node is selected.
     * If it is, call `selectNode`, otherwise call `deselectNode`.
     */ handleSelectionUpdate() {
        const { from, to } = this.editor.state.selection;
        const pos = this.getPos();
        if (typeof pos !== 'number') {
            return;
        }
        if (from <= pos && to >= pos + this.node.nodeSize) {
            if (this.renderer.props.selected) {
                return;
            }
            this.selectNode();
        } else {
            if (!this.renderer.props.selected) {
                return;
            }
            this.deselectNode();
        }
    }
    /**
     * On update, update the React component.
     * To prevent unnecessary updates, the `update` option can be used.
     */ update(node, decorations, innerDecorations) {
        const rerenderComponent = (props)=>{
            this.renderer.updateProps(props);
            if (typeof this.options.attrs === 'function') {
                this.updateElementAttributes();
            }
        };
        if (node.type !== this.node.type) {
            return false;
        }
        if (typeof this.options.update === 'function') {
            const oldNode = this.node;
            const oldDecorations = this.decorations;
            const oldInnerDecorations = this.innerDecorations;
            this.node = node;
            this.decorations = decorations;
            this.innerDecorations = innerDecorations;
            return this.options.update({
                oldNode,
                oldDecorations,
                newNode: node,
                newDecorations: decorations,
                oldInnerDecorations,
                innerDecorations,
                updateProps: ()=>rerenderComponent({
                        node,
                        decorations,
                        innerDecorations
                    })
            });
        }
        if (node === this.node && this.decorations === decorations && this.innerDecorations === innerDecorations) {
            return true;
        }
        this.node = node;
        this.decorations = decorations;
        this.innerDecorations = innerDecorations;
        rerenderComponent({
            node,
            decorations,
            innerDecorations
        });
        return true;
    }
    /**
     * Select the node.
     * Add the `selected` prop and the `ProseMirror-selectednode` class.
     */ selectNode() {
        this.renderer.updateProps({
            selected: true
        });
        this.renderer.element.classList.add('ProseMirror-selectednode');
    }
    /**
     * Deselect the node.
     * Remove the `selected` prop and the `ProseMirror-selectednode` class.
     */ deselectNode() {
        this.renderer.updateProps({
            selected: false
        });
        this.renderer.element.classList.remove('ProseMirror-selectednode');
    }
    /**
     * Destroy the React component instance.
     */ destroy() {
        this.renderer.destroy();
        this.editor.off('selectionUpdate', this.handleSelectionUpdate);
        this.contentDOMElement = null;
    }
    /**
     * Update the attributes of the top-level element that holds the React component.
     * Applying the attributes defined in the `attrs` option.
     */ updateElementAttributes() {
        if (this.options.attrs) {
            let attrsObj = {};
            if (typeof this.options.attrs === 'function') {
                const extensionAttributes = this.editor.extensionManager.attributes;
                const HTMLAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRenderedAttributes"])(this.node, extensionAttributes);
                attrsObj = this.options.attrs({
                    node: this.node,
                    HTMLAttributes
                });
            } else {
                attrsObj = this.options.attrs;
            }
            this.renderer.updateAttributes(attrsObj);
        }
    }
}
/**
 * Create a React node view renderer.
 */ function ReactNodeViewRenderer(component, options) {
    return (props)=>{
        // try to get the parent component
        // this is important for vue devtools to show the component hierarchy correctly
        // maybe it’s `undefined` because <editor-content> isn’t rendered yet
        if (!props.editor.contentComponent) {
            return {};
        }
        return new ReactNodeView(component, props, options);
    };
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/suggestion/dist/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Suggestion": ()=>Suggestion,
    "SuggestionPluginKey": ()=>SuggestionPluginKey,
    "default": ()=>Suggestion,
    "findSuggestionMatch": ()=>findSuggestionMatch
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$pm$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/pm/state/dist/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-state/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$pm$2f$view$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/pm/view/dist/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-view/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/core/dist/index.js [app-ssr] (ecmascript)");
;
;
;
function findSuggestionMatch(config) {
    var _a;
    const { char, allowSpaces: allowSpacesOption, allowToIncludeChar, allowedPrefixes, startOfLine, $position } = config;
    const allowSpaces = allowSpacesOption && !allowToIncludeChar;
    const escapedChar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeForRegEx"])(char);
    const suffix = new RegExp(`\\s${escapedChar}$`);
    const prefix = startOfLine ? '^' : '';
    const finalEscapedChar = allowToIncludeChar ? '' : escapedChar;
    const regexp = allowSpaces ? new RegExp(`${prefix}${escapedChar}.*?(?=\\s${finalEscapedChar}|$)`, 'gm') : new RegExp(`${prefix}(?:^)?${escapedChar}[^\\s${finalEscapedChar}]*`, 'gm');
    const text = ((_a = $position.nodeBefore) === null || _a === void 0 ? void 0 : _a.isText) && $position.nodeBefore.text;
    if (!text) {
        return null;
    }
    const textFrom = $position.pos - text.length;
    const match = Array.from(text.matchAll(regexp)).pop();
    if (!match || match.input === undefined || match.index === undefined) {
        return null;
    }
    // JavaScript doesn't have lookbehinds. This hacks a check that first character
    // is a space or the start of the line
    const matchPrefix = match.input.slice(Math.max(0, match.index - 1), match.index);
    const matchPrefixIsAllowed = new RegExp(`^[${allowedPrefixes === null || allowedPrefixes === void 0 ? void 0 : allowedPrefixes.join('')}\0]?$`).test(matchPrefix);
    if (allowedPrefixes !== null && !matchPrefixIsAllowed) {
        return null;
    }
    // The absolute position of the match in the document
    const from = textFrom + match.index;
    let to = from + match[0].length;
    // Edge case handling; if spaces are allowed and we're directly in between
    // two triggers
    if (allowSpaces && suffix.test(text.slice(to - 1, to + 1))) {
        match[0] += ' ';
        to += 1;
    }
    // If the $position is located within the matched substring, return that range
    if (from < $position.pos && to >= $position.pos) {
        return {
            range: {
                from,
                to
            },
            query: match[0].slice(char.length),
            text: match[0]
        };
    }
    return null;
}
const SuggestionPluginKey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PluginKey"]('suggestion');
/**
 * This utility allows you to create suggestions.
 * @see https://tiptap.dev/api/utilities/suggestion
 */ function Suggestion({ pluginKey = SuggestionPluginKey, editor, char = '@', allowSpaces = false, allowToIncludeChar = false, allowedPrefixes = [
    ' '
], startOfLine = false, decorationTag = 'span', decorationClass = 'suggestion', decorationContent = '', decorationEmptyClass = 'is-empty', command = ()=>null, items = ()=>[], render = ()=>({}), allow = ()=>true, findSuggestionMatch: findSuggestionMatch$1 = findSuggestionMatch }) {
    let props;
    const renderer = render === null || render === void 0 ? void 0 : render();
    const plugin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Plugin"]({
        key: pluginKey,
        view () {
            return {
                update: async (view, prevState)=>{
                    var _a, _b, _c, _d, _e, _f, _g;
                    const prev = (_a = this.key) === null || _a === void 0 ? void 0 : _a.getState(prevState);
                    const next = (_b = this.key) === null || _b === void 0 ? void 0 : _b.getState(view.state);
                    // See how the state changed
                    const moved = prev.active && next.active && prev.range.from !== next.range.from;
                    const started = !prev.active && next.active;
                    const stopped = prev.active && !next.active;
                    const changed = !started && !stopped && prev.query !== next.query;
                    const handleStart = started || moved && changed;
                    const handleChange = changed || moved;
                    const handleExit = stopped || moved && changed;
                    // Cancel when suggestion isn't active
                    if (!handleStart && !handleChange && !handleExit) {
                        return;
                    }
                    const state = handleExit && !handleStart ? prev : next;
                    const decorationNode = view.dom.querySelector(`[data-decoration-id="${state.decorationId}"]`);
                    props = {
                        editor,
                        range: state.range,
                        query: state.query,
                        text: state.text,
                        items: [],
                        command: (commandProps)=>{
                            return command({
                                editor,
                                range: state.range,
                                props: commandProps
                            });
                        },
                        decorationNode,
                        // virtual node for popper.js or tippy.js
                        // this can be used for building popups without a DOM node
                        clientRect: decorationNode ? ()=>{
                            var _a;
                            // because of `items` can be asynchrounous we’ll search for the current decoration node
                            const { decorationId } = (_a = this.key) === null || _a === void 0 ? void 0 : _a.getState(editor.state); // eslint-disable-line
                            const currentDecorationNode = view.dom.querySelector(`[data-decoration-id="${decorationId}"]`);
                            return (currentDecorationNode === null || currentDecorationNode === void 0 ? void 0 : currentDecorationNode.getBoundingClientRect()) || null;
                        } : null
                    };
                    if (handleStart) {
                        (_c = renderer === null || renderer === void 0 ? void 0 : renderer.onBeforeStart) === null || _c === void 0 ? void 0 : _c.call(renderer, props);
                    }
                    if (handleChange) {
                        (_d = renderer === null || renderer === void 0 ? void 0 : renderer.onBeforeUpdate) === null || _d === void 0 ? void 0 : _d.call(renderer, props);
                    }
                    if (handleChange || handleStart) {
                        props.items = await items({
                            editor,
                            query: state.query
                        });
                    }
                    if (handleExit) {
                        (_e = renderer === null || renderer === void 0 ? void 0 : renderer.onExit) === null || _e === void 0 ? void 0 : _e.call(renderer, props);
                    }
                    if (handleChange) {
                        (_f = renderer === null || renderer === void 0 ? void 0 : renderer.onUpdate) === null || _f === void 0 ? void 0 : _f.call(renderer, props);
                    }
                    if (handleStart) {
                        (_g = renderer === null || renderer === void 0 ? void 0 : renderer.onStart) === null || _g === void 0 ? void 0 : _g.call(renderer, props);
                    }
                },
                destroy: ()=>{
                    var _a;
                    if (!props) {
                        return;
                    }
                    (_a = renderer === null || renderer === void 0 ? void 0 : renderer.onExit) === null || _a === void 0 ? void 0 : _a.call(renderer, props);
                }
            };
        },
        state: {
            // Initialize the plugin's internal state.
            init () {
                const state = {
                    active: false,
                    range: {
                        from: 0,
                        to: 0
                    },
                    query: null,
                    text: null,
                    composing: false
                };
                return state;
            },
            // Apply changes to the plugin state from a view transaction.
            apply (transaction, prev, _oldState, state) {
                const { isEditable } = editor;
                const { composing } = editor.view;
                const { selection } = transaction;
                const { empty, from } = selection;
                const next = {
                    ...prev
                };
                next.composing = composing;
                // We can only be suggesting if the view is editable, and:
                //   * there is no selection, or
                //   * a composition is active (see: https://github.com/ueberdosis/tiptap/issues/1449)
                if (isEditable && (empty || editor.view.composing)) {
                    // Reset active state if we just left the previous suggestion range
                    if ((from < prev.range.from || from > prev.range.to) && !composing && !prev.composing) {
                        next.active = false;
                    }
                    // Try to match against where our cursor currently is
                    const match = findSuggestionMatch$1({
                        char,
                        allowSpaces,
                        allowToIncludeChar,
                        allowedPrefixes,
                        startOfLine,
                        $position: selection.$from
                    });
                    const decorationId = `id_${Math.floor(Math.random() * 0xffffffff)}`;
                    // If we found a match, update the current state to show it
                    if (match && allow({
                        editor,
                        state,
                        range: match.range,
                        isActive: prev.active
                    })) {
                        next.active = true;
                        next.decorationId = prev.decorationId ? prev.decorationId : decorationId;
                        next.range = match.range;
                        next.query = match.query;
                        next.text = match.text;
                    } else {
                        next.active = false;
                    }
                } else {
                    next.active = false;
                }
                // Make sure to empty the range if suggestion is inactive
                if (!next.active) {
                    next.decorationId = null;
                    next.range = {
                        from: 0,
                        to: 0
                    };
                    next.query = null;
                    next.text = null;
                }
                return next;
            }
        },
        props: {
            // Call the keydown hook if suggestion is active.
            handleKeyDown (view, event) {
                var _a;
                const { active, range } = plugin.getState(view.state);
                if (!active) {
                    return false;
                }
                return ((_a = renderer === null || renderer === void 0 ? void 0 : renderer.onKeyDown) === null || _a === void 0 ? void 0 : _a.call(renderer, {
                    view,
                    event,
                    range
                })) || false;
            },
            // Setup decorator on the currently active suggestion.
            decorations (state) {
                const { active, range, decorationId, query } = plugin.getState(state);
                if (!active) {
                    return null;
                }
                const isEmpty = !(query === null || query === void 0 ? void 0 : query.length);
                const classNames = [
                    decorationClass
                ];
                if (isEmpty) {
                    classNames.push(decorationEmptyClass);
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DecorationSet"].create(state.doc, [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Decoration"].inline(range.from, range.to, {
                        nodeName: decorationTag,
                        class: classNames.join(' '),
                        'data-decoration-id': decorationId,
                        'data-decoration-content': decorationContent
                    })
                ]);
            }
        }
    });
    return plugin;
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/cedar-os/node_modules/@tiptap/extension-mention/dist/index.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Mention": ()=>Mention,
    "default": ()=>Mention
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$pm$2f$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/pm/model/dist/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/prosemirror-model/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$suggestion$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/suggestion/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$pm$2f$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/pm/state/dist/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prosemirror-state/dist/index.js [app-ssr] (ecmascript)");
;
;
;
;
/**
 * Returns the suggestion options for a trigger of the Mention extension. These
 * options are used to create a `Suggestion` ProseMirror plugin. Each plugin lets
 * you define a different trigger that opens the Mention menu. For example,
 * you can define a `@` trigger to mention users and a `#` trigger to mention
 * tags.
 *
 * @param param0 The configured options for the suggestion
 * @returns
 */ function getSuggestionOptions({ editor: tiptapEditor, overrideSuggestionOptions, extensionName, char = '@' }) {
    const pluginKey = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prosemirror$2d$state$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PluginKey"]();
    return {
        editor: tiptapEditor,
        char,
        pluginKey,
        command: ({ editor, range, props })=>{
            var _a, _b, _c;
            // increase range.to by one when the next node is of type "text"
            // and starts with a space character
            const nodeAfter = editor.view.state.selection.$to.nodeAfter;
            const overrideSpace = (_a = nodeAfter === null || nodeAfter === void 0 ? void 0 : nodeAfter.text) === null || _a === void 0 ? void 0 : _a.startsWith(' ');
            if (overrideSpace) {
                range.to += 1;
            }
            editor.chain().focus().insertContentAt(range, [
                {
                    type: extensionName,
                    attrs: {
                        ...props,
                        mentionSuggestionChar: char
                    }
                },
                {
                    type: 'text',
                    text: ' '
                }
            ]).run();
            // get reference to `window` object from editor element, to support cross-frame JS usage
            (_c = (_b = editor.view.dom.ownerDocument.defaultView) === null || _b === void 0 ? void 0 : _b.getSelection()) === null || _c === void 0 ? void 0 : _c.collapseToEnd();
        },
        allow: ({ state, range })=>{
            const $from = state.doc.resolve(range.from);
            const type = state.schema.nodes[extensionName];
            const allow = !!$from.parent.type.contentMatch.matchType(type);
            return allow;
        },
        ...overrideSuggestionOptions
    };
}
/**
 * Returns the suggestions for the mention extension.
 *
 * @param options The extension options
 * @returns the suggestions
 */ function getSuggestions(options) {
    return (options.options.suggestions.length ? options.options.suggestions : [
        options.options.suggestion
    ]).map((suggestion)=>getSuggestionOptions({
            // @ts-ignore `editor` can be `undefined` when converting the document to HTML with the HTML utility
            editor: options.editor,
            overrideSuggestionOptions: suggestion,
            extensionName: options.name,
            char: suggestion.char
        }));
}
/**
 * Returns the suggestion options of the mention that has a given character trigger. If not
 * found, it returns the first suggestion.
 *
 * @param options The extension options
 * @param char The character that triggers the mention
 * @returns The suggestion options
 */ function getSuggestionFromChar(options, char) {
    const suggestions = getSuggestions(options);
    const suggestion = suggestions.find((s)=>s.char === char);
    if (suggestion) {
        return suggestion;
    }
    if (suggestions.length) {
        return suggestions[0];
    }
    return null;
}
/**
 * This extension allows you to insert mentions into the editor.
 * @see https://www.tiptap.dev/api/extensions/mention
 */ const Mention = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"].create({
    name: 'mention',
    priority: 101,
    addOptions () {
        return {
            HTMLAttributes: {},
            renderText ({ node, suggestion }) {
                var _a, _b;
                return `${(_a = suggestion === null || suggestion === void 0 ? void 0 : suggestion.char) !== null && _a !== void 0 ? _a : '@'}${(_b = node.attrs.label) !== null && _b !== void 0 ? _b : node.attrs.id}`;
            },
            deleteTriggerWithBackspace: false,
            renderHTML ({ options, node, suggestion }) {
                var _a, _b;
                return [
                    'span',
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.HTMLAttributes, options.HTMLAttributes),
                    `${(_a = suggestion === null || suggestion === void 0 ? void 0 : suggestion.char) !== null && _a !== void 0 ? _a : '@'}${(_b = node.attrs.label) !== null && _b !== void 0 ? _b : node.attrs.id}`
                ];
            },
            suggestions: [],
            suggestion: {}
        };
    },
    group: 'inline',
    inline: true,
    selectable: false,
    atom: true,
    addAttributes () {
        return {
            id: {
                default: null,
                parseHTML: (element)=>element.getAttribute('data-id'),
                renderHTML: (attributes)=>{
                    if (!attributes.id) {
                        return {};
                    }
                    return {
                        'data-id': attributes.id
                    };
                }
            },
            label: {
                default: null,
                parseHTML: (element)=>element.getAttribute('data-label'),
                renderHTML: (attributes)=>{
                    if (!attributes.label) {
                        return {};
                    }
                    return {
                        'data-label': attributes.label
                    };
                }
            },
            // When there are multiple types of mentions, this attribute helps distinguish them
            mentionSuggestionChar: {
                default: '@',
                parseHTML: (element)=>element.getAttribute('data-mention-suggestion-char'),
                renderHTML: (attributes)=>{
                    return {
                        'data-mention-suggestion-char': attributes.mentionSuggestionChar
                    };
                }
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: `span[data-type="${this.name}"]`
            }
        ];
    },
    renderHTML ({ node, HTMLAttributes }) {
        const suggestion = getSuggestionFromChar(this, node.attrs.mentionSuggestionChar);
        if (this.options.renderLabel !== undefined) {
            console.warn('renderLabel is deprecated use renderText and renderHTML instead');
            return [
                'span',
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeAttributes"])({
                    'data-type': this.name
                }, this.options.HTMLAttributes, HTMLAttributes),
                this.options.renderLabel({
                    options: this.options,
                    node,
                    suggestion
                })
            ];
        }
        const mergedOptions = {
            ...this.options
        };
        mergedOptions.HTMLAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeAttributes"])({
            'data-type': this.name
        }, this.options.HTMLAttributes, HTMLAttributes);
        const html = this.options.renderHTML({
            options: mergedOptions,
            node,
            suggestion
        });
        if (typeof html === 'string') {
            return [
                'span',
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeAttributes"])({
                    'data-type': this.name
                }, this.options.HTMLAttributes, HTMLAttributes),
                html
            ];
        }
        return html;
    },
    renderText ({ node }) {
        const args = {
            options: this.options,
            node,
            suggestion: getSuggestionFromChar(this, node.attrs.mentionSuggestionChar)
        };
        if (this.options.renderLabel !== undefined) {
            console.warn('renderLabel is deprecated use renderText and renderHTML instead');
            return this.options.renderLabel(args);
        }
        return this.options.renderText(args);
    },
    addKeyboardShortcuts () {
        return {
            Backspace: ()=>this.editor.commands.command(({ tr, state })=>{
                    let isMention = false;
                    const { selection } = state;
                    const { empty, anchor } = selection;
                    if (!empty) {
                        return false;
                    }
                    state.doc.nodesBetween(anchor - 1, anchor, (node, pos)=>{
                        if (node.type.name === this.name) {
                            isMention = true;
                            tr.insertText(this.options.deleteTriggerWithBackspace ? '' : this.options.suggestion.char || '', pos, pos + node.nodeSize);
                            return false;
                        }
                    });
                    // Store node and position for later use
                    let mentionNode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f$prosemirror$2d$model$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Node"]();
                    let mentionPos = 0;
                    state.doc.nodesBetween(anchor - 1, anchor, (node, pos)=>{
                        if (node.type.name === this.name) {
                            isMention = true;
                            mentionNode = node;
                            mentionPos = pos;
                            return false;
                        }
                    });
                    if (isMention) {
                        tr.insertText(this.options.deleteTriggerWithBackspace ? '' : mentionNode.attrs.mentionSuggestionChar, mentionPos, mentionPos + mentionNode.nodeSize);
                    }
                    return isMention;
                })
        };
    },
    addProseMirrorPlugins () {
        // Create a plugin for each suggestion configuration
        return getSuggestions(this).map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$suggestion$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    }
});
;
 //# sourceMappingURL=index.js.map
}),

};

//# sourceMappingURL=23fb7_753628db._.js.map