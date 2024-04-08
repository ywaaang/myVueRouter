<template>
    <div>
        home page
        <button @click="handleGo">Go About</button>
    </div>
</template>
<script setup>
import { useRouter } from "../myRouter";
const router = useRouter(); // 在当前组件注入了router路由实例
const handleGo = () => {
    router.push('about')
}
</script>