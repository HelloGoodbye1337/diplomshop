/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
        DB_LOCAL_URI: "mongodb://localhost:27017/shopdiplom",
        DB_URI: "mongodb+srv://smailvaff794:grapnHL34PN5T7rw@cluster0.rhvkzel.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        NEXTAUTH_URL: "http://localhost:3000",
        CLOUD_NAME: "shopdiplom",
        CLOUDINARY_API_KEY: "115388866825753",
        CLOUDINARY_API_SECRET: "j7ikOgJttFypTo_Ds-rWQ6U4WF0",

        STRIPE_PUBLIC_KEY: "pk_test_51PNA4BRrWrRZw6nZQi0yi6ZPQJ8OPXMjGYQoXZNC7nUDL9WI8hJAmJBZR7N6BnRGQnOmxFqG7jAXI4U9PSEp9n5U00a6iRIaNe",
        STRIPE_PRIVATE_KEY: "sk_test_51PNA4BRrWrRZw6nZfzez9K29bADbMKEm2DEbBRlgGUQLrjU9C62fVwxajmh83fKPubhyi7q9lKKDm09ebBMXlVOz00ha78BgTp",
        
        STRIPE_WEBHOOK_SECRET: "whsec_332f9b0f172bfdfeaad2c29f1187443b4a957703c907ab98d958b856be3f12bf",

        NEXTAUTH_SECRET: "hellogoodbye",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
