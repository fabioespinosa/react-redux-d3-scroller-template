var data = [{ nombre: 'Fabio' }, { nombre: 'Sebastian' }, { nombre: 'Mariana' }, { nombre: 'John' }];

export default function() {
	return [
		{
			id: 'viz1',
			position(width, top, hover) {
				var hosts = data.map((persona, i) => {
					return {
						key: 'nombre',
						x: i + 20,
						y: 20
					};
				});

				return { hosts };
			}
		},
		{
			id: 'viz2',
			position(width, top, hover) {
				var hosts = data.map((persona, i) => {
					return {
						key: 'nombre',
						x: i + 40,
						y: 500
					};
				});
			}
		}
	];
}
