// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    site: "https://vesktop.vencord.dev",

    integrations: [
        starlight({
            title: "Vesktop",
            description: "Vesktop is a custom desktop client for Discord",
            logo: {
                src: "./src/assets/vesktop.svg"
            },

            social: [
                { icon: "github", label: "GitHub", href: "https://github.com/Vencord/Vesktop" },
                { icon: "discord", label: "Discord", href: "https://vencord.dev/discord" }
            ],

            editLink: {
                baseUrl: "https://github.com/Vencord/vesktop.vencord.dev/tree/main/"
            },

            lastUpdated: true,
            pagination: false,
            tableOfContents: false,

            sidebar: [
                {
                    label: "Installing",
                    items: [
                        { label: "Windows", slug: "install/windows" },
                        { label: "macOS", slug: "install/mac" },
                        { label: "Linux", slug: "install/linux" }
                    ]
                },
                {
                    label: "Wiki",
                    autogenerate: {
                        directory: "wiki"
                    }
                }
            ]
        })
    ]
});
