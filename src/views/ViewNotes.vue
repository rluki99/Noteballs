<template>
	<div class="notes">
		<div class="card has-background-success-dark p-4 mb-5">
			<div class="field">
				<div class="control">
					<textarea v-model="newNote" class="textarea" placeholder="Add a new note" ref="newNoteRef"/>
				</div>
			</div>

			<div class="field is-grouped is-grouped-right">
				<div class="control">
					<button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add New Note</button>
				</div>
			</div>
		</div>

		<Note v-for="note in notes" :key="note.id" :note="note" @deleteClicked="deleteNote"/>

	</div>
</template>

<script setup>
// imports

import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'

// notes

const newNote = ref('')
const newNoteRef = ref(null)

const notes = ref([
	{
		id: 'id1',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolor dicta mollitia architecto quo quod ipsam sit itaque quas quam dolorem fuga praesentium suscipit possimus quidem et ipsa nulla reiciendis.'
	},
	{
		id: 'id2',
		content: 'Shorter note. Lorem ipsum dolar sit'
	},
])

// add note

const addNote = () => {
	const currentDate = new Date().getTime()
	const id = currentDate.toString()

	const note = {
		id: id,
		content: newNote.value
	}

	notes.value.unshift(note)

	newNote.value = ''
	newNoteRef.value.focus()
}

// delete note

const deleteNote = (idToDelete) => {
	console.log('deleteNote', idToDelete);
	notes.value = notes.value.filter(note => { return note.id !== idToDelete })
}
</script>
