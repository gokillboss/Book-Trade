import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "react-bootstrap/Stack";
import { Image, NavLink } from "react-bootstrap";

const OtherSource = () => {
  return (
    <div className="h-25rem">
      <Stack gap={3} style={{ width: "100%" }}>
        <div>
          <NavLink
            href="https://www.amazon.com/kindle"
            target="_blank"
            className="p-1"
          >
            <Image
              style={{ width: "100%", height: "40%" }}
              src="https://i2-prod.hulldailymail.co.uk/incoming/article7160945.ece/ALTERNATES/s615/0_KindleLeft.jpg"
              alt="Kindle logo"
            />
          </NavLink>

          <div className="font-weight-bold text-center">
            {" "}
            {/**Header */}
            Kindle
          </div>
        </div>

        <div>
          <NavLink
            href="https://books.google.com/"
            target="_blank"
            className="p-1"
          >
            <Image
              style={{ width: "100%", height: "25%" }}
              src="https://s3.amazonaws.com/images.seroundtable.com/google-book-search-1485175822.jpg"
              alt="Google book logo"
            />
          </NavLink>

          <div className="font-weight-bold text-center">
            {" "}
            {/**Header */}
            Google Book
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default OtherSource;
