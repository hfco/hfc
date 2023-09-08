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
                src: 'img/logo.png',
                href: '/',
            },
            items: [
                { to: 'about', label: 'About Us', position: 'left' },
                { to: 'docs/documentation', label: 'Team', position: 'left' },
                { to: 'docs/documentation', label: 'Documentation', position: 'left' },
                { to: 'blog', label: 'Articles', position: 'left' },
                { to: 'blog', label: 'Team Updates', position: 'left' },
                { to: 'blog', label: 'Quarterly Plans', position: 'left'},
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
                    title: 'Left',
                    items: [
                        {
                            label: 'Something',
                            to: 'docs/documentation',
                        },
                    ],
                },
                {
                    title: 'Middle',
                    items: [
                        {
                            label: 'Something',
                            to: 'docs/documentation',
                        }
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
