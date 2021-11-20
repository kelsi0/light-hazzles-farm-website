import React, {useEffect, useState} from "react";

const query = ` 
{
  homePageGalleryCollection {
    items {
      title,
      imagesCollection {
        items {
          fileName
          url
        }
      }
    }
  }
}`

const Gallery = () => {
  const [images, setImages] = useState(null);
  const imageArray = images && images.imagesCollection.items;

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
        setImages(data.homePageGalleryCollection.items[0]);
      });
  }, []);

  if (!images) {
    return null;
  }

  return (
    <div className="container">
      <div className="row text-center text-lg-start">
      { imageArray.map((image) => (
        <div className="col-lg-3 col-md-4 col-6">
            <img
              src={ image.url }
              className="w-100 shadow-1-strong rounded mb-4"
              alt={ image.title }
            />
        </div>
      ))}
      </div>
    </div>
  )
}

export default Gallery;