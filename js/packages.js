//Save the active URL in a variable
const url = window.location.href;
//Convert string to an url object
const urlObject = new URL(url);
//Get params from url object
const term = urlObject.searchParams.get('package');

console.log(term);

const output = document.querySelector('#output');

const tilbudContainer = document.querySelector('#tilbud-container');

const template = `
<li>
<h2>En billet til Korsbæk Bio</h2><button onclick=deleteItem(this)>Indløs</button>
</li>
<li>
<h2>
En billet til Korsbæk Svømmehal</h2><button onclick=deleteItem(this)>Indløs</button>
</li> 
<li>
<h2>Slik for 100 kr. i Slikhytten</h2><button onclick=deleteItem(this)>Indløs</button>
</li>
`;

function deleteItem(knap) {
	const listItem = knap.parentElement;

	if (
		listItem.previousElementSibling &&
		listItem.previousElementSibling.tagName === 'HR'
	) {
		listItem.previousElementSibling.remove();
	}

	if (
		listItem.nextElementSibling &&
		listItem.nextElementSibling.tagName === 'HR'
	) {
		listItem.nextElementSibling.remove();
	}
	listItem.remove();
	localStorage.setItem('package', output.innerHTML);
}

const pakker = {
	silver: {
		bio: 'En billet til Korsbæk Bio',
		slik: 'Slik for 100 kr. i Slikhytten',
		bad: 'En billet til Korsbæk Svømmehal'
	},
	gold: {
		bio: 'To billetter til Korsbæk Bio',
		slik: 'Slik for 250 kr. i Slikhytten',
		bad: 'To billetter til Korsbæk Svømmehal'
	},
	platin: {
		bio: 'Fire billetter til Korsbæk Bio',
		slik: 'Slik for 500 kr. i Slikhytten',
		bad: 'Fire billetter til Korsbæk Svømmehal'
	}
};

if (localStorage.getItem('package')) {
	output.innerHTML += localStorage.getItem('package');
}

switch (term) {
	case 'silver':
		output.innerHTML = createTemplate(term);
		localStorage.setItem('package', createTemplate(term));
		break;
	case 'gold':
		output.innerHTML = createTemplate(term);
		localStorage.setItem('package', createTemplate(term));
		break;
	case 'platin':
		output.innerHTML = createTemplate(term);
		localStorage.setItem('package', createTemplate(term));
		break;
	default:
		console.log('Intet valgt');
}

const reset = document.querySelector('#resetBtn');
reset.addEventListener('click', resetPackage);

function resetPackage() {
	output.innerHTML = '';
	localStorage.removeItem('package');
}

function createTemplate(term) {
	const template = `<hr><li>
<h2>${pakker[term]['bio']}</h2><button onclick=deleteItem(this)>Indløs</button>
</li>
<hr>
<hr>
<li>
<h2>
${pakker[term]['bad']}</h2><button onclick=deleteItem(this)>Indløs</button>
</li> 
<hr>
<hr>
<li>
<h2>${pakker[term]['slik']}</h2><button onclick=deleteItem(this)>Indløs</button>
</li>
<hr>
`;

	return template;
}
