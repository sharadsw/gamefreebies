import * as jwt from "jsonwebtoken";

declare module "jsonwebtoken" {
  export interface SubscriberJwtPayload extends jwt.JwtPayload {
    id: string,
    email: string
  }
}

export const subscriberFromJWT = (jwtToken: string): jwt.SubscriberJwtPayload | undefined => {
  try {
    const SECRET: jwt.Secret = String(process.env.JWT_SECRET);
    const subscriber = <jwt.SubscriberJwtPayload>(
      jwt.verify(jwtToken, SECRET)
    );

    return subscriber;
  } catch (error) {
    return undefined;
  }
};
