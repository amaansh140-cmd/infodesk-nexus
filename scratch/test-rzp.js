const Razorpay = require('razorpay');
try {
  const rzp = new Razorpay({ key_id: 'rzp_test_ShdDgAt7yrBbQy', key_secret: 'rzp_test_ShdDgAt7yrBbQy' });
  console.log('Instance created successfully');
  rzp.orders.create({ amount: 100, currency: 'INR', receipt: '1' })
    .then(o => console.log('Order:', o))
    .catch(e => console.log('Order Error:', e));
} catch (e) {
  console.log('Constructor Error:', e);
}
