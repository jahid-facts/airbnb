import { CardElement, injectStripe } from 'react-stripe-elements';
import { Button } from '@material-ui/core';

const CheckoutForm = ({ stripe, handleCardToken, handleCancel, handleError }) => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { token } = await stripe.createToken();
      handleCardToken(token);
    } catch (err) {
      console.error(err);
      handleError(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <Button variant="contained" fullWidth color="secondary" size="large" my={2} onClick={handleCancel}>
        Cancel
      </Button>
      <Button variant="contained" fullWidth color="primary" size="large" my={2} type="submit">
        Pay with Card
      </Button>
    </form>
  );
};

const MyCheckoutForm = injectStripe(CheckoutForm);

export default MyCheckoutForm;