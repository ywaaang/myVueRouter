<template>
    <a :href="'#' + to">
        <slot />
    </a>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
    to: {
        type: String,
        required: true, // 表示to为必传项
    },
});
</script>
