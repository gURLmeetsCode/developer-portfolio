import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck'


export default function Cards (){
    return (
      <div className="card-group">
      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Title>Polly Pocket</Card.Title>
            <Card.Text>
              <h6 className="card-subheader"> * Offline First - Microservice Web application that encourages productivity and habit building</h6>
              Built Progressive Web Application with React, Node, Express, Postgres and Google Oauth.
              Integrated NoSQL databases for offline functionality and caching.
              Successfully built and integrated a chrome extension that maintains the same functionality of the parent application.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://github.com/teenage-soup-for-the-chicken-soul/pollypocket">Github Repo</Card.Link>
            <Card.Link href="https://pollypocket-gracehopper.herokuapp.com">Heroku Site</Card.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Crypto-Calculator</Card.Title>
            <Card.Text>
              <h6 className="card-subheader"> * CryptoCurrency Calculator displays portfolio based off of real time data </h6>
              Delivered full stack JavaScript application with self-contained, reusable, and testable components.
              Built RESTful Ruby on Rails API to create and manipulate data using ActiveRecord in PostgreSQL database.
              Leveraged coinmarket API which shows users the most accurate data on the market.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://github.com/gURLmeetsCode/cryptocurr_portfolio">Github Repo</Card.Link>
            <Card.Link href="https://git.heroku.com/shrouded-headland-65585.git">Heroku Site</Card.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>GraceShopper</Card.Title>
            <Card.Text>
              <h6 className="card-subheader"> * E-commerce site built for imaginary products</h6>
              Designed React, Node, Express, Postgresql application with Google Oauth.
              Integrated BrainTree API for completed transactions along with user authentication middleware.
              Wrote unit tests leveraging Enzyme, Chai and Mocha which provided upto 5% code coverage.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://github.com/the-silver-snakesss/gracessshopper">Github Repo</Card.Link>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  )
};
