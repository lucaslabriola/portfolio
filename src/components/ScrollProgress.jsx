import { useEffect, useState } from "react";
import "../styles/ScrollProgress.css";

function ScrollProgress() {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {

        const handleScroll = () => {

            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            setScroll(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <div
            className="scroll-progress"
            style={{ width: `${scroll}%` }}
        />
    );
}

export default ScrollProgress;
