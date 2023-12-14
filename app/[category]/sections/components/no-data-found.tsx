// copywrite
import { response } from "@/_mock/copywriting";
import Maskot from "@/components/maskot";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const cp = response["no-data-found"];

const CustomMaskot = () => (
  <div className="relative mx-auto">
    <Maskot variant="smartphone" className="z-10" />
    <Maskot
      variant="smartphone"
      className="-z-10 grayscale contrast-200 saturate-0 brightness-0  absolute -top-1.5 -left-2.5"
    />
  </div>
);

const NoDataFound = () => {
  return (
    <article className="container min-w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-16 items-center justify-start">
      <CustomMaskot />

      <div className="flex flex-col gap-5 lg:col-span-2">
        <h3 className="md:text-[32px] text-xl font-bold">{cp.title("Event")}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: cp.description,
          }}
          className="text-sm md:text-base font-normal"
        ></div>
        <div className="cta">
          <p className="text-sm font-normal mb-3 md:text-base font-norma">{cp.cta.helper}</p>
          <Link
            href={cp.cta.url}
            className={buttonVariants({
              className: "text-base font-bold w-full",
            })}
            title={cp.cta.label}
          >
            {cp.cta.label}
            <ArrowRight className="inline-block ml-2" size={20} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default NoDataFound;
