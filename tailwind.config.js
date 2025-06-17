/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'project': "url('https://static.vecteezy.com/system/resources/thumbnails/014/017/615/small/abstract-geometric-seamless-pattern-background-free-vector.jpg')",
        'skill': "url('https://media.istockphoto.com/id/1320330053/photo/dotted-grid-paper-background-texture-seamless-repeat-pattern.jpg?b=1&s=612x612&w=0&k=20&c=GPSH_m8nKn35D_nigxYdfvrC7RrgZ0Ua24xnvidstKY=')",
        'footer': "url('https://img3.stockfresh.com/files/b/balabolka/m/22/6671664_stock-vector-cartoon-vector-doodles-social-media-technical-transport-seamless-pattern.jpg')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}