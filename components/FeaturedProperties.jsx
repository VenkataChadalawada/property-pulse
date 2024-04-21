import React from "react";
import { fetchProperties } from "@/utils/requests";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
const FeaturedProperties = async () => {
  const properties = await fetchProperties({ showFeatured: true });
  // console.log("---props--", properties);
  return (
    properties.length > 0 && (
      <section className="bg-orange-50 px-4 pt-6 pb-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-orange-700 mb-6 text-center">
            Featured Pandits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map((property) => (
              <FeaturedPropertyCard key={property._id} property={property} />
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default FeaturedProperties;
