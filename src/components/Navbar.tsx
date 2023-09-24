import { For, Show, createEffect, createSignal, onCleanup } from "solid-js";
import { BsMoonStars, BsSun } from "solid-icons/bs";
import { FiMenu } from "solid-icons/fi";
import { AiOutlineClose } from "solid-icons/ai";

interface RouteType {
  name: string;
  path: string;
}

const Routes: RouteType[] = [
  { name: "HOME", path: "/" },
  { name: "WORK", path: "/#work" },
  { name: "SKILLS", path: "/#skills" },
  { name: "CONTACT", path: "/#contact" },
  { name: "BLOG", path: "/blog" },
];

const Navbar = () => {
  const [isDark, setIsDark] = createSignal(false);
  const [hambergerVisible, setHambergerVisible] = createSignal(false);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  const handleMenuChange = () => {
    setHambergerVisible((prev) => !prev);
  };

  createEffect(() => {
    const changeColorModes = () => {
      if (isDark()) {
        (document.getElementById("body")!.classList as any) = "dark";
      } else if (!isDark()) {
        (document.getElementById("body")!.classList as any) = "light";
      }
    };

    changeColorModes();
  }, [isDark()]);

  return (
    <nav class="flex justify-between items-center py-4">
      {/* Logo section */}
      <div class="z-20">
        <a href="/">
          <Show
            when={isDark()}
            fallback={<img src="/images/logo.png" alt="logo" width={80} />}
          >
            <img src="/images/logo-white.png" alt="logo" width={80} />
          </Show>
        </a>
      </div>

      {/* Hamberger menu icon while in mobile view */}
      <div class="flex gap-6">
        <div class="md:hidden flex items-center gap-6 z-20">
          <Show
            when={!hambergerVisible()}
            fallback={
              <AiOutlineClose
                size={25}
                class="cursor-pointer"
                onClick={handleMenuChange}
              />
            }
          >
            <FiMenu
              size={25}
              class="cursor-pointer"
              onClick={handleMenuChange}
            />
          </Show>
        </div>

        {/* Displaying hamberger menu when the icon is clicked */}
        <Show when={hambergerVisible()}>
          <ul
            class="
            flex
            flex-col 
            justify-center 
            items-center 
            text-2xl 
            font-semibold 
            gap-10 
            fixed 
            top-0 
            left-0 
            w-full 
            h-screen 
            bg-[var(--bg-color)]
            z-10
          "
          >
            {Routes.map((route) => (
              <a href={route.path}>
                <li onClick={handleMenuChange}>{route.name}</li>
              </a>
            ))}
          </ul>
        </Show>

        {/* Displaying navigation for desktop view */}
        <ul class="hidden md:flex items-center gap-8">
          <For each={Routes}>
            {(route) => (
              <li>
                <a href={route.path}>{route.name}</a>
              </li>
            )}
          </For>
        </ul>

        {/* Light/Dark Mode toggle */}
        <div
          onClick={toggleDarkMode}
          class="z-10 border border-[var(--border-color)] rounded-md px-6 py-2 cursor-pointer"
        >
          <Show when={isDark()} fallback={<BsMoonStars />}>
            <BsSun />
          </Show>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
