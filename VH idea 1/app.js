// Creating a container that contains images for the page

const container = document.querySelector(".container")
const vans = [
  { name: "Small Van", image: "https://www.nationwidevehiclecontracts.co.uk/m/2/ford-transit-connect-2018-limited-l2.jpg" },
  { name: "Medium Van", image: "https://www.turner-rental.co.uk/wp-content/uploads/2018/08/Ford-Transit-Custom-Crew-Van.jpg" },
  { name: "Large Van", image: "https://advanced-driving.co.uk/wp-content/uploads/2016/03/transit-van-429x300.jpg" },
  { name: "Mini Bus/Van", image: "https://www.van-discount.co.uk/wp-content/uploads/2019/12/ford-transit-minibus.png.webp" },
  { name: "Luton Van", image: "https://www.kendallcars.com/wp-content/uploads/2017/05/xford-transit-luton-XL.jpg.pagespeed.ic.c_2y61xBsX.webp" },
  { name: "7.5tonne Van", image: "https://psdvehiclerental.co.uk/wp-content/uploads/2017/03/7.5-ton.png" },
]
// This next section will group the images weve got above and style them into the card format
const showVans = () => {
    let output = ""
    vans.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a1 class="card--link">View</a>
                </div>
                `)
        )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showVans)