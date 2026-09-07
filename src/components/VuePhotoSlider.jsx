import { createApp } from "vue";
import { useEffect, useRef } from "react";
import PhotoSlider from "../vue/PhotoSlider.vue";

export default function VuePhotoSlider({ images, altPrefix }) {
    const host = useRef(null);

    useEffect(() => {
        const app = createApp(PhotoSlider, { images, altPrefix });
        app.mount(host.current);
        return () => app.unmount();
    }, [images, altPrefix]);

    return <div ref={host} />;
}
