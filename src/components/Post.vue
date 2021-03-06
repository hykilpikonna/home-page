<template>
    <div class="post card" :class="{'service': p.type === 'service'}">
        <div class="reply" v-if="p.reply">
            <img class="thumb" v-if="p.reply.thumb" :src="p.reply.thumb" alt="">
            <div class="mtext"><span>{{p.reply.text}}</span></div>
        </div>
        <div class="images" v-if="p.images && p.images.length === 1">
            <img v-for="i in p.images" :key="i.url" :src="i.url" alt="image">
        </div>
        <div class="images" v-if="p.images && p.images.length !== 1">
            <div class="img" v-for="i in p.images" :key="i[0]"
                 :style="{'background-image': `url(${i.url})`, ...getImageStyle(p, i)}"></div>
        </div>
        <div class="text" v-html="text"></div>
        <div class="info font-code unselectable">
            <div class="id">#{{p.id}}</div>
            <div class="f-grow1"></div>
            <div class="date">{{p.date}}</div>
            <div class="views" v-if="p.views">{{p.views}}<i class="fas fa-eye"/></div>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Prop} from "vue-property-decorator";
import {Image, Post} from "@/views/Life.vue";
import linkifyUrls from 'linkify-urls';

@Options({components: {}})
export default class PostView extends Vue
{
    @Prop({required: true}) p!: Post

    get text(): string | undefined
    {
        if (!this.p.text) return undefined
        return linkifyUrls(this.p.text)
    }

    getImageStyle(post: Post, i: Image): unknown
    {
        if (post.img_group_style)
        {
            return {}
        }
        else return {

        }
    }
}
</script>

<style lang="sass" scoped>
@import "src/css/colors"

.post.service
    .id
        display: none

.post
    padding: 12px 20px 8px
    text-align: left

    > *
        margin-bottom: 10px
    > *:last-child
        margin-bottom: 0

    .reply
        display: flex
        font-size: 0.8em

        .thumb
            margin-left: 10px
            height: 40px
            width: 40px
            object-fit: cover

        .mtext
            flex: 1
            max-height: 40px
            margin-left: 10px
            color: lighten($color-text-main, 20)
            display: -webkit-box
            -webkit-line-clamp: 2 /* number of lines to show */
            line-clamp: 2
            -webkit-box-orient: vertical
            overflow: hidden


    .reply:before
        content: " "
        border: 2px solid lighten($color-text-main, 20)
        border-radius: 2px

    .reply + .images
        margin: 0 -20px 10px

    .images
        margin: -12px -20px 10px
        display: flex

        .img
            flex: 1
            height: 200px
            width: 200px
            background-size: cover
            background-repeat: no-repeat
            background-position: center

            margin-right: 2px

        .img:last-child
            margin-right: 0

        img
            max-width: 100%
            min-width: 100%
            width: auto
            height: auto

    .text
        white-space: pre-line

    .info
        display: flex
        color: lighten($color-text-main, 40)
        div
            margin: 0 10px

        div:first-child, div:last-child
            margin: 0

        i
            font-size: 0.8em
            margin-left: 4px
</style>

<style lang="sass">
@import "src/css/colors"

.post
    a
        color: $color-text-special
        text-decoration: none
</style>
