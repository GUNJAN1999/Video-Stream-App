import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'
class App extends React.Component
{
	state={videos:[] ,selectedVideo:null};
	onVideoSelect=(video)=>
	{
		this.setState({selectedVideo:video});
		console.log("fromm the app component! ",video);
	}
	onTermSubmit=async (term)=>
	{
		console.log(term);
		const response =await youtube.get('/search',{
			params:{
				q: term
			}
		});
		console.log(response);
		this.setState({videos:response.data.items});
	};
	render()
	{
		return(
			<div className="ui container">
				<SearchBar
				onFormSubmit={this.onTermSubmit}/>
				
				FOUND : {this.state.videos.length}

				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
				onVideoSelect={this.onVideoSelect}
				videos={this.state.videos}
				/>
			</div>
		);
	}

}
export default App;