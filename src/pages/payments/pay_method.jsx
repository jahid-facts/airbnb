import paypal from 'paypal-checkout';
import { StripeProvider, Elements } from 'react-stripe-elements';
import { Button } from '@material-ui/core';
import MyCheckoutForm from './CheckoutForm';

const PayPalButton = (props) => {
  const { amount, onSuccess, onCancel, onError } = props;
  
  // eslint-disable-next-line no-undef
const PayPalCheckout = paypal.Button.driver('react', { React, ReactDOM });
  
  const config = {
    env: 'sandbox',
    client: {
      sandbox: 'YOUR_SANDBOX_PAYPAL_CLIENT_ID',
      production: 'YOUR_PRODUCTION_PAYPAL_CLIENT_ID',
    },
    commit: true,
    payment: function (data, actions) {
      return actions.payment.create({
        payment: {
          transactions: [
            {
              amount: { total: amount, currency: 'USD' },
            },
          ],
        },
      });
    },
    onAuthorize: function (data, actions) {
      return actions.payment.execute().then(function (payment) {
        onSuccess(payment);
      });
    },
    onCancel: function (data) {
      onCancel();
    },
    onError: function (err) {
      onError(err);
    },
  };
  
  return (
    <PayPalCheckout payment={config.payment} onAuthorize={config.onAuthorize} onCancel={config.onCancel} onError={config.onError} env={config.env} client={config.client} commit={config.commit}>
      <Button variant="contained" fullWidth color="secondary" size="large" my={2}>Pay with PayPal</Button>
    </PayPalCheckout>
  );
};

const StripeButton = (props) => {
  const { amount, onSuccess, onCancel, onError } = props;
  
  const handleCardToken = (token, args) => {
    const formData = {
      token: token.id,
      amount: amount,
    };
    onSuccess(formData);
  };
  
  const handleCancel = () => {
    onCancel();
  };
  
  const handleError = (err) => {
    onError(err);
  };
  
  return (
    <StripeProvider apiKey="YOUR_STRIPE_API_KEY">
      <Elements>
        <MyCheckoutForm handleCardToken={handleCardToken} handleCancel={handleCancel} handleError={handleError} />
      </Elements>
    </StripeProvider>
  );
};

const PayMethod = ({ paymentMethod, amount, onSuccess, onCancel, onError }) => (
  <>
    {paymentMethod === 'paypal' ? (
      <PayPalButton amount={amount} onSuccess={onSuccess} onCancel={onCancel} onError={onError} />
    ) : (
      <StripeButton amount={amount} onSuccess={onSuccess} onCancel={onCancel} onError={onError} />
    )}
  </>
);

export default PayMethod;
