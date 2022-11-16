new Vue({
	el: '#app',

	methods: {
		greet() {
			console.log('greet eseguita');
			return 'Ciao a tutti!';
		},
	},

	computed: {
		computedGreet() {
			console.log('computedGreet eseguita');
			return 'Ciao a tutti!';
		},
	}
});