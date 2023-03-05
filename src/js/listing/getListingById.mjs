import * as templates from "../templates/index.mjs";
import * as listingMethods from "../api/listings/index.mjs"

export async function getListingById() {
    const listingContainer = document.querySelector("#listing");
    const bidsContainer = document.querySelector("#bids");
    if (listingContainer) {
        const listing = await listingMethods.readListing();

        

        const bidsList = listing.bids.sort(function(a, b) {
            const amountA = a.amount;
             const  amountB = b.amount;
            if (amountA < amountB) return 1;
            if (amountA > amountB) return -1;
            return 0;
          });

        templates.renderSingleListing(listing, listingContainer);
        templates.renderBids(bidsList, bidsContainer);
    }
}

getListingById()