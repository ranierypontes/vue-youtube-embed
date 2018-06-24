<script>

export default {

  name: 'YoutubeEmbed',

  data () {

    return {

      index: 0,

      playlistVideos: [
        'c4BLVznuWnU',
        '6slBUykPERQ',
        'eycuj9jczm0',
      ],

      videoId: 'c4BLVznuWnU',
    }

  },

  methods: {

    ready (player) {
      this.player = player
    },

    playing (player) {
      this.player.playVideo()
    },

    change (option) {
      if (option === 'next') {
        this.index += 1;
        if (this.index >= this.playlistVideos.length) {
          this.index = 0;
        }
      } else {
        if (this.index > 0) {
          this.index -= 1;
        } else {

        }
      }
      this.videoId = this.playlistVideos[this.index];
    },

    stop () {
      this.player.stopVideo()
    },

    pause () {
      this.player.pauseVideo()
    },

    ended () {
      this.change('next');
    }

  }

}

</script>

<template>

  <div class="player">

    <section>
      <youtube
        class="video2"
        :video-id="videoId"
        @ready="ready"
        @playing="playing"
        @paused="pause"
        @ended="ended"
        :player-vars="{
          autoplay: 1,
          iv_load_policy: 3,
          rel: 0
        }">
      </youtube>
      <button @click.prevent.stop="change('prev')"> prev </button>
      <button @click.prevent.stop="playing()"> play </button>
      <button @click.prevent.stop="pause()"> pause </button>
      <button @click.prevent.stop="stop()"> stop </button>
      <button @click.prevent.stop="change('next')"> next </button>
    </section>

  </div>

</template>

<style lang="scss">

.video2 {
  // display: none;
}

</style>
