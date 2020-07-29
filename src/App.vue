<template>
  <div id="app" class="flex container h-screen w-full">
    <!-- Side Nav -->
    <div class="w-1/5 border-r border-lighter px-8 py-2">
      <button class="h-12 w-12 hover:lighblue text-3xl rounded-full text-blue">
        <i class="fab fa-twitter"></i>
      </button>
      <div >
        <button v-for="(tab,index) in tabs" v-bind:key="index" @click="id = tab.id" :class="`focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 ${ id === tab.id ? 'text-blue' : ''}`">
          <i :class="`${ tab.icon} text-2xl mr-4 text-left`"></i>
          <p class="text-lg font-semibold text-left"> {{ tab.title }} </p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      tabs: [
        {icon: 'fas fa-home', title: 'Home', id: 'home'},
        {icon: 'fas fa-hashtag', title: 'Explore', id: 'explore'},
        {icon: 'far fa-bell', title: 'Notifications', id: 'notifications'},
        {icon: 'far fa-envelope', title: 'Messages', id :'messages'},
        {icon: 'far fa-bookmark', title: 'Bookmark', id: 'bookmarks'},
        {icon: 'fas fa-clipboard-list', title: 'Lists', id: 'lists'},
        {icon: 'far fa-user', title: 'Profile', id: 'profile'},
        {icon: 'fas fa-ellipsis-h', title: 'More', id: 'more'}
      ],
      id: 'home'
    }
  }
}
</script>

<style>
</style>
