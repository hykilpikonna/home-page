<template>
  <div id="Friends" class="general-page">
    <div class="title">
      <h2>朋友们</h2>
      <div class="subtitle">是小桂桂的朋友们（欢迎补充</div>
    </div>

    <div class="friends" v-if="friends">
      <div class="friend card clickable" v-for="f in friends" :key="f.name">
        <div class="banner" :style="bgStyle(f)"></div>
        <img class="avatar" :src="f.avatar" alt="">
        <div class="info">
          <div class="name">{{ f.name }}</div>
          <div class="space"></div>
          <div class="links">
            <a v-if="f.twitter" :href="`https://twitter.com/${f.twitter}`"><i class="fab fa-twitter"></i></a>
            <a v-if="f.github" :href="`https://github.com/${f.github}`"><i class="fab fa-github"></i></a>
            <a v-if="f.blog" :href="f.blog"><i class="fas fa-book"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {hosts} from "@/scripts/constants";

export interface Friend {
  name: string
  avatar: string
  banner: string

  desc?: string

  twitter?: string
  github?: string
  blog?: string
}

@Options({components: {}})
export default class Friends extends Vue
{
  friends: Friend[] = []

  async created()
  {
    this.friends = await (await fetch(`${hosts.content}/content/generated/friends/friends.json`)).json()

    // Fix avatar relative url
    this.friends.forEach(f => {
      if (!f.avatar.startsWith('http')) f.avatar = `${hosts.content}/${f.avatar}`
      if (f.banner && !f.banner.startsWith('http')) f.banner = `${hosts.content}/${f.banner}`
    })
  }

  bgStyle(f: Friend)
  {
    if (f.banner) return {'background-image': `url(${f.banner})`}
    else return {}
  }
}
</script>

<style lang="sass" scoped>
@import "src/css/colors"
@import "src/css/responsive"

$card-min-width: 335px

//.friends
//  display: grid
//  grid-template-columns: repeat(auto-fit, minmax($card-min-width, 1fr))

.friend
  display: flex
  position: relative
  min-width: $card-min-width

  $top: 100px
  $img: 80px

  .banner
    position: absolute
    left: 0
    top: 0
    z-index: 1
    width: 100%
    height: $top
    background-color: rgb(166 134 89 / 34%)
    background-size: cover
    background-position: center

  .banner:after
    content: " "
    position: absolute
    z-index: 2
    width: 100%
    height: 100%
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 50%)

  .info
    z-index: 10
    display: flex
    align-items: end
    width: 100%

    .name
      font-size: 1.2em

    .space
      flex-grow: 1

    a
      color: $color-text-main
      margin-left: 10px

  .avatar
    margin-top: calc(#{$top} - #{$img} / 2 - 20px)
    width: $img
    border-radius: 100%
    margin-right: 20px
    z-index: 10
</style>
