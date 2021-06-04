import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Link from "next/link";

import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

const SPACESHIPS_QUERY = gql`
  query {
    spacecrafts {
      id
      name
      description
      image {
        url
      }
    }
  }
`;

function SpaceShipList(props) {
  const { loading, error, data } = useQuery(SPACESHIPS_QUERY);
  if (error) return "Error Loading Spaceships";
  if (loading) return <h3>Loading Spaceships...</h3>;

  if (data.spacecrafts && data.spacecrafts.length) {
    const searchQuery = data.spacecrafts.filter((query) =>
      query.name.toLowerCase().includes(props.search)
    );
    if (searchQuery.length !== 0) {
      return (
        <Row>
          {searchQuery.map((spaceship) => (
            <Col xs="6" sm="4" key={spaceship.id}>
              {spaceship.name}
            </Col>
          ))}
        </Row>
      );
    }
  }

  return <>SOMETHING HERE</>;
}

export default SpaceShipList;
