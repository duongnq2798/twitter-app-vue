<template>
<div class="w-1/5 border-r border-lighter lg:px-6 py-2 flex flex-col justify-between ">
  <div>
      <button class="h-12 w-12 hover:lighblue text-3xl rounded-full text-blue">
        <i class="fab fa-twitter"></i>
      </button>
      <div >
        <button v-for="(tab,index) in tabs" v-bind:key="index" @click="id = tab.id">
          <router-link :to="`${tab.id}`" exact-active-class="text-blue" :class="`focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 ${ id === tab.id ? 'text-blue' : ''}`">
            <i :class="`${ tab.icon} text-2xl mr-4 text-left`"></i>
            <p class="text-lg font-bold text-left hidden lg:block"> {{ tab.title }} </p>
          </router-link>
        </button>
      </div>
      <button class="text-white bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-darkblue">
        <p class="hidden lg:block">Tweet</p>
        <p class="lg:hidden"><i class="fas fa-plus"/></p>
      </button>
  </div>
  <!-- Dropdown menu -->
  <div class="lg:w-full relative">
    <button @click="dropdown = true" class="flex items-center w-full focus:outline-none hover:bg-lightblue rounded-full p-1 px-3">
      <img src="profile.png" class="w-10 h-10 rounded-full border border-lighter">
      <div class="hidden lg:block ml-4">
        <p class="text-sm font-bold leading-tight">Shin Nguyen</p>
        <p class="text-sm leading-tight"> @duongnq2798 </p>
      </div>
      <i class="hidden lg:block fas fa-angle-down ml-auto text-lg"></i>
    </button>
    <div v-if="dropdown === true" class="absolute bottom-0 left-0 w-64 rounded-md shadow-md border-lightest bg-white mb-16">
      <button @click="dropdown = false" class="flex items-center p-3 w-full focus:outline-none rounded-full px-3">
      <img src="profile.png" class="w-10 h-10 rounded-full border border-lighter">
      <div class="ml-4">
        <p class="text-sm font-bold leading-tight">Shin Nguyen</p>
        <p class="text-sm leading-tight"> @duongnq27</p>
      </div>
      <i class="fas fa-angle-down ml-auto text-lg"></i>
      </button>
      <button @click="dropdown = false" class="w-full text-left hover:bg-lightest border-t border-lighter p-3 text-sm focus:outline-none">
          Add an existing account
      </button>
      <button @click="dropdown = false" class="w-full text-left hover:bg-lightest border-t border-lighter p-3 text-sm focus:outline-none">
          Log out @duongnq27
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
       tabs: [
        {icon: 'fas fa-home', title: 'Home', id: '/'},
        {icon: 'fas fa-hashtag', title: 'Explore', id: 'explore'},
        {icon: 'far fa-bell', title: 'Notifications', id: 'notifications'},
        {icon: 'far fa-envelope', title: 'Messages', id :'messages'},
        {icon: 'far fa-bookmark', title: 'Bookmark', id: 'bookmarks'},
        {icon: 'fas fa-clipboard-list', title: 'Lists', id: 'lists'},
        {icon: 'far fa-user', title: 'Profile', id: 'profile'},
        {icon: 'fas fa-ellipsis-h', title: 'More', id: 'more'}
      ],
      id: '',
      dropdown: false,
    }
  }
}
</script>