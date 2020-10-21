import axios from 'axios';
const KEY = 'AIzaSyB5t06VCk5vKAhI7u8kx-GDljxg7bpLROA'


export default axios.create({
	baseURL:'https://www.googleapis.com/youtube/v3',
	params:{
		part:'snippet',
		maxResults: 5,
		key:KEY
	}
});




