# medusa-file-cloudinary

![NPM](https://nodei.co/npm/medusa-file-cloudinary.png?downloads=true&downloadRank=true&stars=true)

## Upload files to Cloudinary in [Medusa Commerce](https://www.medusajs.com/)


## Options

```
    cloud_name: [cloudinary cloud name],
    api_key: [cloudinary api key],
    api_secret: [cloudinary api secret],
    secure: [enable secure uploads, default true],
```

## Usage

First, install the plugin using your preferred package manager:

```
yarn add medusa-file-cloudinary
```

Then configure your `medusa-config.js` to include the plugin alongside the required options:

```=javascript
{
    resolve: `medusa-file-cloudinary`,
    options: {
        cloud_name: "YOUR_CLOUD_NAME",
        api_key: "YOUR_API_KEY",
        api_secret: "YOUR_API_SECRET",
        secure: true,
    },
},
```
You can find the above options in Cloudinary dashboard.

> Make sure to use an environment variable for the api key and secret in a live environment.

### Try it out!

Finally, run your Medusa server alongside our admin system to try out your new file service. Upon editing or creating products, you can now upload thumbnails and images, that are stored in Cloudinary.

