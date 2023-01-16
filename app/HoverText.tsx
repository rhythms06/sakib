'use client'
import { useState } from "react";

export default function HoverText({ className, text, textOnHover, href } : { className?: string; text: string; textOnHover: string; href?: string }) {
    const [hovering, setHovering] = useState(false);
    if (href) {
        return (
            <a href={href} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className={"flex justify-center " + (className || "")}>
                { !hovering ? text : textOnHover }
            </a>
        )
    } else return (
        <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className={"flex justify-center " + (className || "")}>
            { !hovering ? text : textOnHover }
        </div>
    )
}