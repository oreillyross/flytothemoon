import SpaceShipList from "../components/SpaceShipList";
import { useState } from "react";
import { Input, InputGroup, Col, InputGroupAddon, Row } from "reactstrap";

export default () => {
  const [query, updateQuery] = useState("");

  return (
    <>
      <div className="container-fluid">
        <Row>
          <Col>
          <div className="search">
            <InputGroup>
            <InputGroupAddon addonType="prepend">
            Search
            </InputGroupAddon>
            <Input onChange={e => updateQuery(e.target.value.toLocaleLowerCase())} value={query}/>
            </InputGroup>
          </div>
          <style jsx>
          {`
            margin: 20px;
            width: 500px;
          `}
        </style>
          <SpaceShipList search={query}/>
          </Col>
        </Row>
        
      </div>
    </>
  );
};
