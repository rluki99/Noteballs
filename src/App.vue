<template>
	<NavBar />

	<div class="container is-max-desktop px-2 py-4">
		<RouterView />
	</div>
</template>

<script setup>
// imports

import NavBar from '@/components/layout/NavBar.vue'
import { useStoreAuth } from '@/stores/storeAuth'
import { onMounted } from 'vue';

// store

const storeAuth = useStoreAuth()

// mounted

onMounted(() => {
	storeAuth.init()
})

</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
