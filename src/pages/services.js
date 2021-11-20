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
    const imageArray = gallery && gallery.imagesCollection.items;

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
              setGallery(data.servicesPageGalleryCollection.items[0]);
          });
    }, []);

    if (!gallery) {
        return null;
    }

    return (
        <section>
            <h1 className="container py-3">Menage</h1>
            <div className="album py-5 bg-light">
                <div className="container">
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

            <h1 className="container py-3">Stables</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <img
                                  src="https://lighthazzlesfarm.co.uk/wp-content/uploads/2020/11/52518117_386618188818972_6050053725291020288_n.jpg"
                                  className="card-img-top"
                                  alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </p>
                                    <a href="#!" className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="card">
                                <img
                                  src="https://lighthazzlesfarm.co.uk/wp-content/uploads/2020/11/42854502_310655506415241_312303294183636992_o-e1605650850955.jpg"
                                  className="card-img-top"
                                  alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </p>
                                    <a href="#!" className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="card">
                                <img
                                  src="https://lighthazzlesfarm.co.uk/wp-content/uploads/2020/11/IMG_0093resized.jpg"
                                  className="card-img-top"
                                  alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </p>
                                    <a href="#!" className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="card">
                                <img
                                  src="https://lighthazzlesfarm.co.uk/wp-content/uploads/2020/11/IMG_0094.jpg"
                                  className="card-img-top"
                                  alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the card title and make up the bulk
                                        of the card's content.
                                    </p>
                                    <a href="#!" className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Services;