<template>
	<div class="notes">
		<div class="card has-background-success-dark p-4 mb-5">
			<div class="field">
				<div class="control">
					<textarea class="textarea" placeholder="Add a new note" />
				</div>
			</div>

			<div class="field is-grouped is-grouped-right">
				<div class="control">
					<button class="button is-link has-background-success">Add New Note</button>
				</div>
			</div>
		</div>

		<div class="card mb-4">
			<header class="card-header">
				<p class="card-header-title">Component</p>
				<button class="card-header-icon" aria-label="more options">
					<span class="icon">
						<i class="fas fa-angle-down" aria-hidden="true"></i>
					</span>
				</button>
			</header>
			<div class="card-content">
				<div class="content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolor dicta mollitia architecto quo quod ipsam
					sit itaque quas quam dolorem fuga praesentium suscipit possimus quidem et ipsa nulla reiciendis.
				</div>
			</div>
			<footer class="card-footer">
				<a href="#" class="card-footer-item">Edit</a>
				<a href="#" class="card-footer-item">Delete</a>
			</footer>
		</div>
	</div>
</template>
