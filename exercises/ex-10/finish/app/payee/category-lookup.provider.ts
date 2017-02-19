/*
 * Create a provider, CategoryLookupService which exposes a method,
 * getCategoryName()
 *
 * You will need to import Injectable and decorate the class accordingly.
 *
 * Name: getCategoryName
 * Arguments: id:number, the category ID to look up
 * Returns: The categoryName matching the category ID
 *
 * Use getCategories to fetch the list of categories to search through.
 *
 * Then return to payees.component.ts
 *
 */

import { Injectable } from '@angular/core';

@Injectable()
export class CategoryLookupService {
  private categories = getCategories();

  getCategoryName( id: number ) {
    let foundCategoryName = '';
    this.categories.some( category => {
      if ( category.id === id ) {
        foundCategoryName = category.categoryName;
        return true;
      }
    } );

    return foundCategoryName;
  }
}

function getCategories() {
  return [
    {
      "id"          : 1,
      "categoryName": "Automotive"
    },
    {
      "id"          : 2,
      "categoryName": "Beauty"
    },
    {
      "id"          : 3,
      "categoryName": "Clothing"
    },
    {
      "id"          : 4,
      "categoryName": "Electronics"
    },
    {
      "id"          : 5,
      "categoryName": "Food"
    },
    {
      "id"          : 6,
      "categoryName": "Games"
    },
    {
      "id"          : 7,
      "categoryName": "Grocery"
    },
    {
      "id"          : 8,
      "categoryName": "Health"
    },
    {
      "id"          : 9,
      "categoryName": "Housing"
    },
    {
      "id"          : 10,
      "categoryName": "Industrial"
    },
    {
      "id"          : 11,
      "categoryName": "Jewelry"
    },
    {
      "id"          : 12,
      "categoryName": "Kids"
    },
    {
      "id"          : 13,
      "categoryName": "Legal"
    },
    {
      "id"          : 14,
      "categoryName": "Medical"
    },
    {
      "id"          : 15,
      "categoryName": "Movies"
    },
    {
      "id"          : 16,
      "categoryName": "Music"
    },
    {
      "id"          : 17,
      "categoryName": "Outdoors"
    },
    {
      "id"          : 18,
      "categoryName": "Restaurants"
    },
    {
      "id"          : 19,
      "categoryName": "Salary"
    },
    {
      "id"          : 20,
      "categoryName": "Tools"
    },
    {
      "id"          : 21,
      "categoryName": "Toys"
    },
    {
      "id"          : 22,
      "categoryName": "Utilities"
    }
  ];
}
