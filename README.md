# Storyblok + Nuxt 3 Pokemon album gallery

**(WIP)** This repo is a demo for an article that will be published soon (I will add the link when it's live).

## Setup

> To connect Nuxt 3 to Storyblok I recommend you to have a look at the guide [Add a headless CMS to Nuxt 3 in 5 minutes](https://www.storyblok.com/tp/add-a-headless-CMS-to-nuxt-3-in-5-minutes).

Install the dependencies:

```bash
# yarn
yarn install
```

Duplicate the Storyblok space in your own account clicking on [this link](https://app.storyblok.com/#!/build/172320). Then go to Settings > Visual Editor and add the [https://localhost:3000/](https://localhost:3000/) as default preview URL.

Rename `.env.example` to `.env` and add the token of your fresh created Storyblok space.

## Development Server

> Storyblok v2 requires that your website is served via HTTPS. You can follow the instructions in Storyblok's FAQ entry: [How to set up SSL in Nuxt 3](https://www.storyblok.com/faq/setting-up-https-on-localhost-in-nuxt-3).

Start the development server on https://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn generate
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [Nuxt 3 deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
