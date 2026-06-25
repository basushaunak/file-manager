// src/utils/masterUtilities.js
import Fuse from "fuse.js";

/**
 * Static, offline-safe fuzzy search for internal apps.
 * Excludes the first key from the search index.
 */
export const searchUtilities = (data, query) => {
  if (!data || data.length === 0 || !query) return [];

  const firstObject = data[0];
  const keys = Object.keys(firstObject);

  const firstKey = keys[0];
  const searchableKeys = keys.slice(1);

  const options = {
    keys: searchableKeys,
    threshold: 0.3,
    ignoreLocation: true,
  };

  const fuse = new Fuse(data, options);
  const results = fuse.search(query);

  return results.map((result) => result.item[firstKey]);
};

// import React, { useState } from 'react';
// import { searchUtilities } from '../utils/masterUtilities';

// export default function AssetSearch() {
//   const [searchTerm, setSearchTerm] = useState('');

//   // Your original master array
//   const masterArray = [
//     { itemId: "A101", name: "Amoeba culture", location: "Lab 1" },
//     { itemId: "B202", name: "Bold markers",    location: "Storage Room" },
//     { itemId: "C303", name: "Dog specimen",     location: "Lab 2" },
//     { itemId: "D404", name: "Amar profile",     location: "Admin Office" }
//   ];

//   // 1. Get the list of matched IDs from the utility
//   const searchFilterArray = searchUtilities(masterArray, searchTerm);

//   // 2. Filter the master array to keep full objects that matched
//   const firstKeyName = Object.keys(masterArray[0] || {})[0];

//   const filteredMasterArray = searchTerm
//     ? masterArray.filter(item => searchFilterArray.includes(item[firstKeyName]))
//     : masterArray; // If search is empty, show everything

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Search items..."
//       />

//       <h3>Filtered Complete Objects:</h3>
//       {filteredMasterArray.map(item => (
//         <div key={item[firstKeyName]}>
//           <strong>{item.name}</strong> - Located in {item.location} ({item[firstKeyName]})
//         </div>
//       ))}
//     </div>
//   );
// }

export function acronym(string) {
  const words = string.match(/[a-zA-Z]+/g) || [];
  if (words.length === 0) {
    return null;
  }
  let acronym = "";
  for (let word of words) {
    acronym += word[0].toUpperCase();
    if (acronym.length === 10) {
      break;
    }
  }
  return acronym;
}

export function getImageUrl(relativeUrl) {
  return new URL(relativeUrl, import.meta.url).href;
}
