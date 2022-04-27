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

  const MAX_COLUMNS = 4;

  const { category } = useParams();
  console.log(category);

  const formatTitle = (cat) => {
      let temp = cat;
      if(cat.includes("-")){
        const words = cat.split("-");
        let i = 0;
        while(i < words.length){
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            i += 1;
        }
        temp = words.join(" ");
        return temp;
      }else{
          return cat.charAt(0).toUpperCase() + cat.slice(1);
      }
  }

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
      <Container className="home-header">{formatTitle(category)}</Container>
      <hr />
      {previewComps}
    </>
  );
}

export default SearchCategory;
