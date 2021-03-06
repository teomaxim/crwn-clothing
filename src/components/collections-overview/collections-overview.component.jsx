import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { } from '../preview-collection/preview-collection.component'
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector.js";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

import "./collections-overview.style.scss";

const CollectionsOverview = ({ collections }) => {
  console.log(collections)
  return (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
