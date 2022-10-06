<template>
  <nav class="navbar bg-base-100 h-[6rem]">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <nuxt-link to="/">Beranda</nuxt-link>
          </li>
          <li><nuxt-link to="/tentang">Tentang Kami</nuxt-link></li>
          <li><nuxt-link to="/api">Integrasi Api</nuxt-link></li>
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-xl"
        ><img
          class="w-36 h-auto"
          src="https://kiriminaja.com/assets/atrust/svg-logo-primary.svg"
      /></a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li>
          <nuxt-link to="/">Beranda</nuxt-link>
        </li>
        <li><nuxt-link to="/tentang">Tentang Kami</nuxt-link></li>
        <li><nuxt-link to="/api">Integrasi Api</nuxt-link></li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn bg-[#6f2fab] rounded-full normal-case">Masuk</a>
    </div>
  </nav>
</template>
