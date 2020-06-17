import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { formatPrice } from '../../../utils/format';

import { addToCartSuccess } from '../Cart/actions'

function* addToCart({ id }) {
  const productExists = yield select((state) =>
    state.cart.find(product => product.id === id)
  )

  const { data: { amount: amountStock } } = yield call(api.get, `/stock/${id}`)

  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > amountStock) {
    console.tron.warn('Insuficient quantity')
    return;
  }


  if (productExists) {
    console.log('oi')
  } else {
    const { data } = yield call(api.get, `/products/${id}`);

    const product = {
      ...data,
      amount: 1,
      priceFormatted: formatPrice(data.price)
    }

    yield put(addToCartSuccess(product))


  }

}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart)
])
