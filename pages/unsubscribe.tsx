import { subscriberFromJWT } from "@/lib/utils";
import prisma from "@/lib/prisma";
import Render404 from "./404";

type UnsubscribeProps = {
  error: boolean;
};

export default function UnsubscribePage({ error }: UnsubscribeProps) {
  if (error) return <Render404 />;
  return (
    <div className="flex h-screen justify-center pt-36">
      <div>
        <h1 className="font-bold text-3xl">Unsubscribed</h1>
        <p className="text-sm text-slate-500">
          You have successfully unsubscribed.
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const decoded = subscriberFromJWT(context.query.t);
  if (!decoded) return { props: { email: null, error: true } };

  try {
    await prisma.subscriber.delete({
      where: { id: decoded.id },
    });
  } catch (error) {
    return { props: { error: true } };
  }

  return { props: { error: false } };
}
