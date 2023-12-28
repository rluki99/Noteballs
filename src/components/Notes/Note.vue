<template>
	<div class="card mb-4">
		<div class="card-content">
			<div class="content">
				{{ note.content }}
                <div class="has-text-right has-text-grey-light mt-2">
                    <small>{{ characterLength }}</small>
                </div>
			</div>
		</div>
		<footer class="card-footer">
			<RouterLink :to="`/editNote/${note.id}`" href="#" class="card-footer-item">Edit</RouterLink>
			<a @click.prevent="modals.deleteNote = true" href="#" class="card-footer-item">Delete</a>
		</footer>
		<ModalDeleteNote v-model="modals.deleteNote" v-if="modals.deleteNote" :noteId="note.id"/>
	</div>
</template>

<script setup>
// imports

import { computed, reactive } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue'

// props

const props = defineProps({
	note: {
		type: Object, 
		required: true
	}
})

// store

const storeNotes = useStoreNotes()

// character length

const characterLength = computed(()=> {
    const length = props.note.content.length
    const description = length > 1 ? 'characters' : 'character'
    return `${length} ${description}`
})

// modals

const modals = reactive({
	deleteNote: false
})

</script>