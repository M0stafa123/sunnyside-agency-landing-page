/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**.html", "./dist/*.js"],
  theme: {
    extend: {
      colors: {
        softRed: "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        graphicdesigntext: "hsl(167, 40%, 24%)",
        photographytext: "hsl(198, 62%, 26%)",
        footer: "hsl(168, 34%, 41%)",
        Verydarkdesaturatedblue: "hsl(212, 27%, 19%)",
        Verydarkgrayishblue: "hsl(213, 9%, 39%)",
        Darkgrayishblue: "hsl(232, 10%, 55%)",
        Grayishblue: "hsl(210, 4%, 67%)",
      },
      fontFamily: {
        Barlow: ["Barlow", "sans-serif"],
        Fraunces: ["Fraunces", "serif"],
      },
      backgroundImage: {
        // mobile: {
        mobileorange: "url(../images/mobile/image-gallery-orange.jpg)",
        mobilecone: "url(../images/mobile/image-gallery-cone.jpg)",
        mobilemilkbottle: "url(../images/mobile/image-gallery-milkbottles.jpg)",
        mobilesugar: "url(../images/mobile/image-gallery-sugar-cubes.jpg)",
        mobilegraphic: "url(../images/mobile/image-graphic-design.jpg)",
        mobileheader: "url(../images/mobile/image-header.jpg)",
        mobilephotography: "url(../images/mobile/image-photography.jpg)",
        mobilestandOut: "url(../images/mobile/image-stand-out.jpg)",
        mobiletransform: "url(../images/mobile/image-transform.jpg)",
        // },
        // desktop: {
        desktoporange: "url(../images/desktop/image-gallery-orange.jpg)",
        desktopcone: "url(../images/desktop/image-gallery-cone.jpg)",
        desktopmilkbottle: "url(../images/desktop/image-gallery-milkbottles.jpg)",
        desktopsugar: "url(../images/desktop/image-gallery-sugar-cubes.jpg)",
        desktopgraphic: "url(../images/desktop/image-graphic-design.jpg)",
        desktopheader: "url(../images/desktop/image-header.jpg)",
        desktopphotography: "url(../images/desktop/image-photography.jpg)",
        desktopstandOut: "url(../images/desktop/image-stand-out.jpg)",
        desktoptransform: "url(../images/desktop/image-transform.jpg)",
        // },
      },
    },
  },
  plugins: [],
};
