const A = ({ href, children, ...props }: { href: string }) => (
  <a class="relative pb-2 text-center group" href={href} {...props}>
    {children}
    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-300 transition-transform duration-200 origin-left transform scale-x-0 group-hover:scale-100"></span>
  </a>
)

export function App() {
  return (
    <div class="min-h-screen bg-gradient-to-br from-green-500 via-cyan-600 to-purple-700 flex items-center justify-center">
      <div class="flex flex-col space-y-5 items-baseline text-white text-5xl font-medium md:flex-row md:space-x-5 md:space-y-0">
        <A href="https://vitejs.dev/">Vite</A>
        <span>/</span>
        <A href="https://preactjs.com/">Preact</A>
        <span>/</span>
        <A href="https://tailwindcss.com/">Tailwind</A>
      </div>
    </div>
  )
}
