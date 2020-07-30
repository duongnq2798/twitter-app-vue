<template>
  <div class="flex container h-screen w-full">
    <SideBar />
    <Tweet />
    <Trend />
  </div>
</template>

<script>
import SideBar from '../components/SideBar'
import Tweet from '../components/Tweet'
import Trend from '../components/Trend'

export default {
  components: {
    SideBar,
    Tweet,
    Trend
  }
}
</script>