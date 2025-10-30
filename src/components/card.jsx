import React from 'react'

function card({username, btnText = "Submit"}) {
  return (
    

<div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
  <div class="px-6 py-4">
    <div class="flex items-center">
      <img
        class="w-10 h-10 rounded-full mr-4"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="User Avatar"
      />
      <div class="text-sm">
        <p class="text-gray-900 leading-none font-bold dark:text-white">{username}</p>
        <p class="text-black-600 dark:text-gray-400">Software Engineer</p>
      </div>
    </div>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
    >
      {btnText}
    </button>
  </div>
</div>


  )
}

export default card