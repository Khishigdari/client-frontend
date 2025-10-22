import { CategoryType } from "@/lib/types";

export const Footer = ({ categories }: { categories: CategoryType[] }) => {
  return (
    <div className="bg-primary">
      <div>
        <div className="bg-red-500 mt-15 mb-19 py-7 px-24.5">
          <p className="text-[30px] leading-9 text-primary-foreground font-semibold">
            Fresh fast delivered
          </p>
        </div>
        <div className="flex px-22 items-start justify-center mb-26">
          <img src={"./footerLogo.svg"} className="mr-55" />
          <div className="flex gap-28">
            <div className="flex flex-col gap-4">
              <p className="text-4 leading-7 text-muted-foreground font-[400]">
                NOMNOM
              </p>
              <a className="text-4 leading-6 text-primary-foreground font-[400] cursor-pointer">
                Home
              </a>
              <a className="text-4 leading-6 text-primary-foreground font-[400] cursor-pointer">
                Contact us
              </a>
              <a className="text-4 leading-6 text-primary-foreground font-[400] cursor-pointer">
                Delivery zone
              </a>
            </div>
            <div className="flex flex-col gap-4 h-57 ">
              <p className="text-4 leading-7 text-muted-foreground font-[400]">
                MENU
              </p>
              <div className="flex-wrap flex flex-col gap-y-4 h-50 gap-x-12">
                {categories.map((category) => {
                  return (
                    <a
                      key={category._id}
                      className="text-4 leading-6 text-primary-foreground font-[400] cursor-pointer"
                    >
                      {category.name}
                    </a>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="text-4 leading-7 text-muted-foreground font-[400] mb-[21px]">
                FOLLOW US
              </p>
              <div className="flex gap-4 cursor-pointer">
                <img src={"./Facebook.svg"} />
                <img src={"./Instagram.svg"} />
              </div>
            </div>
          </div>
        </div>
        <div className="px-22 pb-36">
          <div className="border-[1px] border-toast-destructive opacity-40 mb-8"></div>
          <div className="flex gap-12">
            <div className="flex gap-1">
              <p className="text-sm leading-5 font-normal text-muted-foreground">
                Copy right 2024
              </p>
              <p className="text-sm leading-5 font-normal text-muted-foreground">
                ©
              </p>
              <a className="cursor-pointer text-sm leading-5 font-normal text-muted-foreground">
                Nomnom LLC
              </a>
            </div>
            <a className="cursor-pointer text-sm leading-5 font-normal text-muted-foreground">
              Privacy policy
            </a>
            <a className="cursor-pointer text-sm leading-5 font-normal text-muted-foreground">
              Terms and condition
            </a>
            <a className="cursor-pointer text-sm leading-5 font-normal text-muted-foreground">
              Cookie policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
