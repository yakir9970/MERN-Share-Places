import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky acrapers in the world!",
    imageUrl: "https://media.timeout.com/images/101705309/image.jpg",
    address: "350 Fifth Avenue · Manhattan, New York 10118",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky acrapers in the world!",
    imageUrl: "https://media.timeout.com/images/101705309/image.jpg",
    address: "350 Fifth Avenue · Manhattan, New York 10118",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
