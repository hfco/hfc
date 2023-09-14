module.exports = {
    title: 'Hard Fork Company',
    tagline: 'Innovating Cardano',
    url: 'https://hardfork.company',
    baseUrl: '/',
    favicon: 'img/favicon.png',
    organizationName: 'hfco', // Usually your GitHub org/user name.
    projectName: 'hfc', // Usually your repo name.
    stylesheets: [
        'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap',
    ],
    themeConfig: {
        //algolia: {
        //  apiKey: '',
        //  indexName: '',
        //  appId: '',
        //  algoliaOptions: {}, // Optional, if provided by Algolia
        //},
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: 'Hard Fork Company',
            logo: {
                alt: 'HardFork Logo',
                src: 'img/menu-logo.png',
                href: '/',
            },
            items: [
                { to: 'about', label: 'About HFC', position: 'left' },
                { to: 'team', label: 'The HFC Team', position: 'left' },
                { to: 'docs/documentation', label: 'About Cardano', position: 'left' },
                { to: 'resources/resources', label: 'Articles and Resources', position: 'left' },
                { to: 'blog', label: 'HFC News', position: 'left' },
                { href: 'https://input-output-hk.github.io/cardano-updates/', label: 'Development Updates', position: 'left'},
                { href: 'https://input-output-hk.github.io/cardano-updates/quarterly', label: 'Quarterly Plans', position: 'left'},
                {
                    href: 'https://hardfork.company',
                    label: 'hardfork.company',
                    position: 'right',
                    css: 'navbar__brand',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'About HFC',
                    items: [
                        {
                            label: 'The HFC Team',
                            to: 'team',
                        },
                        {
                            label: 'Contact us',
                            to: 'contact',
                        },
                    ],
                },
                {
                    title: 'About Our Technologies',
                    items: [
                        {
                            label: 'Cardano',
                            to: 'docs/cardano',
                        },
                        {
                            label: 'Haskell',
                            to: 'docs/why-haskell',
                        },
                        {
                            label: 'Agda',
                            to: 'docs/why-agda',
                        },
                      {
                            label: 'Formal Methods',
                            to: 'docs/formal-methods',
                        },
                   ],
                 },
                {
                    title: 'Social',
                    items: [{
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/hfco',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/hfcompany',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Hard Fork Company. Built with Docusaurus`,
        },
    },
    plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/hfco/docs/tree/master',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
