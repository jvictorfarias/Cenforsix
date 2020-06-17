import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { formatPrice } from '../../../utils/format';
import { toast } from 'react-toastify';

import { addToCartSuccess, updateAmountSuccess } from '../Cart/actions'

function* addToCart({ id }) {
  const productExists = yield select((state) =>
    state.cart.find(product => product.id === id)
  )

  const { data: { amount: amountStock } } = yield call(api.get, `/stock/${id}`)

  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > amountStock) {
    toast.error('Insuficient stock quantity.')
    return;
  }


  if (productExists) {
    yield put(updateAmountSuccess(id, amount))
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

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const { data: { amount: stockAmount } } = yield call(api.get, `/stock/${id}`);

  if (amount > stockAmount) {
    toast.error('Insuficient quantity')
    return;
  }

  yield put(updateAmountSuccess(id, amount))
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_REQUEST', updateAmount)
])
