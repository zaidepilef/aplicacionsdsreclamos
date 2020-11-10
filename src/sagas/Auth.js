import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
  SIGNIN_USER,
  SIGNOUT_USER,
  SIGNUP_USER
} from "constants/ActionTypes";
import {showAuthMessage, userSignInSuccess, userSignOutSuccess, userSignUpSuccess} from "actions/Auth";


const createUserWithEmailPasswordRequest = async (email, password) => {}

const signInUserWithEmailPasswordRequest = async (email, password) => {
  return {
    user:{
      uid:'43242ed32r2'
    }
  }
}

const signOutRequest = async () => {
  return undefined;
}

function* createUserWithEmailPassword({payload}) {
  const {email, password} = payload;
  // try {
  //   const signUpUser = yield call(createUserWithEmailPasswordRequest, email, password);
  //   if (signUpUser.message) {
  //     yield put(showAuthMessage(signUpUser.message));
  //   } else {
  //     localStorage.setItem('user_id', signUpUser.user.uid);
  //     yield put(userSignUpSuccess(signUpUser.user.uid));
  //   }
  // } catch (error) {
  //   yield put(showAuthMessage(error));
  // }
}

//Login
function* signInUserWithEmailPassword({payload}) {
  const {email, password} = payload;
  try {
    const signInUser = yield call(signInUserWithEmailPasswordRequest, email, password);
    if (signInUser.message) {
      yield put(showAuthMessage(signInUser.message));
    } else {
      localStorage.setItem('user_id', signInUser.user.uid);
      yield put(userSignInSuccess(signInUser.user.uid));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

//Logout
function* signOut() {
  try {
    const signOutUser = yield call(signOutRequest);
    if (signOutUser === undefined) {
      localStorage.removeItem('user_id');
      yield put(userSignOutSuccess(signOutUser));
    } else {
      yield put(showAuthMessage(signOutUser.message));
    }
  } catch (error) {
    yield put(showAuthMessage(error));
  }
}

export function* createUserAccount() {
  yield takeEvery(SIGNUP_USER, createUserWithEmailPassword);
}


export function* signInUser() {
  yield takeEvery(SIGNIN_USER, signInUserWithEmailPassword);
}

export function* signOutUser() {
  yield takeEvery(SIGNOUT_USER, signOut);
}

export default function* rootSaga() {
  yield all(
    [fork(signInUser),
    fork(createUserAccount),
    fork(signOutUser)]
    );
}