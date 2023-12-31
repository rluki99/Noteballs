<template>
	<NavBar />

	<div class="container is-max-desktop px-2 py-4">
		<RouterView />
	</div>
</template>

<script setup>
// imports

import NavBar from '@/components/layout/NavBar.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { onMounted } from 'vue';

// store

const storeNotes = useStoreNotes()

// mounted

onMounted(() => {
	storeNotes.getNotes()
})

</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
