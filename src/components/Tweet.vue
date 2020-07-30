<template>
  <div class="w-full md:w-1/2 h-full overflow-y-scroll">
        <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
          <h1 class="text-xl font-bold">Home</h1>
          <i class="far fa-star text-xl text-blue"></i>
        </div>
        <div class="px-5 py-3 border-b-8 border-lighter flex">
          <div class="flex-none">
            <img src="profile.png" class="flex-none w-12 h-12 rounded-full border border-lighter"/>
          </div>
          <form v-on:submit.prevent = "addNewTweet" class="w-full px-4 relative">
            <textarea v-model="tweet.content" placeholder="What's up?" class="mt-3 pb-3 w-full focus:outline-none"/>
            <div class="flex items-center">
              <i class="text-lg text-blue mr-4 far fa-image"></i>
              <i class="text-lg text-blue mr-4 fas fa-film"></i>
              <i class="text-lg text-blue mr-4 far fa-chart-bar"></i>
              <i class="text-lg text-blue mr-4 far fa-smile"></i>
            </div>
            <button type="submit" class="h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0">
              Tweet
            </button>
          </form>
        </div>
        <div class="flex flex-col-reverse">
          <div v-for="tweet in tweets" :key="tweet" class="w-full p-4 border-b hover:bg-lighter flex">
            <div class="flex-none mr-4">
              <img src="profile.png" class="h-12 w-12 rounded-full flex-none"/>
            </div>
            <div class="w-full">
              <div class="flex items-center w-full">
                <p class="font-semibold"> Steph Dietz </p>
                <p class="text-sm text-dark ml-2"> @SaaSyEth </p>
                <p class="text-sm text-dark ml-2"> 1 sec </p>
                <i class="fas fa-angle-down text-dark ml-auto"></i>
              </div>
              <p class="py-2">
                {{ tweet.content }}
              </p>
              <div class="flex items-center justify-between w-full">
                <div class="flex items-center text-sm text-dark">
                  <i class="far fa-comment mr-3 p-2 hover:bg-lightblue hover:text-blue hover:shadow-md rounded-full"></i>
                  <p> 0 </p>
                </div>
                <div class="flex items-center text-sm text-dark">
                  <i class="fas fa-retweet mr-3 p-2 hover:bg-green-100  hover:text-green-700 hover:shadow-md rounded-full"></i>
                  <p> 0 </p>
                </div>
                <div class="flex items-center text-sm text-dark">
                  <i class="fas fa-heart mr-3 p-2 hover:bg-pink-100 hover:text-pink-700 hover:shadow-md rounded-full"></i>
                  <p> 1 </p>
                </div>
                <div class="flex items-center text-sm text-dark">
                  <i class="fas fa-share-square mr-3"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-for="follow in following" :key="follow" class="w-full p-4 border-b hover:bg-lighter flex">
          <div class="flex-none mr-4">
            <img :src="`${follow.src}`" class="h-12 w-12 rounded-full flex-none"/>
          </div>
          <div class="w-full">
            <div class="flex items-center w-full">
              <p class="font-semibold"> {{ follow.name }} </p>
              <p class="text-sm text-dark ml-2"> {{ follow.handle }} </p>
              <p class="text-sm text-dark ml-2"> {{ follow.time }} </p>
              <i class="fas fa-angle-down text-dark ml-auto"></i>
            </div>
            <p class="py-2">
              {{ follow.tweet }}
            </p>
            <div class="flex items-center justify-between w-full">
              <div class="flex items-center text-sm text-dark">
                <i class="far fa-comment mr-3 p-2 hover:bg-lightblue hover:text-blue hover:shadow-md rounded-full"></i>
                <p> {{ follow.comments }} </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-retweet mr-3 p-2 hover:bg-green-100  hover:text-green-700 hover:shadow-md rounded-full"></i>
                <p> {{ follow.retweets }} </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-heart mr-3 p-2 hover:bg-pink-100 hover:text-pink-700 hover:shadow-md rounded-full"></i>
                <p> {{ follow.like }} </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-share-square mr-3"></i>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      following: [
        {src: 'alexandra.jpg', name: 'Alexandra Niven', handle: '@teslaBoy', time: '20 min', tweet: 'Should I just quarantine on mars??', comments: '1,000', retweets: '550', like: '1,000,003'},
        {src: 'salim.jpg', name: 'Salim Hart', handle: '@miniRock', time: '55 min', tweet: 'Should me and the rock do another sub-par movie together????', comments: '2,030', retweets: '50', like: '20,003'},
        {src: 'gienia.jpg', name: 'Elon Gienia', handle: '@teslaBoy', time: '1.4 hr', tweet: 'Haha just made a flame thrower. Shld I sell them?', comments: '100,000', retweets: '1,000,002', like: '5,000,003'},
        {src: 'natina.jpg', name: 'Natina Musk', handle: '@teslaBoy', time: '1.4 hr', tweet: 'Just did something crazyyyyyyy', comments: '100,500', retweets: '1,000,032', like: '5,000,103'}
      ],
      tweets: [
        {content: 'It is so nice outside!'}
      ],
      tweet: {content: ''}
    }
  },

  methods: {
     addNewTweet () {
      let newTweet = {
        content: this.tweet.content
      };
      this.tweets.push (newTweet)
    }
  }
}
</script>