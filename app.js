// Create Data
const data = [
	{
		name: 'John Doe',
		age: '32',
		gender: 'male',
		lookingfor: 'female',
		location: 'Nashville',
		image: 'https://randomuser.me/api/portraits/men/28.jpg'
	},
	{
		name: 'Jane Smith',
		age: '23',
		gender: 'female',
		lookingfor: 'male',
		location: 'Nashville',
		image: 'https://randomuser.me/api/portraits/women/81.jpg'
	},
	{
		name: 'Steve Williams',
		age: '29',
		gender: 'male',
		lookingfor: 'female',
		location: 'Dallas',
		image: 'https://randomuser.me/api/portraits/men/42.jpg'
	},
	{
		name: 'Gwen Jones',
		age: '31',
		gender: 'female',
		lookingfor: 'male',
		location: 'Atlanta',
		image: 'https://randomuser.me/api/portraits/women/12.jpg'
	},
	{
		name: 'Jake Jackson',
		age: '30',
		gender: 'male',
		lookingfor: 'female',
		location: 'Nashville',
		image: 'https://randomuser.me/api/portraits/men/60.jpg'
	},
	{
		name: 'Jonathan Decker',
		age: '27',
		gender: 'male',
		lookingfor: 'female',
		location: 'Charlotte',
		image: 'https://randomuser.me/api/portraits/men/14.jpg'
	},
	{
		name: 'Sara Stevens',
		age: '32',
		gender: 'female',
		lookingfor: 'male',
		location: 'Tucson',
		image: 'https://randomuser.me/api/portraits/women/2.jpg'
	}
]

const profiles = profileIterator(data)

// Call first profile
nextProfile()

// Next Event
document.getElementById('next').addEventListener('click', nextProfile)

// Next Profile Display
function nextProfile() {
	const currentProfile = profiles.next().value

	if (currentProfile !== undefined) {
		document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `

		document.getElementById(
			'imageDisplay'
		).innerHTML = `<img src="${currentProfile.image}">`
	} else {
		// No more profiles
		window.location.reload()
	}
}

// Profile Iterator
function profileIterator(profiles) {
	let nextIndex = 0

	return {
		next: function() {
			return nextIndex < profiles.length
				? {value: profiles[nextIndex++], done: false}
				: {done: true}
		}
	}
}
