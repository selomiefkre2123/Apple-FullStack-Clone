import React, { useEffect, useState } from "react";

function AppleYoutube() {
  const [appleVideos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/youtubeData.json")
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items); // directly store the array
      });
  }, []);

  return (
    <div className="py-4">
      <div className="container">
        {/* Title */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h1 className="bold">Latest Videos</h1>
          </div>
        </div>

        {/* Video Grid */}
        <div className="row">
          {appleVideos.map((singleVideo, i) => {
            const vidId = singleVideo.id.videoId;
            const vidLink = `https://www.youtube.com/watch?v=${vidId}`;

            //  "id": {
            //     "videoId": "ABCDE12345"
            //     }

            // key={i} uniquely identifies each video for React.

            return (
              <div key={i} className="col-sm-12 col-md-6 mb-4">
                <div className="card p-2 h-100">
                  {/* .card Gives border and Makes the content look like a separate box, .h-100 take 100% height of its parent container.*/}

                  {/* Thumbnail div*/}
                  <a href={vidLink} target="_blank">
                    {/* <a> opens the video link in a new tab. */}
                    <img
                      src={singleVideo.snippet.thumbnails.high.url}
                      className="img-fluid mb-2"
                    />
                    {/* <img> loads the video thumbnail from the API,
                    .img-fluid The image fit the width of its parent container.Prevents the image from overflowing. */}
                  </a>

                  {/* "thumbnails": {
                      "high": {
                        "url": "thumbnail-image-url"
                      }
                    } */}

                  <div>
                    {/* Title div */}
                    <div className="mb-1">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    {/* The video’s title.clickable,linking to YouTube. */}

                    {/* Description div */}
                    <div className="mb-1">
                      {singleVideo.snippet.description}
                    </div>

                    {/* Publish Date */}
                    <div className="text-muted">
                      Published on:{" "}
                      {new Date(singleVideo.snippet.publishedAt).toDateString()}
                    </div>
                    {/* new Date(...).toDateString() 
                        Takes the publish date string
                        from YouTube: "2024-10-01T12:34:56Z" Converts it into a readable date:Tue Oct 01 2024 
                        .text-muted ,look lighter or gray.*/}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AppleYoutube;
