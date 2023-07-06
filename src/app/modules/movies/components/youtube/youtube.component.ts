import { Component, Input, OnInit } from '@angular/core';

declare global {
  interface Window {
    YT: typeof YT | undefined;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

@Component({
  selector: 'app-youtube',
  template: '<div></div>',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  done:boolean = false;

  ngOnInit(): void {
    // Cargar el script de la API de YouTube
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Asignar la función onYouTubeIframeAPIReady al objeto global window
    window.onYouTubeIframeAPIReady = () => this.onYouTubeIframeAPIReady();
  }

  onYouTubeIframeAPIReady(): void {
    const player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      playerVars: {
        'playsinline': 1
      },
      events: {
        'onReady': (event: any) => this.onPlayerReady(event),
        'onStateChange': (event: any) => this.onPlayerStateChange(event)
      }
    });
  }

  onPlayerReady(event: any): void {
    event.target.playVideo();
  }

  onPlayerStateChange(event: any): void {
    if (event.data == YT.PlayerState.PLAYING && !this.done) {
      setTimeout(() => this.stopVideo(), 6000);
      this.done = true;
    }
  }

  stopVideo(): void {
    // this.player.stopVideo();
  }
}
