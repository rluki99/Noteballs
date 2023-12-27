<template>
	<div class="stats">
		<table class="table is-fullwidth">
			<thead>
				<tr>
					<th>Stat</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Number of Notes</td>
					<td>{{ storeNotes.getTotalNotesCount }}</td>
				</tr>
				<tr>
					<td>Number of Characters (of all notes)</td>
					<td>{{ storeNotes.getTotalCharactersCount }}</td>
				</tr>
			</tbody>
		</table>
		<input
		  v-model="loveNoteballs"
		  v-autofocus
		  class="input"
		  placeholder="Do you love noteballs??"
		  type="text"
		/>
	</div>
</template>

<script setup>
// imports

import { useStoreNotes } from '@/stores/storeNotes'
import { vAutofocus } from '@/directives/vAutofocus'
import { useWatchCharacters } from '@/use/useWatchCharacters'
import { ref } from 'vue'

// store

const storeNotes = useStoreNotes()

// love noteballs

const loveNoteballs = ref('')

// watch characters

useWatchCharacters(loveNoteballs, 50)

</script>
