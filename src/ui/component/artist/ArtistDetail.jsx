"use client";

import { useParams } from "next/navigation";
import React from "react";

export default function ArtistDetail() {
  const { id } = useParams();
  return <div>Artist ID: {id}</div>;
}
