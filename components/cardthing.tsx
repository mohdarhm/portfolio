import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import { CardConfig } from "@/config/CardConfig";
import { Image } from "@nextui-org/react";
import { codestuff, headingsDM, paragraph, crimsonserif } from "@/config/fonts";
import { Divider } from "@nextui-org/react";
import clsx from "clsx";

interface CardThingProps {
  cardConfig: CardConfig[];
}

export const CardThing: React.FC<CardThingProps> = ({ cardConfig }) => {
  return (
    <Accordion selectionMode="multiple" variant="splitted" className="sm:p-10">
      {cardConfig.map((accordion, index) => (
        <AccordionItem
          key={index}
          className="mb-7 py-9"
          aria-label={accordion.heading}
          // startContent={
          //   <Image
          //     isBlurred
          //     height={100}
          //     width={100}
          //     alt="gameimg"
          //     src={accordion.imgSrc}
          //   />
          // }
          subtitle={
            <div className={clsx("sm:pl-7 sm:text-xl", codestuff.className)}>
              {accordion.footerText.toUpperCase()}
            </div>
          }
          title={
            <div
              className={clsx(
                "sm:pl-7 sm:text-4xl  sm:mb-2 tracking-tighter",
                headingsDM.className
              )}
            >
              {accordion.heading}
            </div>
          }
        >
          <div
            className={clsx(
              "mt-4 rounded-lg sm:p-2 mx-1 sm:mx-6 sm:text-2xl dark:text-gray-400 text-md p-1 tracking-tight text-justify",
              crimsonserif.className
            )}
          >
            <Divider className="mb-10 opacity-50" />
            {accordion.gamedesc}
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
