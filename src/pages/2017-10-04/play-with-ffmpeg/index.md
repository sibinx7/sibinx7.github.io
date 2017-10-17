---
title: "Play with FFMPEG for Multimedia"
path: "/2017-10-04/play-with-ffmpeg-multimedia-handler"
date: "2017-10-04T09:40:42.000Z"
tags: Ubuntu
author: Sibin Xavier 
draft: false 
image: "nginx-vs-apache.png"
---

### FFMPEG for Multmedia Process 

Recently we have a chance to work with YouTube like website, where we 
need to upload video and then process and get video thumbnails. We don't have any experience with this, afer a long search we get `FFMPEG`
it is a tool to handle multimedia data. It can used to get thumbnails, video length and other meta data information. It is a command line tool
but we can use it with `PHP` with shell command.

#### Install `FFMPEG`


```
sudo apt-get install ffmpeg

```

#### Use it with terminal 

##### Generate Thumbnail 

```
ffmpeg -i sample-video.mp4 -ss 00:00:02.435 -vframes 1 thumbnail.png

```

Above code will generate `thumbnail.png` from `sample-video.mp4` at 2.435 second. 

###### Get Total Video duration 

```
ffmpeg -i sample-video.mp4 2>&1 | grep 'Duration' | cut -d ' ' -f 4 | sed s/,//

```

Once you get total duration, you can use to get thumbnail from different time


#### Laravel and FFMPEG 

We need to implement this on a Laravel application. Actually our frontend framework send post request to Laravel backend, then we need to store it first, then caculate total time, then take multiple thumbnails and send it back, so user can select any and make it as cover image.

We use `File`, `Storage`, `Process` classes

```
    $video = public_path('videos/sample-video.mp4');
		// $video = Storage::get(video_path)
    $process = new Process("ffmpeg -i $video 2>&1 | grep 'Duration' | cut -d ' ' -f 4 | sed s/,//");
    $process->run();

    if(!$process->isSuccessful()){
      throw new ProcessFailedException($process);
    }

		$thumbnail_path = public_path('images')
		$thumbnail = new Process("ffmpeg -i $video -ss 00:00:02.435 -vframes 1 $thumbnail_path/images/thumbnail.png");
		$thumbnail->run();


		$thumbnail_url = url('images/thumbnail.png')

    return response()->json([
      'duration' => $process->getOutput(),
			'thumbnail' => $thumbnail_url,
      'path'  => public_path('videos/sample-video.mp4')
    ]);

```



