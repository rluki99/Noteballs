import { defineStore } from 'pinia'
import { db } from '@/js/firebase'

export const useStoreNotes = defineStore('storeNotes', {
	state: () => {
		return {
			notes: [
				{
					id: 'id1',
					content:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolor dicta mollitia architecto quo quod ipsam sit itaque quas quam dolorem fuga praesentium suscipit possimus quidem et ipsa nulla reiciendis.',
				},
				{
					id: 'id2',
					content: 'Shorter note. Lorem ipsum dolar sit',
				},
			],
		}
	},
	actions: {
		addNote(newNoteContent) {
			const currentDate = new Date().getTime()
			const id = currentDate.toString()
			const note = {
				id: id,
				content: newNoteContent,
			}

			this.notes.unshift(note)
		},
		deleteNote(idToDelete) {
			this.notes = this.notes.filter(note => note.id !== idToDelete)
		},
		updateNote(id, content) {
			const index = this.notes.findIndex(note => note.id === id)
			this.notes[index].content = content
		},
	},
	getters: {
		getNoteContent: state => {
			return id => {
				return state.notes.filter(note => note.id === id)[0].content
			}
		},
		getTotalNotesCount: state => {
			return state.notes.length
		},
		getTotalCharactersCount: state => {
			let count = 0
			state.notes.forEach(note => {
				count += note.content.length
			})
			return count
		},
	},
})
