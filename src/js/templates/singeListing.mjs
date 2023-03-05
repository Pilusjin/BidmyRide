export function singleListingTemplate(listingData) {

    const endsAt = new Date(listingData.endsAt).toLocaleString();
    const readListing = document.createElement("div");
    
    const loader = document.querySelector(".spinner-border"); 
    loader.style.display = "none";


    try {
    

        readListing.innerHTML = `<div class="card m-auto mt-3 col-11 col-md-9 col-lg-8 p-4 d-flex flex-row">

            <div class="p-4 col-6">
                <img src=${listingData?.media} style="max-width:100%;"/>   
            </div>

            <div class="p-4 col-6">
                <div>
                    <h1>${listingData.title}</h1>
                    <p>Seller: ${listingData.seller.name}</p>
                    <p>Description: ${listingData.description}</p>
                    <p>Deadline: ${endsAt}</p>
                    <p>Number of bids: ${listingData._count.bids}</p>
                </div>

            </div>
            </div>
        
            <div class="m-auto mt-3 col-11 col-md-9 col-lg-8 pb-5">

            </div>

            <h2 class="p-4">Bids made on this item:</h2>
            `;

        return readListing;

    } catch(error) {
        readListing.innerHTML = `<div>Ups! An error has occured. Please try again later.</div>`;
    }

}

export function renderSingleListing(listingDataList, parent) {
    parent.innerHTML = ""
    parent.append(singleListingTemplate(listingDataList))
}