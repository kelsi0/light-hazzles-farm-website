import React, { useEffect, useState } from "react";

const query = `
{ 
  servicesPageGalleryCollection {
    items {
      title,
      imagesCollection {
        items {
          url,
          fileName,
          description
        }
      }
    }
  }
}
`

const Services = () => {
    const [gallery, setGallery] = useState(null);

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
              setGallery(data.servicesPageGalleryCollection.items);
          });
    }, []);

    if (!gallery) {
        return null;
    }

    return (
        <section>
            { gallery.map((item) => {
                const imageArray = item.imagesCollection.items;
                return (
                    <div className="album py-5 bg-light">
                        <div className="container">
                        <h1 className="container py-3">{item.title}</h1>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                {imageArray && imageArray.map((image) => (
                                <div className="col">
                                    <div className="card shadow-sm">
                                        <img
                                            src={ image.url }
                                            className="w-100 shadow-1-strong rounded mb-4"
                                            alt={ image.fileName }
                                        />
                                        <div className="card-body">
                                            <p className="card-text">{ image.description }</p>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            })} 
        </section>
    )
}

export default Services;