<script>
  import "../app.scss";
  import { assets } from '$app/paths';
  import { page } from '$app/stores';
  const currentYear = new Date().getFullYear();
  $: path = $page.url.pathname;
</script>
<div class="container mx-auto p-5">
    <div class="grid grid-cols-3 my-14">
        <div class="flex items-center justify-start">
            <nav class="border-y border-solid border-gray-500 py-2">
                <a class={`text-base font-headline hover:font-bold ${path === '/resume' ? 'active' : ''}`} href="/resume">Resume</a>
            </nav>
        </div>
        <div class="flex items-center justify-center">
            <a class="font-brandname text-2xl lg:text-3xl whitespace-nowrap hover:underline" href="/">Bryan Markham</a>
        </div>
        <div class="flex items-center justify-end text-base font-headline">
            <nav class="">
                <a class="" href="https://www.instagram.com/muzik702/" target="_blank">
                    <img class="h-6 w-6" src={`${assets}/images/instagram.svg`} alt="Bryan Markham (@muzik702) - Instagram" />
                </a>
            </nav>
        </div>
    </div>
</div>
<slot />
<footer class="bg-gray-200">
    <div class="container mx-auto p-4 text-center">
        <small class="text-sm">&copy; {currentYear} Bryan Markham</small>
    </div>
</footer>