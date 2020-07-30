<template>
  <div class="flex container h-screen w-full">
    <SideBar/>
    <div class="w-full md:w-1/2 h-full overflow-y-scroll">
      <div class="px-5 py-3 border-b border-lighter flex items-center justify-between relative ">
        <input class="pl-12 rounded-full w-full p-2 bg-lighter text-sm focus:outline-none mr-3" placeholder="Search Twitter" />
        <i class="fas fa-search absolute left-0 top-0 mt-6 ml-12 text-sm text-light"></i>
        <i class="far fa-star text-xl text-blue"></i>
      </div>
      <div class="w-full">
        <div class="relative">
          <img src="covid.jpg" alt="covid 19" title="covid-19" class="w-full h-80">
          <a class="font-semibold absolute left-3 bottom-14 text-white z-10">Covid-19 - Live</a>
          <a class="font-bold absolute left-3 bottom-5 text-white text-2xl z-10">Updates on Covid-19 in VietNam</a>
          <div class="absolute top-0 left-0 h-80 w-full bg-gray-600 opacity-25"></div>
        </div>
      </div>

      <div class="w-full">
        <h2 class="font-extrabold text-gray-800 text-xl px-3 border-b-2 border-lighter py-3">Trends for you</h2>
        <div class="px-3 py-3 hover:bg-lightblue cursor-pointer">
          <p class="text-sm text-gray-500 font-normal">Treding in VietNam</p>
          <p class="text-base font-bold">Vietnamese</p>
          <div class="flex w-full rounded-lg border my-3">
            <img src="vietnam.webp" alt="Viet Nam Phong Chong Covid Thanh Cong" 
            class="w-36 h-36 rounded-l-lg">
            <div class="px-3 py-3">
              <p class="text-sm font-semibold text-gray-500">Pandemic advice ignored by Trump helps vietnam fight virus - world news - Hindustan Times</p>
              <p class="text-gray-800">Faced with a resurgence that has similarly confounded Japan, Hong Kong and Australia, Vietnamese authorities are moving to contain a fresh cluster that has led to 36 new cases in the past week.</p>
            </div>
          </div>
        </div>
      </div>

      <button v-for="trend in trending" :key="trend" class="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter focus:outline-none">
        <div>
          <p class="text-xs text-left leading-tight text-dark"> {{ trend.top}} </p>
          <p class="font-semibold text-sm text-left leading-tight"> {{ trend.title}} </p>
          <p class="text-left text-sm leading-tight text-dark"> {{ trend.bottom}} </p>
        </div>
        <i class="fas fa-angle-down text-lg text-dark"></i>
      </button>
      <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter  focus:outline-none">
        Show More
      </button>
    </div>
    <div class="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
      <div class="w-full rounded-lg bg-lightest my-4">
        <div class=" p-3">
          <p class="text-lg font-bold">Who to Follow</p>
        </div>
        <button v-for="friend in friends" :key="friend" class="w-full flex hover:bg-lighter p-3 border-t border-lighter focus:outline-none">
          <img :src="`${ friend.src }`" class="w-12 h-12 rounded-full border border-lighter" />
          <div class="hidden lg:block ml-4">
            <p class="text-sm font-bold leading-tight"> {{ friend.name }} </p>
            <p class="text-sm leading-tight"> {{ friend.handle }} </p>
          </div>
          <button class="ml-auto text-sm text-blue py-1 px-4 rounded-full border-2 border-blue hover:bg-blue hover:text-white focus:outline-none">
            Follow
          </button>
        </button>
        <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
          Show More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar'
export default {
  components: {
    SideBar
  },

   data () {
    return {
     trending: [
        {top: 'Trending in TX', title: 'Gigi', bottom: 'Trending with: Rip Gigi'},
        {top: 'Music', title: 'We Won', bottom: '135K Tweets'},
        {top: 'Pop', title: 'Blue Ivy', bottom: '40k tweets'},
        {top: 'Trending in US', title: 'Denim Day', bottom: '40k tweets'},
        {top: 'Trending', title: 'When Beyonce', bottom: '25.4k tweets'},
      ],
      friends: [
        {src: 'alexandra.jpg', name: 'Alexandra Niven', handle: '@teslaBoy'},
        {src: 'gienia.jpg', name: 'Elon Gienia', handle: '@detective:)'},
        {src: 'natina.jpg', name: 'Natina Musk', handle: '@miniRock'}
      ],
    }
  }
}
</script>