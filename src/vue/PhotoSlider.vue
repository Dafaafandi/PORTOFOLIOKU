<script setup>
import { computed, ref } from "vue";

const props = defineProps({
    images: { type: Array, required: true },
    altPrefix: { type: String, required: true },
});

const current = ref(0);
const hasControls = computed(() => props.images.length > 1);

function showPhoto(index) {
    current.value = (index + props.images.length) % props.images.length;
}
</script>

<template>
    <div class="photo-slider" data-photo-slider>
        <img
            v-for="(image, index) in images"
            :key="image"
            class="photo-slide"
            :class="{ 'is-active': index === current }"
            :src="image"
            :alt="`${altPrefix} ${index + 1}`"
            loading="lazy"
            decoding="async"
        />
        <div v-if="hasControls" class="photo-controls">
            <button
                type="button"
                aria-label="Foto sebelumnya"
                @click="showPhoto(current - 1)"
            >
                ←
            </button>
            <span class="photo-counter"
                ><b>{{ String(current + 1).padStart(2, "0") }}</b> /
                {{ String(images.length).padStart(2, "0") }}</span
            >
            <button
                type="button"
                aria-label="Foto berikutnya"
                @click="showPhoto(current + 1)"
            >
                →
            </button>
        </div>
    </div>
</template>
