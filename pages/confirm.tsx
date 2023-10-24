import { subscriberFromJWT } from "@/lib/utils";
import prisma from "@/lib/prisma";
import Render404 from "./404";
import { subscriber } from "@prisma/client";

type ConfirmProps = {
  email: string;
  error: boolean;
};

export default function ConfirmPage({ email, error }: ConfirmProps) {
  if (error) return <Render404 />;
  return (
    <div className="flex h-screen justify-center pt-36">
      <div>
        <h1 className="font-bold text-3xl">Subscription Confirmed</h1>
        <p className="text-sm text-slate-500">
          Your email <b>{email}</b> has been successfully confirmed. You will
          receive email updates when there are free games available.
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const decoded = subscriberFromJWT(context.query.t);
  if (!decoded) return { props: { email: null, error: true } };

  let confirmed = null;
  try {
    confirmed = (await prisma.subscriber.update({
      where: { id: decoded.id },
      data: {
        confirmed: true,
      },
    })) as subscriber;
  } catch (error) {
    return { props: { email: null, error: true } };
  }

  return { props: { email: confirmed.email, error: false } };
}
