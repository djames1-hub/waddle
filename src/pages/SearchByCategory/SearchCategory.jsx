import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SearchCategory.css";

import { getListingsByCategory } from "../../services/firebase/listings/listings";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListingPreview from "../../components/ListingPreview/ListingPreview";

function SearchCategory(props) {
  //Hook to get items
  const [previewComps, setPreviewComps] = useState(<div></div>);

  const MAX_ITEMS_PER_PAGE = 20;
  const MAX_COLUMNS = 4;

  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    const fetchData = async () => {
      const items = await getListingsByCategory(category);
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
            <ListingPreview item={items[i]} key={i}/>
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

  return (
    <>
      <Container className="home-header"> Welcome to waddle</Container>
      <hr />
      {previewComps}
    </>
  );
}

export default SearchCategory;
