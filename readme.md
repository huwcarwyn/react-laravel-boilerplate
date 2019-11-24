# React Laravel Boilerplate

[![Build Status](https://travis-ci.org/huwcarwyn/react-laravel-boilerplate.svg?branch=master)](https://travis-ci.org/huwcarwyn/react-laravel-boilerplate)

This is the boilerplate that I personally use for getting projects off the ground quickly using my favourite stack of technologies. It uses Laravel as a backend API service, and has a React single page application in the front end.

## Features

- Laravel Passport API authentication
- Route level code splitting using React Lazy/Suspense
- Login/signup functionality implemented and tested
- Webpack configuration for development and production
- React/Redux single page application using React Router
- Some basic components already built in resources/assets/js/components
- Simple form building using [Formik](https://github.com/jaredpalmer/formik 'Formik')
- Component library and interactive component building via [Storybook](https://storybook.js.org/ 'Storybook')
- Hot module reloading for your React components using Webpack Dev Server and [React Hot Module Reloader](https://gaearon.github.io/react-hot-loader/ 'React Hot Module Reloader')
- Tailwind CSS for utility class styling (see [https://tailwindcss.com](https://tailwindcss.com))
- Support for scoped styling using React CSS modules using [Gajus React CSS Modules](https://github.com/gajus/react-css-modules 'Gajus React CSS Modules')
- Continous build integration via [Travis CI](https://travis-ci.org/ 'Travis CI')
- Automatic code style fixing with [Prettier](https://prettier.io/)

## Installation

I personally use Vagrant and [Homestead](https://laravel.com/docs/5.5/homestead 'Homestead'), so these installation instructions assume that you use Homestead as well, but the project's dependencies are very similar to the base Laravel installation, so if you use something else to develop locally, the instructions shouldn't change too much.

- Clone the repository using `git clone https://github.com/huwcarwyn/react-laravel-boilerplate`
- Fill out a .env file in the project root using the .env.example file as a template
- Install composer dependencies using `composer install`
- Run `php artisan key:generate` `php artisan migrate` `php artisan passport:install` and `php artisan storage:link`
- Install NPM dependencies using `npm install`
- Make sure to create two databases, one main and one for running the tests, then run `php artisan migrate`
- If you want to use the webpack dev server, make sure that the proxy entry in the weback.dev.js points to the server that's running your Laravel installation.

## Important note about development

Since this application takes advantage of webpack hashes to bust caches in production, the asset() and mix() helpers are used when loading front end assets. This means that it is important to set a correct value for `ASSET_URL` in your `.env` file. Otherwise Laravel will load assets from the wrong place.

If you are developing using `npm run hot` - make sure to set `ASSET_URL` to `http://localhost:9000`, otherwise for development set it to the root URL of your app.

In production you will need to set this value to the public root, that will usually be the same as your domain name.
