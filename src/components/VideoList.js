import React from 'react';
import VideoItem from './VideoItem';

const VideoList=({videos,onVideoSelect})=>
{
	console.log(videos.length);
	const renderedList= videos.map((video)=>{
		return <VideoItem onVideoSelect={onVideoSelect} video={video}	/> 
	});
	return (
	<div className="ui reaxed divided list">
		{renderedList}
	</div>
	);
}

export default VideoList;












