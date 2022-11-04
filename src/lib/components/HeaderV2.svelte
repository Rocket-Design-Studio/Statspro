<script>
import './Header.scss';

	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<header>
	<div class="main_header">
    <div>
      <nav
        class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <button class="border-orange-bright border-2 hover:bg-orange-bright text-white  py-2 px-6 rounded-full">
            Login/Register
          </button>
          <!-- Mobile menu button -->
          <div on:click={toggleNavbar} class="flex md:hidden">
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </button>
          </div>
        </div>
  
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
            ? 'flex'
            : 'hidden'}"
        >
          <a class="text-gray-800 hover:text-blue-400 text-lg hover:text-orange-bright" href="/">HOME</a>
          <a class="text-gray-800 hover:text-blue-400 text-lg hover:text-orange-bright" href="/products_and_services">PRODUCTS AND SERVICES</a>
          <a class="text-gray-800 hover:text-blue-400 text-lg hover:text-orange-bright" href="/visual_cvs">VISUAL CV'S</a>
          <a class="text-gray-800 hover:text-blue-400 text-lg hover:text-orange-bright" href="/contact_us">CONTACT US</a>
          <a class="text-gray-800 hover:text-blue-400 text-lg hover:text-orange-bright" href="/work_with_us">WORK WITH US</a>
          <a class="text-gray-800 hover:text-blue-400 text-lg hover:text-orange-bright" href="/about_us">ABOUT US</a>
        </div>
      </nav>
    </div>
          </div>
</header>
