import React, { Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const AccordionAlwaysOpen = () => {
  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);
  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <Fragment>
      <section className="w-screen h-auto bg-gray-200/50 ">
        <div className="container mx-auto p-10">
          <Accordion open={alwaysOpen}>
            <AccordionHeader
              onClick={handleAlwaysOpen}
              className="text-4xl font-poppin"
            >
              Did You Build Brand ?
            </AccordionHeader>
            <AccordionBody className="text-1xl font-poppin">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="text-4xl font-poppin"
            >
              Influencer Marketing Stratergy
            </AccordionHeader>
            <AccordionBody className="text-1xl font-poppin">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="text-4xl font-poppin"
            >
              Influencer Marketing Stratergy
            </AccordionHeader>
            <AccordionBody className="text-1xl font-poppin">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="text-4xl font-poppin"
            >
              Influencer Marketing Stratergy
            </AccordionHeader>
            <AccordionBody className="text-1xl font-poppin">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
        </div>
      </section>
    </Fragment>
  );
};

export default AccordionAlwaysOpen;
