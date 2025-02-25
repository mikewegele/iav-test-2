import { AuthModule, AuthState, UserData} from "@iavofficial/frontend-framework-shared-types/authenticationProvider";
import { AsyncThunk } from "@reduxjs/toolkit";
import { JWT } from "@aws-amplify/auth";
import { AWSAuthenticatorState } from "./module";

export interface JWTPojo {
  payload: JWT["payload"];
}

// The Redux store demands that objects in action payloads are POJOs
// (for example they cannot have functions).
export interface AWSUserData extends UserData {
  idToken: JWTPojo;
  accessToken: JWTPojo;
  groups: string[];
}

export type AWSAuthenticatorExtras = {
  checkIsAuthenticated: AsyncThunk<void, void, {}>;
  completePassword: AsyncThunk<void, {newPassword: string}, {}>;
  refreshSession: AsyncThunk<void, void, {}>;
} & Record<string, unknown>;

export type AWSAuthenticatorModule = AuthModule<AWSAuthenticatorState>;