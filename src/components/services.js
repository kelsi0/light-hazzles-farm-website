import React, { useEffect, useState } from "react";

const query = `
{
  homePageServicesCollection {
      items {
          title,
          services
      }
  }
}`

const Services = () => {
  const [services, setServices] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/7887wddr37w2/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer LmZDTST19shp7--Qsa0kqcC60GXMeNauWBAWo3FuDYY",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setServices(data.homePageServicesCollection.items[0]);
      });
  }, []);

  if (!services) {
    return null;
  }

  return (
  <section className="page-section bg-primary" id="about">
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="text-white mt-0">{ services.title }</h2>
          <hr className="divider divider-light"/>
          <ul className="text-white-75 mb-4">
            { services.services.map((service) => (
              <li className="pb-1">{ service }</li>
            ))}
          </ul>
          <a className="btn btn-light btn-xl" href="#services">Get Started!</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services;