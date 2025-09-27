(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ChatModeSelector.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChatModeSelector": ()=>ChatModeSelector
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/panel-right.js [app-client] (ecmascript) <export default as PanelRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.js [app-client] (ecmascript) <export default as Type>");
;
;
function ChatModeSelector(param) {
    let { currentMode, onModeChange } = param;
    const modes = [
        {
            id: 'caption',
            label: 'Caption',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ChatModeSelector.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            description: 'Bottom caption style chat'
        },
        {
            id: 'floating',
            label: 'Floating',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ChatModeSelector.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            description: 'Resizable floating chat window'
        },
        {
            id: 'sidepanel',
            label: 'Side Panel',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelRight$3e$__["PanelRight"], {
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ChatModeSelector.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            description: 'Dedicated side panel layout'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-4 left-4 bg-white/90 backdrop-blur rounded-lg p-2 shadow-lg border z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs font-semibold mb-2 text-gray-600",
                children: "Chat Modes"
            }, void 0, false, {
                fileName: "[project]/src/components/ChatModeSelector.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1",
                children: modes.map((mode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onModeChange(mode.id),
                        className: "\n              flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors\n              ".concat(currentMode === mode.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 text-gray-700', "\n            "),
                        title: mode.description,
                        children: [
                            mode.icon,
                            mode.label
                        ]
                    }, mode.id, true, {
                        fileName: "[project]/src/components/ChatModeSelector.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ChatModeSelector.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChatModeSelector.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = ChatModeSelector;
var _c;
__turbopack_context__.k.register(_c, "ChatModeSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/structural/FloatingContainer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FloatingContainer": ()=>FloatingContainer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const FloatingContainer = (param)=>{
    let { children, isActive, position, className = '', dimensions = {}, resizable = true, onResize } = param;
    _s();
    // Determine effective position - position prop takes precedence over side
    const effectivePosition = position || 'bottom-right';
    // Extract dimensions with defaults
    const { width: initialWidth, height: initialHeight, minWidth = 300, minHeight = 250, maxWidth, maxHeight } = dimensions;
    // Calculate default dimensions based on viewport and position
    const getDefaultDimensions = ()=>{
        // For bottom-center, use ChatInputContainer defaults
        if (effectivePosition === 'bottom-center') {
            return {
                width: initialWidth || 600,
                height: initialHeight || 'auto'
            };
        }
        return {
            width: initialWidth || 400,
            height: initialHeight || 500
        };
    };
    const defaults = getDefaultDimensions();
    const [panelWidth, setPanelWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(typeof defaults.width === 'number' ? defaults.width : 400);
    const [panelHeight, setPanelHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(typeof defaults.height === 'number' ? defaults.height : 500);
    // Update panel dimensions after hydration and when dimensions prop changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingContainer.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Calculate client-side dimensions after hydration
            const getClientDimensions = {
                "FloatingContainer.useEffect.getClientDimensions": ()=>{
                    if (effectivePosition === 'bottom-center') {
                        return {
                            width: initialWidth || Math.min(window.innerWidth - 32, 768),
                            height: initialHeight || 'auto'
                        };
                    }
                    return {
                        width: initialWidth || window.innerWidth * 0.3,
                        height: initialHeight || window.innerHeight * 0.6
                    };
                }
            }["FloatingContainer.useEffect.getClientDimensions"];
            const clientDefaults = getClientDimensions();
            if (typeof clientDefaults.width === 'number') {
                setPanelWidth(clientDefaults.width);
            }
            if (typeof clientDefaults.height === 'number') {
                setPanelHeight(clientDefaults.height);
            }
        }
    }["FloatingContainer.useEffect"], [
        initialWidth,
        initialHeight,
        effectivePosition
    ]);
    // Calculate max dimensions based on position - use static fallbacks for SSR
    const getMaxDimensions = ()=>{
        if (effectivePosition === 'bottom-center') {
            return {
                maxWidth: maxWidth || 768,
                maxHeight: maxHeight || 600
            };
        }
        return {
            maxWidth: maxWidth || 800,
            maxHeight: maxHeight || 600
        };
    };
    const [calculatedMaxWidth, setCalculatedMaxWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "FloatingContainer.useState": ()=>getMaxDimensions().maxWidth
    }["FloatingContainer.useState"]);
    const [calculatedMaxHeight, setCalculatedMaxHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "FloatingContainer.useState": ()=>getMaxDimensions().maxHeight
    }["FloatingContainer.useState"]);
    // Update max dimensions after hydration
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingContainer.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const getClientMaxDimensions = {
                "FloatingContainer.useEffect.getClientMaxDimensions": ()=>{
                    if (effectivePosition === 'bottom-center') {
                        return {
                            maxWidth: maxWidth || Math.min(window.innerWidth - 32, 768),
                            maxHeight: maxHeight || window.innerHeight * 0.8
                        };
                    }
                    return {
                        maxWidth: maxWidth || window.innerWidth * 0.6,
                        maxHeight: maxHeight || window.innerHeight * 0.8
                    };
                }
            }["FloatingContainer.useEffect.getClientMaxDimensions"];
            const clientMaxDimensions = getClientMaxDimensions();
            setCalculatedMaxWidth(clientMaxDimensions.maxWidth);
            setCalculatedMaxHeight(clientMaxDimensions.maxHeight);
        }
    }["FloatingContainer.useEffect"], [
        effectivePosition,
        maxWidth,
        maxHeight
    ]);
    // Resize state
    const [isResizing, setIsResizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const dragStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dragStartY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dragStartWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dragStartHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Handle resize
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FloatingContainer.useCallback[handleMouseMove]": (e)=>{
            if (!isResizing || !resizable) return;
            let newWidth = panelWidth;
            let newHeight = panelHeight;
            if (isResizing === 'width' || isResizing === 'both') {
                const deltaX = effectivePosition === 'bottom-right' ? dragStartX.current - e.clientX : effectivePosition === 'bottom-left' ? e.clientX - dragStartX.current : 0; // For bottom-center, handle differently or disable width resize
                if (effectivePosition !== 'bottom-center') {
                    newWidth = Math.max(minWidth, Math.min(calculatedMaxWidth, dragStartWidth.current + deltaX));
                    setPanelWidth(newWidth);
                }
            }
            if (isResizing === 'height' || isResizing === 'both') {
                const deltaY = dragStartY.current - e.clientY;
                newHeight = Math.max(minHeight, Math.min(calculatedMaxHeight, dragStartHeight.current + deltaY));
                setPanelHeight(newHeight);
            }
            onResize === null || onResize === void 0 ? void 0 : onResize(newWidth, newHeight);
        }
    }["FloatingContainer.useCallback[handleMouseMove]"], [
        isResizing,
        effectivePosition,
        minWidth,
        minHeight,
        calculatedMaxWidth,
        calculatedMaxHeight,
        panelWidth,
        panelHeight,
        resizable,
        onResize
    ]);
    const handleMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FloatingContainer.useCallback[handleMouseUp]": ()=>{
            setIsResizing(null);
            if (typeof document !== 'undefined') {
                document.body.style.cursor = '';
                document.body.style.userSelect = '';
                document.body.style.webkitUserSelect = '';
            }
        }
    }["FloatingContainer.useCallback[handleMouseUp]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingContainer.useEffect": ()=>{
            if (isResizing && resizable) {
                if (typeof document !== 'undefined') {
                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                    document.body.style.userSelect = 'none';
                    document.body.style.webkitUserSelect = 'none';
                    if (isResizing === 'width') document.body.style.cursor = 'col-resize';
                    if (isResizing === 'height') document.body.style.cursor = 'row-resize';
                    if (isResizing === 'both') document.body.style.cursor = 'nwse-resize';
                }
            }
            return ({
                "FloatingContainer.useEffect": ()=>{
                    if (typeof document !== 'undefined') {
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                    }
                }
            })["FloatingContainer.useEffect"];
        }
    }["FloatingContainer.useEffect"], [
        isResizing,
        handleMouseMove,
        handleMouseUp,
        resizable
    ]);
    const startResize = (direction, e)=>{
        if (!resizable) return;
        e.preventDefault();
        setIsResizing(direction);
        dragStartX.current = e.clientX;
        dragStartY.current = e.clientY;
        dragStartWidth.current = panelWidth;
        dragStartHeight.current = panelHeight;
    };
    // Position classes based on position
    const getPositionClasses = ()=>{
        switch(effectivePosition){
            case 'bottom-left':
                return 'fixed bottom-4 left-4';
            case 'bottom-right':
                return 'fixed bottom-4 right-4';
            case 'bottom-center':
                return 'fixed bottom-8 left-1/2 transform -translate-x-1/2';
            case 'top-center':
                return 'fixed top-8 left-1/2 transform -translate-x-1/2';
            default:
                return 'fixed bottom-4 right-4';
        }
    };
    const positionClasses = getPositionClasses();
    // Animation direction based on position
    const getAnimationDirection = ()=>{
        switch(effectivePosition){
            case 'bottom-left':
                return {
                    initial: {
                        x: '-120%'
                    },
                    animate: {
                        x: 0
                    },
                    exit: {
                        x: '-120%'
                    }
                };
            case 'bottom-right':
                return {
                    initial: {
                        x: '120%'
                    },
                    animate: {
                        x: 0
                    },
                    exit: {
                        x: '120%'
                    }
                };
            case 'bottom-center':
                return {
                    initial: {
                        y: '120%'
                    },
                    animate: {
                        y: 0
                    },
                    exit: {
                        y: '120%'
                    }
                };
            case 'top-center':
                return {
                    initial: {
                        y: '-120%'
                    },
                    animate: {
                        y: 0
                    },
                    exit: {
                        y: '-120%'
                    }
                };
            default:
                return {
                    initial: {
                        x: '120%'
                    },
                    animate: {
                        x: 0
                    },
                    exit: {
                        x: '120%'
                    }
                };
        }
    };
    const animationProps = getAnimationDirection();
    if (!isActive) return null;
    const containerStyle = effectivePosition === 'bottom-center' ? {
        width: panelWidth,
        maxWidth: calculatedMaxWidth,
        minWidth,
        height: defaults.height === 'auto' ? 'auto' : panelHeight
    } : {
        width: panelWidth,
        height: panelHeight,
        minWidth,
        minHeight
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "".concat(positionClasses, " z-[9999] ").concat(effectivePosition === 'bottom-center' ? 'w-2xl max-w-3xl' : '', " ").concat(className),
        style: containerStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: animationProps.initial,
                animate: animationProps.animate,
                exit: animationProps.exit,
                transition: {
                    type: 'spring',
                    damping: 20,
                    stiffness: 100
                },
                className: "w-full h-full",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/structural/FloatingContainer.tsx",
                lineNumber: 329,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            resizable && effectivePosition !== 'bottom-center' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 h-full w-1 cursor-col-resize hover:bg-blue-400/50",
                        style: {
                            left: effectivePosition === 'bottom-right' ? 0 : 'auto',
                            right: effectivePosition === 'bottom-left' ? 0 : 'auto'
                        },
                        onMouseDown: (e)=>startResize('width', e)
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/structural/FloatingContainer.tsx",
                        lineNumber: 342,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-full h-1 cursor-row-resize hover:bg-blue-400/50",
                        style: {
                            top: 0
                        },
                        onMouseDown: (e)=>startResize('height', e)
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/structural/FloatingContainer.tsx",
                        lineNumber: 352,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-3 h-3 cursor-nwse-resize hover:bg-blue-400/50",
                        style: {
                            top: 0,
                            left: effectivePosition === 'bottom-right' ? 0 : 'auto',
                            right: effectivePosition === 'bottom-left' ? 0 : 'auto'
                        },
                        onMouseDown: (e)=>startResize('both', e)
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/structural/FloatingContainer.tsx",
                        lineNumber: 359,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/cedar/components/structural/FloatingContainer.tsx",
        lineNumber: 324,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FloatingContainer, "pAMpmrYx6yS7o4Ajz6rzCxCIDGE=");
_c = FloatingContainer;
var _c;
__turbopack_context__.k.register(_c, "FloatingContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/chatInput/ContextBadgeRow.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ContextBadgeRow": ()=>ContextBadgeRow
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
/**
 * Helper to normalize context entries to an array for internal processing
 */ function normalizeToArray(value) {
    return Array.isArray(value) ? value : [
        value
    ];
}
const ContextBadgeRow = (param)=>{
    let { editor } = param;
    _s();
    const removeContextEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"])({
        "ContextBadgeRow.useCedarStore[removeContextEntry]": (s)=>s.removeContextEntry
    }["ContextBadgeRow.useCedarStore[removeContextEntry]"]);
    const mentionProviders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"])({
        "ContextBadgeRow.useCedarStore[mentionProviders]": (s)=>s.mentionProviders
    }["ContextBadgeRow.useCedarStore[mentionProviders]"]);
    const additionalContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"])({
        "ContextBadgeRow.useCedarStore[additionalContext]": (s)=>s.additionalContext
    }["ContextBadgeRow.useCedarStore[additionalContext]"]);
    const collapsingConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"])({
        "ContextBadgeRow.useCedarStore[collapsingConfigs]": (s)=>s.collapsingConfigs
    }["ContextBadgeRow.useCedarStore[collapsingConfigs]"]);
    const renderContextBadge = (key, entry)=>{
        var _entry_metadata, _entry_metadata1, _entry_metadata2, _entry_metadata3, _entry_metadata4, _entry_metadata5;
        // Try to find a provider that might have created this entry
        const provider = mentionProviders.get(key);
        // Respect visibility flag
        if (((_entry_metadata = entry.metadata) === null || _entry_metadata === void 0 ? void 0 : _entry_metadata.showInChat) === false) {
            return null;
        }
        // Use custom renderer if available
        if (provider === null || provider === void 0 ? void 0 : provider.renderContextBadge) {
            return provider.renderContextBadge(entry);
        }
        // Get the label from metadata or fall back to id
        const label = ((_entry_metadata1 = entry.metadata) === null || _entry_metadata1 === void 0 ? void 0 : _entry_metadata1.label) || entry.id;
        // Get color from metadata and apply 20% opacity
        const color = (_entry_metadata2 = entry.metadata) === null || _entry_metadata2 === void 0 ? void 0 : _entry_metadata2.color;
        const bgStyle = color ? {
            backgroundColor: "".concat(color, "33")
        } : {}; // 33 in hex = 20% opacity
        const hasBgStyle = !!color;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-2 py-1 text-xs rounded-sm cursor-pointer flex items-center gap-1 whitespace-nowrap hover:border-opacity-80 hover:text-opacity-80 group box-border border ".concat(hasBgStyle ? 'border-transparent' : ''),
            style: bgStyle,
            tabIndex: 0,
            "aria-label": "Selected ".concat(key, " ").concat(label),
            onClick: ()=>{
                if (entry.source === 'mention') {
                    removeContextEntry(key, entry.id);
                    // Also remove the mention from the editor
                    if (editor) {
                        const { state } = editor;
                        const { doc, tr } = state;
                        let found = false;
                        doc.descendants((node, pos)=>{
                            if (node.type.name === 'mention' && node.attrs.contextEntryId === entry.id) {
                                tr.delete(pos, pos + node.nodeSize);
                                found = true;
                                return false;
                            }
                        });
                        if (found) {
                            editor.view.dispatch(tr);
                        }
                    }
                }
            },
            children: [
                ((_entry_metadata3 = entry.metadata) === null || _entry_metadata3 === void 0 ? void 0 : _entry_metadata3.icon) && entry.source === 'mention' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex-shrink-0 group-hover:hidden",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClassName"])(entry.metadata.icon, 'w-3 h-3')
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatInput/ContextBadgeRow.tsx",
                            lineNumber: 88,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-3 h-3 flex-shrink-0 hidden group-hover:block"
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatInput/ContextBadgeRow.tsx",
                            lineNumber: 91,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true),
                ((_entry_metadata4 = entry.metadata) === null || _entry_metadata4 === void 0 ? void 0 : _entry_metadata4.icon) && entry.source !== 'mention' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex-shrink-0",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["withClassName"])(entry.metadata.icon, 'w-3 h-3')
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/chatInput/ContextBadgeRow.tsx",
                    lineNumber: 95,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0)),
                !((_entry_metadata5 = entry.metadata) === null || _entry_metadata5 === void 0 ? void 0 : _entry_metadata5.icon) && entry.source === 'mention' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-3 h-3 flex-shrink-0 hidden group-hover:block"
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/chatInput/ContextBadgeRow.tsx",
                    lineNumber: 100,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/chatInput/ContextBadgeRow.tsx",
                    lineNumber: 102,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, key + ':' + entry.id, true, {
            fileName: "[project]/src/cedar/components/chatInput/ContextBadgeRow.tsx",
            lineNumber: 52,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Process and render context with collapsing logic
    const contextElements = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "ContextBadgeRow.useMemo[contextElements]": ()=>{
            const elements = [];
            // Create a sorted list of context keys based on their entries' order metadata
            const contextKeysWithOrder = Object.keys(additionalContext).map({
                "ContextBadgeRow.useMemo[contextElements].contextKeysWithOrder": (key)=>{
                    const value = additionalContext[key];
                    const entries = normalizeToArray(value);
                    // Get the minimum order value from entries for this key (or MAX if none)
                    const minOrder = entries.reduce({
                        "ContextBadgeRow.useMemo[contextElements].contextKeysWithOrder.minOrder": (min, entry)=>{
                            var _entry_metadata;
                            const order = (_entry_metadata = entry.metadata) === null || _entry_metadata === void 0 ? void 0 : _entry_metadata.order;
                            return order !== undefined ? Math.min(min, order) : min;
                        }
                    }["ContextBadgeRow.useMemo[contextElements].contextKeysWithOrder.minOrder"], Number.MAX_SAFE_INTEGER);
                    return {
                        key,
                        order: minOrder,
                        entries
                    };
                }
            }["ContextBadgeRow.useMemo[contextElements].contextKeysWithOrder"]);
            // Sort keys by their order
            contextKeysWithOrder.sort({
                "ContextBadgeRow.useMemo[contextElements]": (a, b)=>a.order - b.order
            }["ContextBadgeRow.useMemo[contextElements]"]);
            // Process each key with collapsing logic
            contextKeysWithOrder.forEach({
                "ContextBadgeRow.useMemo[contextElements]": (param)=>{
                    let { key, entries } = param;
                    if (!entries.length) return;
                    // Filter visible entries
                    const visibleEntries = entries.filter({
                        "ContextBadgeRow.useMemo[contextElements].visibleEntries": (entry)=>{
                            var _entry_metadata;
                            return ((_entry_metadata = entry.metadata) === null || _entry_metadata === void 0 ? void 0 : _entry_metadata.showInChat) !== false;
                        }
                    }["ContextBadgeRow.useMemo[contextElements].visibleEntries"]);
                    const hiddenEntries = entries.filter({
                        "ContextBadgeRow.useMemo[contextElements].hiddenEntries": (entry)=>{
                            var _entry_metadata;
                            return ((_entry_metadata = entry.metadata) === null || _entry_metadata === void 0 ? void 0 : _entry_metadata.showInChat) === false;
                        }
                    }["ContextBadgeRow.useMemo[contextElements].hiddenEntries"]);
                    // Check for collapsing configuration from store
                    const keyCollapseConfig = collapsingConfigs.get(key);
                    // Apply collapsing if configured and threshold exceeded
                    if (keyCollapseConfig && visibleEntries.length > keyCollapseConfig.threshold) {
                        var _keyCollapseConfig_label, _firstEntry_metadata, _firstEntry_metadata1;
                        const firstEntry = entries[0];
                        // Create collapsed badge
                        const collapsedLabel = ((_keyCollapseConfig_label = keyCollapseConfig.label) === null || _keyCollapseConfig_label === void 0 ? void 0 : _keyCollapseConfig_label.replace('{count}', visibleEntries.length.toString())) || "".concat(visibleEntries.length, " Selected");
                        const collapsedEntry = {
                            id: "".concat(key, "-collapsed"),
                            source: 'subscription',
                            data: visibleEntries.map({
                                "ContextBadgeRow.useMemo[contextElements]": (e)=>e.data
                            }["ContextBadgeRow.useMemo[contextElements]"]),
                            metadata: {
                                label: collapsedLabel,
                                icon: keyCollapseConfig.icon || (firstEntry === null || firstEntry === void 0 ? void 0 : (_firstEntry_metadata = firstEntry.metadata) === null || _firstEntry_metadata === void 0 ? void 0 : _firstEntry_metadata.icon),
                                color: firstEntry === null || firstEntry === void 0 ? void 0 : (_firstEntry_metadata1 = firstEntry.metadata) === null || _firstEntry_metadata1 === void 0 ? void 0 : _firstEntry_metadata1.color,
                                showInChat: true,
                                isCollapsed: true,
                                originalCount: visibleEntries.length
                            }
                        };
                        // Render the collapsed badge
                        elements.push(renderContextBadge(key, collapsedEntry));
                        // Render any hidden entries individually
                        hiddenEntries.forEach({
                            "ContextBadgeRow.useMemo[contextElements]": (entry)=>{
                                elements.push(renderContextBadge(key, entry));
                            }
                        }["ContextBadgeRow.useMemo[contextElements]"]);
                    } else {
                        entries.forEach({
                            "ContextBadgeRow.useMemo[contextElements]": (entry)=>{
                                elements.push(renderContextBadge(key, entry));
                            }
                        }["ContextBadgeRow.useMemo[contextElements]"]);
                    }
                }
            }["ContextBadgeRow.useMemo[contextElements]"]);
            return elements;
        }
    }["ContextBadgeRow.useMemo[contextElements]"], [
        additionalContext,
        mentionProviders,
        collapsingConfigs,
        renderContextBadge
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "input-context",
        className: "flex items-center gap-2 flex-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 py-1 text-xs rounded-sm flex items-center gap-1 whitespace-nowrap dark:bg-gray-800 bg-gray-50 box-border border border-transparent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "@ to add context"
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/chatInput/ContextBadgeRow.tsx",
                    lineNumber: 195,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatInput/ContextBadgeRow.tsx",
                lineNumber: 193,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            contextElements
        ]
    }, void 0, true, {
        fileName: "[project]/src/cedar/components/chatInput/ContextBadgeRow.tsx",
        lineNumber: 192,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ContextBadgeRow, "tbG/nirP6xipLgEhoa+3dvTEDkU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"]
    ];
});
_c = ContextBadgeRow;
var _c;
__turbopack_context__.k.register(_c, "ContextBadgeRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/containers/Container3D.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const Container3D = (param)=>{
    let { children, className = '', motionProps = {}, id, style, color } = param;
    _s();
    const { styling } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStyling"])();
    var _styling_darkMode;
    const isDarkMode = (_styling_darkMode = styling.darkMode) !== null && _styling_darkMode !== void 0 ? _styling_darkMode : false;
    // Determine base color for shading (use passed color or default black/white)
    const shadeBase = color || (isDarkMode ? '#000000' : '#ffffff');
    const restMotionProps = motionProps;
    // Static 3-D shadow styles – dynamically tinted by the passed color
    const baseStyle = {
        boxShadow: isDarkMode ? [
            "0px 2px 0px 0px ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getShadedColor"])(shadeBase, 80)),
            '-12px 18px 16px 0px rgba(0,0,0,0.4)',
            '-6px 10px 8px 0px rgba(0,0,0,0.4)',
            '-2px 4px 3px 0px rgba(0,0,0,0.3)',
            '-1px 2px 3px 0px rgba(255,255,255,0.05) inset'
        ].join(', ') : [
            "0px 2px 0px 0px ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getShadedColor"])(shadeBase, 50)),
            '-12px 18px 16px 0px rgba(0,0,0,0.14)',
            '-6px 10px 8px 0px rgba(0,0,0,0.14)',
            '-2px 4px 3px 0px rgba(0,0,0,0.15)',
            '-1px 2px 3px 0px rgba(0,0,0,0.12) inset'
        ].join(', '),
        willChange: 'transform, backdrop-filter',
        transform: 'translateZ(0)'
    };
    // Combine base style, color override, text color, and inline style from props
    const colorStyle = color ? {
        backgroundColor: color,
        borderColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createBorderColor"])(color)
    } : {};
    const textStyle = color ? {
        color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTextColorForBackground"])(color)
    } : {};
    const combinedStyle = {
        ...baseStyle,
        ...colorStyle,
        ...textStyle,
        ...style
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        id: id,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('w-full h-full rounded-xl border-[3px] backdrop-blur-[12px]', // Only apply default border/background when no custom color provided
        !color && (isDarkMode ? 'border-gray-700 bg-black/40' : 'border-white bg-[#FAF9F580]'), className),
        style: combinedStyle,
        ...restMotionProps,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/containers/Container3D.tsx",
        lineNumber: 83,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Container3D, "FzPVptaJlKy5WX9d/sVEh6daZpk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStyling"]
    ];
});
_c = Container3D;
const __TURBOPACK__default__export__ = Container3D;
var _c;
__turbopack_context__.k.register(_c, "Container3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/ornaments/GlowingMesh.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
;
// Shared transition configuration for all motion elements
const baseTransition = {
    repeat: Infinity,
    repeatType: 'mirror',
    ease: 'easeInOut'
};
const GlowingMesh = (param)=>{
    let { className = '', withMotion = false } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden -z-10 ".concat(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute rounded-full opacity-60 mix-blend-plus-lighter",
                style: {
                    background: '#E90B76',
                    width: '60%',
                    height: '60%',
                    filter: 'blur(50px)'
                },
                initial: {
                    x: '-20%',
                    y: '-20%'
                },
                animate: withMotion ? {
                    x: [
                        '-20%',
                        '20%',
                        '-20%'
                    ],
                    y: [
                        '-20%',
                        '20%',
                        '-20%'
                    ],
                    rotate: [
                        0,
                        15,
                        0
                    ]
                } : undefined,
                transition: withMotion ? {
                    ...baseTransition,
                    duration: 14
                } : undefined
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/ornaments/GlowingMesh.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute rounded-full opacity-55 mix-blend-plus-lighter",
                style: {
                    background: '#0BE9A2',
                    width: '50%',
                    height: '50%',
                    right: '10%',
                    top: '20%',
                    filter: 'blur(45px)'
                },
                initial: {
                    x: '10%',
                    y: '10%'
                },
                animate: withMotion ? {
                    x: [
                        '10%',
                        '-20%',
                        '10%'
                    ],
                    y: [
                        '10%',
                        '-20%',
                        '10%'
                    ],
                    rotate: [
                        10,
                        -15,
                        10
                    ]
                } : undefined,
                transition: withMotion ? {
                    ...baseTransition,
                    duration: 13
                } : undefined
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/ornaments/GlowingMesh.tsx",
                lineNumber: 46,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute rounded-full opacity-50 mix-blend-plus-lighter",
                style: {
                    background: '#783BEA',
                    width: '45%',
                    height: '45%',
                    bottom: '5%',
                    left: '25%',
                    filter: 'blur(40px)'
                },
                initial: {
                    x: '0%',
                    y: '0%'
                },
                animate: withMotion ? {
                    x: [
                        '0%',
                        '15%',
                        '0%'
                    ],
                    y: [
                        '0%',
                        '-15%',
                        '0%'
                    ],
                    rotate: [
                        -5,
                        20,
                        -5
                    ],
                    scale: [
                        1,
                        1.1,
                        1
                    ]
                } : undefined,
                transition: withMotion ? {
                    ...baseTransition,
                    duration: 16
                } : undefined
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/ornaments/GlowingMesh.tsx",
                lineNumber: 71,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute rounded-full opacity-45 mix-blend-plus-lighter",
                style: {
                    background: '#FCD34D',
                    width: '40%',
                    height: '40%',
                    left: '60%',
                    bottom: '15%',
                    filter: 'blur(45px)'
                },
                initial: {
                    x: '0%',
                    y: '0%'
                },
                animate: withMotion ? {
                    x: [
                        '0%',
                        '-10%',
                        '0%'
                    ],
                    y: [
                        '0%',
                        '10%',
                        '0%'
                    ],
                    rotate: [
                        0,
                        -10,
                        0
                    ]
                } : undefined,
                transition: withMotion ? {
                    ...baseTransition,
                    duration: 16
                } : undefined
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/ornaments/GlowingMesh.tsx",
                lineNumber: 97,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute rounded-full opacity-40 mix-blend-plus-lighter",
                style: {
                    background: '#3B82F6',
                    width: '35%',
                    height: '35%',
                    right: '20%',
                    bottom: '40%',
                    filter: 'blur(35px)'
                },
                initial: {
                    x: '0%',
                    y: '0%'
                },
                animate: withMotion ? {
                    x: [
                        '0%',
                        '10%',
                        '0%'
                    ],
                    y: [
                        '0%',
                        '-10%',
                        '0%'
                    ],
                    rotate: [
                        0,
                        10,
                        0
                    ]
                } : undefined,
                transition: withMotion ? {
                    ...baseTransition,
                    duration: 15
                } : undefined
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/ornaments/GlowingMesh.tsx",
                lineNumber: 122,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/cedar/components/ornaments/GlowingMesh.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = GlowingMesh;
const __TURBOPACK__default__export__ = GlowingMesh;
var _c;
__turbopack_context__.k.register(_c, "GlowingMesh");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/containers/Container3DButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/containers/Container3D.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ornaments$2f$GlowingMesh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/ornaments/GlowingMesh.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
;
;
;
;
const Container3DButton = (param)=>{
    let { className = '', childClassName = '', motionProps = {}, onClick, children, id, withMotion = false, style, color } = param;
    // Compose motion props only when enabled – still allow consumer overrides
    const defaultMotionProps = {
        whileHover: {
            scale: 1.03
        },
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: 0.2,
            ease: 'easeInOut'
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: id,
            color: color,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('w-fit rounded-lg cursor-pointer inline-flex items-center overflow-hidden button', className),
            style: style,
            motionProps: {
                ...defaultMotionProps,
                ...motionProps,
                onClick
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('p-2 flex text-sm items-center whitespace-nowrap', childClassName),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/containers/Container3DButton.tsx",
                    lineNumber: 62,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ornaments$2f$GlowingMesh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    withMotion: withMotion
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/containers/Container3DButton.tsx",
                    lineNumber: 69,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/cedar/components/containers/Container3DButton.tsx",
            lineNumber: 49,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/containers/Container3DButton.tsx",
        lineNumber: 48,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Container3DButton;
const __TURBOPACK__default__export__ = Container3DButton;
var _c;
__turbopack_context__.k.register(_c, "Container3DButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/voice/VoiceIndicator.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "VoiceIndicator": ()=>VoiceIndicator
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
;
;
;
const VoiceIndicator = (param)=>{
    let { voiceState } = param;
    const { isListening, isSpeaking, voiceError } = voiceState;
    // Don't show indicator if voice is not active
    if (!isListening && !isSpeaking && !voiceError) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: 10
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 justify-center",
                children: [
                    isListening && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                className: "w-4 h-4 text-red-500"
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/voice/VoiceIndicator.tsx",
                                lineNumber: 32,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium",
                                children: "Listening..."
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/voice/VoiceIndicator.tsx",
                                lineNumber: 33,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "flex gap-1",
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                children: [
                                    0,
                                    1,
                                    2
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "w-1 h-3 bg-red-500 rounded-full",
                                        animate: {
                                            scaleY: [
                                                1,
                                                1.5,
                                                1
                                            ]
                                        },
                                        transition: {
                                            duration: 0.5,
                                            repeat: Infinity,
                                            delay: i * 0.1
                                        }
                                    }, i, false, {
                                        fileName: "[project]/src/cedar/components/voice/VoiceIndicator.tsx",
                                        lineNumber: 39,
                                        columnNumber: 10
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/voice/VoiceIndicator.tsx",
                                lineNumber: 34,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    isSpeaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                className: "w-4 h-4 text-green-500"
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/voice/VoiceIndicator.tsx",
                                lineNumber: 58,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium",
                                children: "Speaking..."
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/voice/VoiceIndicator.tsx",
                                lineNumber: 59,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "w-4 h-4",
                                animate: {
                                    scale: [
                                        1,
                                        1.2,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: 0.8,
                                    repeat: Infinity
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full bg-green-500 rounded-full opacity-30"
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/voice/VoiceIndicator.tsx",
                                    lineNumber: 69,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/voice/VoiceIndicator.tsx",
                                lineNumber: 60,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    voiceError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                className: "w-4 h-4 text-red-500"
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/voice/VoiceIndicator.tsx",
                                lineNumber: 76,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-red-500",
                                children: voiceError
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/voice/VoiceIndicator.tsx",
                                lineNumber: 77,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/cedar/components/voice/VoiceIndicator.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/cedar/components/voice/VoiceIndicator.tsx",
            lineNumber: 25,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/voice/VoiceIndicator.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = VoiceIndicator;
var _c;
__turbopack_context__.k.register(_c, "VoiceIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/ui/KeyboardShortcut.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "KeyboardShortcut": ()=>KeyboardShortcut,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const KeyboardShortcut = (param)=>{
    let { shortcut, children, className = '' } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "flex items-center justify-center px-1.5 py-0.5 min-w-[16px] rounded text-muted-foreground text-sm bg-muted-foreground/30 whitespace-nowrap ".concat(className),
        "aria-hidden": "true",
        children: [
            shortcut,
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/cedar/components/ui/KeyboardShortcut.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = KeyboardShortcut;
const __TURBOPACK__default__export__ = KeyboardShortcut;
var _c;
__turbopack_context__.k.register(_c, "KeyboardShortcut");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/chatInput/HumanInTheLoopIndicator.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "HumanInTheLoopIndicator": ()=>HumanInTheLoopIndicator
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
;
;
;
const HumanInTheLoopIndicator = (param)=>{
    let { state } = param;
    // Don't show indicator if no state
    if (!state) {
        return null;
    }
    const getStateConfig = ()=>{
        switch(state){
            case 'suspended':
                return {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"],
                    color: 'text-orange-500',
                    label: 'Workflow suspended...'
                };
            case 'resumed':
                return {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"],
                    color: 'text-green-500',
                    label: 'Workflow resumed'
                };
            case 'cancelled':
                return {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"],
                    color: 'text-red-500',
                    label: 'Workflow cancelled'
                };
            case 'timeout':
                return {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                    color: 'text-gray-500',
                    label: 'Workflow timed out'
                };
            default:
                return {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"],
                    color: 'text-gray-500',
                    label: 'Unknown state'
                };
        }
    };
    const { icon: Icon, color, label } = getStateConfig();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: 10
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: "w-4 h-4 ".concat(color)
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatInput/HumanInTheLoopIndicator.tsx",
                        lineNumber: 61,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatInput/HumanInTheLoopIndicator.tsx",
                        lineNumber: 62,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/cedar/components/chatInput/HumanInTheLoopIndicator.tsx",
                lineNumber: 60,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/cedar/components/chatInput/HumanInTheLoopIndicator.tsx",
            lineNumber: 56,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/chatInput/HumanInTheLoopIndicator.tsx",
        lineNumber: 55,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HumanInTheLoopIndicator;
var _c;
__turbopack_context__.k.register(_c, "HumanInTheLoopIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/chatInput/ChatInput.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChatInput": ()=>ChatInput
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__EditorContent__as__CedarEditorContent$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/node_modules/@tiptap/react/dist/index.js [app-client] (ecmascript) <locals> <export EditorContent as CedarEditorContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendHorizonal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send-horizontal.js [app-client] (ecmascript) <export default as SendHorizonal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatInput$2f$ContextBadgeRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/chatInput/ContextBadgeRow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3DButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/containers/Container3DButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$voice$2f$VoiceIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/voice/VoiceIndicator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$KeyboardShortcut$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/ui/KeyboardShortcut.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatInput$2f$HumanInTheLoopIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/chatInput/HumanInTheLoopIndicator.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
const ChatInput = (param)=>{
    let { handleFocus, handleBlur, isInputFocused, className = '', stream = true } = param;
    _s();
    const [isFocused, setIsFocused] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const { editor, isEditorEmpty, handleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarEditor"])({
        onFocus: {
            "ChatInput.useCedarEditor": ()=>{
                setIsFocused(true);
                handleFocus === null || handleFocus === void 0 ? void 0 : handleFocus();
            }
        }["ChatInput.useCedarEditor"],
        onBlur: {
            "ChatInput.useCedarEditor": ()=>{
                setIsFocused(false);
                handleBlur === null || handleBlur === void 0 ? void 0 : handleBlur();
            }
        }["ChatInput.useCedarEditor"],
        stream
    });
    // Initialize voice functionality
    const voice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useVoice"])();
    // Get latest message to check for human-in-the-loop state
    const messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"])({
        "ChatInput.useCedarStore[messages]": (state)=>state.messages
    }["ChatInput.useCedarStore[messages]"]);
    const latestMessage = messages[messages.length - 1];
    const isHumanInTheLoopSuspended = (latestMessage === null || latestMessage === void 0 ? void 0 : latestMessage.type) === 'humanInTheLoop' && latestMessage.state === 'suspended';
    // Handle voice toggle
    const handleVoiceToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatInput.useCallback[handleVoiceToggle]": async ()=>{
            // Check if voice is supported
            if (!voice.checkVoiceSupport()) {
                console.error('Voice features are not supported in this browser');
                return;
            }
            // Request permission if needed
            if (voice.voicePermissionStatus === 'prompt') {
                await voice.requestVoicePermission();
            }
            // Toggle voice if permission is granted
            if (voice.voicePermissionStatus === 'granted') {
                voice.toggleVoice();
            } else if (voice.voicePermissionStatus === 'denied') {
                console.error('Microphone access denied');
            }
        }
    }["ChatInput.useCallback[handleVoiceToggle]"], [
        voice
    ]);
    // Get mic button appearance based on voice state
    const getMicButtonClass = ()=>{
        if (voice.isListening) {
            return 'p-1 text-red-500 hover:text-red-600 cursor-pointer animate-pulse';
        }
        if (voice.isSpeaking) {
            return 'p-1 text-green-500 hover:text-green-600 cursor-pointer';
        }
        if (voice.voicePermissionStatus === 'denied') {
            return 'p-1 text-gray-400 cursor-not-allowed';
        }
        return 'p-1 text-gray-600 dark:text-gray-200 hover:text-black dark:hover:text-white cursor-pointer';
    };
    // Focus the editor when isInputFocused changes to allow for controlled focusing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            if (isInputFocused && editor) {
                editor.commands.focus();
            }
        }
    }["ChatInput.useEffect"], [
        isInputFocused,
        editor
    ]);
    // Handle tab key to focus the editor and escape to unfocus
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            const handleKeyDown = {
                "ChatInput.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Tab') {
                        e.preventDefault();
                        if (editor) {
                            editor.commands.focus();
                            setIsFocused(true);
                        }
                    } else if (e.key === 'Escape') {
                        if (isFocused && editor) {
                            editor.commands.blur();
                            setIsFocused(false);
                        }
                    }
                }
            }["ChatInput.useEffect.handleKeyDown"];
            // Add the event listener
            window.addEventListener('keydown', handleKeyDown);
            // Clean up
            return ({
                "ChatInput.useEffect": ()=>{
                    window.removeEventListener('keydown', handleKeyDown);
                }
            })["ChatInput.useEffect"];
        }
    }["ChatInput.useEffect"], [
        editor,
        isFocused
    ]);
    // Handle global keyboard shortcuts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatInput.useEffect": ()=>{
            const handleGlobalKeyDown = {
                "ChatInput.useEffect.handleGlobalKeyDown": (e)=>{
                    // Check if user is currently typing in an input, textarea, or contenteditable element
                    const target = e.target;
                    const isTypingInInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.getAttribute('contenteditable') === 'true' || target.closest('[contenteditable="true"]') !== null;
                    // Handle M key for microphone (only when not typing)
                    if (e.key === 'm' || e.key === 'M') {
                        if (!isTypingInInput && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
                            e.preventDefault();
                            handleVoiceToggle();
                            return;
                        }
                    }
                }
            }["ChatInput.useEffect.handleGlobalKeyDown"];
            // Add the event listener
            window.addEventListener('keydown', handleGlobalKeyDown);
            // Clean up
            return ({
                "ChatInput.useEffect": ()=>{
                    window.removeEventListener('keydown', handleGlobalKeyDown);
                }
            })["ChatInput.useEffect"];
        }
    }["ChatInput.useEffect"], [
        handleVoiceToggle
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('bg-gray-800/10 dark:bg-gray-600/80 rounded-lg p-3 text-sm', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatInput$2f$ContextBadgeRow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContextBadgeRow"], {
                editor: editor
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-fit",
                id: "cedar-chat-input",
                children: voice.isListening || voice.isSpeaking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-2 items-center justify-center w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$voice$2f$VoiceIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceIndicator"], {
                        voiceState: {
                            isListening: voice.isListening,
                            isSpeaking: voice.isSpeaking,
                            voiceError: voice.voiceError,
                            voicePermissionStatus: voice.voicePermissionStatus
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                        lineNumber: 159,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                    lineNumber: 158,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : isHumanInTheLoopSuspended ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-2 items-center justify-center w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatInput$2f$HumanInTheLoopIndicator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HumanInTheLoopIndicator"], {
                        state: latestMessage.state
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                        lineNumber: 170,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                    lineNumber: 169,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        !isFocused && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$KeyboardShortcut$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardShortcut"], {
                            shortcut: "⇥",
                            className: "text-muted-foreground border-muted-foreground/30 flex-shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                            lineNumber: 175,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            layoutId: "chatInput",
                            className: "flex-1 justify-center py-3",
                            "aria-label": "Message input",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__EditorContent__as__CedarEditorContent$3e$__["CedarEditorContent"], {
                                editor: editor,
                                className: "prose prose-sm max-w-none focus:outline-none outline-none focus:ring-0 ring-0 [&_*]:focus:outline-none [&_*]:outline-none [&_*]:focus:ring-0 [&_*]:ring-0 placeholder-gray-500 dark:placeholder-gray-400 [&_.ProseMirror]:p-0 [&_.ProseMirror]:outline-none [&_.ProseMirror]:break-words [&_.ProseMirror]:overflow-wrap-anywhere [&_.ProseMirror]:word-break-break-word"
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                                lineNumber: 185,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                    lineNumber: 173,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "input-tools",
                className: "flex items-center  space-x-2  justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: getMicButtonClass(),
                                onClick: handleVoiceToggle,
                                disabled: voice.voicePermissionStatus === 'denied' || voice.voicePermissionStatus === 'not-supported',
                                title: voice.isListening ? 'Stop recording' : voice.isSpeaking ? 'Speaking...' : voice.voicePermissionStatus === 'denied' ? 'Microphone access denied' : voice.voicePermissionStatus === 'not-supported' ? 'Voice not supported' : 'Start voice chat (M)',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "p-1 text-gray-600 dark:text-gray-200 hover:text-black dark:hover:text-white cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "p-1 text-gray-600 dark:text-gray-200 hover:text-black dark:hover:text-white cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3DButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        id: "send-chat",
                        motionProps: {
                            layoutId: 'send-chat',
                            animate: {
                                opacity: isEditorEmpty ? 0.5 : 1,
                                backgroundColor: isEditorEmpty ? 'transparent' : '#93c5fd'
                            },
                            transition: {
                                type: 'spring',
                                stiffness: 300,
                                damping: 20
                            }
                        },
                        onClick: ()=>handleSubmit(),
                        color: isEditorEmpty ? undefined : '#93c5fd',
                        className: "flex items-center flex-shrink-0 ml-auto -mt-0.5 rounded-full bg-white dark:bg-gray-800",
                        childClassName: "p-1.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                rotate: isEditorEmpty ? 0 : -90
                            },
                            transition: {
                                type: 'spring',
                                stiffness: 300,
                                damping: 20
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SendHorizonal$3e$__["SendHorizonal"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/cedar/components/chatInput/ChatInput.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ChatInput, "giIfJ7eLKnckkiKlr8pDaxdqTJ4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarEditor"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useVoice"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"]
    ];
});
_c = ChatInput;
var _c;
__turbopack_context__.k.register(_c, "ChatInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/containers/Flat3dContainer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const Flat3dContainer = (param)=>{
    let { children, isDarkTheme = false, primaryColor, className = '', layoutId, style, ...props } = param;
    _s();
    // Pull dark mode preference from Cedar styling slice
    const { styling } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStyling"])();
    // Resolve whether dark theme should be applied
    const darkThemeEnabled = isDarkTheme || styling.darkMode;
    // ------------------------------------------------------------------
    // Background + edge shadow configuration
    // ------------------------------------------------------------------
    // If a primaryColor is provided, derive a custom gradient + shadow.
    // Otherwise fall back to the theme-based defaults.
    let backgroundStyle;
    let edgeShadow;
    if (primaryColor) {
        // Derive a lighter and darker tint from the primary colour for the gradient.
        const light = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLightenedColor"])(primaryColor, 40);
        const dark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getShadedColor"])(primaryColor, 40);
        backgroundStyle = {
            background: "linear-gradient(to bottom, ".concat(light, ", ").concat(dark, ")")
        };
        // Create a subtle edge shadow using a darker shade of the primary colour.
        edgeShadow = "0px 1px 0px 0px ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getShadedColor"])(primaryColor, 30), ", 0 4px 6px 0 rgba(0,0,0,0.20)");
    } else {
        // Theme-based defaults
        backgroundStyle = darkThemeEnabled ? {
            background: "linear-gradient(to bottom, rgb(38,38,38), rgb(20,20,20))"
        } : {
            background: "linear-gradient(to bottom, #FAFAFA, #F0F0F0)"
        };
        edgeShadow = darkThemeEnabled ? "0px 1px 0px 0px ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getShadedColor"])('#000000', 20), ", 0 4px 6px 0 rgba(0,0,0,0.20)") : "0px 1px 0px 0px ".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getShadedColor"])('#ffffff', 30), ", 0 4px 6px 0 rgba(0,0,0,0.35)");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        layoutId: layoutId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('rounded-lg w-full', className),
        style: {
            boxShadow: "".concat(edgeShadow),
            willChange: 'box-shadow',
            ...backgroundStyle,
            ...style
        },
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/containers/Flat3dContainer.tsx",
        lineNumber: 76,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Flat3dContainer, "FzPVptaJlKy5WX9d/sVEh6daZpk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStyling"]
    ];
});
_c = Flat3dContainer;
const __TURBOPACK__default__export__ = Flat3dContainer;
var _c;
__turbopack_context__.k.register(_c, "Flat3dContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/containers/Flat3dButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Flat3dContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/containers/Flat3dContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
;
;
;
/**
 * Flat3dButton – an interactive button based on Flat3dContainer.
 * Mirrors Container3DButton API to keep a consistent DX.
 */ const Flat3dButton = (param)=>{
    let { id, className = '', children, primaryColor, whileHover = {
        scale: 1.01
    }, transition = {
        duration: 0.2,
        ease: 'easeInOut'
    }, onClick, ...rest } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Flat3dContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: id,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('cursor-pointer flex w-full items-center', className),
        primaryColor: primaryColor,
        whileHover: whileHover,
        transition: transition,
        ...rest,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: (e)=>onClick === null || onClick === void 0 ? void 0 : onClick(e),
            className: "w-full h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 py-2 flex text-sm items-center whitespace-nowrap",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/containers/Flat3dButton.tsx",
                lineNumber: 44,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/cedar/components/containers/Flat3dButton.tsx",
            lineNumber: 39,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/containers/Flat3dButton.tsx",
        lineNumber: 32,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Flat3dButton;
const __TURBOPACK__default__export__ = Flat3dButton;
var _c;
__turbopack_context__.k.register(_c, "Flat3dButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/ui/Slider3D.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Slider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$plus$2d$react$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/motion-plus-react/dist/es/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$plus$2d$react$2f$dist$2f$es$2f$components$2f$AnimateNumber$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-plus-react/dist/es/components/AnimateNumber/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$velocity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-velocity.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerDownLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/corner-down-left.js [app-client] (ecmascript) <export default as CornerDownLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/containers/Container3D.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$KeyboardShortcut$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/ui/KeyboardShortcut.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Flat3dButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/containers/Flat3dButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function Slider(param) {
    let { min = 0, max = 100, step = 1, onComplete } = param;
    _s();
    const { styling } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStyling"])();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(min + (max - min) / 2);
    const scaled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(value);
    const velocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$velocity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVelocity"])(scaled);
    const rotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(velocity);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Slider.useEffect": ()=>{
            scaled.set(value);
        }
    }["Slider.useEffect"], [
        value,
        scaled
    ]);
    const percent = (value - min) / (max - min) * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex flex-col items-center w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-fit w-full relative flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-full h-4 border-[0.5px] border-[rgba(0,0,0,0.1)] bg-[rgba(0,0,0,0.21)]",
                        style: {
                            boxShadow: 'inset 0px 4px 4px 0px rgba(0, 0, 0, 0.45), inset -0.5px 0.5px 0px rgba(255, 255, 255, 0.25)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/ui/Slider3D.tsx",
                        lineNumber: 42,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute",
                        style: {
                            left: "".concat(percent, "%"),
                            transform: 'translateX(-50%)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "flex-shrink-0 mb-0.5 w-6 h-6 rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false)
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/ui/Slider3D.tsx",
                                lineNumber: 53,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-8 left-1/2 transform -translate-x-1/2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$plus$2d$react$2f$dist$2f$es$2f$components$2f$AnimateNumber$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimateNumber"], {
                                    transition: {
                                        duration: 0.2,
                                        ease: 'easeOut'
                                    },
                                    locales: "en-US",
                                    className: "px-2 py-1 rounded text-xs origin-[0.5px_1.5px]",
                                    style: {
                                        rotate,
                                        color: styling.accentColor,
                                        backgroundColor: styling.color
                                    },
                                    children: value
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/ui/Slider3D.tsx",
                                    lineNumber: 57,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/ui/Slider3D.tsx",
                                lineNumber: 56,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/cedar/components/ui/Slider3D.tsx",
                        lineNumber: 50,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "range",
                        min: min,
                        max: max,
                        step: step,
                        value: value,
                        onChange: (e)=>setValue(Number(e.target.value)),
                        className: "relative w-full h-full opacity-0 cursor-pointer"
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/ui/Slider3D.tsx",
                        lineNumber: 71,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/cedar/components/ui/Slider3D.tsx",
                lineNumber: 40,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Flat3dButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "mt-3 w-full flex items-center justify-center",
                style: {
                    backgroundColor: styling.color
                },
                onClick: ()=>onComplete(value),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$KeyboardShortcut$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "mr-2",
                        children: [
                            "Enter",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerDownLeft$3e$__["CornerDownLeft"], {
                                className: "w-4 h-4 ml-2"
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/ui/Slider3D.tsx",
                                lineNumber: 87,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/cedar/components/ui/Slider3D.tsx",
                        lineNumber: 85,
                        columnNumber: 5
                    }, this),
                    "Next"
                ]
            }, void 0, true, {
                fileName: "[project]/src/cedar/components/ui/Slider3D.tsx",
                lineNumber: 81,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/cedar/components/ui/Slider3D.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this);
}
_s(Slider, "R4EqQjc+LJH94dgpkoNLJNhznec=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStyling"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$velocity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVelocity"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = Slider;
var _c;
__turbopack_context__.k.register(_c, "Slider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MarkdownRenderer": ()=>MarkdownRenderer,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const MarkdownRenderer = (param)=>{
    let { content, processPrefix = false, className = '', inline = false } = param;
    _s();
    const { styling } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStyling"])();
    const [copiedCode, setCopiedCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleCopyCode = (code)=>{
        navigator.clipboard.writeText(code);
        setCopiedCode(code);
        setTimeout(()=>setCopiedCode(null), 2000);
    };
    // Helper function to process prefix markers in text if needed
    const processChildren = (children)=>{
        if (!processPrefix) return children;
        if (typeof children === 'string') {
            const parts = children.split(/(@@PREFIX@@.*?@@ENDPREFIX@@)/);
            return parts.map((part, index)=>{
                if (part.startsWith('@@PREFIX@@') && part.endsWith('@@ENDPREFIX@@')) {
                    const prefixText = part.replace('@@PREFIX@@', '').replace('@@ENDPREFIX@@', '');
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: styling.accentColor
                        },
                        children: prefixText
                    }, index, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 43,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0));
                }
                return part;
            });
        }
        if (Array.isArray(children)) {
            return children.map((child)=>typeof child === 'string' ? processChildren(child) : child);
        }
        return children;
    };
    const Wrapper = inline ? 'span' : 'div';
    const wrapperClassName = inline ? "inline ".concat(className) : className;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        className: wrapperClassName,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
            remarkPlugins: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            ],
            components: {
                p: (param)=>{
                    let { children } = param;
                    return inline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline",
                        children: processChildren(children)
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 69,
                        columnNumber: 8
                    }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: processChildren(children)
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 71,
                        columnNumber: 8
                    }, void 0);
                },
                a: (param)=>{
                    let { children, href } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: href,
                        className: "text-blue-500 underline inline",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 74,
                        columnNumber: 7
                    }, void 0);
                },
                code: (param)=>{
                    let { children, className } = param;
                    const match = /language-(\w+)/.exec(className || '');
                    const isInline = !match;
                    const codeString = String(children).replace(/\n$/, '');
                    return isInline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        className: "px-1 py-0.5 rounded text-sm inline font-mono bg-[#2d2d2d]",
                        style: {
                            color: styling.color
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 88,
                        columnNumber: 8
                    }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative group my-4 rounded-lg w-full font-mono",
                        style: {
                            backgroundColor: '#1e1e1e',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        },
                        children: [
                            match && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between w-full px-4 py-2 text-xs bg-[#2d2d2d] rounded-t-lg",
                                style: {
                                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                    color: '#888'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "",
                                        children: match[1]
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                                        lineNumber: 109,
                                        columnNumber: 11
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleCopyCode(codeString),
                                                className: "flex items-center gap-1 px-2 py-1 rounded hover:bg-white/10 transition-colors",
                                                style: {
                                                    color: '#888'
                                                },
                                                children: [
                                                    copiedCode === codeString ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 14
                                                    }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 14
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: copiedCode === codeString ? 'Copied' : 'Copy'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 13
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                                                lineNumber: 111,
                                                columnNumber: 12
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "px-2 py-1 rounded hover:bg-white/10 transition-colors",
                                                style: {
                                                    color: '#888'
                                                },
                                                children: "Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                                                lineNumber: 124,
                                                columnNumber: 12
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                                        lineNumber: 110,
                                        columnNumber: 11
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                                lineNumber: 103,
                                columnNumber: 10
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "p-4 overflow-x-auto w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: "text-sm whitespace-pre",
                                    style: {
                                        color: '#d4d4d4'
                                    },
                                    children: codeString
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                                    lineNumber: 133,
                                    columnNumber: 10
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                                lineNumber: 132,
                                columnNumber: 9
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 96,
                        columnNumber: 8
                    }, void 0);
                },
                pre: (param)=>{
                    let { children } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: children
                    }, void 0, false);
                },
                h1: (param)=>{
                    let { children } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold mt-4 mb-2",
                        children: processChildren(children)
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 144,
                        columnNumber: 7
                    }, void 0);
                },
                h2: (param)=>{
                    let { children } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-bold mt-3 mb-2",
                        children: processChildren(children)
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 149,
                        columnNumber: 7
                    }, void 0);
                },
                h3: (param)=>{
                    let { children } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold mt-2 mb-1",
                        children: processChildren(children)
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 154,
                        columnNumber: 7
                    }, void 0);
                },
                h4: (param)=>{
                    let { children } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-base font-bold mt-2 mb-1",
                        children: processChildren(children)
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 159,
                        columnNumber: 7
                    }, void 0);
                },
                h5: (param)=>{
                    let { children } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                        className: "text-sm font-bold mt-1 mb-1",
                        children: processChildren(children)
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 164,
                        columnNumber: 7
                    }, void 0);
                },
                h6: (param)=>{
                    let { children } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                        className: "text-xs font-bold mt-1 mb-1",
                        children: processChildren(children)
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 169,
                        columnNumber: 7
                    }, void 0);
                },
                blockquote: (param)=>{
                    let { children } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                        className: "border-l-4 pl-4 my-2 italic",
                        style: {
                            borderColor: styling.accentColor
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 174,
                        columnNumber: 7
                    }, void 0);
                },
                strong: (param)=>{
                    let { children } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        className: "font-bold inline",
                        children: processChildren(children)
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 181,
                        columnNumber: 7
                    }, void 0);
                },
                em: (param)=>{
                    let { children } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        className: "italic inline",
                        children: processChildren(children)
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 186,
                        columnNumber: 7
                    }, void 0);
                },
                ul: (param)=>{
                    let { children } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc list-inside my-2 space-y-1",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 189,
                        columnNumber: 7
                    }, void 0);
                },
                ol: (param)=>{
                    let { children } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "list-decimal list-inside my-2 space-y-1",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 192,
                        columnNumber: 7
                    }, void 0);
                },
                li: (param)=>{
                    let { children } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "ml-2",
                        children: processChildren(children)
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 197,
                        columnNumber: 7
                    }, void 0);
                },
                br: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 199,
                        columnNumber: 16
                    }, void 0),
                table: (param)=>{
                    let { children } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto my-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "min-w-full border-collapse",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                            lineNumber: 202,
                            columnNumber: 8
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 201,
                        columnNumber: 7
                    }, void 0);
                },
                thead: (param)=>{
                    let { children } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        className: "border-b-2",
                        style: {
                            borderColor: styling.accentColor
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 206,
                        columnNumber: 7
                    }, void 0);
                },
                tbody: (param)=>{
                    let { children } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        className: "divide-y",
                        style: {
                            borderColor: "".concat(styling.accentColor, "30")
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 213,
                        columnNumber: 7
                    }, void 0);
                },
                tr: (param)=>{
                    let { children } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: "border-b",
                        style: {
                            borderColor: "".concat(styling.accentColor, "20")
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 220,
                        columnNumber: 7
                    }, void 0);
                },
                th: (param)=>{
                    let { children } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-4 py-2 text-left font-semibold",
                        style: {
                            borderRight: "1px solid ".concat(styling.accentColor, "20"),
                            backgroundColor: "".concat(styling.accentColor, "10")
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 227,
                        columnNumber: 7
                    }, void 0);
                },
                td: (param)=>{
                    let { children } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                        className: "px-4 py-2",
                        style: {
                            borderRight: "1px solid ".concat(styling.accentColor, "20")
                        },
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
                        lineNumber: 237,
                        columnNumber: 7
                    }, void 0);
                }
            },
            children: content
        }, void 0, false, {
            fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
            lineNumber: 64,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MarkdownRenderer, "5IYhfEA3lVNcMh/5XyjrjVjHBp8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStyling"]
    ];
});
_c = MarkdownRenderer;
const __TURBOPACK__default__export__ = MarkdownRenderer;
var _c;
__turbopack_context__.k.register(_c, "MarkdownRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/text/TypewriterText.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TypewriterText": ()=>TypewriterText
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const TypewriterText = (param)=>{
    let { text, className = '', charDelay = 0.025, minCharDelay = 0.002, maxCharDelay = 0.04, showCursor = true, onTypingStart, onTypingComplete, blinking = false, renderAsMarkdown = true, prefix = '' } = param;
    _s();
    const fullText = prefix ? "".concat(prefix).concat(text) : text;
    // Calculate adaptive character delay based on text length
    // Longer texts type faster, but respect min/max limits
    const calculateAdaptiveDelay = ()=>{
        const textLength = fullText.length;
        // Use provided charDelay if it's explicitly set different from default
        if (charDelay !== 0.03) {
            return charDelay;
        }
        // Use an exponential decay function for smooth speed transition
        // This creates a natural feeling acceleration for longer texts
        const minLength = 30; // Texts shorter than this use max delay
        const maxLength = 400; // Texts longer than this use min delay
        if (textLength <= minLength) {
            return maxCharDelay;
        }
        if (textLength >= maxLength) {
            return minCharDelay;
        }
        // Exponential decay between min and max length
        // This gives us a smooth curve that starts slow and speeds up naturally
        const normalizedPosition = (textLength - minLength) / (maxLength - minLength);
        // Use exponential function for more natural feeling
        // Using a lower exponent (1.2) for more aggressive speed increase
        const speedFactor = Math.pow(normalizedPosition, 1.2);
        // Interpolate between max and min delay
        const adaptiveDelay = maxCharDelay - (maxCharDelay - minCharDelay) * speedFactor;
        return adaptiveDelay;
    };
    const effectiveCharDelay = calculateAdaptiveDelay();
    const totalDuration = effectiveCharDelay * fullText.length;
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isTypingComplete, setIsTypingComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { styling } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStyling"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TypewriterText.useEffect": ()=>{
            setIsTypingComplete(false);
            setDisplayedText('');
            onTypingStart === null || onTypingStart === void 0 ? void 0 : onTypingStart();
            const animation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(0, fullText.length, {
                duration: totalDuration,
                ease: 'linear',
                onUpdate: {
                    "TypewriterText.useEffect.animation": (latest)=>{
                        setDisplayedText(fullText.slice(0, Math.ceil(latest)));
                    }
                }["TypewriterText.useEffect.animation"],
                onComplete: {
                    "TypewriterText.useEffect.animation": ()=>{
                        setIsTypingComplete(true);
                        onTypingComplete === null || onTypingComplete === void 0 ? void 0 : onTypingComplete();
                    }
                }["TypewriterText.useEffect.animation"]
            });
            return ({
                "TypewriterText.useEffect": ()=>animation.stop()
            })["TypewriterText.useEffect"];
        }
    }["TypewriterText.useEffect"], [
        fullText,
        effectiveCharDelay
    ]);
    // Process the displayed text to handle prefix
    let processedText = displayedText;
    // If we have a prefix and it's being displayed, wrap it in a special marker for the markdown processor
    if (prefix && displayedText.length > 0) {
        const prefixLength = prefix.length;
        if (displayedText.length <= prefixLength) {
            // Still typing the prefix
            processedText = "@@PREFIX@@".concat(displayedText, "@@ENDPREFIX@@");
        } else {
            // Prefix is complete, show rest of content
            processedText = "@@PREFIX@@".concat(prefix, "@@ENDPREFIX@@").concat(displayedText.slice(prefixLength));
        }
    }
    const content = renderAsMarkdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        content: processedText,
        processPrefix: !!prefix,
        inline: true
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/text/TypewriterText.tsx",
        lineNumber: 132,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)) : processedText;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "max-w-full ".concat(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
            className: "whitespace-normal inline",
            children: [
                content,
                showCursor && !isTypingComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: "inline-block w-[2px] h-[1em] align-middle",
                    style: {
                        backgroundColor: styling.color,
                        willChange: 'opacity'
                    },
                    // This makes the cursor blink.
                    animate: blinking ? {
                        opacity: [
                            1,
                            1,
                            0,
                            0
                        ]
                    } : undefined,
                    transition: blinking ? {
                        duration: 1,
                        repeat: Infinity,
                        times: [
                            0,
                            0.5,
                            0.5,
                            1
                        ]
                    } : undefined
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/text/TypewriterText.tsx",
                    lineNumber: 146,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/cedar/components/text/TypewriterText.tsx",
            lineNumber: 143,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/text/TypewriterText.tsx",
        lineNumber: 142,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TypewriterText, "JnHH/0gsr6XkjrG4wEz1tRLQ/o0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStyling"]
    ];
});
_c = TypewriterText;
var _c;
__turbopack_context__.k.register(_c, "TypewriterText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/chatMessages/CaptionMessages.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerDownLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/corner-down-left.js [app-client] (ecmascript) <export default as CornerDownLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$plus$2d$react$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/motion-plus-react/dist/es/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$plus$2d$react$2f$dist$2f$es$2f$components$2f$Ticker$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-plus-react/dist/es/components/Ticker/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Flat3dButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/containers/Flat3dButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Flat3dContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/containers/Flat3dContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$text$2f$ShimmerText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/text/ShimmerText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$KeyboardShortcut$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/ui/KeyboardShortcut.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$Slider3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/ui/Slider3D.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$text$2f$TypewriterText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/text/TypewriterText.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
const CaptionMessages = (param)=>{
    let { className = '' } = param;
    _s();
    const { messages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useMessages"])();
    const { isProcessing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useMessages"])();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"])({
        "CaptionMessages.useCedarStore[store]": (state)=>state
    }["CaptionMessages.useCedarStore[store]"]);
    const styling = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"])({
        "CaptionMessages.useCedarStore[styling]": (state)=>state.styling
    }["CaptionMessages.useCedarStore[styling]"]);
    // Get the appropriate message based on showThinking prop
    const latestMessage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "CaptionMessages.useMemo[latestMessage]": ()=>{
            // Find the last non-user message of type text
            for(let i = messages.length - 1; i >= 0; i--){
                if (messages[i].role !== 'user' && messages[i].type === 'text') {
                    return messages[i];
                }
            }
            return null;
        }
    }["CaptionMessages.useMemo[latestMessage]"], [
        messages
    ]);
    // Calculate text size based on character count
    const getTextSizeClass = (text)=>{
        const wordCount = text.split(/\s+/).filter((word)=>word.length > 0).length;
        if (wordCount > 60) {
            return 'text-sm';
        } else if (wordCount > 30) {
            return 'text-md';
        } else {
            return 'text-lg';
        }
    };
    // Combine default classes with provided className
    const containerClasses = "max-h-40 overflow-y-auto ".concat(className).trim();
    if (isProcessing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: containerClasses,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-semibold text-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$text$2f$ShimmerText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShimmerText"], {
                    text: "Thinking...",
                    state: "thinking"
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                    lineNumber: 66,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                lineNumber: 65,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
            lineNumber: 64,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (!latestMessage) return null;
    // Render based on message type
    switch(latestMessage.type){
        case 'text':
            const textSizeClass = getTextSizeClass(latestMessage.content);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: containerClasses,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-semibold ".concat(textSizeClass),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: styling.accentColor
                            },
                            children: "Cedar: "
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                            lineNumber: 81,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$text$2f$TypewriterText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypewriterText"], {
                            text: latestMessage.content,
                            className: "break-words",
                            renderAsMarkdown: true
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                            lineNumber: 82,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                    lineNumber: 80,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                lineNumber: 79,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        case 'dialogue_options':
            const dialogueMsg = latestMessage;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: containerClasses,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col space-y-3",
                    children: dialogueMsg.options.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Flat3dButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            id: "dialogue-option-btn-".concat(idx),
                            className: "rounded-md px-1 py-1 flex items-center text-md",
                            onClick: ()=>{
                                var _dialogueMsg_onChoice;
                                return (_dialogueMsg_onChoice = dialogueMsg.onChoice) === null || _dialogueMsg_onChoice === void 0 ? void 0 : _dialogueMsg_onChoice.call(dialogueMsg, opt, store);
                            },
                            whileHover: {
                                scale: 1.01
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    opt.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2",
                                        children: opt.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                                        lineNumber: 104,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold",
                                                children: opt.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                                                lineNumber: 106,
                                                columnNumber: 11
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            opt.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-600",
                                                children: opt.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                                                lineNumber: 108,
                                                columnNumber: 12
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                                        lineNumber: 105,
                                        columnNumber: 10
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                                lineNumber: 103,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        }, idx, false, {
                            fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                            lineNumber: 97,
                            columnNumber: 8
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                    lineNumber: 95,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                lineNumber: 94,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        case 'ticker':
            const tickerMsg = latestMessage;
            const mask = 'linear-gradient(to right, transparent 5%, black 15%, black 85%, transparent 95%)';
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: containerClasses,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$plus$2d$react$2f$dist$2f$es$2f$components$2f$Ticker$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ticker"], {
                                hoverFactor: 0,
                                items: tickerMsg.buttons.map((button, bidx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Flat3dContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        className: "max-w-64 w-fit my-3 flex flex-col items-center justify-start p-3",
                                        style: button.colour ? {
                                            backgroundColor: button.colour,
                                            willChange: 'transform'
                                        } : undefined,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center justify-center",
                                            children: [
                                                button.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mr-4 text-2xl",
                                                    children: button.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 13
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-left truncate",
                                                            children: button.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 13
                                                        }, void 0),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-xs",
                                                            children: button.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 13
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 12
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                                            lineNumber: 143,
                                            columnNumber: 11
                                        }, void 0)
                                    }, bidx, false, {
                                        fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                                        lineNumber: 131,
                                        columnNumber: 10
                                    }, void 0)),
                                style: {
                                    maskImage: mask
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                                lineNumber: 128,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                            lineNumber: 127,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Flat3dButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "flex items-center w-full justify-center py-1",
                            onClick: ()=>{
                                var _tickerMsg_onChoice;
                                return (_tickerMsg_onChoice = tickerMsg.onChoice) === null || _tickerMsg_onChoice === void 0 ? void 0 : _tickerMsg_onChoice.call(tickerMsg, store);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$KeyboardShortcut$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "mr-2",
                                    children: [
                                        "Enter",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerDownLeft$3e$__["CornerDownLeft"], {
                                            className: "w-4 h-4 ml-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                                            lineNumber: 164,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                                    lineNumber: 162,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Next Step"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                            lineNumber: 159,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                    lineNumber: 126,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                lineNumber: 125,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        case 'multiple_choice':
            const multipleChoiceMsg = latestMessage;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: containerClasses,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-2 w-full",
                        children: multipleChoiceMsg.choices.map((choice, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Flat3dButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                id: "multiple-choice-btn-".concat(idx),
                                className: "flex-1",
                                onClick: ()=>{
                                    if (multipleChoiceMsg.onChoice) {
                                        multipleChoiceMsg.onChoice(choice, store);
                                    } else {
                                        store.addMessage({
                                            role: 'user',
                                            type: 'text',
                                            content: choice
                                        });
                                    }
                                },
                                children: [
                                    idx === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$KeyboardShortcut$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "mr-2",
                                            children: [
                                                "Enter",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$corner$2d$down$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CornerDownLeft$3e$__["CornerDownLeft"], {
                                                    className: "w-4 h-4 ml-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 13
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                                            lineNumber: 196,
                                            columnNumber: 12
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$KeyboardShortcut$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        shortcut: "".concat(idx + 1),
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                                        lineNumber: 202,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: choice
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                                        lineNumber: 207,
                                        columnNumber: 10
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                                lineNumber: 179,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                        lineNumber: 177,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                    lineNumber: 176,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                lineNumber: 175,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        case 'slider':
            const sliderMsg = latestMessage;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: containerClasses,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$Slider3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        min: sliderMsg.min,
                        max: sliderMsg.max,
                        step: 1,
                        onComplete: (val)=>{
                            var _sliderMsg_onChange;
                            return (_sliderMsg_onChange = sliderMsg.onChange) === null || _sliderMsg_onChange === void 0 ? void 0 : _sliderMsg_onChange.call(sliderMsg, val, store);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                        lineNumber: 220,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                    lineNumber: 219,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatMessages/CaptionMessages.tsx",
                lineNumber: 218,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        default:
            return null;
    }
};
_s(CaptionMessages, "ANKCTDu2U27ol+tBPtLL5ae5UuM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useMessages"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useMessages"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"]
    ];
});
_c = CaptionMessages;
const __TURBOPACK__default__export__ = CaptionMessages;
var _c;
__turbopack_context__.k.register(_c, "CaptionMessages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CedarCaptionChat": ()=>CedarCaptionChat
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$structural$2f$FloatingContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/structural/FloatingContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatInput$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/chatInput/ChatInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/containers/Container3D.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$CaptionMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/chatMessages/CaptionMessages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$KeyboardShortcut$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/ui/KeyboardShortcut.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-client] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/undo.js [app-client] (ecmascript) <export default as Undo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/redo.js [app-client] (ecmascript) <export default as Redo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3DButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/containers/Container3DButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
const CedarCaptionChat = (param)=>{
    let { dimensions, className = '', showThinking = true, stream = true } = param;
    _s();
    // Always false since buttons do nothing
    const hasDiffs = false;
    // Empty handlers that do nothing
    const handleAddFeature = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CedarCaptionChat.useCallback[handleAddFeature]": ()=>{
        // Empty - does nothing
        }
    }["CedarCaptionChat.useCallback[handleAddFeature]"], []);
    const handleAddIssue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CedarCaptionChat.useCallback[handleAddIssue]": ()=>{
        // Empty - does nothing
        }
    }["CedarCaptionChat.useCallback[handleAddIssue]"], []);
    const handleAcceptAllDiffs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CedarCaptionChat.useCallback[handleAcceptAllDiffs]": ()=>{
        // Empty - does nothing
        }
    }["CedarCaptionChat.useCallback[handleAcceptAllDiffs]"], []);
    const handleRejectAllDiffs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CedarCaptionChat.useCallback[handleRejectAllDiffs]": ()=>{
        // Empty - does nothing
        }
    }["CedarCaptionChat.useCallback[handleRejectAllDiffs]"], []);
    const handleUndo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CedarCaptionChat.useCallback[handleUndo]": ()=>{
        // Empty - does nothing
        }
    }["CedarCaptionChat.useCallback[handleUndo]"], []);
    const handleRedo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CedarCaptionChat.useCallback[handleRedo]": ()=>{
        // Empty - does nothing
        }
    }["CedarCaptionChat.useCallback[handleRedo]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$structural$2f$FloatingContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingContainer"], {
        isActive: true,
        position: "bottom-center",
        dimensions: dimensions,
        resizable: false,
        className: "cedar-caption-container ".concat(className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3DButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    id: "add-feature-btn",
                                    childClassName: "p-1.5",
                                    onClick: handleAddFeature,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                                lineNumber: 79,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Add X"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                        lineNumber: 78,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                    lineNumber: 74,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3DButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    id: "add-issue-btn",
                                    childClassName: "p-1.5",
                                    onClick: handleAddIssue,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                                lineNumber: 88,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Add Y"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                        lineNumber: 87,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                    lineNumber: 83,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                hasDiffs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3DButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            id: "accept-all-diffs-btn",
                                            childClassName: "p-1.5",
                                            onClick: handleAcceptAllDiffs,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$KeyboardShortcut$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardShortcut"], {
                                                        shortcut: "⇧ Enter",
                                                        className: "ml-1 text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 11
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-4 h-4 text-green-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 11
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Accept All"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                                lineNumber: 98,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                            lineNumber: 94,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3DButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            id: "reject-all-diffs-btn",
                                            childClassName: "p-1.5",
                                            onClick: handleRejectAllDiffs,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$KeyboardShortcut$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardShortcut"], {
                                                        shortcut: "⇧ Del",
                                                        className: "ml-1 text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 11
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                        className: "w-4 h-4 text-red-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 11
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Reject All"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                                lineNumber: 111,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                            lineNumber: 107,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                            lineNumber: 73,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3DButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    id: "undo-btn",
                                    childClassName: "p-1.5",
                                    onClick: handleUndo,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo$3e$__["Undo"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                            lineNumber: 129,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                        lineNumber: 128,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                    lineNumber: 124,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3DButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    id: "redo-btn",
                                    childClassName: "p-1.5",
                                    onClick: handleRedo,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo$3e$__["Redo"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                            lineNumber: 137,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                        lineNumber: 136,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                    lineNumber: 132,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3DButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    id: "history-btn",
                                    childClassName: "p-1.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                            lineNumber: 142,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                        lineNumber: 141,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                    lineNumber: 140,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3DButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    id: "settings-btn",
                                    childClassName: "p-1.5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                            lineNumber: 147,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                        lineNumber: 146,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                    lineNumber: 145,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                            lineNumber: 123,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                    lineNumber: 72,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full pb-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$CaptionMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                showThinking: showThinking
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                                lineNumber: 155,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                            lineNumber: 154,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatInput$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatInput"], {
                            className: "bg-transparent p-0",
                            stream: stream
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                            lineNumber: 158,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
                    lineNumber: 153,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
            lineNumber: 70,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx",
        lineNumber: 64,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CedarCaptionChat, "E+/UuGIqcQYHNynxXn12pucUIOA=");
_c = CedarCaptionChat;
var _c;
__turbopack_context__.k.register(_c, "CedarCaptionChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/chatMessages/DialogueOptions.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Flat3dButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/containers/Flat3dButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const DialogueOptions = (param)=>{
    let { message } = param;
    _s();
    const { content, options, onChoice } = message;
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"])({
        "DialogueOptions.useCedarStore[store]": (state)=>state
    }["DialogueOptions.useCedarStore[store]"]);
    if (!options || options.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-2 text-sm",
                children: content
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatMessages/DialogueOptions.tsx",
                lineNumber: 23,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col space-y-2",
                children: options.map((opt)=>{
                    const isSelected = selected === opt.title;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Flat3dButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClick: ()=>{
                            setSelected(opt.title);
                            if (onChoice) onChoice(opt, store);
                        },
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('rounded-md px-3 py-2 flex items-start', isSelected ? 'bg-green-100 border border-green-200' : 'bg-white border border-gray-200'),
                        children: [
                            opt.icon && (typeof opt.icon === 'string' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: opt.icon,
                                alt: opt.title,
                                width: 24,
                                height: 24,
                                className: "w-6 h-6 mr-2 flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/chatMessages/DialogueOptions.tsx",
                                lineNumber: 42,
                                columnNumber: 10
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-6 h-6 mr-2 flex-shrink-0",
                                children: opt.icon
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/chatMessages/DialogueOptions.tsx",
                                lineNumber: 50,
                                columnNumber: 10
                            }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium",
                                        children: opt.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/chatMessages/DialogueOptions.tsx",
                                        lineNumber: 53,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    opt.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-500",
                                        children: opt.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/chatMessages/DialogueOptions.tsx",
                                        lineNumber: 55,
                                        columnNumber: 10
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/cedar/components/chatMessages/DialogueOptions.tsx",
                                lineNumber: 52,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, opt.title, true, {
                        fileName: "[project]/src/cedar/components/chatMessages/DialogueOptions.tsx",
                        lineNumber: 28,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatMessages/DialogueOptions.tsx",
                lineNumber: 24,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(DialogueOptions, "J/FSM/jBQVyATEG/G0OoZxJPydw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"]
    ];
});
_c = DialogueOptions;
const __TURBOPACK__default__export__ = DialogueOptions;
var _c;
__turbopack_context__.k.register(_c, "DialogueOptions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/chatMessages/MultipleChoice.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Flat3dButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/containers/Flat3dButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const MultipleChoice = (param)=>{
    let { message } = param;
    _s();
    const { content, choices, multiselect, onChoice } = message;
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"])({
        "MultipleChoice.useCedarStore[store]": (state)=>state
    }["MultipleChoice.useCedarStore[store]"]);
    const handleClick = (choice)=>{
        if (multiselect) {
            setSelected((prev)=>prev.includes(choice) ? prev.filter((c)=>c !== choice) : [
                    ...prev,
                    choice
                ]);
        } else {
            setSelected([
                choice
            ]);
        }
        if (onChoice) onChoice(choice, store);
    };
    if (!choices || choices.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-2 text-sm",
                children: content
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatMessages/MultipleChoice.tsx",
                lineNumber: 31,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col space-y-2",
                children: choices.map((choice)=>{
                    const isSelected = selected.includes(choice);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Flat3dButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClick: ()=>handleClick(choice),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('rounded-md px-3 py-2', isSelected ? 'bg-green-100 border border-green-200 text-gray-800' : 'bg-white border border-gray-200 text-gray-800'),
                        children: choice
                    }, choice, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/MultipleChoice.tsx",
                        lineNumber: 36,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatMessages/MultipleChoice.tsx",
                lineNumber: 32,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(MultipleChoice, "HqhVpszhbLDVQZPdVdSqQmbxwRU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"]
    ];
});
_c = MultipleChoice;
const __TURBOPACK__default__export__ = MultipleChoice;
var _c;
__turbopack_context__.k.register(_c, "MultipleChoice");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/chatMessages/TodoList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
;
;
const TodoList = (param)=>{
    let { message } = param;
    _s();
    const { items } = message;
    const { messages, setMessages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useMessages"])();
    if (!items || items.length === 0) return null;
    const toggleItem = (index)=>{
        setMessages(messages.map((msg)=>{
            if (msg.id !== message.id) return msg;
            const m = msg;
            const newItems = m.items.map((it, i)=>i === index ? {
                    ...it,
                    done: !it.done
                } : it);
            return {
                ...m,
                items: newItems
            };
        }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "space-y-2",
        children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                onClick: ()=>toggleItem(index),
                className: "p-4 rounded-md cursor-pointer ".concat(item.done ? 'bg-green-100 border border-green-200' : 'bg-blue-50 border border-blue-200'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start",
                    children: [
                        item.done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "text-green-600 w-5 h-5 mt-1 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatMessages/TodoList.tsx",
                            lineNumber: 40,
                            columnNumber: 8
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 mr-2",
                            children: index + 1
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatMessages/TodoList.tsx",
                            lineNumber: 42,
                            columnNumber: 8
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: item.text
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/chatMessages/TodoList.tsx",
                                    lineNumber: 47,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)),
                                item.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 mt-1",
                                    children: item.description
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/chatMessages/TodoList.tsx",
                                    lineNumber: 49,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/cedar/components/chatMessages/TodoList.tsx",
                            lineNumber: 46,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/cedar/components/chatMessages/TodoList.tsx",
                    lineNumber: 38,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, "".concat(message.id, "-").concat(item.text), false, {
                fileName: "[project]/src/cedar/components/chatMessages/TodoList.tsx",
                lineNumber: 30,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/chatMessages/TodoList.tsx",
        lineNumber: 28,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TodoList, "WKO1fdoFwusEY0U0dcvSgkBWync=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useMessages"]
    ];
});
_c = TodoList;
const __TURBOPACK__default__export__ = TodoList;
var _c;
__turbopack_context__.k.register(_c, "TodoList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/chatMessages/ChatRenderer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChatRenderer": ()=>ChatRenderer,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$DialogueOptions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/chatMessages/DialogueOptions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/chatMessages/MarkdownRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$MultipleChoice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/chatMessages/MultipleChoice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$TodoList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/chatMessages/TodoList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Flat3dContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/containers/Flat3dContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$plus$2d$react$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/motion-plus-react/dist/es/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$plus$2d$react$2f$dist$2f$es$2f$components$2f$Ticker$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-plus-react/dist/es/components/Ticker/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const ChatRenderer = (param)=>{
    let { message } = param;
    _s();
    const getMessageRenderers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"])({
        "ChatRenderer.useCedarStore[getMessageRenderers]": (state)=>state.getMessageRenderers
    }["ChatRenderer.useCedarStore[getMessageRenderers]"]);
    // Check if there is a registered renderer for this message type
    const renderer = getMessageRenderers(message.type);
    if (renderer) {
        // If renderer has validation, ensure compatibility
        if (!renderer.validateMessage || renderer.validateMessage(message)) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: renderer.render(message)
            }, void 0, false);
        }
    }
    // Gradient mask for ticker edges
    const mask = 'linear-gradient(to right, transparent 5%, black 15%, black 85%, transparent 95%)';
    // Get common message styling
    const getMessageStyles = (role)=>{
        const commonClasses = 'prose prose-sm inline-block rounded-xl py-2 relative text-sm w-fit [&>*+*]:mt-3 [&>ol>li+li]:mt-2 [&>ul>li+li]:mt-2 [&>ol>li>p]:mb-1 [&>ul>li>p]:mb-1';
        const roleClasses = role === 'bot' || role === 'assistant' ? "font-serif dark:text-gray-100 text-[#141413] w-full" : 'text-[white] px-3';
        const style = role === 'bot' || role === 'assistant' ? {
            fontSize: '0.95rem',
            lineHeight: '1.5em'
        } : {
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#3b82f6',
            color: '#ffffff'
        };
        return {
            className: "".concat(commonClasses, " ").concat(roleClasses),
            style
        };
    };
    // Render different message types based on the message.type
    switch(message.type){
        case 'dialogue_options':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ...getMessageStyles(message.role),
                    className: "".concat(getMessageStyles(message.role).className, " w-full"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$DialogueOptions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        message: message
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/ChatRenderer.tsx",
                        lineNumber: 77,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/chatMessages/ChatRenderer.tsx",
                    lineNumber: 74,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatMessages/ChatRenderer.tsx",
                lineNumber: 73,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        case 'multiple_choice':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ...getMessageStyles(message.role),
                    className: "".concat(getMessageStyles(message.role).className, " w-full"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$MultipleChoice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        message: message
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/ChatRenderer.tsx",
                        lineNumber: 88,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/chatMessages/ChatRenderer.tsx",
                    lineNumber: 85,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatMessages/ChatRenderer.tsx",
                lineNumber: 84,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        case 'todolist':
            const messageStyles = getMessageStyles(message.role);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ...messageStyles.style,
                    className: "".concat(messageStyles.className, " w-full"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$TodoList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        message: message
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/ChatRenderer.tsx",
                        lineNumber: 100,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/chatMessages/ChatRenderer.tsx",
                    lineNumber: 97,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatMessages/ChatRenderer.tsx",
                lineNumber: 96,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        case 'ticker':
            {
                const buttons = message.buttons;
                const items = buttons.map((button, bidx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Flat3dContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        whileHover: {
                            scale: 1.05
                        },
                        className: "w-48 my-3 flex flex-col items-center justify-start p-4",
                        // Apply custom background colour if provided
                        style: button.colour ? {
                            backgroundColor: button.colour,
                            willChange: 'transform'
                        } : undefined,
                        children: [
                            button.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 text-2xl",
                                children: button.icon
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/chatMessages/ChatRenderer.tsx",
                                lineNumber: 119,
                                columnNumber: 22
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-center truncate",
                                children: button.title
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/chatMessages/ChatRenderer.tsx",
                                lineNumber: 120,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-center text-xs",
                                children: button.description
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/chatMessages/ChatRenderer.tsx",
                                lineNumber: 123,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, bidx, true, {
                        fileName: "[project]/src/cedar/components/chatMessages/ChatRenderer.tsx",
                        lineNumber: 108,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$plus$2d$react$2f$dist$2f$es$2f$components$2f$Ticker$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ticker"], {
                            hoverFactor: 0,
                            items: items,
                            style: {
                                maskImage: mask
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatMessages/ChatRenderer.tsx",
                            lineNumber: 129,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/ChatRenderer.tsx",
                        lineNumber: 128,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/chatMessages/ChatRenderer.tsx",
                    lineNumber: 127,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0));
            }
        default:
            var _message_content;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "".concat(message.role === 'bot' || message.role === 'assistant' ? 'max-w-[100%] w-full' : 'max-w-[80%] w-fit'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ...getMessageStyles(message.role),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        content: (_message_content = message.content) !== null && _message_content !== void 0 ? _message_content : " ```json\n".concat(JSON.stringify(message, null, 2), "\n```")
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/ChatRenderer.tsx",
                        lineNumber: 144,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/chatMessages/ChatRenderer.tsx",
                    lineNumber: 143,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatMessages/ChatRenderer.tsx",
                lineNumber: 137,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
    }
};
_s(ChatRenderer, "5uxwfQWr6QWWfCwVbg3XVnabbDY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"]
    ];
});
_c = ChatRenderer;
const __TURBOPACK__default__export__ = ChatRenderer;
var _c;
__turbopack_context__.k.register(_c, "ChatRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/chatMessages/ChatBubbles.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChatBubbles": ()=>ChatBubbles,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$text$2f$ShimmerText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/text/ShimmerText.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$ChatRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/chatMessages/ChatRenderer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const ChatBubbles = (param)=>{
    let { maxHeight, className = '' } = param;
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isProcessing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"])({
        "ChatBubbles.useCedarStore[isProcessing]": (state)=>state.isProcessing
    }["ChatBubbles.useCedarStore[isProcessing]"]);
    // Use useThreadMessages hook to get messages for current thread
    const { messages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useThreadMessages"])();
    // Immediate scroll to bottom on initial render (before paint)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "ChatBubbles.useLayoutEffect": ()=>{
            if (containerRef.current) {
                containerRef.current.scrollTop = containerRef.current.scrollHeight;
            }
        }
    }["ChatBubbles.useLayoutEffect"], []);
    // Scroll to bottom when messages change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatBubbles.useEffect": ()=>{
            if (containerRef.current) {
                containerRef.current.scrollTo({
                    top: containerRef.current.scrollHeight,
                    behavior: 'smooth'
                });
            }
        }
    }["ChatBubbles.useEffect"], [
        messages
    ]);
    // Function to check if a message is consecutive (same sender as previous)
    const isConsecutiveMessage = (index)=>{
        if (index === 0) return false;
        return messages[index].role === messages[index - 1].role;
    };
    // Determine container classes based on maxHeight with proper className merging
    const containerClasses = maxHeight ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('overflow-x-hidden overflow-y-auto px-3', className) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('flex-1 overflow-x-hidden overflow-y-auto min-h-0 px-3', className);
    const containerStyle = maxHeight ? {
        height: maxHeight,
        contain: 'paint layout'
    } : {
        contain: 'paint layout'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('w-full h-full mb-0 flex flex-col space-y-1 pb-3 relative', containerClasses),
        style: {
            ...containerStyle,
            // Custom scrollbar styles for Firefox
            scrollbarColor: 'rgba(156, 163, 175, 0.8) transparent'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-20 px-1 py-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                children: [
                    messages.map((message, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20,
                                filter: 'blur(4px)'
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                filter: 'blur(0px)'
                            },
                            transition: {
                                duration: 0.15,
                                ease: 'easeOut'
                            },
                            className: "flex ".concat(message.role === 'user' ? 'justify-end' : 'justify-start', " ").concat(isConsecutiveMessage(index) ? 'mt-1' : 'mt-2'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$ChatRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                message: message
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/chatMessages/ChatBubbles.tsx",
                                lineNumber: 88,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0))
                        }, message.id, false, {
                            fileName: "[project]/src/cedar/components/chatMessages/ChatBubbles.tsx",
                            lineNumber: 69,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))),
                    isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$text$2f$ShimmerText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShimmerText"], {
                            text: "Thinking...",
                            state: "thinking"
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatMessages/ChatBubbles.tsx",
                            lineNumber: 93,
                            columnNumber: 8
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/ChatBubbles.tsx",
                        lineNumber: 92,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/cedar/components/chatMessages/ChatBubbles.tsx",
                lineNumber: 67,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/cedar/components/chatMessages/ChatBubbles.tsx",
            lineNumber: 66,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/chatMessages/ChatBubbles.tsx",
        lineNumber: 54,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ChatBubbles, "ipkWhULqRpeS3F7wwCW5Zh2LSww=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useThreadMessages"]
    ];
});
_c = ChatBubbles;
const __TURBOPACK__default__export__ = ChatBubbles;
var _c;
__turbopack_context__.k.register(_c, "ChatBubbles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/ornaments/InsetGlow.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const InsetGlow = (param)=>{
    let { size, color, glowStrength = 1, className = '', motionProps = {}, pulse = false } = param;
    _s();
    const { styling } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStyling"])();
    const resolvedColor = color || styling.color || '#54EAD8';
    const { style: motionStyle = {}, ...rest } = motionProps;
    // No separate blur vars needed; will compute on demand
    // Helper to generate combined box-shadow and drop-shadow styles
    const makeShadows = (multiplier)=>{
        // Inset shadow for subtle depth (constant as per spec)
        const inset = 'inset 0px 1px 2px rgba(0,0,0,0.06)';
        // Outer glow shadows scaled by multiplier and glowStrength
        const glowBlur = 6 * glowStrength * multiplier;
        const glowFarBlur = glowBlur * 2;
        const glowColor = resolvedColor;
        const outerGlow = "0 0 ".concat(glowBlur, "px ").concat(glowColor);
        const outerGlowSoft = "0 0 ".concat(glowFarBlur, "px ").concat(glowColor, "66");
        // Combine shadows
        return "".concat(inset, ", ").concat(outerGlow, ", ").concat(outerGlowSoft);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('rounded-full w-3 h-3 ', className),
        style: {
            backgroundColor: resolvedColor,
            boxShadow: makeShadows(1),
            filter: 'drop-shadow(0px 2px 2px #FFF) drop-shadow(0px -1px 1px rgba(0,0,0,0.10))',
            willChange: 'box-shadow, filter, transform',
            ...size !== undefined ? {
                width: typeof size === 'number' ? "".concat(size, "px") : size,
                height: typeof size === 'number' ? "".concat(size, "px") : size
            } : {},
            ...motionStyle
        },
        animate: pulse ? {
            boxShadow: makeShadows(1.8),
            scale: [
                1,
                1.3
            ]
        } : {
            boxShadow: makeShadows(1.6)
        },
        transition: pulse ? {
            duration: 1,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut'
        } : {
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut'
        },
        ...rest
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/ornaments/InsetGlow.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(InsetGlow, "FzPVptaJlKy5WX9d/sVEh6daZpk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStyling"]
    ];
});
_c = InsetGlow;
const __TURBOPACK__default__export__ = InsetGlow;
var _c;
__turbopack_context__.k.register(_c, "InsetGlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/chatMessages/structural/CollapsedChatButton.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CollapsedButton": ()=>CollapsedButton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3DButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/containers/Container3DButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grip-vertical.js [app-client] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ornaments$2f$InsetGlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/ornaments/InsetGlow.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const CollapsedButton = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s((param, ref)=>{
    let { side = 'right', label, onClick, layoutId, position = 'fixed' } = param;
    _s();
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { styling } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStyling"])();
    const isDarkMode = styling.darkMode;
    const setShowChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"])({
        "CollapsedButton.useCedarStore[setShowChat]": (state)=>state.setShowChat
    }["CollapsedButton.useCedarStore[setShowChat]"]);
    // Starting offset = 8px (bottom-2) for a tighter fit
    const BASE_OFFSET = 20;
    const BASE_SIDE_OFFSET = 16; // 8px from the side edge
    // Retrieve persisted offset (if any)
    const getInitialOffset = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const saved = window.localStorage.getItem('cedarCollapsedBottomOffset');
        if (saved) {
            const parsed = parseInt(saved, 10);
            if (!isNaN(parsed)) return parsed;
        }
        return BASE_OFFSET;
    };
    const [bottomOffset, setBottomOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CollapsedButton.useState": ()=>getInitialOffset()
    }["CollapsedButton.useState"]);
    // Drag handling refs/state
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Drag start positions
    const dragStartY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dragStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Offsets at drag start
    const dragStartBottomOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dragStartSideOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Horizontal offset (distance from corresponding side)
    const getInitialSideOffset = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const key = side === 'left' ? 'cedarCollapsedLeftOffset' : 'cedarCollapsedRightOffset';
        const saved = window.localStorage.getItem(key);
        if (saved) {
            const parsed = parseInt(saved, 10);
            if (!isNaN(parsed)) return parsed;
        }
        return BASE_SIDE_OFFSET;
    };
    const [sideOffset, setSideOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CollapsedButton.useState": ()=>getInitialSideOffset()
    }["CollapsedButton.useState"]);
    const positionClasses = "".concat(position, " bottom-0 ").concat(side === 'left' ? 'left-0' : 'right-0');
    /* ===== Drag to reposition (vertical) ===== */ const startDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CollapsedButton.useCallback[startDrag]": (e)=>{
            e.preventDefault();
            setIsDragging(true);
            dragStartY.current = e.clientY;
            dragStartX.current = e.clientX;
            dragStartBottomOffset.current = bottomOffset;
            dragStartSideOffset.current = sideOffset;
            if (typeof document !== 'undefined') {
                document.body.style.cursor = 'move';
                document.body.style.userSelect = 'none';
                document.body.style.setProperty('-webkit-user-select', 'none');
            }
        }
    }["CollapsedButton.useCallback[startDrag]"], [
        bottomOffset,
        sideOffset,
        side
    ]);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CollapsedButton.useCallback[handleMouseMove]": (e)=>{
            if (!isDragging) return;
            const deltaY = dragStartY.current - e.clientY; // positive when dragging up
            const newBottomOffset = Math.max(0, dragStartBottomOffset.current + deltaY);
            setBottomOffset(newBottomOffset);
            // Horizontal movement
            const deltaX = e.clientX - dragStartX.current;
            if (side === 'left') {
                const newLeftOffset = Math.max(BASE_SIDE_OFFSET, dragStartSideOffset.current + deltaX);
                setSideOffset(newLeftOffset);
            } else {
                const newRightOffset = Math.max(BASE_SIDE_OFFSET, dragStartSideOffset.current - deltaX);
                setSideOffset(newRightOffset);
            }
        }
    }["CollapsedButton.useCallback[handleMouseMove]"], [
        isDragging,
        bottomOffset,
        sideOffset,
        side
    ]);
    const handleMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CollapsedButton.useCallback[handleMouseUp]": ()=>{
            if (!isDragging) return;
            setIsDragging(false);
            const SNAP_THRESHOLD = 20; // px tolerance to snap back to default
            const nearDefault = Math.abs(bottomOffset - BASE_OFFSET) <= SNAP_THRESHOLD && Math.abs(sideOffset - BASE_SIDE_OFFSET) <= SNAP_THRESHOLD;
            if (nearDefault) {
                // Snap back to default
                setBottomOffset(BASE_OFFSET);
                setSideOffset(BASE_SIDE_OFFSET);
                // Clear persisted offsets
                if ("TURBOPACK compile-time truthy", 1) {
                    window.localStorage.removeItem('cedarCollapsedBottomOffset');
                    window.localStorage.removeItem('cedarCollapsedLeftOffset');
                    window.localStorage.removeItem('cedarCollapsedRightOffset');
                }
            } else {
                // Persist the new offsets
                if ("TURBOPACK compile-time truthy", 1) {
                    window.localStorage.setItem('cedarCollapsedBottomOffset', bottomOffset.toString());
                    const key = side === 'left' ? 'cedarCollapsedLeftOffset' : 'cedarCollapsedRightOffset';
                    window.localStorage.setItem(key, sideOffset.toString());
                }
            }
            if (typeof document !== 'undefined') {
                document.body.style.cursor = '';
                document.body.style.userSelect = '';
                document.body.style.setProperty('-webkit-user-select', '');
            }
        }
    }["CollapsedButton.useCallback[handleMouseUp]"], [
        isDragging,
        bottomOffset,
        sideOffset,
        side,
        BASE_OFFSET
    ]);
    // Bind/unbind document listeners while dragging
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CollapsedButton.useEffect": ()=>{
            if (isDragging) {
                if (typeof document !== 'undefined') {
                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                }
            }
            return ({
                "CollapsedButton.useEffect": ()=>{
                    if (typeof document !== 'undefined') {
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                    }
                }
            })["CollapsedButton.useEffect"];
        }
    }["CollapsedButton.useEffect"], [
        isDragging,
        handleMouseMove,
        handleMouseUp
    ]);
    // Expose the DOM node to parent via forwarded ref
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "CollapsedButton.useImperativeHandle": ()=>wrapperRef.current
    }["CollapsedButton.useImperativeHandle"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapperRef,
        className: "".concat(positionClasses, " group !m-0"),
        style: {
            bottom: bottomOffset,
            zIndex: 9999,
            [side === 'left' ? 'left' : 'right']: sideOffset
        },
        "aria-label": "Open Cedar chat (collapsed)",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 -translate-y-1/2 ".concat(side === 'left' ? 'left-full ml-1' : 'right-full mr-2', " opacity-0 group-hover:opacity-100 transition-opacity cursor-move select-none"),
                onMouseDown: startDrag,
                "aria-label": "Drag to reposition chat trigger",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/chatMessages/structural/CollapsedChatButton.tsx",
                    lineNumber: 218,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatMessages/structural/CollapsedChatButton.tsx",
                lineNumber: 212,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3DButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                withMotion: true,
                motionProps: {
                    layoutId
                },
                id: "cedar-copilot-collapsed-button",
                onClick: ()=>{
                    setShowChat(true);
                    onClick === null || onClick === void 0 ? void 0 : onClick();
                },
                className: "".concat(isDarkMode ? 'bg-[#475569]' : '', " overflow-hidden"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ornaments$2f$InsetGlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "mr-2"
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/structural/CollapsedChatButton.tsx",
                        lineNumber: 229,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "truncate flex-1 text-left font-semibold",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/chatMessages/structural/CollapsedChatButton.tsx",
                        lineNumber: 230,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/cedar/components/chatMessages/structural/CollapsedChatButton.tsx",
                lineNumber: 220,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/cedar/components/chatMessages/structural/CollapsedChatButton.tsx",
        lineNumber: 202,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}, "11HejdNkBbLs2W7qjTJb/hDrKFs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStyling"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"]
    ];
})), "11HejdNkBbLs2W7qjTJb/hDrKFs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useStyling"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"]
    ];
});
_c1 = CollapsedButton;
CollapsedButton.displayName = 'CollapsedButton';
var _c, _c1;
__turbopack_context__.k.register(_c, "CollapsedButton$forwardRef");
__turbopack_context__.k.register(_c1, "CollapsedButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/ui/dropdown-menu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DropdownMenu": ()=>DropdownMenu,
    "DropdownMenuCheckboxItem": ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent": ()=>DropdownMenuContent,
    "DropdownMenuGroup": ()=>DropdownMenuGroup,
    "DropdownMenuItem": ()=>DropdownMenuItem,
    "DropdownMenuLabel": ()=>DropdownMenuLabel,
    "DropdownMenuPortal": ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup": ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem": ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator": ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut": ()=>DropdownMenuShortcut,
    "DropdownMenuSub": ()=>DropdownMenuSub,
    "DropdownMenuSubContent": ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger": ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger": ()=>DropdownMenuTrigger
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
function DropdownMenu(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = DropdownMenu;
function DropdownMenuPortal(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this);
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this);
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent(param) {
    let { className, sideOffset = 4, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-[10000] max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 3
    }, this);
}
_c3 = DropdownMenuContent;
function DropdownMenuGroup(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, this);
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem(param) {
    let { className, inset, variant = 'default', ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 3
    }, this);
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem(param) {
    let { className, children, checked, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
                        lineNumber: 102,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
                    lineNumber: 101,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
                lineNumber: 100,
                columnNumber: 4
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, this);
}
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
        lineNumber: 114,
        columnNumber: 3
    }, this);
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem(param) {
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
                        lineNumber: 136,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
                    lineNumber: 135,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
                lineNumber: 134,
                columnNumber: 4
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
        lineNumber: 127,
        columnNumber: 3
    }, this);
}
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel(param) {
    let { className, inset, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
        lineNumber: 152,
        columnNumber: 3
    }, this);
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('bg-border -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
        lineNumber: 169,
        columnNumber: 3
    }, this);
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('text-muted-foreground ml-auto text-xs tracking-widest', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
        lineNumber: 182,
        columnNumber: 3
    }, this);
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub(param) {
    let { ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
        lineNumber: 196,
        columnNumber: 9
    }, this);
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger(param) {
    let { className, inset, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8', className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
                lineNumber: 217,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
        lineNumber: 208,
        columnNumber: 3
    }, this);
}
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-[10000] min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/ui/dropdown-menu.tsx",
        lineNumber: 227,
        columnNumber: 3
    }, this);
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": ()=>Button,
    "buttonVariants": ()=>buttonVariants
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0', {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
            destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
            outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
            secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'p-2',
            sm: 'h-8 rounded-md px-3 text-xs',
            lg: 'h-10 rounded-md px-8',
            icon: 'h-8 w-8'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 4
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = 'Button';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/threads/ChatThreadController.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChatThreadController": ()=>ChatThreadController
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.js [app-client] (ecmascript) <export default as Trash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const ChatThreadController = (param)=>{
    let { className, onThreadChange, showCreateButton = true, showThreadList = true } = param;
    _s();
    const [editingThreadId, setEditingThreadId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingName, setEditingName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const { currentThreadId, threadIds, createThread, deleteThread, switchThread, updateThreadName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useThreadController"])();
    // Get thread details for display - select threadMap directly to avoid closure issues
    const threadMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"])({
        "ChatThreadController.useCedarStore[threadMap]": (state)=>state.threadMap
    }["ChatThreadController.useCedarStore[threadMap]"]);
    // Derive threads from threadMap and threadIds outside the selector
    const threads = threadIds.map((id)=>{
        var _thread_messages;
        const thread = threadMap[id];
        return {
            id,
            name: thread === null || thread === void 0 ? void 0 : thread.name,
            messageCount: (thread === null || thread === void 0 ? void 0 : thread.messages.length) || 0,
            lastMessage: thread === null || thread === void 0 ? void 0 : (_thread_messages = thread.messages) === null || _thread_messages === void 0 ? void 0 : _thread_messages.filter((message)=>message.content).pop(),
            lastLoaded: thread === null || thread === void 0 ? void 0 : thread.lastLoaded,
            isDefault: id === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DEFAULT_THREAD_ID"]
        };
    });
    const handleCreateThread = ()=>{
        const newThreadId = createThread(undefined, 'New Thread');
        switchThread(newThreadId);
        onThreadChange === null || onThreadChange === void 0 ? void 0 : onThreadChange(newThreadId);
    };
    const handleSelectThread = (threadId)=>{
        switchThread(threadId);
        onThreadChange === null || onThreadChange === void 0 ? void 0 : onThreadChange(threadId);
    };
    const handleDeleteThread = (threadId, e)=>{
        e.stopPropagation();
        deleteThread(threadId);
        // If we deleted the current thread, switch to default
        if (threadId === currentThreadId) {
            switchThread(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DEFAULT_THREAD_ID"]);
        }
    };
    const handleEditThread = (threadId, currentName, e)=>{
        e.stopPropagation();
        setEditingThreadId(threadId);
        setEditingName(currentName);
    };
    const handleSaveEdit = (threadId)=>{
        if (editingName.trim()) {
            updateThreadName(threadId, editingName.trim());
        }
        setEditingThreadId(null);
        setEditingName('');
    };
    const handleCancelEdit = ()=>{
        setEditingThreadId(null);
        setEditingName('');
    };
    const currentThread = threads.find((t)=>t.id === currentThreadId);
    const currentThreadName = (currentThread === null || currentThread === void 0 ? void 0 : currentThread.isDefault) ? 'Default Thread' : (currentThread === null || currentThread === void 0 ? void 0 : currentThread.name) || "Thread ".concat(currentThreadId.slice(0, 8));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('flex items-center gap-1', className),
        children: [
            showCreateButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: handleCreateThread,
                variant: "ghost",
                title: "New Thread",
                "aria-label": "Create new thread",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "12",
                            y1: "5",
                            x2: "12",
                            y2: "19"
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "5",
                            y1: "12",
                            x2: "19",
                            y2: "12"
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showThreadList && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            className: "flex items-center gap-1",
                            variant: "ghost",
                            title: "Current: ".concat(currentThreadName),
                            "aria-label": "Thread history",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                        align: "end",
                        className: "w-56 p-1",
                        children: threads.map((param)=>{
                            let { id, name, messageCount, lastMessage, isDefault } = param;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('cursor-pointer px-2 py-1.5 rounded-sm transition-colors text-xs', currentThreadId === id ? 'bg-blue-600/20 focus:bg-blue-600/20 hover:bg-blue-600/20 data-[highlighted]:bg-blue-600/20' : 'focus:bg-accent hover:bg-accent/30 data-[highlighted]:bg-accent'),
                                onSelect: ()=>handleSelectThread(id),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center w-full gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        editingThreadId === id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: editingName,
                                                            onChange: (e)=>setEditingName(e.target.value),
                                                            onBlur: ()=>handleSaveEdit(id),
                                                            onKeyDown: (e)=>{
                                                                if (e.key === 'Enter') {
                                                                    e.preventDefault();
                                                                    handleSaveEdit(id);
                                                                }
                                                                if (e.key === 'Escape') {
                                                                    e.preventDefault();
                                                                    handleCancelEdit();
                                                                }
                                                            },
                                                            className: "bg-transparent border-b border-blue-500 outline-none flex-1 min-w-0",
                                                            autoFocus: true,
                                                            onClick: (e)=>e.stopPropagation()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "truncate font-medium",
                                                            children: isDefault ? 'Default Thread' : name || "Thread ".concat(id.slice(0, 8))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-muted-foreground bg-muted px-1.5 py-0.5 rounded-full flex-shrink-0",
                                                            children: messageCount
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                lastMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-muted-foreground mt-0.5 truncate",
                                                    children: [
                                                        lastMessage.content.slice(0, 35),
                                                        lastMessage.content.length > 35 && '...'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        !isDefault && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: (e)=>handleEditThread(id, name || "Thread ".concat(id.slice(0, 8)), e),
                                                    className: "text-muted-foreground hover:text-blue-600 text-sm leading-none flex-shrink-0 p-1 hover:bg-blue-100 rounded-sm transition-colors",
                                                    "aria-label": "Edit thread name",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: (e)=>handleDeleteThread(id, e),
                                                    className: "text-muted-foreground hover:text-destructive text-sm leading-none flex-shrink-0 p-1 hover:bg-destructive/10 rounded-sm transition-colors",
                                                    "aria-label": "Delete thread",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                                            lineNumber: 178,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                                    lineNumber: 138,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, id, false, {
                                fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/cedar/components/threads/ChatThreadController.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ChatThreadController, "KU5o/YihyOKdSaNCYojTiG6wJSI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useThreadController"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"]
    ];
});
_c = ChatThreadController;
var _c;
__turbopack_context__.k.register(_c, "ChatThreadController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/chatComponents/FloatingCedarChat.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FloatingCedarChat": ()=>FloatingCedarChat
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatInput$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/chatInput/ChatInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$ChatBubbles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/chatMessages/ChatBubbles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$structural$2f$CollapsedChatButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/chatMessages/structural/CollapsedChatButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/containers/Container3D.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$structural$2f$FloatingContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/structural/FloatingContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$threads$2f$ChatThreadController$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/threads/ChatThreadController.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
const FloatingCedarChat = (param)=>{
    let { side = 'right', title = 'Cedar Chat', collapsedLabel = 'How can I help you today?', companyLogo, dimensions = {
        minWidth: 350,
        minHeight: 400
    }, showThreadController = false, resizable = true, stream = true } = param;
    _s();
    // Get showChat state and setShowChat from store
    const showChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"])({
        "FloatingCedarChat.useCedarStore[showChat]": (state)=>state.showChat
    }["FloatingCedarChat.useCedarStore[showChat]"]);
    const setShowChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"])({
        "FloatingCedarChat.useCedarStore[setShowChat]": (state)=>state.setShowChat
    }["FloatingCedarChat.useCedarStore[setShowChat]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: !showChat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$structural$2f$CollapsedChatButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsedButton"], {
                    side: side,
                    label: collapsedLabel,
                    layoutId: "cedar-floating-chat",
                    position: "fixed"
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/chatComponents/FloatingCedarChat.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatComponents/FloatingCedarChat.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$structural$2f$FloatingContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingContainer"], {
                isActive: showChat,
                position: side === 'left' ? 'bottom-left' : 'bottom-right',
                dimensions: dimensions,
                resizable: resizable,
                className: "cedar-floating-chat",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "flex flex-col h-full text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 z-20 flex flex-row items-center justify-between px-3 py-2 min-w-0 border-b border-gray-200 dark:border-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center min-w-0 flex-1",
                                        children: [
                                            companyLogo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0 w-6 h-6 mr-2",
                                                children: companyLogo
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/chatComponents/FloatingCedarChat.tsx",
                                                lineNumber: 71,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-lg truncate",
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/chatComponents/FloatingCedarChat.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/cedar/components/chatComponents/FloatingCedarChat.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 flex-shrink-0",
                                        children: [
                                            showThreadController && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$threads$2f$ChatThreadController$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatThreadController"], {}, void 0, false, {
                                                fileName: "[project]/src/cedar/components/chatComponents/FloatingCedarChat.tsx",
                                                lineNumber: 75,
                                                columnNumber: 42
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                                onClick: ()=>setShowChat(false),
                                                "aria-label": "Close chat",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "h-4 w-4",
                                                    strokeWidth: 2.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/cedar/components/chatComponents/FloatingCedarChat.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/chatComponents/FloatingCedarChat.tsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/cedar/components/chatComponents/FloatingCedarChat.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/cedar/components/chatComponents/FloatingCedarChat.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatComponents/FloatingCedarChat.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-h-0 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$ChatBubbles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/cedar/components/chatComponents/FloatingCedarChat.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatComponents/FloatingCedarChat.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 p-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatInput$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatInput"], {
                                handleFocus: ()=>{},
                                handleBlur: ()=>{},
                                isInputFocused: false,
                                stream: stream
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/chatComponents/FloatingCedarChat.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatComponents/FloatingCedarChat.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/cedar/components/chatComponents/FloatingCedarChat.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatComponents/FloatingCedarChat.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(FloatingCedarChat, "JRen/SbvpAWAKSZS7i9a54tCPIg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"]
    ];
});
_c = FloatingCedarChat;
var _c;
__turbopack_context__.k.register(_c, "FloatingCedarChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/structural/SidePanelContainer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SidePanelContainer": ()=>SidePanelContainer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const SidePanelContainer = (param)=>{
    let { children, panelContent, isActive, side = 'right', className = '', panelClassName = '', dimensions = {}, resizable = true, onResize, topOffset = 0 } = param;
    _s();
    // Extract dimensions with defaults
    const { width: initialWidth = 600, minWidth = 300, maxWidth } = dimensions;
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [panelWidth, setPanelWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialWidth);
    const [dragStartX, setDragStartX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dragStartWidth, setDragStartWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Calculate max width
    const calculatedMaxWidth = maxWidth || (("TURBOPACK compile-time truthy", 1) ? window.innerWidth * 0.6 : "TURBOPACK unreachable");
    // Detect mobile viewport
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidePanelContainer.useEffect": ()=>{
            const checkIsMobile = {
                "SidePanelContainer.useEffect.checkIsMobile": ()=>{
                    setIsMobile(window.innerWidth <= 640);
                }
            }["SidePanelContainer.useEffect.checkIsMobile"];
            checkIsMobile();
            window.addEventListener('resize', checkIsMobile);
            return ({
                "SidePanelContainer.useEffect": ()=>window.removeEventListener('resize', checkIsMobile)
            })["SidePanelContainer.useEffect"];
        }
    }["SidePanelContainer.useEffect"], []);
    // Drag handlers
    const handleMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SidePanelContainer.useCallback[handleMouseDown]": (e)=>{
            if (!resizable) return;
            e.preventDefault();
            setIsDragging(true);
            setDragStartX(e.clientX);
            setDragStartWidth(panelWidth);
        }
    }["SidePanelContainer.useCallback[handleMouseDown]"], [
        panelWidth,
        resizable
    ]);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SidePanelContainer.useCallback[handleMouseMove]": (e)=>{
            if (!isDragging || !resizable) return;
            const deltaX = side === 'right' ? dragStartX - e.clientX : e.clientX - dragStartX;
            const newWidth = Math.max(minWidth, Math.min(calculatedMaxWidth, dragStartWidth + deltaX));
            setPanelWidth(newWidth);
            onResize === null || onResize === void 0 ? void 0 : onResize(newWidth);
        }
    }["SidePanelContainer.useCallback[handleMouseMove]"], [
        isDragging,
        dragStartX,
        dragStartWidth,
        side,
        minWidth,
        calculatedMaxWidth,
        resizable,
        onResize
    ]);
    const handleMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SidePanelContainer.useCallback[handleMouseUp]": ()=>{
            setIsDragging(false);
        }
    }["SidePanelContainer.useCallback[handleMouseUp]"], []);
    // Global mouse event listeners for dragging
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidePanelContainer.useEffect": ()=>{
            if (isDragging && resizable) {
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
                document.body.style.cursor = 'col-resize';
                document.body.style.userSelect = 'none';
                document.body.style.webkitUserSelect = 'none';
                return ({
                    "SidePanelContainer.useEffect": ()=>{
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                        document.body.style.cursor = '';
                        document.body.style.userSelect = '';
                        document.body.style.webkitUserSelect = '';
                    }
                })["SidePanelContainer.useEffect"];
            }
        }
    }["SidePanelContainer.useEffect"], [
        isDragging,
        handleMouseMove,
        handleMouseUp,
        resizable
    ]);
    // Panel position and size for resize handle
    const [panelRect, setPanelRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        height: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidePanelContainer.useEffect": ()=>{
            if (isActive && panelRef.current) {
                const updateRect = {
                    "SidePanelContainer.useEffect.updateRect": ()=>{
                        const rect = panelRef.current.getBoundingClientRect();
                        setPanelRect({
                            top: rect.top,
                            height: rect.height
                        });
                    }
                }["SidePanelContainer.useEffect.updateRect"];
                updateRect();
                window.addEventListener('resize', updateRect);
                return ({
                    "SidePanelContainer.useEffect": ()=>window.removeEventListener('resize', updateRect)
                })["SidePanelContainer.useEffect"];
            }
        }
    }["SidePanelContainer.useEffect"], [
        isActive
    ]);
    const effectiveWidth = isMobile ? '100vw' : Math.min(panelWidth, calculatedMaxWidth);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('w-full', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen transition-all duration-300",
                style: {
                    paddingLeft: !isMobile && isActive && side === 'left' ? "".concat(effectiveWidth, "px") : '0',
                    paddingRight: !isMobile && isActive && side === 'right' ? "".concat(effectiveWidth, "px") : '0'
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/structural/SidePanelContainer.tsx",
                lineNumber: 145,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: panelRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('fixed z-[60]', panelClassName),
                style: {
                    top: "".concat(topOffset, "px"),
                    height: "calc(100vh - ".concat(topOffset, "px)"),
                    width: effectiveWidth,
                    maxWidth: isMobile ? '100vw' : "".concat(calculatedMaxWidth, "px"),
                    minWidth: isMobile ? '100vw' : "".concat(minWidth, "px"),
                    left: isMobile ? '0' : side === 'left' ? '0' : 'auto',
                    right: isMobile ? '0' : side === 'right' ? '0' : 'auto'
                },
                initial: {
                    x: side === 'left' ? '-100%' : '100%'
                },
                animate: {
                    x: 0
                },
                exit: {
                    x: side === 'left' ? '-100%' : '100%'
                },
                transition: {
                    type: 'spring',
                    damping: 20,
                    stiffness: 100
                },
                children: panelContent
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/structural/SidePanelContainer.tsx",
                lineNumber: 162,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            isActive && !isMobile && resizable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed w-1 bg-transparent hover:bg-blue-400/50 cursor-col-resize z-[9998]",
                style: {
                    top: panelRect.top,
                    height: panelRect.height,
                    left: side === 'left' ? "".concat(effectiveWidth, "px") : 'auto',
                    right: side === 'right' ? "".concat(effectiveWidth, "px") : 'auto',
                    backgroundColor: isDragging ? '#60A5FA' : 'transparent'
                },
                onMouseDown: handleMouseDown,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 w-4 cursor-col-resize",
                    style: {
                        left: side === 'left' ? '-1.5rem' : '0',
                        right: side === 'right' ? '-1.5rem' : '0'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/structural/SidePanelContainer.tsx",
                    lineNumber: 194,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/structural/SidePanelContainer.tsx",
                lineNumber: 184,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/cedar/components/structural/SidePanelContainer.tsx",
        lineNumber: 143,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SidePanelContainer, "LCusBezMZoSUM5QAlIVh4exOJVk=");
_c = SidePanelContainer;
var _c;
__turbopack_context__.k.register(_c, "SidePanelContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/chatComponents/SidePanelCedarChat.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SidePanelCedarChat": ()=>SidePanelCedarChat
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$structural$2f$SidePanelContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/structural/SidePanelContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$structural$2f$CollapsedChatButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/chatMessages/structural/CollapsedChatButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatInput$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/chatInput/ChatInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$ChatBubbles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/chatMessages/ChatBubbles.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/containers/Container3D.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
const SidePanelCedarChat = (param)=>{
    let { children, side = 'right', title = 'Cedar Chat', collapsedLabel = 'How can I help you today?', showCollapsedButton = true, companyLogo, dimensions = {
        width: 600,
        minWidth: 300,
        maxWidth: 800
    }, resizable = true, className = '', topOffset = 0, stream = true } = param;
    _s();
    // Get showChat state and setShowChat from store
    const showChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"])({
        "SidePanelCedarChat.useCedarStore[showChat]": (state)=>state.showChat
    }["SidePanelCedarChat.useCedarStore[showChat]"]);
    const setShowChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"])({
        "SidePanelCedarChat.useCedarStore[setShowChat]": (state)=>state.setShowChat
    }["SidePanelCedarChat.useCedarStore[setShowChat]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showCollapsedButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: !showChat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$structural$2f$CollapsedChatButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsedButton"], {
                    side: side,
                    label: collapsedLabel,
                    onClick: ()=>setShowChat(true),
                    layoutId: "cedar-sidepanel-chat",
                    position: "fixed"
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/chatComponents/SidePanelCedarChat.tsx",
                    lineNumber: 55,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatComponents/SidePanelCedarChat.tsx",
                lineNumber: 53,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$structural$2f$SidePanelContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidePanelContainer"], {
                isActive: showChat,
                side: side,
                dimensions: dimensions,
                resizable: resizable,
                topOffset: topOffset,
                panelClassName: "dark:bg-gray-900 ".concat(className),
                panelContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "flex flex-col h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 z-20 flex flex-row items-center justify-between px-4 py-2 min-w-0 border-b border-gray-200 dark:border-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center min-w-0 flex-1",
                                    children: [
                                        companyLogo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-shrink-0 w-6 h-6 mr-2",
                                            children: companyLogo
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/chatComponents/SidePanelCedarChat.tsx",
                                            lineNumber: 79,
                                            columnNumber: 10
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-lg truncate",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/chatComponents/SidePanelCedarChat.tsx",
                                            lineNumber: 83,
                                            columnNumber: 9
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/cedar/components/chatComponents/SidePanelCedarChat.tsx",
                                    lineNumber: 77,
                                    columnNumber: 8
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors",
                                        onClick: ()=>setShowChat(false),
                                        "aria-label": "Close chat",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-4 w-4",
                                            strokeWidth: 2.5
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/chatComponents/SidePanelCedarChat.tsx",
                                            lineNumber: 90,
                                            columnNumber: 10
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/chatComponents/SidePanelCedarChat.tsx",
                                        lineNumber: 86,
                                        columnNumber: 9
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/chatComponents/SidePanelCedarChat.tsx",
                                    lineNumber: 85,
                                    columnNumber: 8
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/cedar/components/chatComponents/SidePanelCedarChat.tsx",
                            lineNumber: 76,
                            columnNumber: 7
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-h-0 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatMessages$2f$ChatBubbles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/cedar/components/chatComponents/SidePanelCedarChat.tsx",
                                lineNumber: 97,
                                columnNumber: 8
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatComponents/SidePanelCedarChat.tsx",
                            lineNumber: 96,
                            columnNumber: 7
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 p-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatInput$2f$ChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatInput"], {
                                handleFocus: ()=>{},
                                handleBlur: ()=>{},
                                isInputFocused: false,
                                stream: stream
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/chatComponents/SidePanelCedarChat.tsx",
                                lineNumber: 102,
                                columnNumber: 8
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/chatComponents/SidePanelCedarChat.tsx",
                            lineNumber: 101,
                            columnNumber: 7
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/cedar/components/chatComponents/SidePanelCedarChat.tsx",
                    lineNumber: 74,
                    columnNumber: 6
                }, void 0),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/chatComponents/SidePanelCedarChat.tsx",
                lineNumber: 66,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(SidePanelCedarChat, "JRen/SbvpAWAKSZS7i9a54tCPIg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"]
    ];
});
_c = SidePanelCedarChat;
var _c;
__turbopack_context__.k.register(_c, "SidePanelCedarChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/ui/tabs.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tabs": ()=>Tabs,
    "TabsContent": ()=>TabsContent,
    "TabsList": ()=>TabsList,
    "TabsTrigger": ()=>TabsTrigger
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
'use client';
;
;
;
function Tabs(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('flex flex-col gap-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/ui/tabs.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this);
}
_c = Tabs;
function TabsList(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/ui/tabs.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, this);
}
_c1 = TabsList;
function TabsTrigger(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/ui/tabs.tsx",
        lineNumber: 41,
        columnNumber: 3
    }, this);
}
_c2 = TabsTrigger;
function TabsContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('flex-1 outline-none', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/ui/tabs.tsx",
        lineNumber: 57,
        columnNumber: 3
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/debugger/CollapsibleSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CollapsibleSection": ()=>CollapsibleSection
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
;
;
;
;
const CollapsibleSection = (param)=>{
    let { title, isExpanded, onToggle, badges, children } = param;
    const getBadgeColor = (color)=>{
        const colors = {
            gray: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300',
            blue: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
            green: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
            purple: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300',
            amber: 'bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300',
            red: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
            yellow: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
        };
        return colors[color];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-gray-200 dark:border-gray-700 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('flex items-center justify-between p-2 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50', isExpanded ? 'rounded-t-lg' : 'rounded-lg'),
                onClick: onToggle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 flex-1",
                    children: [
                        isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/debugger/CollapsibleSection.tsx",
                            lineNumber: 41,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/debugger/CollapsibleSection.tsx",
                            lineNumber: 43,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-sm",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/debugger/CollapsibleSection.tsx",
                            lineNumber: 45,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 ml-2",
                            children: badges.map((badge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('px-2 py-0.5 rounded text-xs', getBadgeColor(badge.color)),
                                    children: badge.label
                                }, badge.label, false, {
                                    fileName: "[project]/src/cedar/components/debugger/CollapsibleSection.tsx",
                                    lineNumber: 48,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/debugger/CollapsibleSection.tsx",
                            lineNumber: 46,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/cedar/components/debugger/CollapsibleSection.tsx",
                    lineNumber: 39,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/debugger/CollapsibleSection.tsx",
                lineNumber: 33,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: 'auto',
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 pt-0 rounded-b-lg",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/debugger/CollapsibleSection.tsx",
                        lineNumber: 68,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/debugger/CollapsibleSection.tsx",
                    lineNumber: 62,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/debugger/CollapsibleSection.tsx",
                lineNumber: 60,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/cedar/components/debugger/CollapsibleSection.tsx",
        lineNumber: 32,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CollapsibleSection;
var _c;
__turbopack_context__.k.register(_c, "CollapsibleSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/debugger/NetworkTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "NetworkTab": ()=>NetworkTab
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$CollapsibleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/debugger/CollapsibleSection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const NetworkTab = (param)=>{
    let { logs, onCopy, copiedId } = param;
    _s();
    const [expandedLogs, setExpandedLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [expandedSections, setExpandedSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Helper function to safely stringify JSON with fallback to sanitizeJson
    const safeStringify = function(obj) {
        let indent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
        try {
            return JSON.stringify(obj, null, indent);
        } catch (error) {
            // If JSON.stringify fails due to circular references or non-serializable objects,
            // use sanitizeJson to create a safe representation
            try {
                const sanitized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sanitizeJson"])(obj);
                return JSON.stringify(sanitized, null, indent);
            } catch (e) {
                // If even sanitization fails, return a safe error message
                return "[Error serializing object: ".concat(error instanceof Error ? error.message : 'Unknown error', "]");
            }
        }
    };
    // Reverse logs to show oldest at top, newest at bottom
    // Filter out standalone handler logs since they're now part of response/stream logs
    const chronologicalLogs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "NetworkTab.useMemo[chronologicalLogs]": ()=>{
            return [
                ...logs
            ].reverse().filter({
                "NetworkTab.useMemo[chronologicalLogs]": (log)=>log.type !== 'handler'
            }["NetworkTab.useMemo[chronologicalLogs]"]);
        }
    }["NetworkTab.useMemo[chronologicalLogs]"], [
        logs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NetworkTab.useEffect": ()=>{
            // Auto-scroll to bottom when new logs arrive
            if (scrollRef.current) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
        }
    }["NetworkTab.useEffect"], [
        chronologicalLogs.length
    ]);
    const toggleExpanded = (logId)=>{
        setExpandedLogs((prev)=>{
            const next = new Set(prev);
            if (next.has(logId)) {
                next.delete(logId);
            } else {
                next.add(logId);
            }
            return next;
        });
    };
    const toggleSection = (sectionId)=>{
        setExpandedSections((prev)=>{
            const next = new Set(prev);
            if (next.has(sectionId)) {
                next.delete(sectionId);
            } else {
                next.add(sectionId);
            }
            return next;
        });
    };
    const getLogTypeColor = (log)=>{
        switch(log.type){
            case 'error':
            case 'stream-error':
                return 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800';
            case 'stream-complete':
                return 'bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800';
            case 'response':
                return 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800';
            case 'request':
                return 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800';
            case 'handler':
                return 'bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800';
            default:
                return 'bg-gray-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800';
        }
    };
    const getLogTypeHover = (log)=>{
        switch(log.type){
            case 'error':
            case 'stream-error':
                return 'hover:bg-red-100 dark:hover:bg-red-900/80';
            case 'stream-complete':
                return 'hover:bg-purple-100 dark:hover:bg-purple-900/80';
            case 'response':
                return 'hover:bg-green-100 dark:hover:bg-green-900/80';
            case 'request':
                return 'hover:bg-blue-100 dark:hover:bg-blue-900/80';
            case 'handler':
                return 'hover:bg-amber-100 dark:hover:bg-amber-900/80';
            default:
                return 'hover:bg-gray-100 dark:hover:bg-gray-900/80';
        }
    };
    const getLogTypeIcon = (log)=>{
        switch(log.type){
            case 'error':
            case 'stream-error':
                return '✕';
            case 'stream-complete':
                return '◈';
            case 'response':
                return '←';
            case 'request':
                return '→';
            case 'handler':
                return '⚡';
            default:
                return '•';
        }
    };
    const getLogTypeLabel = (log)=>{
        switch(log.type){
            case 'error':
                return 'Error';
            case 'stream-error':
                return 'Stream Error';
            case 'stream-complete':
                var _log_data_streamContent, _log_data_streamObjects;
                const chunkLength = ((_log_data_streamContent = log.data.streamContent) === null || _log_data_streamContent === void 0 ? void 0 : _log_data_streamContent.length) || 0;
                const objectCount = ((_log_data_streamObjects = log.data.streamObjects) === null || _log_data_streamObjects === void 0 ? void 0 : _log_data_streamObjects.length) || 0;
                if (chunkLength > 0 && objectCount > 0) {
                    return "Stream (".concat(chunkLength, " chars, ").concat(objectCount, " objects)");
                } else if (chunkLength > 0) {
                    return "Stream (".concat(chunkLength, " chars)");
                } else if (objectCount > 0) {
                    return "Stream (".concat(objectCount, " objects)");
                }
                return 'Stream';
            case 'response':
                return 'Response';
            case 'request':
                return 'Request';
            case 'handler':
                return 'Handler';
            default:
                return 'Unknown';
        }
    };
    const formatTimestamp = (date)=>{
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMinutes = Math.floor(diffMs / (1000 * 60));
        const diffSeconds = Math.floor(diffMs / 1000);
        if (diffMinutes >= 1) {
            return "".concat(diffMinutes, " minute").concat(diffMinutes === 1 ? '' : 's', " ago");
        } else if (diffSeconds >= 1) {
            return "".concat(diffSeconds, " second").concat(diffSeconds === 1 ? '' : 's', " ago");
        } else {
            return 'just now';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: scrollRef,
        className: "h-full overflow-y-auto p-2 space-y-1",
        children: chronologicalLogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-gray-500 dark:text-gray-400 py-4 text-xs",
            children: "No network activity yet"
        }, void 0, false, {
            fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
            lineNumber: 175,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)) : chronologicalLogs.map((log)=>{
            const isExpanded = expandedLogs.has(log.id);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('border rounded-lg transition-all', getLogTypeColor(log)),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('flex items-center justify-between p-2 cursor-pointer transition-colors', isExpanded ? 'rounded-t-lg' : 'rounded-lg', getLogTypeHover(log)),
                        onClick: ()=>toggleExpanded(log.id),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: getLogTypeIcon(log)
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                        lineNumber: 197,
                                        columnNumber: 10
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-xs",
                                                        children: getLogTypeLabel(log)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 12
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    log.provider && log.type !== 'handler' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-xs",
                                                        children: log.provider
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 13
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    log.processorName && log.type === 'handler' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-1.5 py-0.5 bg-amber-200 dark:bg-amber-700 rounded text-xs",
                                                        children: log.processorName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 13
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    log.duration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-600 dark:text-gray-400",
                                                        children: [
                                                            log.duration,
                                                            "ms"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 13
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                lineNumber: 199,
                                                columnNumber: 11
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            log.apiRoute && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-500 dark:text-gray-400 font-mono",
                                                children: log.apiRoute
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                lineNumber: 220,
                                                columnNumber: 12
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                        lineNumber: 198,
                                        columnNumber: 10
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500 dark:text-gray-500 ml-auto mr-2",
                                        children: formatTimestamp(log.timestamp)
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                        lineNumber: 225,
                                        columnNumber: 10
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                lineNumber: 196,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            onCopy(safeStringify(log.data), log.id);
                                        },
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('p-0.5 rounded transition-colors', (()=>{
                                            switch(log.type){
                                                case 'error':
                                                case 'stream-error':
                                                    return 'hover:bg-red-200 dark:hover:bg-red-800';
                                                case 'stream-complete':
                                                    return 'hover:bg-purple-200 dark:hover:bg-purple-800';
                                                case 'response':
                                                    return 'hover:bg-green-200 dark:hover:bg-green-800';
                                                case 'request':
                                                    return 'hover:bg-blue-200 dark:hover:bg-blue-800';
                                                case 'handler':
                                                    return 'hover:bg-amber-200 dark:hover:bg-amber-800';
                                                default:
                                                    return 'hover:bg-gray-200 dark:hover:bg-gray-700';
                                            }
                                        })()),
                                        children: copiedId === log.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-3 h-3 text-green-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                            lineNumber: 256,
                                            columnNumber: 12
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                            lineNumber: 258,
                                            columnNumber: 12
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                        lineNumber: 230,
                                        columnNumber: 10
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                        lineNumber: 262,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                        lineNumber: 264,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                lineNumber: 229,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                        lineNumber: 189,
                        columnNumber: 8
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                height: 0,
                                opacity: 0
                            },
                            animate: {
                                height: 'auto',
                                opacity: 1
                            },
                            exit: {
                                height: 0,
                                opacity: 0
                            },
                            transition: {
                                duration: 0.2
                            },
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 pt-0 space-y-2 rounded-b-lg",
                                children: [
                                    log.data.params && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$CollapsibleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleSection"], {
                                        id: "".concat(log.id, "-context"),
                                        title: "Additional Context",
                                        isExpanded: expandedSections.has("".concat(log.id, "-context")),
                                        onToggle: ()=>toggleSection("".concat(log.id, "-context")),
                                        badges: [],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: "text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto",
                                            children: safeStringify(log.data.params)
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                            lineNumber: 286,
                                            columnNumber: 14
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    log.data.params && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$CollapsibleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleSection"], {
                                        id: "".concat(log.id, "-request"),
                                        title: "Request",
                                        isExpanded: expandedSections.has("".concat(log.id, "-request")),
                                        onToggle: ()=>toggleSection("".concat(log.id, "-request")),
                                        badges: [
                                            {
                                                label: "Path: ".concat(log.apiRoute || '/api/unknown'),
                                                color: 'gray'
                                            },
                                            {
                                                label: 'Method: POST',
                                                color: 'blue'
                                            },
                                            {
                                                label: (()=>{
                                                    const sizeBytes = safeStringify(log.data.params).length;
                                                    if (sizeBytes < 1024) {
                                                        return "Size: ".concat(sizeBytes, "B");
                                                    } else {
                                                        return "Size: ".concat((sizeBytes / 1024).toFixed(1), "KB");
                                                    }
                                                })(),
                                                color: 'gray'
                                            }
                                        ],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: "text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto",
                                            children: safeStringify(log.data.params)
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                            lineNumber: 321,
                                            columnNumber: 14
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    (log.data.response || log.data.streamContent || log.data.streamObjects) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$CollapsibleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleSection"], {
                                        id: "".concat(log.id, "-response"),
                                        title: "Response",
                                        isExpanded: expandedSections.has("".concat(log.id, "-response")),
                                        onToggle: ()=>toggleSection("".concat(log.id, "-response")),
                                        badges: [
                                            {
                                                label: log.type === 'error' ? 'Status: Error' : 'Status: Success',
                                                color: log.type === 'error' ? 'red' : 'green'
                                            },
                                            {
                                                label: "Time: ".concat(log.duration || 0, "ms"),
                                                color: 'gray'
                                            },
                                            ...log.data.streamContent ? [
                                                {
                                                    label: "Chars: ".concat(log.data.streamContent.length),
                                                    color: 'purple'
                                                }
                                            ] : [],
                                            {
                                                label: "Provider: ".concat(log.provider || 'unknown'),
                                                color: 'gray'
                                            }
                                        ],
                                        children: [
                                            log.data.streamContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs font-semibold mb-1",
                                                        children: "Stream Content:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 16
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto max-h-60 overflow-y-auto",
                                                        children: log.data.streamContent
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 16
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                lineNumber: 367,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            log.data.streamObjects && log.data.streamObjects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs font-semibold mb-1",
                                                        children: [
                                                            "Stream Objects (",
                                                            log.data.streamObjects.length,
                                                            "):"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto max-h-60 overflow-y-auto",
                                                        children: safeStringify(log.data.streamObjects)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                lineNumber: 378,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            log.data.response && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs font-semibold mb-1",
                                                        children: "Response Data:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 16
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                        className: "text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto",
                                                        children: safeStringify(log.data.response)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 16
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                lineNumber: 389,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    log.data.handlers && log.data.handlers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$CollapsibleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleSection"], {
                                        id: "".concat(log.id, "-handlers"),
                                        title: "Response Handlers",
                                        isExpanded: expandedSections.has("".concat(log.id, "-handlers")),
                                        onToggle: ()=>toggleSection("".concat(log.id, "-handlers")),
                                        badges: (()=>{
                                            // Group handlers by processor name and create badges
                                            const handlerCounts = log.data.handlers.reduce((acc, handler)=>{
                                                const name = handler.processorName;
                                                acc[name] = (acc[name] || 0) + 1;
                                                return acc;
                                            }, {});
                                            return Object.entries(handlerCounts).map((param)=>{
                                                let [processorName, count] = param;
                                                return {
                                                    label: count > 1 ? "".concat(processorName, " (").concat(count, ")") : processorName,
                                                    color: (()=>{
                                                        // Color based on namespace
                                                        if (processorName === null || processorName === void 0 ? void 0 : processorName.includes('builtin')) return 'green';
                                                        if ((processorName === null || processorName === void 0 ? void 0 : processorName.includes('fallback')) || (processorName === null || processorName === void 0 ? void 0 : processorName.includes('unhandled'))) return 'yellow';
                                                        if ((processorName === null || processorName === void 0 ? void 0 : processorName.includes('unknown')) || (processorName === null || processorName === void 0 ? void 0 : processorName.includes('untyped'))) return 'gray';
                                                        if (processorName === null || processorName === void 0 ? void 0 : processorName.includes('validation-failed')) return 'red';
                                                        if (processorName === null || processorName === void 0 ? void 0 : processorName.includes('execution-error')) return 'red';
                                                        if (processorName === null || processorName === void 0 ? void 0 : processorName.includes('default')) return 'blue';
                                                        return 'amber';
                                                    })()
                                                };
                                            });
                                        })(),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: log.data.handlers.map((handler, idx)=>{
                                                // Special display for text handlers
                                                if (handler.processorName === 'builtin:text') {
                                                    const content = 'content' in handler.handledObject ? String(handler.handledObject.content) : '';
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border border-gray-200 dark:border-gray-700 rounded p-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 px-1.5 py-0.5 rounded text-xs",
                                                                        children: "builtin:text"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                                        lineNumber: 469,
                                                                        columnNumber: 20
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                                                        children: [
                                                                            content.length,
                                                                            " characters"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                                        lineNumber: 472,
                                                                        columnNumber: 20
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                                lineNumber: 468,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                className: "text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto max-h-40 overflow-y-auto whitespace-pre-wrap",
                                                                children: content
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                                lineNumber: 476,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                        lineNumber: 465,
                                                        columnNumber: 18
                                                    }, ("TURBOPACK compile-time value", void 0));
                                                }
                                                // Regular display for other handlers
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border border-gray-200 dark:border-gray-700 rounded p-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('px-1.5 py-0.5 rounded text-xs', (()=>{
                                                                        var _handler_processorName, _handler_processorName1, _handler_processorName2, _handler_processorName3, _handler_processorName4, _handler_processorName5, _handler_processorName6, _handler_processorName7;
                                                                        // Color based on namespace
                                                                        if ((_handler_processorName = handler.processorName) === null || _handler_processorName === void 0 ? void 0 : _handler_processorName.includes('builtin')) return 'bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200';
                                                                        if (((_handler_processorName1 = handler.processorName) === null || _handler_processorName1 === void 0 ? void 0 : _handler_processorName1.includes('fallback')) || ((_handler_processorName2 = handler.processorName) === null || _handler_processorName2 === void 0 ? void 0 : _handler_processorName2.includes('unhandled'))) return 'bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200';
                                                                        if (((_handler_processorName3 = handler.processorName) === null || _handler_processorName3 === void 0 ? void 0 : _handler_processorName3.includes('unknown')) || ((_handler_processorName4 = handler.processorName) === null || _handler_processorName4 === void 0 ? void 0 : _handler_processorName4.includes('untyped'))) return 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
                                                                        if ((_handler_processorName5 = handler.processorName) === null || _handler_processorName5 === void 0 ? void 0 : _handler_processorName5.includes('validation-failed')) return 'bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200';
                                                                        if ((_handler_processorName6 = handler.processorName) === null || _handler_processorName6 === void 0 ? void 0 : _handler_processorName6.includes('execution-error')) return 'bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200';
                                                                        if ((_handler_processorName7 = handler.processorName) === null || _handler_processorName7 === void 0 ? void 0 : _handler_processorName7.includes('default')) return 'bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200';
                                                                        return 'bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200';
                                                                    })()),
                                                                    children: handler.processorName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                                    lineNumber: 489,
                                                                    columnNumber: 19
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-500 dark:text-gray-400",
                                                                    children: [
                                                                        "Type:",
                                                                        ' ',
                                                                        'type' in handler.handledObject ? String(handler.handledObject.type) : 'untyped'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                                    lineNumber: 541,
                                                                    columnNumber: 19
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 18
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                            className: "text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto max-h-40 overflow-y-auto",
                                                            children: safeStringify(handler.handledObject)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                            lineNumber: 548,
                                                            columnNumber: 18
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                            lineNumber: 456,
                                            columnNumber: 14
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                        lineNumber: 403,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    log.data.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950 p-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-semibold mb-1 text-red-600",
                                                children: "Error:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                lineNumber: 561,
                                                columnNumber: 14
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                className: "text-xs bg-red-100 dark:bg-red-900/20 p-2 rounded overflow-x-auto text-red-700 dark:text-red-300",
                                                children: log.data.error.message || safeStringify(log.data.error)
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                                lineNumber: 564,
                                                columnNumber: 14
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                        lineNumber: 560,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                            lineNumber: 271,
                            columnNumber: 10
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                        lineNumber: 269,
                        columnNumber: 8
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, log.id, true, {
                fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/debugger/NetworkTab.tsx",
        lineNumber: 173,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NetworkTab, "mh9k8TosrgiCMKhPCp6e1xJipn4=");
_c = NetworkTab;
var _c;
__turbopack_context__.k.register(_c, "NetworkTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/debugger/MessagesTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MessagesTab": ()=>MessagesTab
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const MessagesTab = (param)=>{
    let { messages, onCopy, copiedId } = param;
    _s();
    const [expandedMessages, setExpandedMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [selectedThread, setSelectedThread] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Group messages by thread
    const threads = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "MessagesTab.useMemo[threads]": ()=>{
            const threadMap = new Map();
            messages.forEach({
                "MessagesTab.useMemo[threads]": (msg)=>{
                    const threadId = msg.threadId || 'default';
                    if (!threadMap.has(threadId)) {
                        threadMap.set(threadId, []);
                    }
                    threadMap.get(threadId).push(msg);
                }
            }["MessagesTab.useMemo[threads]"]);
            return threadMap;
        }
    }["MessagesTab.useMemo[threads]"], [
        messages
    ]);
    const currentMessages = selectedThread ? threads.get(selectedThread) || [] : messages;
    const toggleExpanded = (messageId)=>{
        setExpandedMessages((prev)=>{
            const next = new Set(prev);
            if (next.has(messageId)) {
                next.delete(messageId);
            } else {
                next.add(messageId);
            }
            return next;
        });
    };
    const getMessageTypeColor = (type)=>{
        const colors = {
            text: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
            progress_update: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300',
            humanInTheLoop: 'bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300',
            dialogue_options: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
            multiple_choice: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300',
            todolist: 'bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300',
            ticker: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300'
        };
        return colors[type] || 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300';
    };
    const formatTimestamp = (msg)=>{
        const timestamp = msg.timestamp || msg.createdAt;
        if (!timestamp) return null;
        return new Date(timestamp).toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col",
        children: [
            threads.size > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-2 py-1 border-b border-gray-200 dark:border-gray-700",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: selectedThread || 'all',
                    onChange: (e)=>setSelectedThread(e.target.value === 'all' ? null : e.target.value),
                    className: "text-xs px-1.5 py-0.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "all",
                            children: [
                                "All Threads (",
                                messages.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                            lineNumber: 97,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        Array.from(threads.entries()).map((param)=>{
                            let [threadId, msgs] = param;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: threadId,
                                children: [
                                    "Thread: ",
                                    threadId,
                                    " (",
                                    msgs.length,
                                    ")"
                                ]
                            }, threadId, true, {
                                fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                                lineNumber: 99,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                    lineNumber: 89,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                lineNumber: 88,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-2 space-y-1",
                children: currentMessages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-gray-500 dark:text-gray-400 py-4 text-xs",
                    children: "No messages yet"
                }, void 0, false, {
                    fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                    lineNumber: 110,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0)) : currentMessages.map((msg)=>{
                    const isExpanded = expandedMessages.has(msg.id);
                    const timestamp = formatTimestamp(msg);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('border rounded-lg transition-all cursor-pointer hover:shadow-md', msg.role === 'user' ? 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/80' : 'bg-gray-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900/80'),
                        onClick: ()=>toggleExpanded(msg.id),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-2 rounded-t-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 flex-1",
                                        children: [
                                            msg.role === 'user' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                                                lineNumber: 131,
                                                columnNumber: 12
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                                                lineNumber: 133,
                                                columnNumber: 12
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-xs",
                                                children: msg.role === 'user' ? 'User' : 'Assistant'
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                                                lineNumber: 135,
                                                columnNumber: 11
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('px-1.5 py-0.5 rounded text-xs', getMessageTypeColor(msg.type)),
                                                children: msg.type
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                                                lineNumber: 138,
                                                columnNumber: 11
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            timestamp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-500 dark:text-gray-500 ml-auto mr-2",
                                                children: timestamp
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                                                lineNumber: 146,
                                                columnNumber: 12
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                                        lineNumber: 129,
                                        columnNumber: 10
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    onCopy(JSON.stringify(msg, null, 2), msg.id);
                                                },
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('p-0.5 rounded transition-colors', msg.role === 'user' ? 'hover:bg-blue-200 dark:hover:bg-blue-800' : 'hover:bg-gray-200 dark:hover:bg-gray-700'),
                                                children: copiedId === msg.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-3 h-3 text-green-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 13
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 13
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                                                lineNumber: 152,
                                                columnNumber: 11
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                                                lineNumber: 170,
                                                columnNumber: 12
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                                                lineNumber: 172,
                                                columnNumber: 12
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                                        lineNumber: 151,
                                        columnNumber: 10
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                                lineNumber: 128,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            !isExpanded && msg.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 pb-2 text-xs text-gray-600 dark:text-gray-400 line-clamp-2",
                                children: (()=>{
                                    if (typeof msg.content === 'string') {
                                        return msg.content.substring(0, 100) + (msg.content.length > 100 ? '...' : '');
                                    } else {
                                        const stringified = JSON.stringify(msg.content);
                                        return stringified.substring(0, 100) + (stringified.length > 100 ? '...' : '');
                                    }
                                })()
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                                lineNumber: 178,
                                columnNumber: 10
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        height: 'auto',
                                        opacity: 1
                                    },
                                    exit: {
                                        height: 0,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.2
                                    },
                                    className: "overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 pt-0 rounded-b-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: "text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto",
                                            children: JSON.stringify(msg, null, 2)
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                                            lineNumber: 205,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                                        lineNumber: 204,
                                        columnNumber: 12
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                                    lineNumber: 198,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                                lineNumber: 196,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, msg.id, true, {
                        fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                        lineNumber: 119,
                        columnNumber: 8
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
                lineNumber: 108,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/cedar/components/debugger/MessagesTab.tsx",
        lineNumber: 85,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MessagesTab, "J/fwuIio44G2g507V/ob4dy6cv0=");
_c = MessagesTab;
var _c;
__turbopack_context__.k.register(_c, "MessagesTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/debugger/StatesTab.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "StatesTab": ()=>StatesTab
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const StatesTab = (param)=>{
    let { states, onCopy, copiedId } = param;
    _s();
    const [expandedStates, setExpandedStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const toggleExpanded = (stateKey)=>{
        setExpandedStates((prev)=>{
            const next = new Set(prev);
            if (next.has(stateKey)) {
                next.delete(stateKey);
            } else {
                next.add(stateKey);
            }
            return next;
        });
    };
    const getStatePreview = (registeredState)=>{
        const value = registeredState === null || registeredState === void 0 ? void 0 : registeredState.value;
        if (value === null) return 'null';
        if (value === undefined) return 'undefined';
        if (typeof value === 'string') return '"'.concat(value.substring(0, 50)).concat(value.length > 50 ? '...' : '', '"');
        if (typeof value === 'number' || typeof value === 'boolean') return String(value);
        if (Array.isArray(value)) return "Array(".concat(value.length, ")");
        if (typeof value === 'object') return "Object(".concat(Object.keys(value).length, " keys)");
        return String(value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full overflow-y-auto p-2 space-y-1",
        children: Object.keys(states).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-gray-500 dark:text-gray-400 py-4 text-xs",
            children: "No states registered yet"
        }, void 0, false, {
            fileName: "[project]/src/cedar/components/debugger/StatesTab.tsx",
            lineNumber: 43,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)) : Object.entries(states).map((param)=>{
            let [key, registeredState] = param;
            const isExpanded = expandedStates.has(key);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-lg bg-gray-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-2 cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-900/80 ".concat(isExpanded ? 'rounded-t-lg' : 'rounded-lg'),
                        onClick: ()=>toggleExpanded(key),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                        className: "w-3 h-3 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/debugger/StatesTab.tsx",
                                        lineNumber: 60,
                                        columnNumber: 10
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-xs font-mono",
                                        children: key
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/debugger/StatesTab.tsx",
                                        lineNumber: 61,
                                        columnNumber: 10
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500 dark:text-gray-500 ml-1",
                                        children: getStatePreview(registeredState)
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/debugger/StatesTab.tsx",
                                        lineNumber: 63,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/cedar/components/debugger/StatesTab.tsx",
                                lineNumber: 59,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            onCopy(JSON.stringify(registeredState, null, 2), key);
                                        },
                                        className: "p-0.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors",
                                        children: copiedId === key ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-3 h-3 text-green-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/debugger/StatesTab.tsx",
                                            lineNumber: 76,
                                            columnNumber: 12
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/debugger/StatesTab.tsx",
                                            lineNumber: 78,
                                            columnNumber: 12
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/debugger/StatesTab.tsx",
                                        lineNumber: 69,
                                        columnNumber: 10
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/debugger/StatesTab.tsx",
                                        lineNumber: 82,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/cedar/components/debugger/StatesTab.tsx",
                                        lineNumber: 84,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/cedar/components/debugger/StatesTab.tsx",
                                lineNumber: 68,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/cedar/components/debugger/StatesTab.tsx",
                        lineNumber: 54,
                        columnNumber: 8
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                height: 0,
                                opacity: 0
                            },
                            animate: {
                                height: 'auto',
                                opacity: 1
                            },
                            exit: {
                                height: 0,
                                opacity: 0
                            },
                            transition: {
                                duration: 0.2
                            },
                            className: "overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 pt-0 rounded-b-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto",
                                    children: JSON.stringify(registeredState, null, 2)
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/debugger/StatesTab.tsx",
                                    lineNumber: 98,
                                    columnNumber: 12
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/debugger/StatesTab.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/cedar/components/debugger/StatesTab.tsx",
                            lineNumber: 91,
                            columnNumber: 10
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/cedar/components/debugger/StatesTab.tsx",
                        lineNumber: 89,
                        columnNumber: 8
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, key, true, {
                fileName: "[project]/src/cedar/components/debugger/StatesTab.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/cedar/components/debugger/StatesTab.tsx",
        lineNumber: 41,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StatesTab, "ZU+/jNgUCF/zifnkiXgLsWVKesQ=");
_c = StatesTab;
var _c;
__turbopack_context__.k.register(_c, "StatesTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/debugger/DebuggerPanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DebuggerPanel": ()=>DebuggerPanel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/containers/Container3D.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$NetworkTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/debugger/NetworkTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$MessagesTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/debugger/MessagesTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$StatesTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/debugger/StatesTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-client] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grip-horizontal.js [app-client] (ecmascript) <export default as GripHorizontal>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
const DebuggerPanel = (param)=>{
    let { initialPosition, className } = param;
    _s();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"])();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('network');
    const [copiedId, setCopiedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    // Panel dimensions state - hardcoded defaults
    const [panelWidth, setPanelWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(500);
    const [panelHeight, setPanelHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(350);
    // Hardcoded minimum and maximum sizes
    const minWidth = 350;
    const minHeight = 250;
    const calculatedMaxWidth = ("TURBOPACK compile-time truthy", 1) ? window.innerWidth * 0.8 : "TURBOPACK unreachable";
    const calculatedMaxHeight = ("TURBOPACK compile-time truthy", 1) ? window.innerHeight * 0.8 : "TURBOPACK unreachable";
    // Initialize position safely after component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DebuggerPanel.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const defaultPosition = {
                    x: window.innerWidth - 80,
                    y: 20
                };
                setPosition(initialPosition || defaultPosition);
            }
        }
    }["DebuggerPanel.useEffect"], [
        initialPosition
    ]);
    // Resize state
    const [isResizing, setIsResizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const dragStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dragStartY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dragStartWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const dragStartHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Drag controls for both collapsed and expanded states
    const dragControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragControls"])();
    const constraintsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get debugger data from store
    const agentConnectionLogs = store.agentConnectionLogs || [];
    const messages = store.messages || [];
    var _ref;
    const isDebugEnabled = (_ref = store.isDebugEnabled) !== null && _ref !== void 0 ? _ref : true;
    // Get all Cedar registered states
    const registeredStates = store.registeredStates || {};
    // Resize handlers
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DebuggerPanel.useCallback[handleMouseMove]": (e)=>{
            if (!isResizing) return;
            let newWidth = panelWidth;
            let newHeight = panelHeight;
            if (isResizing === 'width' || isResizing === 'both' || isResizing === 'bottom-left' || isResizing === 'bottom-right') {
                let deltaX = e.clientX - dragStartX.current;
                // For bottom-left corner, invert the deltaX since dragging left should increase width
                if (isResizing === 'bottom-left') {
                    deltaX = -deltaX;
                }
                newWidth = Math.max(minWidth, Math.min(calculatedMaxWidth, dragStartWidth.current + deltaX));
                setPanelWidth(newWidth);
            }
            if (isResizing === 'height' || isResizing === 'both' || isResizing === 'bottom-left' || isResizing === 'bottom-right') {
                // For bottom corners, dragging down increases height
                const deltaY = e.clientY - dragStartY.current;
                newHeight = Math.max(minHeight, Math.min(calculatedMaxHeight, dragStartHeight.current + deltaY));
                setPanelHeight(newHeight);
            }
        }
    }["DebuggerPanel.useCallback[handleMouseMove]"], [
        isResizing,
        minWidth,
        minHeight,
        calculatedMaxWidth,
        calculatedMaxHeight,
        panelWidth,
        panelHeight
    ]);
    const handleMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DebuggerPanel.useCallback[handleMouseUp]": ()=>{
            setIsResizing(null);
            if (typeof document !== 'undefined') {
                document.body.style.cursor = '';
                document.body.style.userSelect = '';
                document.body.style.webkitUserSelect = '';
            }
        }
    }["DebuggerPanel.useCallback[handleMouseUp]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DebuggerPanel.useEffect": ()=>{
            if (isResizing) {
                if (typeof document !== 'undefined') {
                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                    document.body.style.userSelect = 'none';
                    document.body.style.webkitUserSelect = 'none';
                    if (isResizing === 'width') document.body.style.cursor = 'col-resize';
                    if (isResizing === 'height') document.body.style.cursor = 'row-resize';
                    if (isResizing === 'both' || isResizing === 'bottom-left' || isResizing === 'bottom-right') document.body.style.cursor = 'nwse-resize';
                }
            }
            return ({
                "DebuggerPanel.useEffect": ()=>{
                    if (typeof document !== 'undefined') {
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                    }
                }
            })["DebuggerPanel.useEffect"];
        }
    }["DebuggerPanel.useEffect"], [
        isResizing,
        handleMouseMove,
        handleMouseUp
    ]);
    const startResize = (direction, e)=>{
        e.preventDefault();
        e.stopPropagation(); // Prevent drag from interfering
        setIsResizing(direction);
        dragStartX.current = e.clientX;
        dragStartY.current = e.clientY;
        dragStartWidth.current = panelWidth;
        dragStartHeight.current = panelHeight;
    };
    const handleCopy = (text, id)=>{
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(()=>setCopiedId(null), 2000);
    };
    const handleClearLogs = ()=>{
        if (store.clearDebugLogs) {
            store.clearDebugLogs();
        }
    };
    const handleToggleDebug = ()=>{
        if (store.setDebugEnabled) {
            store.setDebugEnabled(!isDebugEnabled);
        }
    };
    // Calculate proper panel position when expanding to keep it on screen
    const getExpandedPanelPosition = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const margin = 20;
        // Try to center on button position, but constrain to viewport
        let x = position.x - panelWidth / 2;
        let y = position.y - panelHeight / 2;
        // Keep within bounds
        x = Math.max(margin, Math.min(x, windowWidth - panelWidth - margin));
        y = Math.max(margin, Math.min(y, windowHeight - panelHeight - margin));
        return {
            x,
            y
        };
    };
    const expandedPosition = getExpandedPanelPosition();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: constraintsRef,
                className: "fixed inset-0 pointer-events-none",
                style: {
                    zIndex: 9998
                }
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                lineNumber: 226,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: !isExpanded ? // Collapsed state - Container3D button
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    drag: true,
                    dragControls: dragControls,
                    dragConstraints: constraintsRef,
                    dragElastic: 0,
                    dragMomentum: false,
                    initial: {
                        scale: 0,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    exit: {
                        scale: 0,
                        opacity: 0
                    },
                    transition: {
                        type: 'spring',
                        damping: 20,
                        stiffness: 300
                    },
                    style: {
                        position: 'fixed',
                        x: position.x,
                        y: position.y,
                        zIndex: 9999,
                        width: 48,
                        height: 48
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('cursor-move select-none', className),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative cursor-pointer hover:scale-105 active:scale-95 transition-transform",
                        onClick: ()=>setIsExpanded(true),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$containers$2f$Container3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "w-12 h-12 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                    lineNumber: 259,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                lineNumber: 258,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            agentConnectionLogs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-xs font-bold",
                                    children: Math.min(agentConnectionLogs.length, 99)
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                    lineNumber: 264,
                                    columnNumber: 10
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                lineNumber: 263,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                        lineNumber: 255,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                }, "collapsed", false, {
                    fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                    lineNumber: 235,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0)) : // Expanded state - full panel
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    drag: true,
                    dragControls: dragControls,
                    dragConstraints: constraintsRef,
                    dragElastic: 0.2,
                    dragMomentum: false,
                    dragListener: false,
                    initial: {
                        scale: 0.8,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    exit: {
                        scale: 0.8,
                        opacity: 0
                    },
                    transition: {
                        type: 'spring',
                        damping: 20,
                        stiffness: 300
                    },
                    style: {
                        position: 'fixed',
                        x: expandedPosition.x,
                        y: expandedPosition.y,
                        zIndex: 9999,
                        width: panelWidth,
                        height: panelHeight
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700', 'flex flex-col', className),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-2 py-1 border-b border-gray-200 dark:border-gray-700 cursor-move select-none",
                            onPointerDown: (e)=>dragControls.start(e),
                            style: {
                                touchAction: 'none'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripHorizontal$3e$__["GripHorizontal"], {
                                            className: "w-3 h-3 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                            lineNumber: 304,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"], {
                                            className: "w-3.5 h-3.5 text-purple-600 dark:text-purple-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                            lineNumber: 305,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-xs",
                                            children: "Cedar Debugger"
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                            lineNumber: 306,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('px-1.5 py-0.5 rounded-full text-xs', isDebugEnabled ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'),
                                            children: isDebugEnabled ? 'Active' : 'Paused'
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                            lineNumber: 307,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                    lineNumber: 303,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleToggleDebug,
                                            className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors",
                                            title: isDebugEnabled ? 'Pause debugging' : 'Resume debugging',
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])('w-3 h-3', isDebugEnabled && 'text-green-600 dark:text-green-400')
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                                lineNumber: 324,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                            lineNumber: 318,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleClearLogs,
                                            className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors",
                                            title: "Clear all logs",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                                lineNumber: 335,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                            lineNumber: 331,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsExpanded(false),
                                            className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                                lineNumber: 340,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                            lineNumber: 337,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                    lineNumber: 317,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                            lineNumber: 299,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                            value: activeTab,
                            onValueChange: setActiveTab,
                            className: "flex-1 flex flex-col overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                    className: "mx-2 mt-1 w-[calc(100%-1rem)] grid grid-cols-3 h-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "network",
                                            className: "flex items-center gap-1 text-xs py-1 px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Network",
                                                agentConnectionLogs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-0.5 px-1 py-0.5 text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full min-w-[16px] h-4 flex items-center justify-center leading-none",
                                                    children: agentConnectionLogs.length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 11
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                            lineNumber: 351,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "messages",
                                            className: "flex items-center gap-1 text-xs py-1 px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Messages",
                                                messages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-0.5 px-1 py-0.5 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full min-w-[16px] h-4 flex items-center justify-center leading-none",
                                                    children: messages.length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 11
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                            lineNumber: 362,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "states",
                                            className: "flex items-center gap-1 text-xs py-1 px-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                                    className: "w-3 h-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "States",
                                                Object.keys(registeredStates).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-0.5 px-1 py-0.5 text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full min-w-[16px] h-4 flex items-center justify-center leading-none",
                                                    children: Object.keys(registeredStates).length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 11
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                            lineNumber: 373,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                    lineNumber: 350,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                            value: "network",
                                            className: "h-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$NetworkTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetworkTab"], {
                                                logs: agentConnectionLogs,
                                                onCopy: handleCopy,
                                                copiedId: copiedId
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                                lineNumber: 388,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                            lineNumber: 387,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                            value: "messages",
                                            className: "h-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$MessagesTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessagesTab"], {
                                                messages: messages,
                                                onCopy: handleCopy,
                                                copiedId: copiedId
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                                lineNumber: 395,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                            lineNumber: 394,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                            value: "states",
                                            className: "h-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$StatesTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatesTab"], {
                                                states: registeredStates,
                                                onCopy: handleCopy,
                                                copiedId: copiedId
                                            }, void 0, false, {
                                                fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                                lineNumber: 402,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                            lineNumber: 401,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                    lineNumber: 386,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                            lineNumber: 346,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 w-4 h-4 cursor-nwse-resize hover:bg-blue-400/30 group",
                                    onMouseDown: (e)=>startResize('bottom-left', e)
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                    lineNumber: 414,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize hover:bg-blue-400/30 group",
                                    onMouseDown: (e)=>startResize('bottom-right', e)
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                    lineNumber: 419,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-4 right-4 h-1 cursor-row-resize hover:bg-blue-400/30",
                                    onMouseDown: (e)=>startResize('height', e)
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                    lineNumber: 424,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-12 bottom-4 right-0 w-1 cursor-col-resize hover:bg-blue-400/30",
                                    onMouseDown: (e)=>startResize('width', e)
                                }, void 0, false, {
                                    fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                                    lineNumber: 430,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true)
                    ]
                }, "expanded", true, {
                    fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                    lineNumber: 273,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/cedar/components/debugger/DebuggerPanel.tsx",
                lineNumber: 232,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(DebuggerPanel, "9q0uPsNsoS7BySntd3Dxv0K36cg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCedarStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$gestures$2f$drag$2f$use$2d$drag$2d$controls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDragControls"]
    ];
});
_c = DebuggerPanel;
var _c;
__turbopack_context__.k.register(_c, "DebuggerPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/debugger/types.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Shared types for debugger components
__turbopack_context__.s({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/debugger/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$DebuggerPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/debugger/DebuggerPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$NetworkTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/debugger/NetworkTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$MessagesTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/debugger/MessagesTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$StatesTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/debugger/StatesTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$CollapsibleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/debugger/CollapsibleSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/debugger/types.ts [app-client] (ecmascript)");
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/cedar/components/debugger/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$DebuggerPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/debugger/DebuggerPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$NetworkTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/debugger/NetworkTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$MessagesTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/debugger/MessagesTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$StatesTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/debugger/StatesTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$CollapsibleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/debugger/CollapsibleSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/debugger/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/cedar/components/debugger/index.ts [app-client] (ecmascript) <locals>");
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>HomePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/cedar-os/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatModeSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChatModeSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatComponents$2f$CedarCaptionChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/chatComponents/CedarCaptionChat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatComponents$2f$FloatingCedarChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/chatComponents/FloatingCedarChat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatComponents$2f$SidePanelCedarChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/chatComponents/SidePanelCedarChat.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/cedar/components/debugger/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$DebuggerPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cedar/components/debugger/DebuggerPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function HomePage() {
    _s();
    // Cedar-OS chat components with mode selector
    // Choose between caption, floating, or side panel chat modes
    const [chatMode, setChatMode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('sidepanel');
    // Cedar state for the main text that can be changed by the agent
    const [mainText, setMainText] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('tell Cedar to change me');
    // Cedar state for dynamically added text lines
    const [textLines, setTextLines] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    // Register the main text as Cedar state with a state setter
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useRegisterState"])({
        key: 'mainText',
        description: 'The main text that can be modified by Cedar',
        value: mainText,
        setValue: setMainText,
        stateSetters: {
            changeText: {
                name: 'changeText',
                description: 'Change the main text to a new value',
                argsSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
                    newText: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Text cannot be empty').describe('The new text to display')
                }),
                execute: {
                    "HomePage.useRegisterState": (currentText, setValue, args)=>{
                        setValue(args.newText);
                    }
                }["HomePage.useRegisterState"]
            }
        }
    });
    // Subscribe the main text state to the backend
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSubscribeStateToAgentContext"])('mainText', {
        "HomePage.useSubscribeStateToAgentContext": (mainText)=>({
                mainText
            })
    }["HomePage.useSubscribeStateToAgentContext"], {
        showInChat: true,
        color: '#4F46E5'
    });
    // Register frontend tool for adding text lines
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useRegisterFrontendTool"])({
        name: 'addNewTextLine',
        description: 'Add a new line of text to the screen via frontend tool',
        argsSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            text: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Text cannot be empty').describe('The text to add to the screen'),
            style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
                'normal',
                'bold',
                'italic',
                'highlight'
            ]).optional().describe('Text style to apply')
        }),
        execute: {
            "HomePage.useRegisterFrontendTool": async (args)=>{
                const styledText = args.style === 'bold' ? "**".concat(args.text, "**") : args.style === 'italic' ? "*".concat(args.text, "*") : args.style === 'highlight' ? "🌟 ".concat(args.text, " 🌟") : args.text;
                setTextLines({
                    "HomePage.useRegisterFrontendTool": (prev)=>[
                            ...prev,
                            styledText
                        ]
                }["HomePage.useRegisterFrontendTool"]);
            }
        }["HomePage.useRegisterFrontendTool"]
    });
    const renderContent = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-screen w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChatModeSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatModeSelector"], {
                    currentMode: chatMode,
                    onModeChange: setChatMode
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center min-h-[60vh] p-8 space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-6xl font-bold text-gray-800 mb-4",
                                    children: mainText
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-gray-600 mb-8",
                                    children: "This text can be changed by Cedar using state setters"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 91,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-semibold text-gray-700 mb-2",
                                    children: "tell cedar to add new lines of text to the screen"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-md text-gray-500 mb-6",
                                    children: "Cedar can add new text using frontend tools with different styles"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 99,
                            columnNumber: 9
                        }, this),
                        textLines.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-medium text-gray-700 mb-4 text-center",
                                    children: "Added by Cedar:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: textLines.map((line, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 bg-blue-50 border border-blue-200 rounded-lg text-center",
                                            children: line.startsWith('**') && line.endsWith('**') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-blue-800",
                                                children: line.slice(2, -2)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 21
                                            }, this) : line.startsWith('*') && line.endsWith('*') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                className: "text-blue-700",
                                                children: line.slice(1, -1)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, this) : line.startsWith('🌟') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-yellow-600 font-semibold",
                                                children: line
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-blue-800",
                                                children: line
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 21
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 89,
                    columnNumber: 7
                }, this),
                chatMode === 'caption' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatComponents$2f$CedarCaptionChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CedarCaptionChat"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 134,
                    columnNumber: 34
                }, this),
                chatMode === 'floating' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatComponents$2f$FloatingCedarChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingCedarChat"], {
                    side: "right",
                    title: "Cedarling Chat",
                    collapsedLabel: "Chat with Cedar"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 85,
            columnNumber: 5
        }, this);
    if (chatMode === 'sidepanel') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$chatComponents$2f$SidePanelCedarChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidePanelCedarChat"], {
            side: "right",
            title: "Cedarling Chat",
            collapsedLabel: "Chat with Cedar",
            showCollapsedButton: true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cedar$2f$components$2f$debugger$2f$DebuggerPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DebuggerPanel"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this),
                renderContent()
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, this);
    }
    return renderContent();
}
_s(HomePage, "0b1vJojN9m4n+jc3yEHlHrtvfxw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useRegisterState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useSubscribeStateToAgentContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cedar$2d$os$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useRegisterFrontendTool"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_9599d3ed._.js.map