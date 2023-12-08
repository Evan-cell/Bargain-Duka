const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  try {
    const { items, email } = req.body;

    const transformedItems = items.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.image],
        },
        unit_amount: item.price * 100,
      },
      quantity: 1,
    }));

    const imageUrls = items.map((item) => item.image);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      shipping_address_collection: {
        allowed_countries: ['GB', 'US', 'CA'],
      },
      line_items: transformedItems,
      mode: 'payment',
      success_url: `${process.env.HOST}/success`,
      cancel_url: `${process.env.HOST}/checkout`,
      metadata: {
        email,
        images: imageUrls.join(','), // Convert array of URLs to a comma-separated string
      },
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating checkout session' });
  }
};
