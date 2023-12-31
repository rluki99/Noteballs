<template>
	<nav class="navbar is-success" role="navigation" aria-label="main navigation">
		<div class="container is-max-desktop px-2">
			<div class="navbar-brand">
				<a @click="$router.push('/')" class="navbar-item i-size-4 is-family-monospace">Noteballs</a>

				<a
					:class="{ 'is-active': showMobileNav }"
					@click.prevent="showMobileNav = !showMobileNav"
					class="navbar-burger"
					aria-expanded="false"
					aria-label="menu"
					data-target="navbarBasicExample"
					role="button"
					ref="navbarBurgerRef">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div :class="{ 'is-active': showMobileNav }" id="navbarBasicExample" class="navbar-menu" ref="navbarMenuRef">
				<div class="navbar-start">
					<button class="button is-small is-info mt-3 ml-3">Log out</button>
				</div>
				<div class="navbar-end">
					<RouterLink to="/" @click="showMobileNav = false" class="navbar-item" active-class="is-active">
						Notes
					</RouterLink>
					<RouterLink to="/stats" @click="showMobileNav = false" class="navbar-item" active-class="is-active">
						Stats
					</RouterLink>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
// imports

import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

// mobile nav

const showMobileNav = ref(false)

// click outside to close

const navbarMenuRef = ref(null)
const navbarBurgerRef = ref(null)

onClickOutside(navbarMenuRef, () => (showMobileNav.value = false), { ignore: [navbarBurgerRef] })

</script>

<style>
@media (max-width: 1023px) {
	.navbar-menu {
		position: absolute;
		left: 0;
		width: 100%;
	}
}
</style>
