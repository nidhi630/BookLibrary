import { combineReducers } from 'redux';
import { reducer as productReducer } from './product';
import { reducer as landingReducer } from './landing';
import { reducer as cartReducer } from './cart';
import { reducer as tokenReducer } from './token';
import { reducer as compareReducer } from './compare';
import { reducer as wishlistReducer } from './wishlist';
import { reducer as cardReducer } from './card';
import { reducer as ratingReviewReducer } from './ratingReviews';
import { reducer as helpSupportReducer } from './helpAndSupport';
import { reducer as addressReducer } from './address';
import { reducer as notificationPreferencesReducer} from './notificationPreferences'
import { reducer as layoutReducer } from './layout';
import loaderReducer from './loader/reducer';
import modalReducer from './alert/reducer';



export default combineReducers({
  productReducer,
  landingReducer,
  cartReducer,
  tokenReducer,
  compareReducer,
  wishlistReducer,
  cardReducer,
  ratingReviewReducer,
  loaderReducer,
  helpSupportReducer,
  addressReducer,
  notificationPreferencesReducer,
  layoutReducer,
  modalReducer
});
