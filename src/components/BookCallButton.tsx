import Image from "next/image";
import Link from "next/link";

export function BookCallButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="#contact"
      className={`group primary-button mt-2 flex w-fit items-center gap-3 rounded-full py-3 pr-6 pl-3 text-primary-cta-text transition-all duration-300 ${className}`}
    >
      <div className="flex items-center">
        <div className="card rounded-full p-px transition-transform duration-500 ease-out group-hover:-rotate-6">
          <Image
            src="/images/avatar.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
          />
        </div>
        <div className="grid grid-cols-[0fr] transition-all duration-500 ease-out group-hover:grid-cols-[1fr]">
          <div className="flex items-center overflow-hidden">
            <span className="mx-2 -translate-x-3 text-sm font-medium text-primary-cta-text transition-transform duration-500 ease-out group-hover:translate-x-0">
              +
            </span>
            <div className="card shrink-0 rounded-full p-px transition-transform duration-500 ease-out -translate-x-5 group-hover:translate-x-0 group-hover:rotate-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full">
                <span className="text-xs font-bold text-foreground">You</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <span className="text-base font-medium whitespace-nowrap">
        Book a call with me
      </span>
    </Link>
  );
}