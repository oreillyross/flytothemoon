import SpaceShipList from "../components/SpaceShipList"

console.log(process.env)
export default () => (
  <>
    <h1>Welcome to NextJS and Strapi</h1>
    <SpaceShipList search="f"/>
  </>
);
