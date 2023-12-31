import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, addDoc, deleteDoc, updateDoc, query, orderBy } from 'firebase/firestore'
import { db } from '@/js/firebase'

const notesCollectionRef = collection(db, 'notes')
const notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'))

export const useStoreNotes = defineStore('storeNotes', {
	state: () => {
		return {
			notes: [
				// {
				// 	id: 'id1',
				// 	content:
				// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolor dicta mollitia architecto quo quod ipsam sit itaque quas quam dolorem fuga praesentium suscipit possimus quidem et ipsa nulla reiciendis.',
				// },
				// {
				// 	id: 'id2',
				// 	content: 'Shorter note. Lorem ipsum dolar sit',
				// },
			],
		}
	},
	actions: {
		async getNotes() {
			onSnapshot(notesCollectionQuery, (querySnapshot) => {
				const notes = []
				querySnapshot.forEach((doc) => {
					let note = {
						id: doc.id,
						content: doc.data().content,
						date: doc.data().date
					}
					notes.push(note)
				})
				this.notes = notes
			})
		},
		async addNote(newNoteContent) {
			const currentDate = new Date().getTime()
			const date = currentDate.toString()

			await addDoc(notesCollectionRef, {
				content: newNoteContent,
				date: date,
			})
		},
		async deleteNote(idToDelete) {
			// this.notes = this.notes.filter((note) => note.id !== idToDelete)

			await deleteDoc(doc(notesCollectionRef, idToDelete))
		},
		async updateNote(id, content) {
			// const index = this.notes.findIndex((note) => note.id === id)
			// this.notes[index].content = content

			await updateDoc(doc(notesCollectionRef, id), {
				content: content,
			})
		},
	},
	getters: {
		getNoteContent: (state) => {
			return (id) => {
				return state.notes.filter((note) => note.id === id)[0].content
			}
		},
		getTotalNotesCount: (state) => {
			return state.notes.length
		},
		getTotalCharactersCount: (state) => {
			let count = 0
			state.notes.forEach((note) => {
				count += note.content.length
			})
			return count
		},
	},
})
