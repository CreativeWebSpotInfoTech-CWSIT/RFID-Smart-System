"use client";

import { useRef, useCallback } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export function useMouseParallax() {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 140, damping: 18 });
    const mouseYSpring = useSpring(y, { stiffness: 140, damping: 18 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = useCallback(
        (e) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const xPct = (e.clientX - rect.left) / rect.width - 0.5;
            const yPct = (e.clientY - rect.top) / rect.height - 0.5;
            x.set(xPct);
            y.set(yPct);
        },
        [x, y]
    );

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
    }, [x, y]);

    return {
        ref,
        rotateX,
        rotateY,
        handleMouseMove,
        handleMouseLeave,
    };
}