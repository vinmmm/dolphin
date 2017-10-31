import React from 'react';

const schools = [ 
"Yale",
"Yorktown", 
"Washington & Lee", 
"Wakefield"
]


	console.log(schools.join("% "));

const wSchools = schools.filter(school => school[0] === "W") 
console.log( wSchools )

//this.props({school : wSchools});


const highSchools = schools.map(school => `${school} High School`) 
console.log(highSchools.join("\n"))

// map returning an object
const myHighSchools = schools.map(school => ({ name: school })) 
console.log( myHighSchools )

// a pure function that changes one object in an array of objects
let schoolz = [
{ name: "Yorktown"},
{ name: "Stratford" },
{ name: "Washington & Lee"}, 
{ name: "Wakefield"}
]
//let updatedSchoolz = editName("Stratford", "HB Woodlawn", schoolz)

//console.log( updatedSchoolz[1] )
console.log( schoolz[1] )

class Footer extends React.Component {

	render() {
		return <div>
		<h5>zoso footer</h5>

		<svg class="cloud" width="477.5" height="89.5" viewBox="0 0 477.5 89.5" role="presentation"><path d="M477.5 41.4a369.1 369.1 0 0 1-47 3.4c-.5-3.2-5-5.7-10.5-5.7s-9.1 2.1-10.2 4.8a109.9 109.9 0 0 1-16.6-2.8c-.3-4.3-6.4-7.7-14-7.7h-2.3a19.2 19.2 0 0 1-3.5-3.9C357.7 6.3 334 20.8 334 20.8a41 41 0 0 1-11.4 4.1c-.9-7.8-10.6-14-22.4-14a30 30 0 0 0-13.3 2.9l-1-1c-16.5-17.5-38-10.1-47.5-5.4-4.3-4.5-11.5-7.4-19.8-7.4-12.3 0-22.4 6.5-23.7 14.9-6.6.6-13.3 1.2-19.7 1.5-3.3-3.2-9.2-5.4-16-5.4a26.2 26.2 0 0 0-13.1 3.2l-.6-.5c-9-8.4-33.6-1.3-34 9.6 0 .9-.9 1.9-2.5 2.8-2.7-2.8-10.4-3.7-18.9-2.1-10.2 1.9-17.9 6.9-17.1 11v.3l-.9.2c-1.1-3.4-6-6-11.8-6s-12 3.4-12 7.5a4.9 4.9 0 0 0 .4 1.9C23.5 42.5 0 44.7 0 44.7s38.3.8 75 8.4a7.7 7.7 0 0 0-.1 1.3c0 7.2 10 13 22.3 13a32.6 32.6 0 0 0 14.8-3.3c21 8.6 42.4 9.5 56 8.9.9 6.2 8.5 11.1 17.8 11.1a24 24 0 0 0 10-2.1c12.6 4.4 31.1 4.3 46.8 3a21.1 21.1 0 0 0 13.6 4.6c7.5 0 14-3.5 17-8.7 14.5 12 38.7 5.2 53.5-.8 2.8 4.4 9.7 7.5 17.8 7.5a28 28 0 0 0 10.9-2.1c8.8 2.7 17.6 1 19.2-8.8 3.2.4 8.7-1.8 14.2-5.9a41.6 41.6 0 0 0 5.3-4.7 27.1 27.1 0 0 0 10.7-2.2c5.5-2.2 9.7-5.3 10.7-7.8 28.7-8.5 62-14.7 62-14.7z" fill="#231f20"/></svg>
		</div>;
	}
}

export default Footer;