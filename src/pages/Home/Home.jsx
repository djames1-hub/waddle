import React, { useState, useEffect } from "react";
import "./Home.css";

import { paginateItems } from "../../services/firebase/listings/listings";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Home() {
  //Hook to get items
  const [previewComps, setPreviewComps] = useState(<div></div>);

  const MAX_ITEMS_PER_PAGE = 20;
  const MAX_COLUMNS = 4;

  useEffect(() => {
    const fetchData = async () => {
      const items = await paginateItems(MAX_ITEMS_PER_PAGE);

      console.log(items);
      let rows = [];
      let cols = [];

      let i = 0;
      while (i < items.length) {
        for (let j = 0; j < MAX_COLUMNS; j++) {
          console.log(i);
          if (i >= items.length) {
            break;
          }

          let col = (
            <Col key={i}>
              <a href={`/view-item/${items[i].listingId}`}>
                <Image
                  src={items[i].photo[0]}
                  className="h-100 w-100"
                  thumbnail
                  rounded
                />
              </a>
              <div className="item-details">
                <div className="item-name-detail">{items[i].item.itemName}</div>
                <div className="item-price-detail"> ${items[i].price}.00</div>
              </div>
            </Col>
          );
          cols.push(col);
          i++;
        }
        rows.push(<Row key={i}>{cols.map((c) => c)}</Row>);
      }

      setPreviewComps(
        <Container className="w-50 ">{rows.map((r) => r)}</Container>
      );
    };
    return fetchData;
  }, []);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "usd",
  });

  return (
    <>
      <Container className="home-header"> Welcome to waddle</Container>
      <hr />

      {previewComps}
    </>
  );
}

export default Home;
