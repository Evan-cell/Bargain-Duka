/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ['www.svgrepo.com', 'fakestoreapi.com','links.papareact.com'],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  }
}
