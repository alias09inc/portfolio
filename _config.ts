import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import mdx from "lume/plugins/mdx.ts";
import sass from "lume/plugins/sass.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";


const site = lume({
    src: "./src",
});

site.copy("assets");

site.use(jsx())
    .use(mdx())
    .use(sass())
    .use(tailwindcss({
        options: {
            plugins: [typography],
            theme: {
                fontFamily: {
                    amatic: ["Amatic SC", "cursive"],
                    caveat: ["Caveat", "cursive"],
                }
            }
        }
    }))
    .use(postcss());

export default site;
