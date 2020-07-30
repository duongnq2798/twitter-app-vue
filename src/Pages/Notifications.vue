<template>
  <div class="flex container h-screen w-full">
    <SideBar/>

    <div class="w-full md:w-1/2 h-full overflow-y-scroll">
      <div class="px-5 py-3 border-b border-lighter flex items-center justify-between">
          <h1 class="text-xl font-bold">Notifications</h1>
          <i class="fas fa-cog text-xl text-blue"></i>
      </div>
    <div class="flex justify-between w-full ">
      <button class="flex-1 text-center h-16 font-semibold text-lg hover:bg-lightblue">
        <a href="#all" @click.prevent="setActive('all')" :class="{ active: isActive('all') }">All</a>
      </button>
      <button class="flex-1 text-center font-semibold text-lg">
        <a href="3">Mentions</a>
      </button>
    </div>
    <div class="w-full">
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
    <Trend/>
  </div>
</template>

<script>
import SideBar from '../components/SideBar'
import Trend from '../components/Trend' 
export default {
  components: {
    SideBar,
    Trend
  },

   data () {
    return {
     tab: [],
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
  },

   methods: {
      selectTab(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = tab.name === selectedTab.name;
        });
      }
    },
    created() {
      this.tabs = this.$children;
    }
}
</script>