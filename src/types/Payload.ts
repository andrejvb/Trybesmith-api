export type Payload = { 
  id: number,
  username: string,
};

type TokenValid = {
  authentic: true,
  payload: Payload,
};

type TokenInvalid = {
  authentic: false,
};

export type TokenResponse = TokenValid | TokenInvalid;
